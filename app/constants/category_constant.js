import imageSources from './image_source_constant';
import audioSources from './audio_source_constant';
import {TILTED_CARD} from './card_constant';

export const offlineHomeCatgories = [
  {
    "uuid": "category_04",
    "code": "catg_lvl_1_clinic_and_examination_service",
    "name": "គ្លីនិកសុខភាព និងសេវាកម្មពិនិត្យ",
    "audio_url": audioSources['4.mp3'],
    "image_url": imageSources['clinic_service.png'],
    "parent_code": null,
    "display": TILTED_CARD,
    "level": 1
  },
  {
    "uuid": "category_05",
    "code": "catg_lvl_1_mental_support",
    "name": "សេវាគាំទ្រផ្លូវចិត្ត",
    "audio_url": audioSources['5.mp3'],
    "image_url": imageSources['mental_support.png'],
    "parent_code": null,
    "display": TILTED_CARD,
    "level": 1
  },
  {
    "uuid": "category_06",
    "code": "catg_lvl_1_entertainment",
    "name": "ការកំសាន្ត (វីដេអូអប់រំ)",
    "audio_url": audioSources['6.mp3'],
    "image_url": imageSources['entertainment.png'],
    "parent_code": null,
    "display": TILTED_CARD,
    "level": 1
  }
]