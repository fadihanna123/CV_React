import { Meta, StoryObj } from '@storybook/react';
import { JSX } from 'react';

// Components
import MainMenu from '@ui/MainMenu';

const meta: Meta<typeof MainMenu> = {
  title: 'MainMenu',
  component: MainMenu,
};

export default meta;

const Template = (args: JSX.IntrinsicAttributes & MenuProps) => (
  <MainMenu {...args} />
);

export const Default: StoryObj<typeof MainMenu> = Template.bind({});

Default.args = {
  children: 'A link',
};
