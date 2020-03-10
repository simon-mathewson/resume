import { Document, Page, StyleSheet, View } from '@react-pdf/renderer';
import React from 'react';
import LeftSide from './LeftSide';
import Header from './Header';
import RightSide from './RightSide';

const styles = StyleSheet.create({
  page: {
    padding: 40
  },
  sections: {
    flexDirection: 'row',
    marginTop: 12
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
        <Header />
        <View style={styles.sections}>
          <LeftSide />
          <RightSide />
        </View>
      </Page>
    </Document>
  );
}

export default Resume;
