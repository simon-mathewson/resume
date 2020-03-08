import { PDFViewer } from '@react-pdf/renderer';
import React, { Fragment } from 'react';
import Resume from './Resume';

function App() {
  return (
    <Fragment>
      <PDFViewer
        style={{
          border: 'none',
          display: 'block',
          height: '100vh',
          width: '100%'
        }}>
        <Resume />
      </PDFViewer>
    </Fragment>
  );
}

export default App;
