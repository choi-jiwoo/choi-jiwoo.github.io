import React from 'react';
import { Chrono } from 'react-chrono';
import events from '../asset/events.json';

function Timeline() {
  return (
    <div className='pt-20'>
      <div className='section-heading'>Timeline</div>
      <div className='pt-4' style={{ width: '100%', height: '400px' }}>
        <Chrono
          items={events}
          mode='HORIZONTAL'
          useReadMore='True'
          cardWidth='600'
          lineWidth='3'
          theme={{
            primary: '#4d4d4d',
            secondary: '#3b82f6',
            titleColor: 'white',
          }}
        />
      </div>
    </div>
  );
}

export default Timeline;
