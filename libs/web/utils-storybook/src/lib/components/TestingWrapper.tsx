import React from 'react';
import { BrowserRouter } from 'react-router-dom';

export const TestingWrapper = ({ children }: { children: React.ReactNode }) => {
  return <BrowserRouter>{children}</BrowserRouter>;
};

export const TestingDecorator = (Story: any) => (
  <TestingWrapper>
    <Story />
  </TestingWrapper>
);
