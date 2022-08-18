import Sound from 'react-native-sound';

const audioPlayerService = (() => {
  return {
    togglePlay,
    stop,
  }

  function togglePlay(filename, audioPlayer, countInterval, callback) {
    if (!!audioPlayer) {
      if (!!countInterval) {
        clearInterval(countInterval);
        audioPlayer.pause();
        audioPlayer.getCurrentTime((seconds) => {
          callback(audioPlayer, seconds, audioPlayer.getDuration(), null);
        });
      }
      else
        _playAudio(audioPlayer, countInterval, callback);

      return;
    }

    const sound = new Sound(filename, (error) => {
      if (!!error)
        return console.log('failed to play audio = ', error);

      _playAudio(sound, countInterval, callback);
    })
  }

  function stop(audioPlayer, countInterval) {
    if (!audioPlayer)
      return;

    clearInterval(countInterval);
    audioPlayer.stop();
  }

  // private method
  function _countPlaySecond(audioPlayer, callback) {
    const countInterval = setInterval(() => {
      if (!!audioPlayer) {
        audioPlayer.getCurrentTime((seconds) => {
          if (seconds == audioPlayer.getDuration())
            return clearInterval(countInterval);

          callback(audioPlayer, seconds, audioPlayer.getDuration(), countInterval);
        });
      }
    }, 1000);
  }

  function _playAudio(audioPlayer, countInterval, callback) {
    audioPlayer.play((success) => {
      if (success) {
        clearInterval(countInterval);
        audioPlayer.release();
        callback(null, 0, 0, null);     // clear the audioPlayer, playSeconds, duration and countInterval
      }
      else
        console.log('playback failed due to audio decoding errors');
    });
    _countPlaySecond(audioPlayer, callback);
  }
})();

export default audioPlayerService;