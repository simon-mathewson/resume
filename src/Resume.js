import { Document, Page, Text } from '@react-pdf/renderer';
import React from 'react';

function Resume() {
  return (
    <Document author="Simon Mathewson">
      <Page size="A4">
        <Text>
          Section #1
        </Text>
      </Page>
    </Document>
  );
}

export default Resume;
