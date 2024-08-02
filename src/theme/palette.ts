import darkBackgroundImgUrl from '../assets/bg-dark.png';
import lightBackgroundImgUrl from '../assets/bg-light.png';

export interface Palette {
  background: {
    default: string;
    paper: string;
    overlayLight: string;
    overlayDark: string;
  };
  backgroundImage: string;
  text: {
    primary: string;
    secondary: string;
    tertiary: string;
    onPrimary: string;
    onOverlayLight: string;
  };
  primary: {
    main: string;
  };
  error: {
    main: string;
  };
  divider: string;
  border: string;
}

export const lightPalette: Palette = {
  background: {
    default: '#FFFFFF',
    paper: 'rgba(255, 255, 255, 1)',
    overlayLight: 'rgba(255, 255, 255, 0.2)',
    overlayDark: 'rgba(255, 255, 255, 0.4)',
  },
  backgroundImage: `url(${lightBackgroundImgUrl})`,
  text: {
    primary: 'rgba(0, 0, 0, 1)',
    secondary: 'rgba(102, 102, 102, 1)',
    tertiary: 'rgba(0, 0, 0, 0.4)',
    onPrimary: '#FFFFFF',
    onOverlayLight: '#6C40B4',
  },
  primary: {
    main: '#6C40B4',
  },
  error: {
    main: '#FFCDD2',
  },
  divider: '#FFFFFF',
  border: 'rgba(255, 255, 255, 0.5)',
};

export const darkPalette: Palette = {
  background: {
    default: '#3B2D6B',
    paper: 'rgba(255, 255, 255, 0.5)',
    overlayLight: 'rgba(26, 26, 26, 0.3)',
    overlayDark: 'rgba(26, 26, 26, 0.5)',
  },
  backgroundImage: `url(${darkBackgroundImgUrl})`,
  text: {
    primary: 'rgba(255, 255, 255, 1)',
    secondary: 'rgba(255, 255, 255, 0.5)',
    tertiary: 'rgba(255, 255, 255, 0.4)',
    onPrimary: '#FFFFFF',
    onOverlayLight: '#FFFFFF',
  },
  primary: {
    main: 'rgba(40, 18, 77, 1)',
  },
  error: {
    main: '#FFCDD2',
  },
  divider: '#9591A0',
  border: 'rgba(26, 26, 26, 0.3)',
};
