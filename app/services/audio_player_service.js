import Sound from 'react-native-sound';

const audioPlayerService = (() => {
  return {
    togglePlay,
    stop,
  }

  function togglePlay(filename, audioPlayer, interval, callback) {
    if (!!audioPlayer) {
      if (!!interval) {
        clearInterval(interval);
        audioPlayer.pause();
        audioPlayer.getCurrentTime((seconds) => {
          callback(audioPlayer, seconds, null)
        });
      }
      else {
        audioPlayer.play();
        _countPlaySecond(audioPlayer, callback);
      }
      return;
    }

    const sound = new Sound(filename, (error) => {
      if (!!error)
        return console.log('failed to play audio = ', error);

      _countPlaySecond(sound, callback);
      sound.play()
    })
  }

  function stop(audioPlayer, interval) {
    if (!audioPlayer)
      return;

    clearInterval(interval);
    audioPlayer.stop();
  }

  // private method
  function _countPlaySecond(sound, callback) {
    const countInterval = setInterval(() => {
      if (!!sound) {
        sound.getCurrentTime((seconds) => {
          if (seconds == sound.getDuration())
            return clearInterval(countInterval);

          callback(sound, seconds, countInterval);
        });
      }
    }, 100);
  }
})();

export default audioPlayerService;