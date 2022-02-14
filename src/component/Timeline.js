import React from 'react';
import { Chrono } from 'react-chrono';
import events from '../asset/events.json';

function Timeline() {
  return (
    <div className='pt-16'>
      <div className='font-extrabold text-4xl pb-3'>Timeline</div>
      <div style={{ width: '100%', height: '800px' }}>
        <Chrono
          items={events}
          mode='VERTICAL_ALTERNATING'
          hideControls='True'
          cardHeight='150'
          cardWidth='300'
          lineWidth='2'
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
