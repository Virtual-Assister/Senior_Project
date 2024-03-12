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
    <xsl:for-each select="degree/class">
    <tr>
      <td><xsl:value-of select="department"/></td>
      <td><xsl:value-of select="code"/></td>
	  <td><xsl:value-of select="name"/></td>
      <td><xsl:value-of select="credits"/></td>
    </tr>
    </xsl:for-each>
  </table>
  </body>
  </html>
</xsl:template>

</xsl:stylesheet>