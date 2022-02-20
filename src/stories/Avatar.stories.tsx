import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Button } from '../component/Button';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/Button',
  component: Button,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    onClick: { action: 'handleClick' },
  },
} as ComponentMeta<typeof Button>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Red = Template.bind({});
// // More on args: https://storybook.js.org/docs/react/writing-stories/args
Red.args = {
  backgroundColor: 'red',
  label: 'Press Me',
  size: 'md',
};

export const Yellow = Template.bind({});
// // More on args: https://storybook.js.org/docs/react/writing-stories/args
Yellow.args = {
  backgroundColor: 'limegreen',
  label: 'Press Me',
  size: 'md',
};
export const Large = Template.bind({});
Large.args = {
  size: 'lg',
  label: 'Large Button',
};

export const Small = Template.bind({});
Small.args = {
  size: 'sm',
  label: 'Small Button',
};
