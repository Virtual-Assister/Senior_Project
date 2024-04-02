import React, { useState } from "react";
import { CustomButton } from "./CustomButton";
import PreviewComponent from "./Preview";

const BodyComponent = ({ classes }) => {
  const [xmlContent, setXmlContent] = useState(null);

  const handleButtonClick = () => {
    const generatedXml = `<?xml version="1.0" encoding="UTF-8"?>
    <?xml-stylesheet type="text/xsl" href="style_sheet.xsl"?>
    <degree>
      <courses>
        <class id="CS1030">
          <department>CS</department>
          <code>1030</code>
          <name>Computer Science Principles</name>
          <credits>4</credits>
        </class>
          <class id="CS1050">
          <department>CS</department>
          <code>1050</code>
          <name>Computer Science 1</name>
          <credits>4</credits>
        </class>
        <class id="CS1400">
          <department>CS</department>
          <code>1400</code>
          <name>Computer Organization 1</name>
          <credits>4</credits>
        </class>
        <class id="CS2050">
          <department>CS</department>
          <code>2050</code>
          <name>Computer Science 2</name>
          <credits>4</credits>
        </class>
        <class id="CS2240">
          <department>CS</department>
          <code>2240</code>
          <name>Discrete Structures for Computer Science</name>
          <credits>4</credits>
        </class>
        <class id=" CS2400">
          <department>CS</department>
          <code>2400</code>
          <name>Computer Organization 2</name>
          <credits>4</credits>
        </class>
        <class id="CS3210">
          <department>CS</department>
          <code>3210</code>
          <name>Principles of Programming Languages</name>
          <credits>4</credits>
        </class>
        <class id="CS3240">
          <department>CS</department>
          <code>3240</code>
          <name>Introduction to Theory and Computation</name>
          <credits>2</credits>
        </class>
        <class id="CS3250">
          <department>CS</department>
          <code>3250</code>
          <name>Software Development Methods and Tools</name>
          <credits>4</credits>
        </class>
        <class id="CS3600">
          <department>CS</department>
          <code>3600</code>
          <name>Operating Systems</name>
          <credits>4</credits>
        </class>
        <class id="CS3700">
          <department>CS</department>
          <code>3700</code>
          <name>Networking and Distributed Computing</name>
          <credits>4</credits>
        </class>
        <class id="CS4050">
          <department>CS</department>
          <code>4050</code>
          <name>Algorithms and Algorithm Analysis</name>
          <credits>4</credits>
        </class>
        <class id="CS4360">
          <department>CS</department>
          <code>4360</code>
          <name>Senior Experience in Computer Science</name>
          <credits>4</credits>
        </class>
        <class id="CS0001">
          <department>CS</department>
          <code>0001</code>
          <name>Upper Division Elective</name>
          <credits>12</credits>
        </class>
        <class id="MTH1410">
          <department>MTH</department>
          <code>1410</code>
          <name>Calculus 1</name>
          <credits>4</credits>
        </class>
        <class id="MTH3130">
          <department>MTH</department>
          <code>3130</code>
          <name>Applied Methods in Linear Algebra</name>
          <credits>4</credits>
        </class>
        <class id="MTH3210">
          <department>MTH</department>
          <code>3210</code>
          <name>Probablility and Statistics</name>
          <credits>4</credits>
        </class>
        <class id="BIO1080">
          <department>BIO</department>
          <code>1080</code>
          <name>General Biology I</name>
          <credits>3</credits>
        </class>
        <class id="BIO1090">
          <department>BIO</department>
          <code>1090</code>
          <name>General Biology Laboratory I</name>
          <credits>1</credits>
        </class>
        <class id="BIO1081">
          <department>BIO</department>
          <code>1081</code>
          <name>General Biology II</name>
          <credits>3</credits>
        </class>
        <class id="BIO1091">
          <department>BIO</department>
          <code>1091</code>
          <name>General Biology Laboratory II</name>
          <credits>1</credits>
        </class>
        <class id="CHE1800">
          <department>CHE</department>
          <code>1800</code>
          <name>General Chemistry I</name>
          <credits>3</credits>
        </class>
        <class id="CHE1801">
          <department>CHE</department>
          <code>1801</code>
          <name>General Chemistry I Laboratory</name>
          <credits>1</credits>
        </class>
        <class id="CHE1810">
          <department>CHE</department>
          <code>1810</code>
          <name>General Chemistry II</name>
          <credits>3</credits>
        </class>
        <class id="CHE1811">
          <department>CHE</department>
          <code>1811</code>
          <name>General Chemistry II Laboratory</name>
          <credits>1</credits>
        </class>
        <class id="GEL1010">
          <department>GEL</department>
          <code>1010</code>
          <name>Physical Geology</name>
          <credits>4</credits>
        </class>
        <class id="MTR1400">
          <department>MTR</department>
          <code>1400</code>
          <name>Weather and Climate</name>
          <credits>3</credits>
        </class>
        <class id="MTR2020">
          <department>MTR</department>
          <code>2020</code>
          <name>Weather and Climate Lab for Scientists</name>
          <credits>1</credits>
        </class>
        <class id="PHY2311">
          <department>PHY</department>
          <code>2311</code>
          <name>General Physics I</name>
          <credits>4</credits>
        </class>
        <class id="PHY2321">
          <department>PHY</department>
          <code>2321</code>
          <name>General Physics I Laboratory</name>
          <credits>1</credits>
        </class>
        <class id="PHY2331">
          <department>PHY</department>
          <code>2331</code>
          <name>General Physics II</name>
          <credits>4</credits>
        </class>
        <class id="PHY2341">
          <department>PHY</department>
          <code>2341</code>
          <name>General Physics II Laboratory</name>
          <credits>1</credits>
        </class>
        <class id="COMM1010">
            <department>COMM</department>
            <code>1010</code>
            <name>Presentational Speaking</name>
            <credits>3</credits>
        </class>
        <class id="COMM1100">
          <department>COMM</department>
          <code>1100</code>
          <name>Fundamentals of Oral Communication</name>
          <credits>3</credits>
        </class>
        <class id="JMP2610">
          <department>JMP</department>
          <code>2610</code>
          <name>Introduction to Technical Writing</name>
          <credits>3</credits>
        </class>
        <class id="PHI3370">
          <department>PHI</department>
          <code>3370</code>
          <name>Computers, Ethics, and Society</name>
          <credits>3</credits>
        </class>
      </courses>
      <information>
        <message_name>About the Program</message_name>
        <text>The Department Computer Sciences offers coursework leading to the Bachelor of Science (B.S.) 
        degree in Computer Science. The Computer Science major provides students with broad-based preparation in 
        Computer Science with the appropriate supporting Mathematics background. Graduates in Computer Science are 
        positioned for employment in a wide variety of jobs in the computing field. The CS major also prepares 
        students for continued study of Computer Science at the graduate level. Students are encouraged to contact 
        the department for further details (303-615-0399). The Computer Science BS degree program is accredited by 
        the Computing Accreditation Commission of ABET, http://abet.org.</text>
      </information>
      <information>
        <message_name>General Studies  Additional Course Requirements</message_name>
        <text>Students must complete the required MSU Denver General
        Studies course requirements (33 credits min.). Some of the
        Science, Mathematics, or Ancillary courses required for the
        Computer Science major may partially or fully satisfy
        specific General Studies requirements.
        The Ethnic Studies  Social Justice (ESSJ) graduation
        requirement of 3 credit hours must also be satisfied. Some
        courses that satisfy the Multicultural requirement also satisfy
        a General Studies requirement.</text>
      </information>
    </degree>
    
    <?xml version="1.0" encoding="UTF-8"?>

<xsl:stylesheet version="1.0"
xmlns:xsl="http://www.w3.org/1999/XSL/Transform">

<xsl:template match="/">
  <html>
  <body>
  <h2>Classes</h2>
  <table border="1">
    <tr bgcolor="#9acd32">
      <th>Department</th>
      <th>Code</th>
      <th>Name</th>
      <th>Credits</th>
    </tr>
    <xsl:for-each select="degree/courses/class">
    <tr>
      <td><xsl:value-of select="department"/></td>
      <td><xsl:value-of select="code"/></td>
	  <td><xsl:value-of select="name"/></td>
      <td><xsl:value-of select="credits"/></td>
    </tr>
    </xsl:for-each>
  </table>
  <table border="1">
    <tr bgcolor="#9acd32">
      <th>Message Name</th>
      <th>Text</th>
    </tr>
    <xsl:for-each select="degree/information">
    <tr>
      <td><xsl:value-of select="message_name"/></td>
      <td><xsl:value-of select="text"/></td>
    </tr>
  </xsl:for-each>
  </table>
  </body>
  </html>
</xsl:template>

</xsl:stylesheet>`;

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
