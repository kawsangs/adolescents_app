import audioSources from '../../constants/audio_source_constant';

export default [
  {
    uuid: 'gender-1',
    icon: "gender-male",
    name: 'male',
    value: 'male',
    audio: audioSources["0.3.mp3"],
    size: 34,
    accessibility_label: 'ភេទទីតាំងទី1'
  },
  {
    uuid: 'gender-2',
    icon: "gender-female",
    name: 'female',
    value: 'female',
    audio: audioSources["0.4.mp3"],
    size: 36,
    accessibility_label: 'ភេទទីតាំងទី2'
  },
  {
    uuid: 'gender-3',
    icon: "gender-transgender",
    name: 'lgbt',
    value: 'lgbt',
    audio: audioSources["0.5.mp3"],
    size: 28,
    accessibility_label: 'ភេទទីតាំងទី3'
  },
  {
    uuid: 'gender-4',
    icon: "progress-question",
    name: 'unknown',
    value: 'unknown',
    audio: audioSources["0.6.mp3"],
    size: 28,
    accessibility_label: 'ភេទទីតាំងទី4'
  },
]