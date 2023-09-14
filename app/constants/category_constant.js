import imageSources from './image_source_constant';
import audioSources from './audio_source_constant';
import {TILTED_CARD} from './card_constant';

export const offlineHomeCatgories = [
  {
    "id": "category_04",
    "code": "catg_lvl_1_clinic_and_examination_service",
    "name": "គ្លីនិកសុខភាព និងសេវាកម្មពិនិត្យ",
    "audio": audioSources['4.mp3'],
    "image": imageSources['clinic_and_examination_service.png'],
    "parent_code": null,
    "display": TILTED_CARD,
    "level": 1
  },
  {
    "id": "category_05",
    "code": "catg_lvl_1_mental_support",
    "name": "សេវាគាំទ្រផ្លូវចិត្ត",
    "audio": audioSources['5.mp3'],
    "image": imageSources['mental_support.png'],
    "parent_code": null,
    "display": TILTED_CARD,
    "level": 1
  },
  {
    "id": "category_06",
    "code": "catg_lvl_1_entertainment",
    "name": "ការកំសាន្ត (វីដេអូអប់រំ)",
    "audio": audioSources['6.mp3'],
    "image": imageSources['entertainment.png'],
    "parent_code": null,
    "display": TILTED_CARD,
    "level": 1
  }
]