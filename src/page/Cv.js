import React from 'react';
import { Document, Page } from 'react-pdf';

function Cv({ cv }) {
  return (
    <div className='flex flex-col'>
      <div className='place-self-end'>
        <a href={cv} download>
          💾 Download CV
        </a>
      </div>
      <Document file={cv}>
        <Page pageNumber={1} />
      </Document>
    </div>
  );
}

export default Cv;
