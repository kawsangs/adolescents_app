import {GUI_CARD, TILTED_CARD, GRID_CARD, AUDIO_CARD} from '../../constants/card_constant';
import safety from '../../assets/audios/safety_plan.mp3';
import storyLong from '../../assets/audios/your_story_long.mp3';
import storyShort from '../../assets/audios/your_story.mp3';

export default [
  {
    'uuid': 'category_01',
    'code': 'parent_01',
    'name': 'សេវាសុខភាពបន្តពូជ',
    'description': null,
    'audio_url': '',
    'image_url': '',
    'audio': safety,
    'image': require('../../assets/images/intro_1.jpg'),
    'parent_code': null,
    'order': 1,
    'display': GUI_CARD,
  },
  {
    'uuid': 'category_02',
    'code': 'parent_02',
    'name': 'ការអប់រំពីសុខភាពផ្លូវចិត្ត និងសុខភាពផ្លូវភេទ',
    'description': null,
    'audio_url': '',
    'image_url': '',
    'audio': storyLong,
    'image': require('../../assets/images/intro_1.jpg'),
    'parent_code': null,
    'order': 2,
    'display': GUI_CARD,
  },
  {
    'uuid': 'category_03',
    'code': 'parent_03',
    'name': 'ការយល់ដឹងពីយេនឌ័រ',
    'description': null,
    'audio_url': '',
    'image_url': '',
    'audio': safety,
    'image': require('../../assets/images/img_no_background.png'),
    'parent_code': null,
    'order': 3,
    'display': TILTED_CARD,
  },
  {
    'uuid': 'category_04',
    'code': 'parent_04',
    'name': 'គ្លីនិចសុខភាព និងសេវាកម្មពិនត្យ',
    'description': null,
    'audio_url': '',
    'image_url': '',
    'audio': storyLong,
    'image': require('../../assets/images/img_no_background.png'),
    'parent_code': null,
    'order': 4,
    'display': TILTED_CARD,
  },
  {
    'uuid': 'category_05',
    'code': 'parent_05',
    'name': 'សេវាគាំទ្រផ្លូវចិត្ត',
    'description': null,
    'audio_url': '',
    'image_url': '',
    'audio': storyShort,
    'image': require('../../assets/images/img_no_background.png'),
    'parent_code': null,
    'order': 5,
    'display': TILTED_CARD,
  },
  {
    'uuid': 'category_06',
    'code': 'parent_06',
    'name': 'ការកំសាន្ត (វីដេអូអប់រំ)',
    'description': null,
    'audio_url': '',
    'image_url': '',
    'audio': null,
    'image': require('../../assets/images/img_no_background.png'),
    'parent_code': null,
    'order': 6,
    'display': TILTED_CARD,
  },
  {
    'uuid': 'category_07',
    'code': 'child_01',
    'name': 'បម្រែបម្រួលរាង្គកាយនានានៅពេលពេញវ័យ',
    'description': null,
    'audio_url': '',
    'image_url': '',
    'audio': storyLong,
    'image': require('../../assets/images/img_no_background.png'),
    'parent_code': 'parent_01',
    'order': 7,
    'display': GRID_CARD,
  },
  {
    'uuid': 'category_08',
    'code': 'child_02',
    'name': 'ការមករដូវ',
    'description': null,
    'audio_url': '',
    'image_url': '',
    'audio': storyShort,
    'image': require('../../assets/images/intro_2.jpg'),
    'parent_code': 'parent_01',
    'order': 8,
    'display': GRID_CARD,
  },
  {
    'uuid': 'category_09',
    'code': 'child_03',
    'name': 'ការរួមភេទ',
    'description': null,
    'audio_url': '',
    'image_url': '',
    'audio': safety,
    'image': require('../../assets/images/intro_3.jpg'),
    'parent_code': 'parent_01',
    'order': 9,
    'display': GRID_CARD,
  },
  {
    'uuid': 'category_10',
    'code': 'child_04',
    'name': 'ការមានផ្ទៃពោះ',
    'description': null,
    'audio_url': '',
    'image_url': '',
    'audio': null,
    'image': require('../../assets/images/intro_3.jpg'),
    'parent_code': 'parent_01',
    'order': 10,
    'display': GRID_CARD,
  },
  {
    'uuid': 'category_11',
    'code': 'leaf_01',
    'name': 'បម្រែបម្រួលរាង្គកាយក្មេងប្រុស',
    'description': 'អ្នកអាចរកមេីលគ្លីនិកដែលនៅជិតលោកអ្នកជាមួយព័តិមានលំអិតអំពី សេវាកម្ម  ម៉ោងផ្តល់សេវា និងផែនទីងាយស្រួលក្នុងការរកទីតាំងគ្លីនិចនិមួយៗអ្នកអាចរកមេីលគ្លីនិកដែលនៅជិតលោកអ្នកជាមួយព័តិមានលំអិតអំពី សេវាកម្ម  ម៉ោងផ្តល់សេវា និងផែនទីងាយស្រួលក្នុងការរកទីតាំងគ្លីនិចនិមួយៗអ្នកអាចរកមេីលគ្លីនិកដែលនៅជិតលោកអ្នកជាមួយព័តិមានលំអិតអំពី សេវាកម្ម  ម៉ោងផ្តល់សេវា និងផែនទីងាយស្រួលក្នុងការរកទីតាំងគ្លីនិចនិមួយៗអ្នកអាចរកមេីលគ្លីនិកដែលនៅជិតលោកអ្នកជាមួយព័តិមានលំអិតអំពី សេវាកម្ម  ម៉ោងផ្តល់សេវា និងផែនទីងាយស្រួលក្នុងការរកទីតាំងគ្លីនិចនិមួយៗអ្នកអាចរកមេីលគ្លីនិកដែលនៅជិតលោកអ្នកជាមួយព័តិមានលំអិតអំពី សេវាកម្ម  ម៉ោងផ្តល់សេវា និងផែនទីងាយស្រួលក្នុងការរកទីតាំងគ្លីនិចនិមួយៗអ្នកអាចរកមេីលគ្លីនិកដែលនៅជិតលោកអ្នកជាមួយព័តិមានលំអិតអំពី សេវាកម្ម  ម៉ោងផ្តល់សេវា និងផែនទីងាយស្រួលក្នុងការរកទីតាំងគ្លីនិចនិមួយៗអ្នកអាចរកមេីលគ្លីនិកដែលនៅជិតលោកអ្នកជាមួយព័តិមានលំអិតអំពី សេវាកម្ម  ម៉ោងផ្តល់សេវា និងផែនទីងាយស្រួលក្នុងការរកទីតាំងគ្លីនិចនិមួយៗអ្នកអាចរកមេីលគ្លីនិកដែលនៅជិតលោកអ្នកជាមួយព័តិមានលំអិតអំពី សេវាកម្ម  ម៉ោងផ្តល់សេវា និងផែនទីងាយស្រួលក្នុងការរកទីតាំងគ្លីនិចនិមួយៗ ងាយស្រួលក្នុងការរកទីតាំងគ្លីនិចនិមួយៗអ្នកអាចរកមេីលគ្លីនិកដែលនៅជិតលោកអ្នកជាមួយព័តិមានលំអិតអំពី សេវាកម្ម  ម៉ោងផ្តល់សេវា និងផែនទីងាយស្រួលក្នុងការរកទីតាំងគ្លីនិចនិមួយៗអ្នកអាចរកមេីលគ្លីនិកដែលនៅជិតលោកអ្នកជាមួយព័តិមានលំអិតអំពី សេវាកម្ម  ម៉ោងផ្តល់សេវា និងផែនទីងាយស្រួលក្នុងការរកទីតាំងគ្លីនិចនិមួយៗ។',
    'audio_url': '',
    'image_url': '',
    'audio': storyLong,
    'image': require('../../assets/images/img_no_background.png'),
    'parent_code': 'child_01',
    'order': 11,
    'display': AUDIO_CARD,
  },
  {
    'uuid': 'category_12',
    'code': 'leaf_02',
    'name': 'បម្រែបម្រួលរាង្គកាយ ក្មេងប្រុសនៅពេលពេញវ័យ',
    'description': 'អ្នកអាចរកមេីលគ្លីនិកដែលនៅជិតលោកអ្នកជាមួយព័តិមានលំអិតអំពី សេវាកម្ម  ម៉ោងផ្តល់សេវា និងផែនទីងាយស្រួលក្នុងការរកទីតាំងគ្លីនិចនិមួយៗអ្នកអាចរកមេីលគ្លីនិកដែលនៅជិតលោកអ្នកជាមួយព័តិមានលំអិតអំពី សេវាកម្ម  ម៉ោងផ្តល់សេវា និងផែនទីងាយស្រួលក្នុងការរកទីតាំងគ្លីនិចនិមួយៗអ្នកអាចរកមេីលគ្លីនិកដែលនៅជិតលោកអ្នកជាមួយព័តិមានលំអិតអំពី សេវាកម្ម  ម៉ោងផ្តល់សេវា និងផែនទីងាយស្រួលក្នុងការរកទីតាំងគ្លីនិចនិមួយៗអ្នកអាចរកមេីលគ្លីនិកដែលនៅជិតលោកអ្នកជាមួយព័តិមានលំអិតអំពី សេវាកម្ម  ម៉ោងផ្តល់សេវា និងផែនទីងាយស្រួលក្នុងការរកទីតាំងគ្លីនិចនិមួយៗអ្នកអាចរកមេីលគ្លីនិកដែលនៅជិតលោកអ្នកជាមួយព័តិមានលំអិតអំពី សេវាកម្ម  ម៉ោងផ្តល់សេវា និងផែនទីងាយស្រួលក្នុងការរកទីតាំងគ្លីនិចនិមួយៗអ្នកអាចរកមេីលគ្លីនិកដែលនៅជិតលោកអ្នកជាមួយព័តិមានលំអិតអំពី សេវាកម្ម  ម៉ោងផ្តល់សេវា និងផែនទីងាយស្រួលក្នុងការរកទីតាំងគ្លីនិចនិមួយៗអ្នកអាចរកមេីលគ្លីនិកដែលនៅជិតលោកអ្នកជាមួយព័តិមានលំអិតអំពី សេវាកម្ម  ម៉ោងផ្តល់សេវា និងផែនទីងាយស្រួលក្នុងការរកទីតាំងគ្លីនិចនិមួយៗអ្នកអាចរកមេីលគ្លីនិកដែលនៅជិតលោកអ្នកជាមួយព័តិមានលំអិតអំពី សេវាកម្ម  ម៉ោងផ្តល់សេវា និងផែនទីងាយស្រួលក្នុងការរកទីតាំងគ្លីនិចនិមួយៗ ងាយស្រួលក្នុងការរកទីតាំងគ្លីនិចនិមួយៗអ្នកអាចរកមេីលគ្លីនិកដែលនៅជិតលោកអ្នកជាមួយព័តិមានលំអិតអំពី សេវាកម្ម  ម៉ោងផ្តល់សេវា និងផែនទីងាយស្រួលក្នុងការរកទីតាំងគ្លីនិចនិមួយៗអ្នកអាចរកមេីលគ្លីនិកដែលនៅជិតលោកអ្នកជាមួយព័តិមានលំអិតអំពី សេវាកម្ម  ម៉ោងផ្តល់សេវា និងផែនទីងាយស្រួលក្នុងការរកទីតាំងគ្លីនិចនិមួយៗ។',
    'audio_url': '',
    'image_url': '',
    'audio': storyShort,
    'image': require('../../assets/images/img_no_background.png'),
    'parent_code': 'child_01',
    'order': 12,
    'display': AUDIO_CARD,
  },
  {
    'uuid': 'category_13',
    'code': 'leaf_03',
    'name': 'បម្រែបម្រួលរាង្គកាយក្មេងប្រុស',
    'description': 'ជំងឺនានាដែលអ្នកគួរយល់ដឹងពាក់ពន្ធផ្លូវភេទ និងវិធីសាស្រ្តសម្រាប់ទប់ស្កាត់ និង បង្ការ ជាមួយមតិយោបល់នានាពីអ្នកឯកទេស',
    'audio_url': '',
    'image_url': '',
    'audio': safety,
    'image': require('../../assets/images/img_no_background.png'),
    'parent_code': 'child_01',
    'order': 13,
    'display': AUDIO_CARD,
  },
];