import { Meta } from '@storybook/react';
import { MainFooter } from 'ui/MainFooter';

const meta: Meta = {
  title: 'MainFooter',
  component: MainFooter,
};

export default meta;

const Template = (args: any) => <MainFooter {...args} />;

export const Default: any = Template.bind({});

Default.args = {
  children: 'This is footer',
};
