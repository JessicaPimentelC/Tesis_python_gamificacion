import React from 'react';

const ProgressBar = ({ progress }) => {
  return (
    <div style={{ width: '100%', backgroundColor: '#ccc', borderRadius: '10px' }}>
      <div style={{
        width: `${progress}%`,
        backgroundColor: progress === 100 ? 'green' : 'red',
        height: '10px',
        borderRadius: '10px'
      }}></div>
    </div>
  );
};

export default ProgressBar;
