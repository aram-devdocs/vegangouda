/* eslint-disable */
export default {
  displayName: 'shared-data-access',
  preset: '../../../jest.preset.js',
  testEnvironment: 'node',
  transform: {
    '^.+\\.[tj]s$': ['ts-jest', { tsconfig: '<rootDir>/tsconfig.spec.json' }],
  },
  moduleFileExtensions: ['ts', 'js', 'html'],
  coverageDirectory: '../../../coverage/libs/shared/data-access',
  setupFilesAfterEnv: ['./src/lib/__tests__/mock/prisma.mock.ts'],
};
