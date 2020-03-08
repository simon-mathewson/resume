import { Document, Font, Page, StyleSheet } from '@react-pdf/renderer';
import React from 'react';
import Header from './Header';

Font.register({
  family: 'Lexend Deca',
  src: 'http://localhost:3000/lexend-deca-regular.ttf'
});

Font.register({
  family: 'Roboto',
  fonts: [
    {src: 'http://localhost:3000/roboto-regular.ttf'},
    {
      src: 'http://localhost:3000/roboto-medium.ttf',
      fontWeight: 500
    }
  ]
});

const styles = StyleSheet.create({
  page: {
    fontFamily: 'Roboto',
    padding: 48
  }
});

function Resume() {
  return (
    <Document author="Simon Mathewson">
      <Page
        size="A4"
        style={styles.page}
      >
        <Header />
      </Page>
    </Document>
  );
}

export default Resume;
