import { Meta, StoryObj } from '@storybook/react';
import { JSX } from 'react';

// Components
import MainFooter from '@ui/MainFooter';

const meta: Meta<typeof MainFooter> = {
  title: 'MainFooter',
  component: MainFooter,
};

export default meta;

const Template = (args: JSX.IntrinsicAttributes & MainFooterProps) => (
  <MainFooter {...args} />
);

export const Default: StoryObj<typeof MainFooter> = Template.bind({});

Default.args = {
  children: 'This is footer',
};
