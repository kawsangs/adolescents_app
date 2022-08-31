import { getStyleOfDevice } from '../utils/responsive_util';

export const buttonBorderRadius = 10;
export const cardElevation = 2;
export const cardBorderRadius = 10;
export const outlinedButtonBorderWidth = 2.2;
export const headerWithAudioMaxHeight = getStyleOfDevice(265, 230);
export const headerWithAudioMinHeight = 170;
export const headerWithAudioScrollDistance = (headerWithAudioMaxHeight - headerWithAudioMinHeight);
export const screenPaddingHorizontal = 16;