require.def("ace/theme/Monokai",
    ["ace/lib/dom"], function(dom) {

    var cssText = ".ace-monokai .ace_editor {\
  border: 2px solid rgb(159, 159, 159);\
}\
\
.ace-monokai .ace_editor.ace_focus {\
  border: 2px solid #327fbd;\
}\
\
.ace-monokai .ace_gutter {\
  width: 50px;\
  background: #e8e8e8;\
  color: #333;\
  overflow : hidden;\
}\
\
.ace-monokai .ace_gutter-layer {\
  right: 0px;\
  text-align: right;\
}\
\
.ace-monokai .ace_gutter-layer .ace_gutter-cell {\
  padding-right: 15px;\
}\
\
.ace-monokai .ace_editor .ace_printMargin {\
  width: 1px;\
  background: #e8e8e8;\
}\
\
.ace-monokai .ace_scroller {\
  background-color: #272822;\
}\
\
.ace-monokai .ace_text-layer {\
  cursor: text;\
  color: #F8F8F2;\
}\
\
.ace-monokai .ace_cursor {\
  border-left: 2px solid #F8F8F0;\
}\
\
.ace-monokai .ace_cursor.ace_overwrite {\
  border-left: 0px;\
  border-bottom: 1px solid #F8F8F0;\
}\
 \
.ace-monokai .ace_marker-layer .ace_selection {\
  background: #49483E;\
}\
\
.ace-monokai .ace_marker-layer .ace_step {\
  background: rgb(198, 219, 174);\
}\
\
.ace-monokai .ace_marker-layer .ace_bracket {\
  margin: -1px 0 0 -1px;\
  border: 1px solid #49483E;\
}\
\
.ace-monokai .ace_marker-layer .ace_active_line {\
  background: #49483E;\
}\
\
       \
.ace-monokai .ace_invisible {\
  color: #49483E;\
}\
\
.ace-monokai .ace_keyword {\
  color:#F92672;\
}\
\
.ace-monokai .ace_keyword.ace_operator {\
  \
}\
\
.ace-monokai .ace_constant {\
  \
}\
\
.ace-monokai .ace_constant.ace_language {\
  color:#AE81FF;\
}\
\
.ace-monokai .ace_constant.ace_library {\
  \
}\
\
.ace-monokai .ace_constant.ace_numeric {\
  color:#AE81FF;\
}\
\
.ace-monokai .ace_invalid {\
  color:#F8F8F0;\
background-color:#F92672;\
}\
\
.ace-monokai .ace_invalid.ace_illegal {\
  \
}\
\
.ace-monokai .ace_invalid.ace_deprecated {\
  color:#F8F8F0;\
background-color:#AE81FF;\
}\
\
.ace-monokai .ace_support {\
  \
}\
\
.ace-monokai .ace_support.ace_function {\
  color:#66D9EF;\
}\
\
.ace-monokai .ace_function.ace_buildin {\
  \
}\
\
.ace-monokai .ace_string {\
  color:#E6DB74;\
}\
\
.ace-monokai .ace_string.ace_regexp {\
  \
}\
\
.ace-monokai .ace_comment {\
  color:#75715E;\
}\
\
.ace-monokai .ace_comment.ace_doc {\
  \
}\
\
.ace-monokai .ace_comment.ace_doc.ace_tag {\
  \
}\
\
.ace-monokai .ace_variable {\
  \
}\
\
.ace-monokai .ace_variable.ace_language {\
  \
}\
\
.ace-monokai .ace_xml_pe {\
  \
}";
    
    // import CSS once
    dom.importCssString(cssText);
    
    return {
        cssClass: "ace-monokai"
    };
})