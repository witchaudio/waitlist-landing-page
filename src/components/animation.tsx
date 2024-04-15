'use client'

import Lottie from 'lottie-react';
import coolAnimation from './Animation.json'; 

function AnimationComponent() {
    return (
      <div style={{ textAlign: 'center', width: '100%', paddingTop: '5px' /* Adjust padding here if needed */ }}>
        <div style={{ display: 'inline-block', width: 400, marginTop: '-20px' /* Adjust top margin to reduce space */ }}>
          <Lottie animationData={coolAnimation} style={{ width: 400, height: 200 }} />
        </div>
      </div>
    );
}
  

export default AnimationComponent;
