import React from "react";
import Markdown from "react-markdown";

const MarkdownContent = ({ markdown }) => {
  return (
    <div className="markdown-content">
      <Markdown>{markdown}</Markdown>
      
        {/* YouTube Embed */}
        <iframe
          width="640"
          height="360"
          src="https://www.youtube.com/embed/rmLK2yNDQf8"
          frameborder="0"
          allowfullscreen
        ></iframe>
      </div>
  );
};

export default MarkdownContent;
