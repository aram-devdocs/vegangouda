import type { Meta } from '@storybook/react';
import { Login } from './Login';
import { TestingWrapper } from '@vegangouda/web/utils-storybook';
const Story: Meta<typeof Login> = {
  component: Login,
  title: 'Login',
  decorators: [
    (Story) => (
      <TestingWrapper>
        <Story />
      </TestingWrapper>
    ),
  ],
};
export default Story;

export const Primary = {
  args: {},
};
