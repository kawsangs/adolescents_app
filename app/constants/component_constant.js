import { getStyleOfDevice } from '../utils/responsive_util';

export const buttonBorderRadius = 10;
export const cardElevation = 2;
export const outlinedButtonBorderWidth = 2.2;
export const headerWithAudioMaxHeight = getStyleOfDevice(320, 240);
export const headerWithAudioMinHeight = 160;
export const headerWithAudioScrollDistance = (headerWithAudioMaxHeight - headerWithAudioMinHeight);