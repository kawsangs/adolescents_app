import audioSources from '../../constants/audio_source_constant';

export default [
  {
    uuid: 'gender-1',
    icon: "gender-male",
    name_km: 'ប្រុស',
    name_en: 'male',
    value: 'male',
    audio: audioSources["0.3.mp3"],
    size: 34,
    accessibility_label: 'ភេទទីតាំងទី1'
  },
  {
    uuid: 'gender-2',
    icon: "gender-female",
    name_km: 'ស្រី',
    name_en: 'female',
    value: 'female',
    audio: audioSources["0.4.mp3"],
    size: 36,
    accessibility_label: 'ភេទទីតាំងទី2'
  },
  {
    uuid: 'gender-3',
    icon: "gender-transgender",
    name_km: 'LGBT+',
    name_en: 'LGBT+',
    value: 'lgbt',
    audio: audioSources["0.5.mp3"],
    size: 28,
    accessibility_label: 'ភេទទីតាំងទី3'
  },
  {
    uuid: 'gender-4',
    icon: "progress-question",
    name_km: 'មិនដឹង',
    name_en: 'Unknown',
    value: 'unknown',
    audio: audioSources["0.6.mp3"],
    size: 28,
    accessibility_label: 'ភេទទីតាំងទី4'
  },
]