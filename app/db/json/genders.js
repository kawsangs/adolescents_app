import safetyPlan from '../../assets/audios/safety_plan.mp3';
import yourStoryLong from '../../assets/audios/your_story_long.mp3';
import yourStory from '../../assets/audios/your_story.mp3';

export default [
  {
    uuid: 'gender-1',
    icon: "gender-male",
    name_km: 'ប្រុស',
    name_en: 'male',
    value: 'male',
    audio: safetyPlan,
    size: 34
  },
  {
    uuid: 'gender-2',
    icon: "gender-female",
    name_km: 'ស្រី',
    name_en: 'female',
    value: 'female',
    audio: yourStoryLong,
    size: 36
  },
  {
    uuid: 'gender-3',
    icon: "gender-transgender",
    name_km: 'LGBT+',
    name_en: 'LGBT+',
    value: 'lgbt',
    audio: yourStory,
    size: 28
  },
  {
    uuid: 'gender-4',
    icon: "progress-question",
    name_km: 'មិនដឹង',
    name_en: 'Unknown',
    value: 'unknown',
    audio: yourStoryLong,
    size: 28
  },
]