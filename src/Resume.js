import { Document, Page, StyleSheet, View } from '@react-pdf/renderer';
import React from 'react';
import Experience from './Experience';
import Header from './Header';
import Technologies from './Technologies';

const styles = StyleSheet.create({
  page: {
    padding: 40
  },
  sections: {
    flexDirection: 'row',
    marginTop: 8
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
          <Experience />
          <Technologies />
        </View>
      </Page>
    </Document>
  );
}

export default Resume;
