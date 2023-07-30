import type { Meta } from '@storybook/react';
import { Register } from './Register';
import { TestingWrapper } from '@vegangouda/web/utils-storybook';
const Story: Meta<typeof Register> = {
  component: Register,
  title: 'Register',
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
