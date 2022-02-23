/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Avatar from '../Avatar';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  text: 'AB',
  component: Avatar,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    onClick: { action: 'handleClick' },
  },
} as ComponentMeta<typeof Avatar>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Avatar> = (args) => <Avatar {...args} />;

export const Large = Template.bind({});
Large.args = {
  size: 'large',
  text: 'LB',
};

export const Medium = Template.bind({});
Medium.args = {
  size: 'medium',
  text: 'MB',
};

export const Small = Template.bind({});
Small.args = {
  size: 'small',
  text: 'SB',
};
