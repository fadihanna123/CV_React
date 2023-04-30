import { Meta } from '@storybook/react';
import { MainHeaderProps } from 'models';
import { MainHeader } from 'ui/MainHeader';

const meta: Meta<typeof MainHeader> = {
  title: 'MainHeader',
  component: MainHeader,
};

export default meta;

const Template = (args: JSX.IntrinsicAttributes & MainHeaderProps) => (
  <MainHeader {...args} />
);

export const Default: any = Template.bind({});

Default.args = {
  children: 'This is header',
};
