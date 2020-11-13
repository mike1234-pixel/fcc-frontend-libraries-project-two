import React from "react";
import marked from "marked";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      text: `Heading
=======
      
Sub-heading
-----------
       
### Another deeper heading
#h1

> Blockquote

![Favicon](./favicon-32x32.png)
       
Paragraphs are separated
by a blank line.
      
Leave 2 spaces at the end of a line to do a  
line break
      
Text attributes *italic*, **bold**, 
\`monospace\`, ~~strikethrough~~.
      
Shopping list:
      
* First item
* Second item
* Third item
* Fourth item
      
Numbered list:
      
        1. apples
        2. oranges
        3. pears
      
The rain---not the reign---in
Spain.
      
\`\`\`
Hey, look, a code block!
\`\`\`
      
  *[Michael Tandy](https://github.com/mike1234-pixel)*
      `,
    };
    this.handleChange = this.handleChange.bind(this);
    this.createMarkdown = this.createMarkdown.bind(this);
  }

  // <a href=''>Link</a><span>Inline code</span><code>code block</code><ul><li>List item</li></ul><blockquote>'It was the best of times, it was the bluursst of times!!??'</blockquote><img src=\"./src/favicon-32x32.png\"></img><b>Bold</b>",

  handleChange(event) {
    this.setState({ text: event.target.value });
    this.createMarkdown();
  }

  createMarkdown() {
    let markdown = marked(this.state.text, { breaks: true });
    return { __html: markdown };
  }

  render() {
    return (
      <div>
        <div className="heading-container">
          <p className="heading">Markdown Preview</p>
        </div>
        <div className="main-container">
          <textarea
            id="editor"
            onChange={this.handleChange}
            value={this.state.text}
          ></textarea>
          <div
            id="preview"
            dangerouslySetInnerHTML={this.createMarkdown()}
          ></div>
        </div>
        <div className="footnote-container">
          <p className="footnote">Designed and built by Michael Tandy</p>
        </div>
      </div>
    );
  }
}

export default App;
