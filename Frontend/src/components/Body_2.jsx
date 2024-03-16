import React, { useState } from "react";
import { CustomButton } from "./CustomButton";
import PreviewComponent from "./Preview";

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
      {/* Render PreviewComponent and conditionally render other buttons */}
      {xmlContent && (
        <div>
          <PreviewComponent previewData={xmlContent} />
          <div>
            <CustomButton text="Download" handleEvent={handleDownloadClick} />
            <CustomButton text="Email" handleEvent={handleEmailClick} />
          </div>
        </div>
      )}
    </div>
  );
};

export default BodyComponent;
