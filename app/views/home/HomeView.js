import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';

import color from '../../themes/color';
// import CardWithSoundWaveComponent from '../../components/shared/CardWithSoundWaveComponent';
import CardWithSoundWaveListComponent from '../../components/shared/CardWithSoundWaveListComponent';

import saftyPlan from '../../assets/audios/safety_plan.mp3';
import yourStory from '../../assets/audios/your_story.mp3';
import yourStoryLong from '../../assets/audios/your_story_long.mp3';

const HomeView = () => {
  const renderCards = () => {
    const items = [
      { id: 1, title: 'បម្រែបម្រួលរាង្គកាយក្មេងប្រុសនៅពេលពេញវ័យ', description: 'ជំងឺនានាដែលអ្នកគួរយល់ដឹងពាក់ពន្ធផ្លូវភេទ និងវិធីសាស្រ្តសម្រាប់ទប់ស្កាត់ និង បង្ការ ជាមួយមតិយោបល់នានាពីអ្នកឯកទេស', audio: saftyPlan, duration: 14 },
      { id: 2, title: 'បម្រែបម្រួលរាង្គកាយក្មេងប្រុសនៅពេលពេញវ័យ', description: 'ជំងឺនានាដែលអ្នកគួរយល់ដឹងពាក់ពន្ធផ្លូវភេទ និងវិធីសាស្រ្តសម្រាប់ទប់ស្កាត់ និង បង្ការ ជាមួយមតិយោបល់នានាពីអ្នកឯកទេស', audio: yourStory, duration: 5 },
      { id: 3, title: 'បម្រែបម្រួលរាង្គកាយក្មេងប្រុសនៅពេលពេញវ័យ', description: 'ជំងឺនានាដែលអ្នកគួរយល់ដឹងពាក់ពន្ធផ្លូវភេទ និងវិធីសាស្រ្តសម្រាប់ទប់ស្កាត់ និង បង្ការ ជាមួយមតិយោបល់នានាពីអ្នកឯកទេស', audio: yourStoryLong, duration: 60 },
      { id: 4, title: 'បម្រែបម្រួលរាង្គកាយក្មេងប្រុសនៅពេលពេញវ័យ', description: 'ជំងឺនានាដែលអ្នកគួរយល់ដឹងពាក់ពន្ធផ្លូវភេទ និងវិធីសាស្រ្តសម្រាប់ទប់ស្កាត់ និង បង្ការ ជាមួយមតិយោបល់នានាពីអ្នកឯកទេស', audio: null, duration: 0 },
      { id: 5, title: 'បម្រែបម្រួលរាង្គកាយក្មេងប្រុសនៅពេលពេញវ័យ', description: 'ជំងឺនានាដែលអ្នកគួរយល់ដឹងពាក់ពន្ធផ្លូវភេទ និងវិធីសាស្រ្តសម្រាប់ទប់ស្កាត់ និង បង្ការ ជាមួយមតិយោបល់នានាពីអ្នកឯកទេស', audio: null, duration: 0 },
    ]

    return <CardWithSoundWaveListComponent items={items} />
  }

  return (
    <View style={{flex: 1, backgroundColor: color.primaryColor}}>
      {/* <Text>Home screen</Text> */}
      { renderCards() }
    </View>
  )
}

export default HomeView