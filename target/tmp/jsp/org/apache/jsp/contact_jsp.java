/*
 * Generated by the Jasper component of Apache Tomcat
 * Version: jetty/9.3.7.v20160115
 * Generated at: 2016-12-06 12:59:20 UTC
 * Note: The last modified time of this file was set to
 *       the last modified time of the source file after
 *       generation to assist with modification tracking.
 */
package org.apache.jsp;

import javax.servlet.*;
import javax.servlet.http.*;
import javax.servlet.jsp.*;

public final class contact_jsp extends org.apache.jasper.runtime.HttpJspBase
    implements org.apache.jasper.runtime.JspSourceDependent,
                 org.apache.jasper.runtime.JspSourceImports {

  private static final javax.servlet.jsp.JspFactory _jspxFactory =
          javax.servlet.jsp.JspFactory.getDefaultFactory();

  private static java.util.Map<java.lang.String,java.lang.Long> _jspx_dependants;

  private static final java.util.Set<java.lang.String> _jspx_imports_packages;

  private static final java.util.Set<java.lang.String> _jspx_imports_classes;

  static {
    _jspx_imports_packages = new java.util.HashSet<>();
    _jspx_imports_packages.add("javax.servlet");
    _jspx_imports_packages.add("javax.servlet.http");
    _jspx_imports_packages.add("javax.servlet.jsp");
    _jspx_imports_classes = null;
  }

  private volatile javax.el.ExpressionFactory _el_expressionfactory;
  private volatile org.apache.tomcat.InstanceManager _jsp_instancemanager;

  public java.util.Map<java.lang.String,java.lang.Long> getDependants() {
    return _jspx_dependants;
  }

  public java.util.Set<java.lang.String> getPackageImports() {
    return _jspx_imports_packages;
  }

  public java.util.Set<java.lang.String> getClassImports() {
    return _jspx_imports_classes;
  }

  public javax.el.ExpressionFactory _jsp_getExpressionFactory() {
    if (_el_expressionfactory == null) {
      synchronized (this) {
        if (_el_expressionfactory == null) {
          _el_expressionfactory = _jspxFactory.getJspApplicationContext(getServletConfig().getServletContext()).getExpressionFactory();
        }
      }
    }
    return _el_expressionfactory;
  }

  public org.apache.tomcat.InstanceManager _jsp_getInstanceManager() {
    if (_jsp_instancemanager == null) {
      synchronized (this) {
        if (_jsp_instancemanager == null) {
          _jsp_instancemanager = org.apache.jasper.runtime.InstanceManagerFactory.getInstanceManager(getServletConfig());
        }
      }
    }
    return _jsp_instancemanager;
  }

  public void _jspInit() {
  }

  public void _jspDestroy() {
  }

  public void _jspService(final javax.servlet.http.HttpServletRequest request, final javax.servlet.http.HttpServletResponse response)
        throws java.io.IOException, javax.servlet.ServletException {

final java.lang.String _jspx_method = request.getMethod();
if (!"GET".equals(_jspx_method) && !"POST".equals(_jspx_method) && !"HEAD".equals(_jspx_method) && !javax.servlet.DispatcherType.ERROR.equals(request.getDispatcherType())) {
response.sendError(HttpServletResponse.SC_METHOD_NOT_ALLOWED, "JSPs only permit GET POST or HEAD");
return;
}

    final javax.servlet.jsp.PageContext pageContext;
    javax.servlet.http.HttpSession session = null;
    final javax.servlet.ServletContext application;
    final javax.servlet.ServletConfig config;
    javax.servlet.jsp.JspWriter out = null;
    final java.lang.Object page = this;
    javax.servlet.jsp.JspWriter _jspx_out = null;
    javax.servlet.jsp.PageContext _jspx_page_context = null;


    try {
      response.setContentType("text/html; charset=UTF-8");
      pageContext = _jspxFactory.getPageContext(this, request, response,
      			null, true, 8192, true);
      _jspx_page_context = pageContext;
      application = pageContext.getServletContext();
      config = pageContext.getServletConfig();
      session = pageContext.getSession();
      out = pageContext.getOut();
      _jspx_out = out;

      out.write("\r\n");
      out.write("<!DOCTYPE html>\r\n");
      out.write("<html lang=\"en\">\r\n");
      out.write("<head>\r\n");
      out.write("<title>Contact</title>\r\n");
      out.write("<!-- for-mobile-apps -->\r\n");
      out.write("<meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\r\n");
      out.write("<meta http-equiv=\"Content-Type\" content=\"text/html; charset=utf-8\" />\r\n");
      out.write("<meta name=\"keywords\" content=\"\" />\r\n");
      out.write("<script type=\"application/x-javascript\"> addEventListener(\"load\", function() { setTimeout(hideURLbar, 0); }, false);\r\n");
      out.write("\t\tfunction hideURLbar(){ window.scrollTo(0,1); } </script>\r\n");
      out.write("<!-- //for-mobile-apps -->\r\n");
      out.write("<link href=\"css/bootstrap.css\" rel=\"stylesheet\" type=\"text/css\" media=\"all\" />\r\n");
      out.write("<link href=\"css/style.css\" rel=\"stylesheet\" type=\"text/css\" media=\"all\" />\r\n");
      out.write("<link href=\"css/font-awesome.css\" rel=\"stylesheet\"> \r\n");
      out.write("\r\n");
      out.write("<!--web-fonts-->\r\n");
      out.write("<link href=\"http://fonts.googleapis.com/css?family=Open+Sans:400,600,700,800\" rel=\"stylesheet\">\r\n");
      out.write("<link href=\"http://fonts.googleapis.com/css?family=Lato:300,400,700\" rel=\"stylesheet\">\r\n");
      out.write("<!--//web-fonts-->\r\n");
      out.write("<!--//fonts-->\r\n");
      out.write("<!-- js -->\r\n");
      out.write("</head>\r\n");
      out.write("<body>\r\n");
      out.write("<!-- banner -->\r\n");
      out.write("\t<div class=\"banner about-banner-w3ls \" id=\"home\">\r\n");
      out.write("\t\t<!-- header -->\r\n");
      out.write("\t\t<header>\r\n");
      out.write("\t\t\t<div class=\"container\">\r\n");
      out.write("\r\n");
      out.write("\t\t\t<!-- navigation -->\r\n");
      out.write("\t\t\t<nav class=\"navbar navbar-default\">\r\n");
      out.write("\t\t\t\t<!-- Brand and toggle get grouped for better mobile display -->\r\n");
      out.write("\t\t\t\t<div class=\"navbar-header\">\r\n");
      out.write("\t\t\t\t  <button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#bs-example-navbar-collapse-1\" aria-expanded=\"false\">\r\n");
      out.write("\t\t\t\t\t<span class=\"sr-only\">Toggle navigation</span>\r\n");
      out.write("\t\t\t\t\t<span class=\"icon-bar\"></span>\r\n");
      out.write("\t\t\t\t\t<span class=\"icon-bar\"></span>\r\n");
      out.write("\t\t\t\t\t<span class=\"icon-bar\"></span>\r\n");
      out.write("\t\t\t\t  </button>\t\t\t\t  \r\n");
      out.write("\t\t\t\t<div class=\"w3-logo\">\r\n");
      out.write("\t\t\t\t\t<h1><a href=\"index.jsp\">Educative</a></h1>\r\n");
      out.write("\t\t\t\t\t<label></label>\r\n");
      out.write("\t\t\t\t</div>\r\n");
      out.write("\t\t\t\t</div>\r\n");
      out.write("\r\n");
      out.write("\t\t\t\t<!-- Collect the nav links, forms, and other content for toggling -->\r\n");
      out.write("\t\t\t\t<div class=\"collapse navbar-collapse\" id=\"bs-example-navbar-collapse-1\">\r\n");
      out.write("\t\t\t\t  <ul class=\"nav navbar-nav\">\r\n");
      out.write("\t\t\t\t\t<li><a  href=\"index.jsp\">Home</a></li>\r\n");
      out.write("\t\t\t\t\t<li><a href=\"about.jsp\">About</a></li>\r\n");
      out.write("\t\t\t\t\t<li><a href=\"gallery.jsp\">Gallery</a></li>\r\n");
      out.write("\t\t\t\t\t<li class=\"dropdown\">\r\n");
      out.write("\t\t\t\t\t  <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\" role=\"button\" aria-haspopup=\"true\" aria-expanded=\"false\">Pages<span class=\"caret\"></span></a>\r\n");
      out.write("\t\t\t\t\t  <ul class=\"dropdown-menu\">\r\n");
      out.write("\t\t\t\t\t\t<li><a href=\"codes.jsp\">Short Codes</a></li>\r\n");
      out.write("\t\t\t\t\t\t<li><a href=\"icons.jsp\">Icons</a></li>\r\n");
      out.write("\t\t\t\t\t  </ul>\r\n");
      out.write("\t\t\t\t\t</li>\r\n");
      out.write("\t\t\t\t\t<li><a class=\"active\" href=\"contact.jsp\">Contact</a></li>\r\n");
      out.write("\t\t\t\t  </ul>\r\n");
      out.write("\t\t\t\t <div class=\"subscribe\">\r\n");
      out.write("\t\t\t\t\t<form>\r\n");
      out.write("\t\t\t\t\t\t<input type=\"search\" class=\"sub-email\" name=\"Search\" required=\"\">\r\n");
      out.write("\t\t\t\t\t\t<input type=\"submit\"  value=\"\">\r\n");
      out.write("\t\t\t\t\t</form>\r\n");
      out.write("\t\t\t\t</div>\r\n");
      out.write("\t\t\t\t</div><!-- /.navbar-collapse -->\r\n");
      out.write("\t\t\t\t \r\n");
      out.write("\t\t\t</nav>\r\n");
      out.write("\t\t\t<div class=\"clearfix\"></div>\r\n");
      out.write("\t\t<!-- //navigation -->\r\n");
      out.write("\t\t\t</div>\r\n");
      out.write("\t\t</header>\r\n");
      out.write("\t<!-- //header -->\r\n");
      out.write("\t<h2>Contact Us</h2>\r\n");
      out.write("\t</div>\r\n");
      out.write("<!-- //banner -->\r\n");
      out.write("<!-- contact -->\r\n");
      out.write("\t<div class=\"contact-agile\">\r\n");
      out.write("\t\t<div class=\"faq\">\r\n");
      out.write("\t\t\t\r\n");
      out.write("\t\t\t<div class=\"container\">\r\n");
      out.write("\t\t\t\t<div class=\"col-md-3 location-agileinfo\">\r\n");
      out.write("\t\t\t\t\t<div class=\"icon-w3\">\r\n");
      out.write("\t\t\t\t\t\t<span class=\"glyphicon glyphicon-map-marker\" aria-hidden=\"true\"></span>\r\n");
      out.write("\t\t\t\t\t</div>\r\n");
      out.write("\t\t\t\t\t<h3>Address</h3>\r\n");
      out.write("\t\t\t\t\t<h4>Via Roma, 47,</h4>\r\n");
      out.write("\t\t\t\t\t<h4>30172 Mestre VE,</h4>\r\n");
      out.write("\t\t\t\t\t<h4>Italy.</h4>\r\n");
      out.write("\t\t\t\t</div>\r\n");
      out.write("\t\t\t\t<div class=\"col-md-3 call-agileits\">\r\n");
      out.write("\t\t\t\t\t<div class=\"icon-w3\">\r\n");
      out.write("\t\t\t\t\t\t<span class=\"glyphicon glyphicon-earphone\" aria-hidden=\"true\"></span>\r\n");
      out.write("\t\t\t\t\t</div>\r\n");
      out.write("\t\t\t\t\t<h3>Call</h3>\r\n");
      out.write("\t\t\t\t\t<h4>+18044126235</h4>\r\n");
      out.write("\t\t\t\t\t<h4>+14056489808</h4>\r\n");
      out.write("\t\t\t\t\t<h4>+16789339049</h4>\r\n");
      out.write("\t\t\t\t</div>\r\n");
      out.write("\t\t\t\t<div class=\"col-md-3 mail-wthree\">\r\n");
      out.write("\t\t\t\t\t<div class=\"icon-w3\">\r\n");
      out.write("\t\t\t\t\t\t<span class=\"glyphicon glyphicon-envelope\" aria-hidden=\"true\"></span>\r\n");
      out.write("\t\t\t\t\t</div>\r\n");
      out.write("\t\t\t\t\t<h3>Email</h3>\r\n");
      out.write("\t\t\t\t\t<h4><a href=\"mailto:info@example.com\">example1@mail.com</a></h4>\r\n");
      out.write("\t\t\t\t\t<h4><a href=\"mailto:info@example.com\">example2@mail.com</a></h4>\r\n");
      out.write("\t\t\t\t\t<h4><a href=\"mailto:info@example.com\">example3@mail.com</a></h4>\r\n");
      out.write("\t\t\t\t</div>\r\n");
      out.write("\t\t\t\t<div class=\"col-md-3 social-w3l\">\r\n");
      out.write("\t\t\t\t\t<div class=\"icon-w3\">\r\n");
      out.write("\t\t\t\t\t\t<span class=\"glyphicon glyphicon-user\" aria-hidden=\"true\"></span>\r\n");
      out.write("\t\t\t\t\t</div>\r\n");
      out.write("\t\t\t\t\t<h3>Social media</h3>\r\n");
      out.write("\t\t\t\t\t<ul>\r\n");
      out.write("\t\t\t\t\t\t<li><a href=\"#\"><i class=\"fa fa-facebook\" aria-hidden=\"true\"></i><span class=\"text\">Facebook</span></a></li>\r\n");
      out.write("\t\t\t\t\t\t<li class=\"twt\"><a href=\"#\"><i class=\"fa fa-twitter\" aria-hidden=\"true\"></i><span class=\"text\">Twitter</span></a></li>\r\n");
      out.write("\t\t\t\t\t\t<li class=\"ggp\"><a href=\"#\"><i class=\"fa fa-google-plus\" aria-hidden=\"true\"></i><span class=\"text\">Google+</span></a></li>\t\r\n");
      out.write("\t\t\t\t\t</ul>\r\n");
      out.write("\t\t\t\t</div>\r\n");
      out.write("\t\t\t\t<div class=\"clearfix\"></div>\r\n");
      out.write("\t\t\t\t<form action=\"#\" method=\"post\">\r\n");
      out.write("\t\t\t\t\t<input type=\"text\" name=\"your name\" placeholder=\"FIRST NAME\" required=\"\">\r\n");
      out.write("\t\t\t\t\t<input type=\"text\" name=\"your name\" placeholder=\"LAST NAME\" required=\"\">\r\n");
      out.write("\t\t\t\t\t<input type=\"email\" name=\"your email\" placeholder=\"EMAIL\" required=\"\">\r\n");
      out.write("\t\t\t\t\t<input type=\"text\" name=\"subject\" placeholder=\"SUBJECT\" required=\"\">\r\n");
      out.write("\t\t\t\t\t<textarea  name=\"your message\" placeholder=\"YOUR MESSAGE\" required=\"\"></textarea>\r\n");
      out.write("\t\t\t\t\t<input type=\"submit\" value=\"SEND MESSAGE\">\r\n");
      out.write("\t\t\t\t</form>\r\n");
      out.write("\t\t\t</div>\r\n");
      out.write("\t\t</div>\r\n");
      out.write("\t</div>\r\n");
      out.write("\t<div class=\"map-w3-agileits\">\r\n");
      out.write("\t\t<iframe src=\"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6147597.273763374!2d8.084369138346274!3d41.20528240044405!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12d4fe82448dd203%3A0xe22cf55c24635e6f!2sItaly!5e0!3m2!1sen!2sin!4v1476877496594\"></iframe>\r\n");
      out.write("\t</div>\r\n");
      out.write("<!-- //contact -->\r\n");
      out.write("<!-- Footer -->\r\n");
      out.write("\r\n");
      out.write("\t\t\t<div class=\"copyright-wthree\">\r\n");
      out.write("\t\t\t\t<p>Copyright &copy; 2017.Company name All rights reserved.<a target=\"_blank\" href=\"http://sc.chinaz.com/moban/\">&#x7F51;&#x9875;&#x6A21;&#x677F;</a></p>\r\n");
      out.write("\t\t\t</div>\r\n");
      out.write("<!-- //Footer -->\r\n");
      out.write("\t<a href=\"#home\" class=\"scroll\" id=\"toTop\" style=\"display: block;\"> <span id=\"toTopHover\" style=\"opacity: 1;\"> </span></a>\r\n");
      out.write("<!-- //smooth scrolling -->\r\n");
      out.write("\r\n");
      out.write("\t\r\n");
      out.write("<script type=\"text/javascript\" src=\"js/jquery-2.1.4.min.js\"></script>\r\n");
      out.write("\r\n");
      out.write("\r\n");
      out.write("\r\n");
      out.write(" <!-- start-smoth-scrolling -->\r\n");
      out.write("<script type=\"text/javascript\" src=\"js/move-top.js\"></script>\r\n");
      out.write("<script type=\"text/javascript\" src=\"js/easing.js\"></script>\r\n");
      out.write("<script type=\"text/javascript\">\r\n");
      out.write("\tjQuery(document).ready(function($) {\r\n");
      out.write("\t\t$(\".scroll\").click(function(event){\t\t\r\n");
      out.write("\t\t\tevent.preventDefault();\r\n");
      out.write("\t\t\t$('html,body').animate({scrollTop:$(this.hash).offset().top},1000);\r\n");
      out.write("\t\t});\r\n");
      out.write("\t});\r\n");
      out.write("</script>\r\n");
      out.write("<!-- start-smoth-scrolling -->\r\n");
      out.write("<!-- here stars scrolling icon -->\r\n");
      out.write("\t<script type=\"text/javascript\">\r\n");
      out.write("\t\t$(document).ready(function() {\r\n");
      out.write("\t\t\t/*\r\n");
      out.write("\t\t\t\tvar defaults = {\r\n");
      out.write("\t\t\t\tcontainerID: 'toTop', // fading element id\r\n");
      out.write("\t\t\t\tcontainerHoverID: 'toTopHover', // fading element hover id\r\n");
      out.write("\t\t\t\tscrollSpeed: 1200,\r\n");
      out.write("\t\t\t\teasingType: 'linear' \r\n");
      out.write("\t\t\t\t};\r\n");
      out.write("\t\t\t*/\r\n");
      out.write("\t\t\t\t\t\t\t\t\r\n");
      out.write("\t\t\t$().UItoTop({ easingType: 'easeOutQuart' });\r\n");
      out.write("\t\t\t\t\t\t\t\t\r\n");
      out.write("\t\t\t});\r\n");
      out.write("\t</script>\r\n");
      out.write("<!-- //here ends scrolling icon -->\r\n");
      out.write("<!--js for bootstrap working-->\r\n");
      out.write("\t<script src=\"js/bootstrap.js\"></script>\r\n");
      out.write("<!-- //for bootstrap working -->\r\n");
      out.write("\r\n");
      out.write("\r\n");
      out.write("<!-- script-for-menu -->\r\n");
      out.write("\t\t\t\t\t<script>\t\t\t\t\t\r\n");
      out.write("\t\t\t\t\t\t$(\"span.menu\").click(function(){\r\n");
      out.write("\t\t\t\t\t\t\t$(\".top-nav ul\").slideToggle(\"slow\" , function(){\r\n");
      out.write("\t\t\t\t\t\t\t});\r\n");
      out.write("\t\t\t\t\t\t});\r\n");
      out.write("\t\t\t\t\t</script>\r\n");
      out.write("\t\t\t\t\t<!-- script-for-menu -->\r\n");
      out.write("\r\n");
      out.write("</body>\r\n");
      out.write("</html>");
    } catch (java.lang.Throwable t) {
      if (!(t instanceof javax.servlet.jsp.SkipPageException)){
        out = _jspx_out;
        if (out != null && out.getBufferSize() != 0)
          try {
            if (response.isCommitted()) {
              out.flush();
            } else {
              out.clearBuffer();
            }
          } catch (java.io.IOException e) {}
        if (_jspx_page_context != null) _jspx_page_context.handlePageException(t);
        else throw new ServletException(t);
      }
    } finally {
      _jspxFactory.releasePageContext(_jspx_page_context);
    }
  }
}