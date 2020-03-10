import { Document, Page, StyleSheet } from '@react-pdf/renderer';
import React from 'react';
import LeftSide from './LeftSide';
import RightSide from './RightSide';

const styles = StyleSheet.create({
  page: {
    flexDirection: 'row',
    marginTop: 12,
    padding: 40
  }
});

function Resume() {
  return (
    <Document
      author="Simon Mathewson"
      title="Simon Mathewson's Resume"
    >
      <Page
        size="A4"
        style={styles.page}
      >
        <LeftSide />
        <RightSide />
      </Page>
    </Document>
  );
}

export default Resume;
