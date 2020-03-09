import { Document, Page, StyleSheet, View } from '@react-pdf/renderer';
import React from 'react';
import Header from './Header';

const styles = StyleSheet.create({
  page: {
    padding: 40
  },
  sections: {
    flexDirection: 'row'
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
          
        </View>
      </Page>
    </Document>
  );
}

export default Resume;
