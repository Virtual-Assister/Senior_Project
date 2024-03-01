import React, { useState } from "react";
import { CustomButton } from "./CustomButton"; // Import the correct Button

const BodyComponent = ({ classes }) => {
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

  const handleDownloadClick = () => {};

  const handleEmailClick = () => {};

  return (
    <div className="generate-button">
      <CustomButton text="Generate Preview" handleEvent={handleButtonClick} />
      {/* Render XML preview if content is available */}
      {xmlContent && (
        <div>
          <h2>Degree Preview</h2>
          {/* Display formatted XML content */}
          <pre style={{ whiteSpace: "pre-wrap" }}>{xmlContent}</pre>
          <a
            href="ExamplePDF"
            download="Example-PDF-document"
            target="_blank"
            rel="noreferrer"
          >
            <CustomButton text="Download" handleEvent={handleDownloadClick} />
          </a>

          <CustomButton text="Email" handleEvent={handleEmailClick} />
        </div>
      )}
    </div>
  );
};

export default BodyComponent;
