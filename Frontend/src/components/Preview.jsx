import React from "react";

const PreviewComponent = ({ previewData }) => {
  return (
    <div className="preview-container">
      <h2>Preview</h2>
      <div className="preview-content">
        {/* Render preview content based on its type */}
        {previewData ? (
          <div dangerouslySetInnerHTML={{ __html: previewData }} />
        ) : (
          <p>No preview available</p>
        )}
      </div>
    </div>
  );
};

export default PreviewComponent;
