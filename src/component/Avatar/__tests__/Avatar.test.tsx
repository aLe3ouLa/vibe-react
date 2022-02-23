import React from 'react';
import { render } from '@testing-library/react';
import Avatar from '../Avatar';
import WhatsNew from '../../../assets/icons/WhatsNew';

const IMG_SRC = '';

describe('Avatar renders correctly', () => {
  it('renders correctly with empty props', () => {
    const tree = render(<Avatar />);
    expect(tree).toMatchSnapshot();
  });

  it('renders correctly with image and text', () => {
    const tree = render(<Avatar src={IMG_SRC} text="Name" />);
    expect(tree).toMatchSnapshot();
  });

  it('renders correctly with image', () => {
    const tree = render(<Avatar src={IMG_SRC} />);
    expect(tree).toMatchSnapshot();
  });

  it('renders correctly with not valid image', () => {
    const tree = render(<Avatar src="not valid src" />);
    expect(tree).toMatchSnapshot();
  });

  it('renders correctly with text', () => {
    const tree = render(<Avatar text="Name" />);
    expect(tree).toMatchSnapshot();
  });

  it('renders correctly square avatar', () => {
    const tree = render(<Avatar square />);
    expect(tree).toMatchSnapshot();
  });

  it('renders correctly an icon', () => {
    const tree = render(<Avatar icon={WhatsNew} />);
    expect(tree).toMatchSnapshot();
  });

  it('renders correctly with badges', () => {
    const tree = render(
      <Avatar
        topRightBadgeProps={{ src: WhatsNew }}
        topLeftBadgeProps={{ src: WhatsNew }}
        bottomRightBadgeProps={{ src: WhatsNew }}
        bottomLeftBadgeProps={{ src: WhatsNew }}
      />,
    );
    expect(tree).toMatchSnapshot();
  });

  it('renders correctly accessibility props', () => {
    const tree = render(<Avatar tabIndex={-1} ariaHidden />);
    expect(tree).toMatchSnapshot();
  });
});
