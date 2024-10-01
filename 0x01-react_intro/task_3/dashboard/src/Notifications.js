import React from 'react';
import closeIcon from './Image/close-icon.png';
import { getLatestNotification } from './utils';

function Notifications() {
  const handleButtonClick = () => {
    console.log('Close button has been clicked');
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <div style={{ border: '1px dotted red', padding: '10px', position: 'relative', width: '80%' }}>
        <p style={{ marginBottom: '10px' }}>Here is the list of notifications</p>
        <button
          style={{ position: 'absolute', right: '10px', top: '10px' }}
          aria-label="Close"
          onClick={handleButtonClick}
        >
          <img src={closeIcon} alt="close" />
        </button>
        <ul>
          <li style={{ color: 'dark blue' }}>New course available</li>
          <li style={{ color: 'red' }}>New resume available</li>
          <li>{getLatestNotification()}</li>
        </ul>
      </div>
    </div>
  );
}

export default Notifications;
