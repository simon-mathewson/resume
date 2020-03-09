import { Document, Page, StyleSheet, View } from '@react-pdf/renderer';
import React from 'react';
import Header from './Header';
import Experience from './Experience';
import Education from './Education';
import Technologies from './Technologies';

const styles = StyleSheet.create({
  page: {
    padding: 40
  },
  sections: {
    flexDirection: 'row'
  },
  sectionsRight: {
    width: '33%'
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
          <View style={styles.sectionsRight}>
            <Education />
            <Technologies />
          </View>
        </View>
      </Page>
    </Document>
  );
}

export default Resume;
