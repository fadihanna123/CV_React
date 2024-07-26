import { Meta } from '@storybook/react';
import MainMenu from 'ui/MainMenu';

const meta: Meta<typeof MainMenu> = {
  title: 'MainMenu',
  component: MainMenu,
};

export default meta;

const Template = (args: JSX.IntrinsicAttributes & MenuProps) => (
  <MainMenu {...args} />
);

export const Default: any = Template.bind({});

Default.args = {
  children: 'A link',
};
