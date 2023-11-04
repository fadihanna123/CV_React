import { Meta } from '@storybook/react';
import { MainFooter } from 'ui';

const meta: Meta<typeof MainFooter> = {
  title: 'MainFooter',
  component: MainFooter,
};

export default meta;

const Template = (args: JSX.IntrinsicAttributes & MainFooterProps) => (
  <MainFooter {...args} />
);

export const Default: any = Template.bind({});

Default.args = {
  children: 'This is footer',
};
