import React from 'react';

const ProgressBar = ({  }) => {
  return (
    <div style={{ width: '100%', backgroundColor: 'white' }}>
        <div style={{
            width: 30,
            backgroundColor: 'green',
            height: '24px',
            transition: 'width 0.5s ease-in-out'
        }}>
        </div>
    </div>
);
}
export default ProgressBar;
