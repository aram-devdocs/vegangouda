import type { Meta } from '@storybook/react';
import { App } from './app';
import { BrowserRouter } from 'react-router-dom';

const Story: Meta<typeof App> = {
  component: App,
  title: 'App',
  decorators: [
    (Story) => (
      <BrowserRouter>
        <Story />
      </BrowserRouter>
    ),
  ],
};
export default Story;

export const Primary = {
  args: {},
};
