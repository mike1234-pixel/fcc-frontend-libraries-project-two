(this["webpackJsonpmarkdown-previewer"]=this["webpackJsonpmarkdown-previewer"]||[]).push([[0],{17:function(e,n,t){e.exports=t(26)},25:function(e,n,t){},26:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),i=t(11),o=t.n(i),c=t(12),l=t(13),s=t(5),d=t(16),h=t(15),u=t(14),m=t.n(u),p=function(e){Object(d.a)(t,e);var n=Object(h.a)(t);function t(){var e;return Object(c.a)(this,t),(e=n.call(this)).state={text:"Heading\n=======\n      \nSub-heading\n-----------\n       \n### Another deeper heading\n#h1\n\n> Blockquote\n\n![Favicon](./favicon-32x32.png)\n       \nParagraphs are separated\nby a blank line.\n      \nLeave 2 spaces at the end of a line to do a  \nline break\n      \nText attributes *italic*, **bold**, \n`monospace`, ~~strikethrough~~.\n      \nShopping list:\n      \n* First item\n* Second item\n* Third item\n* Fourth item\n      \nNumbered list:\n      \n        1. apples\n        2. oranges\n        3. pears\n      \nThe rain---not the reign---in\nSpain.\n      \n```\nHey, look, a code block!\n```\n      \n  *[Michael Tandy](https://github.com/mike1234-pixel)*\n      "},e.handleChange=e.handleChange.bind(Object(s.a)(e)),e.createMarkdown=e.createMarkdown.bind(Object(s.a)(e)),e}return Object(l.a)(t,[{key:"handleChange",value:function(e){this.setState({text:e.target.value}),this.createMarkdown()}},{key:"createMarkdown",value:function(){return{__html:m()(this.state.text,{breaks:!0})}}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("div",{className:"heading-container"},r.a.createElement("p",{className:"heading"},"Markdown Preview")),r.a.createElement("div",{className:"main-container"},r.a.createElement("textarea",{id:"editor",onChange:this.handleChange,value:this.state.text}),r.a.createElement("div",{id:"preview",dangerouslySetInnerHTML:this.createMarkdown()})),r.a.createElement("div",{className:"footnote-container"},r.a.createElement("p",{className:"footnote"},"Designed and built by Michael Tandy")))}}]),t}(r.a.Component);t(25);o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(p,null)),document.getElementById("root"))}},[[17,1,2]]]);
//# sourceMappingURL=main.661544a5.chunk.js.map