import { Meta } from '@storybook/react';
import { MainHeader } from 'ui/MainHeader';

const meta: Meta = {
  title: 'MainHeader',
  component: MainHeader,
};

export default meta;

const Template = (args: any) => <MainHeader {...args} />;

export const Default: any = Template.bind({});

Default.args = {
  children: 'This is header',
};
