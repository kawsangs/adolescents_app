import audioSources from "../constants/audio_source_constant";

const audioUtil = (() => {
  return {
    getFormattedPlaySeconds,
    getReverseSeconds,
    getAudioSourceByFilePath,
  }

  function getFormattedPlaySeconds(seconds = 0) {
    return new Date(Math.round(seconds) * 1000).toISOString().substr(14, 5);
  }

  function getReverseSeconds(playSeconds = 0, duration = 0) {
    if (playSeconds || duration) {
      const reverseSecond = duration - playSeconds;
      return getFormattedPlaySeconds(reverseSecond);
    }
    return '00:00';
  }

  function getAudioSourceByFilePath(audioPath) {
    if (!audioPath) return null;

    const directories = audioPath.split("/");
    return audioSources[directories[directories.length - 1]];
  }
})();

export default audioUtil;