export const animationProps = {
  smooth: {
    animation: 'smooth 1s ease-in-out',
    '@keyframes smooth': {
      '0%': {
        opacity: 0,
      },
      '100%': {
        opacity: 1,
      },
    },
  },
  fadeIn: {
    animation: 'fadeIn 1s ease-in-out',
    '@keyframes fadeIn': {
      '0%': {
        opacity: 0,
      },
      '100%': {
        opacity: 1,
      },
    },
  },
  fadeOut: {
    animation: 'fadeOut 1s ease-in-out',
    '@keyframes fadeOut': {
      '0%': {
        opacity: 1,
      },
      '100%': {
        opacity: 0,
      },
    },
  },

  slow: {
    animation: 'slow 2s ease-in-out',
    '@keyframes slow': {
      '0%': {
        opacity: 0,
      },
      '100%': {
        opacity: 1,
      },
    },
  },
  fast: {
    animation: 'fast 1s ease-in-out',
    '@keyframes fast': {
      '0%': {
        opacity: 0,
      },
      '100%': {
        opacity: 1,
      },
    },
  },

  default: {
    animation: 'default 1s ease-in-out',
    '@keyframes default': {
      '0%': {
        opacity: 0,
      },
      '100%': {
        opacity: 1,
      },
    },
  },
};

console.log('process.env.API_URL', process.env.API_URL);
console.log('process.env.REACT_APP_API_URL', process.env.REACT_APP_API_URL);
console.log('process.env.API_PORT', process.env.API_PORT);
console.log('process.env.REACT_APP_API_PORT', process.env.REACT_APP_API_PORT);
export const api_port = process.env.API_PORT || 3000;

export const baseURL = process.env.API_URL || `http://10.0.0.42:3000`; // TODO: change this to the actual api url
export const defaultTimeout = 1000;

export interface FuncProviderProps {
  children: React.ReactNode;
}
