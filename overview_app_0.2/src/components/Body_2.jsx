import React, { useState } from "react";

const BodyComponent = () => {
  const [xmlContent, setXmlContent] = useState(null);

  const handleButtonClick = () => {
    const generatedXml = `<?xml version="1.0" encoding="UTF-8"?>
<root>
  <item>
    <name>Item 1</name>
    <price>10</price>
  </item>
  <item>
    <name>Item 2</name>
    <price>20</price>
  </item>
</root>`;

    setXmlContent(generatedXml);
  };

  return (
    <div className="generateButton">
      <button onClick={handleButtonClick}>Generate Preview</button>
      {/* Render XML preview if content is available */}
      {xmlContent && (
        <div>
          <h2>Degree Preview</h2>
          {/* Display formatted XML content */}
          <pre style={{ whiteSpace: "pre-wrap" }}>{xmlContent}</pre>
        </div>
      )}
    </div>
  );
};

export default BodyComponent;
