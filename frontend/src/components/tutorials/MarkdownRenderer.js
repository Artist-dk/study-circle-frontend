import React from 'react';
import {marked} from 'marked';
import DOMPurify from 'dompurify';

const MarkdownRenderer = (props) => {
  const parsedContent = marked(props.content);
  const cleanContent = DOMPurify.sanitize(parsedContent);

  return (
    <div>
      <div dangerouslySetInnerHTML={{ __html: cleanContent }} />
    </div>
  );
};

export default MarkdownRenderer;