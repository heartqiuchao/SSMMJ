/*
 * Generated by the Jasper component of Apache Tomcat
 * Version: jetty/9.3.7.v20160115
 * Generated at: 2016-04-09 07:47:16 UTC
 * Note: The last modified time of this file was set to
 *       the last modified time of the source file after
 *       generation to assist with modification tracking.
 */
package org.apache.jsp;

import javax.servlet.*;
import javax.servlet.http.*;
import javax.servlet.jsp.*;

public final class import_jsp extends org.apache.jasper.runtime.HttpJspBase
    implements org.apache.jasper.runtime.JspSourceDependent,
                 org.apache.jasper.runtime.JspSourceImports {

  private static final javax.servlet.jsp.JspFactory _jspxFactory =
          javax.servlet.jsp.JspFactory.getDefaultFactory();

  private static java.util.Map<java.lang.String,java.lang.Long> _jspx_dependants;

  static {
    _jspx_dependants = new java.util.HashMap<java.lang.String,java.lang.Long>(2);
    _jspx_dependants.put("file:/E:/owner/maven/repository/org/apache/taglibs/taglibs-standard-impl/1.2.5/taglibs-standard-impl-1.2.5.jar", Long.valueOf(1458294258227L));
    _jspx_dependants.put("jar:file:/E:/owner/maven/repository/org/apache/taglibs/taglibs-standard-impl/1.2.5/taglibs-standard-impl-1.2.5.jar!/META-INF/c.tld", Long.valueOf(1425949870000L));
  }

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

      out.write("<!--Core CSS -->\r\n");
      out.write("<link href=\"");
      out.print(request.getContextPath());
      out.write("/skin/bs3/css/bootstrap.min.css\" rel=\"stylesheet\">\r\n");
      out.write("<link href=\"");
      out.print(request.getContextPath());
      out.write("/skin/css/bootstrap-reset.css\" rel=\"stylesheet\">\r\n");
      out.write("<link href=\"");
      out.print(request.getContextPath());
      out.write("/skin/assets/font-awesome/css/font-awesome.css\" rel=\"stylesheet\" />\r\n");
      out.write("<!-- Custom styles for this template -->\r\n");
      out.write("<link href=\"");
      out.print(request.getContextPath());
      out.write("/skin/css/style.css\" rel=\"stylesheet\">\r\n");
      out.write("<link href=\"");
      out.print(request.getContextPath());
      out.write("/skin/css/style-responsive.css\" rel=\"stylesheet\" />\r\n");
      out.write("<!-- Just for debugging purposes. Don't actually copy this line! -->\r\n");
      out.write("<!--[if lt IE 9]><script src=\"js/ie8/ie8-responsive-file-warning.js\"></script><![endif]-->\r\n");
      out.write("<!-- HTML5 shim and Respond.js IE8 support of HTML5 elements and media queries -->\r\n");
      out.write("<!--[if lt IE 9]>\r\n");
      out.write("<script src=\"https://oss.maxcdn.com/libs/html5shiv/3.7.0/html5shiv.js\"></script>\r\n");
      out.write("<script src=\"https://oss.maxcdn.com/libs/respond.js/1.3.0/respond.min.js\"></script>\r\n");
      out.write("<![endif]-->\r\n");
      out.write("<script src=\"");
      out.print(request.getContextPath());
      out.write("/js/lib/jquery.js\"></script>\r\n");
      out.write("<script src=\"");
      out.print(request.getContextPath());
      out.write("/skin/bs3/js/bootstrap.min.js\"></script>\r\n");
      out.write("<script src=\"");
      out.print(request.getContextPath());
      out.write("/js/md5.js\"></script>\r\n");
      out.write("<script src=\"");
      out.print(request.getContextPath());
      out.write("/js/validator.js\"></script>\r\n");
      out.write("\r\n");
      out.write("<script type=\"text/javascript\">\r\n");
      out.write("\tfunction gotoURL(url){\r\n");
      out.write("\t\twindow.location.href = url;\r\n");
      out.write("\t}\r\n");
      out.write("\r\n");
      out.write("\tfunction confirmURL(url){\r\n");
      out.write("\t\tif(confirm(\"确定吗?\")){\r\n");
      out.write("\t\t\twindow.location.href = url;\r\n");
      out.write("\t\t}\r\n");
      out.write("\t}\r\n");
      out.write("\t\r\n");
      out.write("\t\r\n");
      out.write("\t// 输入字数限制    \r\n");
      out.write("\tvar objs = [];\r\n");
      out.write("\tfunction initTextarea() {\r\n");
      out.write("\t\t$(\"textarea[maxchar]\").text($.trim($(\"textarea[maxchar]\").text()));\r\n");
      out.write("\t\t$(\"textarea[maxchar]\").after(\"<div class='note'><s:text name='js.leftchar'/>&nbsp<span class='red'></span>&nbsp<s:text name='js.character'/></div>\");\r\n");
      out.write("\t\t$(\"textarea[maxchar]\").each(\r\n");
      out.write("\t\t\tfunction(i) {\r\n");
      out.write("\t\t\t\tvar maxchar = $(this).attr(\"maxchar\");\r\n");
      out.write("\t\t\t\tvar lens = $(this).get(0).value.replace(/[^\\x00-\\xff]/g, 'ch').length;\r\n");
      out.write("\t\t\t\tvar remain = parseInt(maxchar)- lens;\r\n");
      out.write("\t\t\t\t$(this).next(\"div.note\").children(\"span\").text(remain);\r\n");
      out.write("\t\t\t\t$(\"textarea[maxchar]\").bind(\"keyup\", charLeft).bind(\"keydown\", charLeft).bind(\"change\", charLeft);\r\n");
      out.write("\t\t});\r\n");
      out.write("\t}\r\n");
      out.write("\r\n");
      out.write("\tfunction charLeft() {\r\n");
      out.write("\t\tvar maxchar = $(this).attr(\"maxchar\");\r\n");
      out.write("\t\tvar lens = this.value.replace(/[^\\x00-\\xff]/gi, 'ch').length;\r\n");
      out.write("\t\tvar remain = parseInt(maxchar) - lens;\r\n");
      out.write("\t\t$(this).next(\"div.note\").children(\"span\").text(remain);\r\n");
      out.write("\t\tif (lens > maxchar) {\r\n");
      out.write("\t\t\tvar value = \"\";\r\n");
      out.write("\t\t\tvar postion = 0;\r\n");
      out.write("\t\t\tvar strlen = this.value.length;\r\n");
      out.write("\t\t\tfor ( var i = 0; i < strlen; i++) {\r\n");
      out.write("\t\t\t\tvar char = this.value.substring(i, i + 1);\r\n");
      out.write("\t\t\t\tif (char.match(/[^\\x00-\\xff]/)) {\r\n");
      out.write("\t\t\t\t\tpostion += 2;\r\n");
      out.write("\t\t\t\t} else {\r\n");
      out.write("\t\t\t\t\tpostion += 1;\r\n");
      out.write("\t\t\t\t}\r\n");
      out.write("\t\t\t\tif (postion <= maxchar) {\r\n");
      out.write("\t\t\t\t\tif (char == '\\r' && i >= strlen - 2) {\r\n");
      out.write("\t\t\t\t\t\tbreak;\r\n");
      out.write("\t\t\t\t\t}\r\n");
      out.write("\t\t\t\t\tvalue += char;\r\n");
      out.write("\t\t\t\t} else {\r\n");
      out.write("\t\t\t\t\tbreak;\r\n");
      out.write("\t\t\t\t}\r\n");
      out.write("\t\t\t}\r\n");
      out.write("\r\n");
      out.write("\t\t\tthis.value = value;\r\n");
      out.write("\t\t\t$(this).next(\"div.note\").children(\"span\").text(0);\r\n");
      out.write("\t\t}\r\n");
      out.write("\t\tlens = this.value.replace(/[^\\x00-\\xff]/gi, 'ch').length;\r\n");
      out.write("\t\tremain = parseInt(maxchar) - lens;\r\n");
      out.write("\t\t$(this).next(\"div.note\").children(\"span\").text(remain);\r\n");
      out.write("\t}\r\n");
      out.write("</script>\r\n");
      out.write("<style>\r\n");
      out.write("\t.red{\r\n");
      out.write("\t\tcolor:red;\r\n");
      out.write("\t }\r\n");
      out.write("</style>");
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
