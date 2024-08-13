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

export const api_port = process.env.API_PORT || 3000;
export const baseURL = process.env.API_URL || `http://api:${api_port}`;
export const defaultTimeout = 1000;

export interface FuncProviderProps {
  children: React.ReactNode;
}
