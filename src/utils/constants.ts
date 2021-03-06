import React from 'react';
import * as DogsJSON from './dogs.json';
import {DogsJSONItems, NotificationRef} from './types';

export const colors = {
  white: '#fffafb',
  lightGray: '#ededed',
  turquoise: '#2BD9A5',
  darkTurquoise: '#2E8A6E',
  darkGray: '#2b2c2c',
  gray: '#bbb',
  black: '#131515',
  yellow: '#F4B400',
};

export const text = {
  xs: 7,
  s: 14,
  m: 21,
  l: 28,
  xl: 35,
  xxl: 42,
};

export const shareBottomSheetRef = React.createRef<any>();
export const notificationRef: React.RefObject<NotificationRef> =
  React.createRef();

export const animationConfig = {
  duration: 200,
};

export const springConfig = {
  damping: 80,
  overshootClamping: true,
  restDisplacementThreshold: 0.1,
  restSpeedThreshold: 0.1,
  stiffness: 500,
};

export const turquoiseGradientArray = [
  colors.turquoise,
  '#2bd9a5ee',
  '#2bd9a5cc',
  '#2bd9a5aa',
];

// Errors
export enum ErrorMessages {
  Default = 'Something went wrong',
  NotSupported = 'Not supported',
  Network = 'Network error',
  SocialIsMissing = 'Needed app is not installed',
}

export const dogs: DogsJSONItems = DogsJSON;
