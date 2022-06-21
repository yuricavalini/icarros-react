import React from 'react';

import Button from './index';

export default {
  title: 'Components/Button',
  component: Button,
  argTypes: { onClick: { action: 'clicked' } },
  // parameters: {
  //   actions: {
  //     handles: ['click'],
  //   },
  // },
};

// export const Primary = () => <Button>Button</Button>;
const Template = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  label: 'Button',
  action: () => {},
  type: 'success',
  isDisable: false,
  onClick: undefined,
};
