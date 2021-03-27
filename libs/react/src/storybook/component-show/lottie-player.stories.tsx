import React from 'react';
import { Player, Controls } from '@lottiefiles/react-lottie-player';

import '../../styles/index.scss';

export default {
  title: 'Component Show/LottiePlayer'
};

export const LottiePlayerStoryBook = () => {
  return (
    <div>
      <Player
        autoplay
        loop
        src="https://assets8.lottiefiles.com/packages/lf20_az2y8tee.json"
        style={{ height: '300px', width: '300px' }}
      >
        <Controls visible buttons={['play', 'repeat', 'frame', 'debug']} />
      </Player>
    </div>
  );
};
