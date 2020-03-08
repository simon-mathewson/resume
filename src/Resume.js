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
    color: '#222',
    fontFamily: 'Roboto',
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
        <Header />
      </Page>
    </Document>
  );
}

export default Resume;
