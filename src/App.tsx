import React from 'react';
import './App.css';
import Avatar from './component/Avatar';
import {
  AvatarTypes,
  AvatarSizes,
  AvatarColors,
} from './component/Avatar/IAvatar';

import WhatsNew from './assets/icons/WhatsNew';

// const AvatarSchema = {
//   user1: {
//     initials: 'AB',
//     type: 'TEXT',
//     color: 'AQUAMARINE',
//     size: 'LARGE',
//   },
//   user2: {
//     initials: 'AB',
//     type: 'TEXT',
//     color: 'BRIGHT_BLUE',
//     size: 'MEDIUM',
//   },
//   user3: {
//     initials: 'AB',
//     type: 'TEXT',
//     color: 'LIPSTICK',
//     size: 'SMALL',
//   },
// };

const App: React.FC = () => (
  <div className="App">
    Hello
    <div style={{ display: 'flex' }}>
      <Avatar
        type={AvatarTypes.TEXT}
        size={AvatarSizes.LARGE}
        text="AB"
        backgroundColor={AvatarColors.AQUAMARINE}
      />

      <Avatar
        type={AvatarTypes.TEXT}
        size={AvatarSizes.MEDIUM}
        text="AB"
        backgroundColor={AvatarColors.BRIGHT_BLUE}
      />

      <Avatar
        type={AvatarTypes.TEXT}
        size={AvatarSizes.SMALL}
        text="AB"
        backgroundColor={AvatarColors.LIPSTICK}
      />
    </div>
    <div style={{ display: 'flex' }}>
      <Avatar
        type={AvatarTypes.ICON}
        size={AvatarSizes.LARGE}
        text="AB"
        icon={WhatsNew}
        backgroundColor={AvatarColors.AQUAMARINE}
        disabled
      />

      <Avatar
        type={AvatarTypes.ICON}
        size={AvatarSizes.MEDIUM}
        text="AB"
        backgroundColor={AvatarColors.BRIGHT_BLUE}
      />

      <Avatar
        type={AvatarTypes.ICON}
        size={AvatarSizes.SMALL}
        text="AB"
        backgroundColor={AvatarColors.LIPSTICK}
      />
    </div>
    <div style={{ display: 'flex' }}>
      <Avatar
        type={AvatarTypes.IMAGE}
        src="https://media.nu.nl/m/m1mxngvaigrv_wd1280.jpg/cirque-du-soleil-maakt-avatar-show.jpg"
        size={AvatarSizes.LARGE}
        text="AB"
        backgroundColor={AvatarColors.AQUAMARINE}
        square
      />

      <Avatar
        type={AvatarTypes.ICON}
        size={AvatarSizes.MEDIUM}
        text="AB"
        backgroundColor={AvatarColors.BRIGHT_BLUE}
        square
      />

      <Avatar
        type={AvatarTypes.ICON}
        size={AvatarSizes.SMALL}
        text="AB"
        backgroundColor={AvatarColors.LIPSTICK}
        square
      />
    </div>
  </div>
);

export default App;
