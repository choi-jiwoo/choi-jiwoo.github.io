import React from 'react';
import { Chrono } from 'react-chrono';
import events from '../asset/events.json';

function Timeline() {
  return (
    <div className='pt-10'>
      <div className='section-heading'>Timeline</div>
      <div className='pt-10' style={{ width: '100%', height: '380px'}}>
        <Chrono
          items={events}
          mode='HORIZONTAL'
          itemWidth='150'
          cardHeight='100'
          theme={{
            primary: '#ffffff',
            secondary: '#3b82f6',
          }}
        />
      </div>
    </div>
  );
}

export default Timeline;
