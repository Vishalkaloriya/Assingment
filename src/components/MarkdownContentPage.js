// MarkdownContentPage.jsx
import React, { useState, useEffect } from "react";
import MarkdownContent from "./MarkdownContent";

const MarkdownContentPage = ({ markdownFile }) => {
  const [markdownContent, setMarkdownContent] = useState("");

  useEffect(() => {
    const fetchMarkdownContent = async () => {
      try {
        const response = await fetch(`/markdown/${markdownFile}`); // Assuming the markdown files are stored in a folder named 'markdown'
        const markdownText = await response.text();
        setMarkdownContent(markdownText);
      } catch (error) {
        console.error("Error fetching markdown content:", error);
      }
    };

    fetchMarkdownContent();
  }, [markdownFile]);

  return (
    <div className="markdown-content">
      <MarkdownContent markdown={markdownContent} />
    </div>
  );
};

export default MarkdownContentPage;
