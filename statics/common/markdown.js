// var marked = require('marked.js')

// var marked = $import('marked')
import marked from 'marked'
import hljs from 'highlight.js'
var renderer = new marked.Renderer()
marked.setOptions({
  renderer: new marked.Renderer(),
  gfm: true,
  tables: true,
  breaks: true,
  pedantic: true,
  sanitize: true,
  smartLists: true,
  smartypants: true,
  highlight: function(code) {
    return require('highlight.js').highlightAuto(code).value;
  }
})
/*
renderer.code = function (text, lang) {
  return '<pre class="code_style">' + '<code>' + text + '</code>' + '</pre>'
}

renderer.list = function (body, ordered) {
  return '<ul>' + body + '</ul>'
}

renderer.listitem = function (text) {
  return '<li>' + text + '</li>'
}

renderer.table = function (header, body) {
  return '<table class="article-table">' + header + body + '</table>'
}

renderer.tablerow = function (content) {
  return '<tr class="article-table-tr">' + content + '</tr>'
}

renderer.tablecell = function (content, flags) {
  return '<td class="article-table-td">' + content + '</td>'
}

*/

renderer.image = function (href, title, text) {
  if (text != undefined) {
    var widthAndHeight = text.split(',')
    //  console.log(widthAndHeight[0] + ',' + widthAndHeight[1])
  }

  return '<image src="'+href+'" width="'+widthAndHeight[0]+'" height="'+widthAndHeight[1]+'" class="article-img" />'
}

export var Marked = marked
export var Renderer = renderer

