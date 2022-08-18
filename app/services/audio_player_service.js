import Sound from 'react-native-sound';

const audioPlayerService = (() => {
  return {
    play,
    playPause,
    stop,
    seekTo,
  }

  function play(filename, callback) {
    const sound = new Sound(filename, (error) => {
      if (!!error)
        return console.log('failed to play audio = ', error);

      _playAudio(sound, callback);
    })
  }

  function playPause(audioPlayer, countInterval, callback) {
    if (!!countInterval) {
      clearInterval(countInterval);
      audioPlayer.pause();
      audioPlayer.getCurrentTime((seconds) => {
        callback(audioPlayer, seconds, audioPlayer.getDuration(), null);
      });
      return;
    }

    _playAudio(audioPlayer, callback, countInterval);
  }

  function stop(audioPlayer, countInterval) {
    if (!audioPlayer)
      return;

    clearInterval(countInterval);
    audioPlayer.stop();
  }

  function seekTo(audioPlayer, seconds) {
    if (!!audioPlayer)
      audioPlayer.setCurrentTime(seconds);
  }

  // private method
  function _countPlaySeconds(audioPlayer, callback) {
    const countInterval = setInterval(() => {
      if (!!audioPlayer) {
        audioPlayer.getCurrentTime((seconds) => {
          if (seconds == audioPlayer.getDuration())
            return clearInterval(countInterval);

          callback(audioPlayer, seconds, audioPlayer.getDuration(), countInterval);
        });
      }
    }, 150);

    return countInterval;
  }

  function _playAudio(audioPlayer, callback, countInterval = null) {
    clearInterval(countInterval);

    const countPlaySeconds = _countPlaySeconds(audioPlayer, callback);
    audioPlayer.play((success) => {
      if (success) {
        clearInterval(countPlaySeconds);
        audioPlayer.release();
        callback(null, 0, 0, null);     // clear the audioPlayer, playSeconds, duration and countInterval
      }
      else
        console.log('playback failed due to audio decoding errors');
    });
  }
})();

export default audioPlayerService;