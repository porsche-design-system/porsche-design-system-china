import React from 'react';
import { Player } from '@lottiefiles/react-lottie-player';

import '../../styles/index.scss';

export default {
  title: 'Other/LottiePlayer'
};

export const LottiePlayerStoryBook = () => {
  return (
    <div>
      <Player
        autoplay
        loop
        src="https://assets6.lottiefiles.com/packages/lf20_mdbdc5l7.json"
        style={{ height: '500px', width: '500px' }}
      ></Player>
      <Player
        autoplay
        loop
        src="https://assets8.lottiefiles.com/packages/lf20_az2y8tee.json"
        style={{ height: '500px', width: '500px' }}
      ></Player>
    </div>
  );
};
