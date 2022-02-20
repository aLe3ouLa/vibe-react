import React from 'react';
import './App.css';
import Avatar from './component/Avatar';
import {
  AvatarTypes,
  AvatarSizes,
  AvatarColors,
} from './component/Avatar/IAvatar';

import WhatsNew from './assets/icons/WhatsNew.svg';

const App: React.FC = () => (
  <div className="App">
    Hello
    <div style={{ display: 'flex' }}>
      <Avatar
        type={AvatarTypes.TEXT}
        size={AvatarSizes.LARGE}
        text="AB"
        color={AvatarColors.AQUAMARINE}
      />

      <Avatar
        type={AvatarTypes.TEXT}
        size={AvatarSizes.MEDIUM}
        text="AB"
        color={AvatarColors.BRIGHT_BLUE}
      />

      <Avatar
        type={AvatarTypes.TEXT}
        size={AvatarSizes.SMALL}
        text="AB"
        color={AvatarColors.LIPSTICK}
      />
    </div>
    <div style={{ display: 'flex' }}>
      <Avatar
        type={AvatarTypes.ICON}
        size={AvatarSizes.LARGE}
        text="AB"
        icon={WhatsNew}
        color={AvatarColors.AQUAMARINE}
        disabled
      />

      <Avatar
        type={AvatarTypes.ICON}
        size={AvatarSizes.MEDIUM}
        text="AB"
        color={AvatarColors.BRIGHT_BLUE}
      />

      <Avatar
        type={AvatarTypes.ICON}
        size={AvatarSizes.SMALL}
        text="AB"
        color={AvatarColors.LIPSTICK}
      />
    </div>
    <div style={{ display: 'flex' }}>
      <Avatar
        type={AvatarTypes.ICON}
        size={AvatarSizes.LARGE}
        text="AB"
        color={AvatarColors.AQUAMARINE}
        square
      />

      <Avatar
        type={AvatarTypes.ICON}
        size={AvatarSizes.MEDIUM}
        text="AB"
        color={AvatarColors.BRIGHT_BLUE}
        square
      />

      <Avatar
        type={AvatarTypes.ICON}
        size={AvatarSizes.SMALL}
        text="AB"
        color={AvatarColors.LIPSTICK}
        square
      />
    </div>
  </div>
);

export default App;
