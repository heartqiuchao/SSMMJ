/**
 *
 * @module sliders
 * @author me.chenying@gmail.com/陈颖6362000016
 * 
 */
ZS.add('sliders', function(S, undef) {

	var doc = document,
		DOM = S.DOM,
		JSON = ZS.JSON,
		Event = S.Event,
		Node = S.Node,
		DOT = '.',
		Tmpl = {
			//<a href="javascript:void(0)" class="zs-sliders-handle new"></a>
			CANVAS: ['<div class="zs-sliders-canvas zs-unselectable" onselectedstart="return false;">',
						'<div class="zs-sliders-axis">',
							'<div class="zs-sliders-range" style="left:0;width:1px;background-color:#616161"></div>',
							'<div class="zs-sliders-axis-settingPanel">',
								'<label class="zs-sliders-axis-setting-label"></label>',
								'<div>',
									'<input class="zs-sliders-axis-setting-value" type="text" value="">',
								'</div>',
							'</div>',
						'</div>',
					'</div>'].join(''),
			RANGE: '<div class="zs-sliders-range"><div class="zs-sliders-range-value"></div></div>',
			HANDLE: '<a href="javascript:void(0)" class="zs-sliders-handle"></a>',
			AXIS_LABEL: '<label class="zs-sliders-axis-label"></label>',
			TICK: '<div class="zs-sliders-axis-tick"></div>'
		},
		CSS = {
			CANVAS: 'zs-sliders-canvas',
			RANGE: 'zs-sliders-range',
			RANGE_VALUE: 'zs-sliders-range-value',
			HANDLE: 'zs-sliders-handle',
			AXIS: 'zs-sliders-axis',
			AXIS_LABEL: 'zs-sliders-axis-label',
			TICK: 'zs-sliders-axis-tick',
			TICK_TOCK: 'zs-sliders-axis-tock',
			TICK_SUBTOCK: 'zs-sliders-axis-subtock',
			SELECTED: 'selected',
			ACTIVE: 'active',
			NEW: 'new',
			SETTING_PANEL_LABEL: 'zs-sliders-axis-setting-label',
			SETTING_PANEL: 'zs-sliders-axis-settingPanel',
			SETTING_VALUE: 'zs-sliders-axis-setting-value'
		};

	/**
	 * Sliders
	 * @class Sliders
	 */
	function Sliders(config) {
		var self = this;

		if(!config){
			throw 'sliders need a config object';
		}

		if (!(self instanceof Sliders)) {
			return new Sliders(config);
		}

		if(!config.container){
			throw 'sliders need a container for plot: config.container';
		}

		self.config = S.merge(Sliders.defaultConfig, config);

		self.ui = {};

		self.props = {};

		self._init();
	}
	function comparer(obj1, obj2) {
		if (obj1.point > obj2.point) {
			return 1;
		} else if (obj1.point < obj2.point) {
			return -1;
		} else {
			return 0;
		}
	}
	S.mix(Sliders, {
		labelStratege: {
			TICK: 'tick',
			TOCK: 'tock'
		}
	});

	Sliders.defaultConfig = {
		labelStratege: Sliders.labelStratege.TOCK,
		i18n: {
			settingLabel: '输入后按Enter键保存',
			handleTitle: '拖动修改时间范围；双击删除时间范围',
			rangeValueTitle: '双击修改价格'
		},
		colors: ['#ead988', '#ffbd9d', '#ffafcf', '#e6a8e9', '#b8e39c', '#aad18b', '#9bbeac', '#88dbd6', '#b0caf1', '#98bedb', '#64bdf4', '#c5bfb5']
	};

	S.augment(Sliders, S.EventTarget, {
		/**
		 * init component
		 * @method init
		 * @private
		 * @return {undefined}
		 */
		_init: function(){
			var self = this,
				config = self.config,
				props = self.props,
				ui = self.ui;

			// container
			ui.container = S.one(config.container);
			props.ticks = config.ticks;
			props.tock = config.tock;
			props.subtock = config.subtock;
			props.axisLabelFormatter = config.axisLabelFormatter;
			props.rangeLabelFormatter = config.rangeLabelFormatter;
			props.valueUnit = config.valueUnit,
			props.i18n = config.i18n;
			props.colors = config.colors;
			
			props.data = [];
			config.data = config.data || [];


			self._render();

			//if(config.data.length){
				// convert config data to component data structure
				self._convertData();

				// if data is passed
				//if(props.data.hasData){
					self._initRanges();
				//}
			//}

			// init drag
			self._initDraggability();

			self._bindEventListeners();
		},

		/**
		 * convert config data to component data
		 * @method convertData
		 * @private
		 * @return {undefined}
		 */
		_convertData: function(){
			var self = this,
				config = self.config,
				props = self.props,
				configData = config.data,
				convetedData = {},
				guid,
				data;

			// sort data by point
			configData.sort(comparer);
//			configData = configData.sort(function(obj1, obj2){
//				return obj1.point - obj2.point;
//			});

			// attach id, prev etc.
			for(var i = 0, len = configData.length; i < len; i++){
				data = configData[i];
				guid = S.guid();

				configData[i] = {
					key: guid,
					prev: configData[i - 1],
					point: data.point,
					value: data.value
				};
			}

			configData.reverse();

			//attach next
			for(i = 0; i < len; i++){
				data = configData[i];

				configData[i].next = configData[i - 1];
			}

			configData.reverse();

			for(i = 0; i < len; i++){
				data = configData[i];

				convetedData[data.key] = data;
			}

			self.props.data = convetedData;
			self.props.data.hasData = (configData.length > 0);
		},

		/**
		 * init handles' draggability
		 * @method initDraggablility
		 * @private
		 * @return {undefined}
		 */
		_initDraggability: function(){
			var self = this,
				ui = self.ui,
				props = self.props,
				tickSpacing = props.tickSpacing,
				axis = ui.axis,
				axisLeft = axis.offset().left,
				min = props.min,
				max = props.max,
				dragDelegate;

			dragDelegate = props.dragDelegate = new S.DD.DraggableDelegate({
				selector: DOT + CSS.HANDLE,
				container: ui.axis,
				shim: false
			});

			dragDelegate.on('dragStart', function(e){
				if(self.isEditing) {
					return false;
				}
				this.node.addClass(CSS.ACTIVE);
			}).on('drag', function(e){
				if(self.isEditing) {
					return false;
				}
				self._handleDragListener(this.node, e);
			}).on('dragEnd', function(e){
				if(self.isEditing) {
					return false;
				}
				self._handleDragEndListener(this.node, e);
			});
		},

		/**
		 * bind mouse/key envents
		 * @method bindEventListener
		 * @private
		 * @return {undefined}
		 */
		_bindEventListeners: function(){
			var self = this,
				ui = self.ui;

			ui.axis.on('dblclick', self._axisDblClickListener, {
				sliders: self
			});

			ui.settingValue.on('keydown', function(e){
				var key = e.keyCode,
					value = this.val();

				if(key === 27){
					ui.settingPanel.hide();
					ui.settingValue.val('');
					self.isEditing = false;
				}

				if(key === 13){
					if(self.fire('validate', {
						value: value
					}) === false) {
						return;
					}

					self._setRangeValue(ui.editingRange.attr('datakey'), parseFloat(value).toFixed(2));
				}
			});
		},

		_showSettingPanel: function(datakey){
			var self = this,
				ui = self.ui,
				range = ui['zs_sliders_range_' + datakey],
				settingPanel = ui.settingPanel,
				settingValue = ui.settingValue,
				left = 0;

			settingPanel.show();
			self.isEditing = true;

			left = parseInt(range.css('left')) + (parseInt(range.css('width')) - parseInt(settingPanel.css('width'))) / 2;

			left = left < 0 ? 0 : left;

			settingPanel.css({
				left: left
			});

			settingValue[0].focus();
			settingValue[0].select();

			ui.editingRange = range;
		},

		_setRangeValue: function(datakey, value){
			var self = this,
				ui = self.ui,
				props = self.props,
				range = ui.newRange;

			ui.settingPanel.hide();
			ui.settingValue.val('');
			self.isEditing = false;

			ui['zs_sliders_range_' + datakey].one(DOT + CSS.RANGE_VALUE).html(value + props.valueUnit);
			self.getDataByKey(datakey).value = parseFloat(value);
		},

		/**
		 * axis double click event listener,
		 * for update value, add/delete range
		 * @param  {[type]} e [description]
		 * @return {[type]}   [description]
		 */
		_axisDblClickListener: function(e){
			var self = this.sliders,
				ui = self.ui,
				props = self.props,
				data = props.data,
				target = e.target;

			if(self.isEditing) {
				ui.settingValue[0].focus();
				return;
			}

			// if target is a handle
			if(target.hasClass(CSS.HANDLE)){

				var datakey = target.attr('datakey'),
					thisData = data[datakey];

				if(self.fire('deleting', {
					data: {
						key: datakey
					}
				}) === false) {
					return;
				}

				self._deleteRange(datakey);
				/*
				self.fire('deleted', {
					data: {
						point: point,
						value: value
					}
				});
				*/
				return;
			}

			// if target is a range or the axis
			if(target.hasClass(CSS.RANGE) || target.hasClass(CSS.AXIS)){
				var min = props.min,
					max = props.max,
					axisLeft = ui.axis.offset().left,
					delta = e.clientX - axisLeft,
					tickSpacing = props.tickSpacing,
					point,
					newData,
					newDataInfo,
					nextRange;

				// not in the range of the axis
				if(delta < min || delta > max) {
					return;
				}

				// round delta
				point = Math.round(delta / tickSpacing);

				// range must great org 
				if(point < 1){
					return;
				}

				if(self._existRange(point)){
					return;
				}

				newDataInfo = self._getNewRangeInfo(point);

				newData = {
					key: S.guid(),
					point: point,
					prev: newDataInfo.prev,
					next: newDataInfo.next,
					value: 0
				};

				// add new range and handle
				self._addRange(newData);

				// show value setting panel
				self._showSettingPanel(newData.key);

				if(newData.prev){
					newData.prev.next = newData;
				}

				if(newData.next){
					newData.next.prev = newData;
				}

				// reset newRange.nextRange's left and width
				if(newData.next){
					nextRange = ui['zs_sliders_range_' + newData.next.key];
					nextRange.css({
						left: point * tickSpacing,
						width: (newData.next.point - point) * tickSpacing
					})
				}

				self.props.data[newData.key] = newData;

				return;
			}

			if(target.hasClass(CSS.RANGE_VALUE)){
				var datakey = target.parent().attr('datakey'),
					settingValue = ui.settingValue;

				settingValue.val(parseFloat(target.html()));

				self._showSettingPanel(datakey);

				self.isEditing = true;
			}
		},

		_getNewRangeInfo: function(point){
			var self = this,
				props = self.props,
				data = props.data,
				tickSpacing = props.tickSpacing,
				prevs = [],
				nexts = [],
				prevMax = props.min / tickSpacing,
				nextMin = props.max / tickSpacing,
				tempData;

			// get point prev and next datas
			for(var id in data){
				if(data.hasOwnProperty(id) && ZS.isPlainObject(data[id])){
					tempData = data[id];

					if(tempData.point < point){
						prevs.push(tempData);
					}

					if(tempData.point > point){
						nexts.push(tempData);
					}
				}
			}
			prevs.sort(comparer);

			nexts.sort(comparer);

			return {
				prev: prevs[prevs.length - 1],
				next: nexts[0]
			};
		},

		_existRange: function(point){
			var self = this,
				props = self.props,
				data = props.data;

			// get point prev and next datas
			for(var id in data){
				if(data.hasOwnProperty(id) && ZS.isPlainObject(data[id])){
					if(data[id].point === point) {
						return true;
					}
				}
			}

			return false
		},

		/**
		 * handle drag listener
		 * @method handleDragListener
		 * @private
		 * @param  {ZS.Node} handle the dragging handle
		 * @param  {Event} e drag event
		 * @return {undefined}
		 */
		_handleDragListener: function(handle, e) {
			var self = this;

			// if is editing, set undraggable
			if(self.isEditing) {
				return;
			}

			var	ui = self.ui,
				props = self.props,
				tickSpacing = props.tickSpacing,
				min = props.min,
				max = props.max,
				datakey = handle.attr('datakey'),
				data = props.data[datakey],

				// TODO
				range = ui[handle.attr('rangeid')],
				rangeNext = (data.next ? ui['zs_sliders_range_' + data.next.key] : null),

				// previous handle point
				point = data.point,
				prevPoint = data.prev ? data.prev.point : min,
				nextPoint = data.next ? data.next.point : max,

				axisLeft = ui.axis.offset().left,
				delta = e.clientX - axisLeft,

				// range delta
				rangeWidth,
				rangeNextWidth,

				dragPoint;

			if(delta < min) {
				delta = min;
			} else if(delta > max) {
				delta = max;
			}

			// limit drag range
			if(delta <= (prevPoint * tickSpacing)){
				delta = prevPoint * tickSpacing;
			} else if (delta >= (nextPoint * tickSpacing)){
				delta = nextPoint * tickSpacing;
			}

			// round delta
			delta = Math.round(delta / tickSpacing) * tickSpacing;

			// reposition handle
			handle.css('left', delta);

			dragPoint = delta / tickSpacing;

			if(prevPoint === min){
				// if the first handle dragged
				rangeWidth = dragPoint * tickSpacing;
			} else {
				rangeWidth = (dragPoint - prevPoint) * tickSpacing;
			}

			// active range
			range.addClass(CSS.ACTIVE).css('width', rangeWidth);

			// if has next range
			if(rangeNext) {
				rangeNext.css({
					left: dragPoint * tickSpacing,
					width: (nextPoint - dragPoint) * tickSpacing
				});
			}
		},

		/**
		 * handle drag end listener
		 * @param  {ZS.Node} handle the draged handle
		 * @param  {Event} e the dragEnd event
		 * @return {undefined}
		 */
		_handleDragEndListener: function(handle, e) {
			var self = this,
				props = self.props,
				min = props.min,
				max = props.max,
				ui = self.ui,
				range = ui[handle.attr('rangeid')],
				tickSpacing = props.tickSpacing,
				datakey = handle.attr('datakey'),
				data = props.data[datakey],
				thisPoint = data.point,
				dataPrev = data.prev,
				dataNext = data.next,
				prevPoint = dataPrev ? dataPrev.point : min,
				nextPoint = dataNext ? dataNext.point : max,
				axisLeft = ui.axis.offset().left,
				delta = e.clientX - axisLeft,
				endPoint;

			if(delta < min) {
				delta = min;
			} else if(delta > max) {
				delta = max;
			}

			// limit drag range
			if(delta <= (prevPoint * tickSpacing)){
				endPoint = prevPoint;
			} else if (delta >= (nextPoint * tickSpacing)){
				endPoint = nextPoint;
			} else {
				endPoint = Math.round(delta / tickSpacing);
			}

			if(endPoint === min){
				if(self.fire('deleting', {
					data: {
						key: datakey
					}
				}) === false) {
					self._resetRange(data);
					return;
				}
				self._deleteRange(datakey);
				return;
			}

			// reset data point
			data.point = endPoint;

			if(dataPrev){
				if(endPoint <= dataPrev.point){
					if(self.fire('deleting', {
						data: {
							key: datakey
						}
					}) === false) {
						data.point = thisPoint;
						self._resetRange(data);
						return;
					}
					self._deleteRange(data.key);
					return;
				}
			}

			if(dataNext){
				if(endPoint >= dataNext.point){
					if(self.fire('deleting', {
						data: {
							key: dataNext.key
						}
					}) === false) {
						data.point = thisPoint;
						self._resetRange(data);
						return;
					}
					self._deleteRange(dataNext.key);
				}
			}

			handle.removeClass(CSS.ACTIVE);
			range.removeClass(CSS.ACTIVE);
		},

		_resetRange: function(data){
			var self = this,
				ui = self.ui,
				props = self.props,
				min = props.min,
				max = props.max,
				datakey = data.key,
				tickSpacing = props.tickSpacing,
				handle = ui['zs_sliders_handle_' + datakey],
				range = ui['zs_sliders_range_' + datakey],
				thisPoint = data.point,
				prevPoint = data.prev ? data.prev.point : min,
				nextPoint = data.next ? data.next.point : max,
				rangeNext = data.next ? ui['zs_sliders_range_' + data.next.key] : null;

			// reposition handle
			handle.css('left', data.point);

			if(prevPoint === min){
				// if the first handle dragged
				rangeWidth = thisPoint * tickSpacing;
			} else {
				rangeWidth = (thisPoint - prevPoint) * tickSpacing;
			}

			// active range
			handle.removeClass(CSS.ACTIVE).css('left', thisPoint * tickSpacing);
			range.removeClass(CSS.ACTIVE).css('width', rangeWidth);

			// if has next range
			if(rangeNext) {
				rangeNext.css({
					left: thisPoint * tickSpacing,
					width: (nextPoint - thisPoint) * tickSpacing
				});
			}
		},

		/**
		 * init ranges width user data
		 * @method initRanges
		 * @private
		 * @return {[type]} [description]
		 */
		_initRanges: function(){
			var self = this,
				props = self.props,
				data = props.data,
				tempData;

			for(var id in data){
				if(data.hasOwnProperty(id) && ZS.isPlainObject(data[id])){
					tempData = data[id];

					// add range async
					(function(d){
						S.later(function(){
							self._addRange(d);
						}, 25);
					})(tempData);
				}
			}
		},

		/**
		 * add range(handle, range) to axis
		 * @method addRange
		 * @private
		 * @param {Object} data range dataw
		 * @return {undefined}
		 */
		_addRange: function(data) {
			var self = this;

			self._createHandle(data);
			self._createRange(data);
		},

		/**
		 * delete a range by point
		 * @method deleteRange
		 * @param  {Number} point handle position
		 * @return {undefined}
		 */
		_deleteRange: function(datakey) {
			var self = this,
				ui = self.ui,
				settingPanel = ui.settingPanel,
				props = self.props,
				min = props.min,
				max = props.max,
				data = props.data,
				tickSpacing = props.tickSpacing,
				thisData = data[datakey],
				prevData = thisData.prev,
				nextData = thisData.next,

				thisHandle = ui['zs_sliders_handle_' + datakey],
				thisRange = ui['zs_sliders_range_' + datakey],
				nextRange = nextData ? ui['zs_sliders_range_' + nextData.key] : null,

				thisPoint = thisData.point,
				prevPoint = prevData ? prevData.point : min,
				nextPoint = nextData ? nextData.point : max;
			
			// if exist next range, reset left and width
			if(nextRange) {
				nextRange.css({
					left: prevPoint * tickSpacing,
					width: (nextPoint - prevPoint) * tickSpacing
				});
			}

			// remove handle and range dom
			thisHandle.remove();
			thisRange.remove();

			// relink next-data to prev data
			if(prevData) {
				prevData.next = nextData;
			}

			// relink prev-data to next data
			if(nextData) {
				nextData.prev = prevData;
			}

			delete data[datakey];

			// if setting panel is visible
			if(settingPanel.css('display') !== 'none'){
				ui.settingPanel.hide();
				self.isEditing = false;
			}
		},

		/**
		 * create handle
		 * @method createHandle
		 * @private
		 * @param  {Object} data data to init handle
		 * @return {undefined}
		 */
		_createHandle: function(data){
			var self = this,
				ui = self.ui,
				props = self.props,
				tickSpacing = props.tickSpacing,
				handle,
				datakey = data.key,
				handleId = 'zs_sliders_handle_' + datakey,
				rangeId = 'zs_sliders_range_' + datakey,
				point = data.point;

			// store to ui.handle
			ui[handleId] = handle = S.Node(Tmpl.HANDLE);

			handle.attr('id', handleId);
			handle.attr('rangeid', rangeId);
			handle.attr('datakey', datakey);
			handle.attr('title', props.i18n.handleTitle);
			handle.css('left', point * tickSpacing);

			// add to axis
			handle.insertBefore(ui.outset);
		},

		/**
		 * create handle range
		 * @method createRange
		 * @private
		 * @param  {Object} data data to init range
		 * @return {undefined}
		 */
		_createRange: function(data){
			var self = this,
				ui = self.ui,
				props = self.props,
				tickSpacing = props.tickSpacing,
				range,
				rangeId = 'zs_sliders_range_' + data.key,
				point = data.point,
				prevPoint = data.prev ? data.prev.point : 0;

			// store to ui.range
			ui[rangeId] = range = S.Node(Tmpl.RANGE);

			range.attr('id', rangeId);
			range.attr('datakey', data.key);
			range.css('background-color', self._getRangeColor());

			range.css({
				left: prevPoint * tickSpacing,
				width: (point - prevPoint) * tickSpacing
			});

			self._setRangeLabel(range, data.value);

			range.prependTo(ui.axis);
		},
		_getRangeColor: function(){
			var self = this,
				props = self.props,
				colors = props.colors,
				color;
			color = colors.shift();
			colors.push('' + color);

			return color;
		},

		_setRangeLabel: function(range, value){
			var self = this;
			// set range
			range.one(DOT + CSS.RANGE_VALUE).html(self.props.rangeLabelFormatter(value)).attr('title', self.props.i18n.rangeValueTitle);
		},

		/**
		 * compute meta data
		 * @method computeMeta
		 * @private
		 * @return {undefined}
		 */
		_computeMeta: function(){
			var self = this,
				ui = self.ui,
				props = self.props,
				ticks = props.ticks,
				axisWidth,
				tickSpacing;

			// min handle value
			props.min = 0;

			axisWidth = ui.axis.width();

			// tick spacing for layout
			tickSpacing = props.tickSpacing = Math.floor(axisWidth / ticks);

			// max handle value
			props.max = tickSpacing * ticks;

			// label spacing for layout
			props.labelSpacing = tickSpacing * props.tock;
		},

		/**
		 * render ui elements
		 * @method render
		 * @private
		 * @return {undefined}
		 */
		_render: function(){
			var self = this,
				ui = self.ui,
				props = self.props,
				container = ui.container,
				canvas;

			// render canvas
			canvas = ui.canvas = new S.Node(Tmpl.CANVAS);
			container.append(canvas);

			// get axis ref
			ui.handleNew = canvas.one(DOT + CSS.HANDLE + DOT + CSS.NEW);
			ui.outset = canvas.one(DOT + CSS.RANGE);
			ui.axis = canvas.one(DOT + CSS.AXIS);
			ui.settingPanel = canvas.one(DOT + CSS.SETTING_PANEL);
			ui.settingPanel.one(DOT + CSS.SETTING_PANEL_LABEL).html(props.i18n.settingLabel);
			ui.settingValue = canvas.one(DOT + CSS.SETTING_VALUE);

			self._computeMeta();
			self._renderTicks();
			self._renderLabels();
		},

		/**
		 * render axis ticks
		 * @method renderTicks
		 * @private
		 * @return {undefined}
		 */
		_renderTicks: function(){
			var self = this,
				ui = self.ui,
				props = self.props,
				axis = ui.axis,
				fragment = doc.createDocumentFragment(),
				tickEl,
				ticks = props.ticks,
				tock = props.tock,
				subtock = props.subtock;

			// render ticks, ticks + 1 for one more tick element
			for(var i = 0, len = ticks + 1; i < len; i++){
				tickEl = new S.Node(Tmpl.TICK);

				if(i % tock === 0) {
					tickEl.addClass(CSS.TICK_TOCK);
				} else if(i !== 0 && i % subtock === 0) {
					tickEl.addClass(CSS.TICK_SUBTOCK);
				}

				tickEl.css('left', props.tickSpacing * i);

				// append to fragment
				fragment.appendChild(tickEl[0]);
			}

			axis[0].appendChild(fragment);
		},

		/**
		 * render axis labels
		 * @method renderLabels
		 * @private
		 * @return {undefined}
		 */
		_renderLabels: function(){
			var self = this,
				config = self.config,
				ui = self.ui,
				props = self.props,
				axis = ui.axis,
				labelStratege = Sliders.labelStratege,
				stratege = config.labelStratege,
				fragment = doc.createDocumentFragment(),
				labelEl,
				labelTock,
				labelOffsetLeft,
				tock = (stratege === labelStratege.TICK) ? 1 : props.tock,
				axisLabelFormatter = props.axisLabelFormatter;

			// render labels, ticks + 1 for one more tick element
			for(var i = 0, len = props.ticks + 1; i < len; i++){
				if(i % tock === 0) {
					labelTock = (i / tock);
					labelOffsetLeft = (props.labelSpacing * labelTock)  - 16;
					labelEl = new S.Node(Tmpl.AXIS_LABEL);
					labelEl.css('left', labelOffsetLeft);
					labelEl.html(axisLabelFormatter(i));

					// append to fragment
					fragment.appendChild(labelEl[0]);
				}
			}

			axis[0].appendChild(fragment);
		},

		/**
		 * get the data
		 * @return {Object} the data
		 */
		getData: function(){
			var self = this,
				props = self.props,
				data = props.data,
				temp,
				returnData = [];

			for(var id in data){
				temp = data[id];
				if(data.hasOwnProperty(id) && ZS.isPlainObject(temp) && temp.key){
					returnData.push({
						point: temp.point,
						value: temp.value
					});
				}
			}

			returnData.sort(function(obj1, obj2){
				return obj1.point - obj2.point;
			});

			return returnData;
		},

		getDataByKey: function(key) {
			return this.props.data[key];
		}
	});

	S.Sliders = Sliders;
}, {
	requires: ['dd']
});
