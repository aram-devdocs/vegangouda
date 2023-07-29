import type { Meta } from '@storybook/react';
import { App } from './app';
import { TestingDecorator } from '@vegangouda/web/utils-storybook';

const Story: Meta<typeof App> = {
  component: App,
  title: 'App',
  decorators: [TestingDecorator],
};
export default Story;

export const Primary = {
  args: {},
};
