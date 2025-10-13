import { getStyleOfDevice } from '../utils/responsive_util';

export const headerWithAudioMaxHeight = getStyleOfDevice(265, 245);
export const headerWithAudioMinHeight = 170;
export const headerWithAudioScrollDistance = (headerWithAudioMaxHeight - headerWithAudioMinHeight);