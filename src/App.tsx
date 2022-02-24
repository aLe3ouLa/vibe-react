import React from 'react';
import './App.css';
import Avatar from './component/Avatar/Avatar';

import WhatsNew from './assets/icons/WhatsNew';
import Button from './component/Button/Button';
import { ButtonKind } from './component/Button/IButton';
import AlertBanner from './component/Banner/AlertBanner';

const App: React.FC = () => (
  <div className="App">
    <div>
      <Button onClick={() => {}}>Button</Button>
      <Button kind={ButtonKind.SECONDARY} onClick={() => {}}>
        Button
      </Button>
      <Button kind={ButtonKind.TERTIARY} onClick={() => {}}>
        Button
      </Button>
    </div>
    <div style={{ display: 'flex' }}>
      <Avatar type="text" size="large" text="AB" backgroundColor="aquamarine" />

      <Avatar
        type="text"
        size="large"
        text="AB"
        backgroundColor="bright_blue"
        topLeftBadgeProps={{ src: WhatsNew }}
        topRightBadgeProps={{ src: WhatsNew }}
        bottomLeftBadgeProps={{ src: WhatsNew }}
        bottomRightBadgeProps={{ src: WhatsNew }}
      />

      <Avatar type="text" size="small" text="AB" backgroundColor="lipstick" />
    </div>
    <div style={{ display: 'flex' }}>
      <Avatar
        type="icon"
        size="large"
        text="AB"
        icon={WhatsNew}
        backgroundColor="bright_green"
        disabled
      />

      <Avatar type="icon" size="medium" text="AB" backgroundColor="berry" />

      <Avatar type="icon" size="small" text="AB" backgroundColor="bubble" />
    </div>
    <div style={{ display: 'flex' }}>
      <Avatar
        type="image"
        src="https://media.nu.nl/m/m1mxngvaigrv_wd1280.jpg/cirque-du-soleil-maakt-avatar-show.jpg"
        size="large"
        text="AB"
        backgroundColor="tan"
        square
      />

      <Avatar
        type="icon"
        size="medium"
        icon={WhatsNew}
        backgroundColor="dark_orange"
        square
      />

      <Avatar
        type="icon"
        size="small"
        text="AB"
        backgroundColor="american_gray"
        square
      />
    </div>

    <div>
      <AlertBanner
        backgroundColor="primary_background_color"
        onClose={() => {}}
      >
        Alert
      </AlertBanner>
    </div>
  </div>
);

export default App;
