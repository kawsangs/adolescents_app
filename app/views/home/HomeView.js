import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';

import color from '../../themes/color';
import CardWithSoundWaveComponent from '../../components/shared/CardWithSoundWaveComponent';

const HomeView = () => {
  const renderCards = () => {
    const cards = [
      { title: 'បម្រែបម្រួលរាង្គកាយក្មេងប្រុសនៅពេលពេញវ័យ', description: 'ជំងឺនានាដែលអ្នកគួរយល់ដឹងពាក់ពន្ធផ្លូវភេទ និងវិធីសាស្រ្តសម្រាប់ទប់ស្កាត់ និង បង្ការ ជាមួយមតិយោបល់នានាពីអ្នកឯកទេស' },
      { title: 'បម្រែបម្រួលរាង្គកាយក្មេងប្រុសនៅពេលពេញវ័យ', description: 'ជំងឺនានាដែលអ្នកគួរយល់ដឹងពាក់ពន្ធផ្លូវភេទ និងវិធីសាស្រ្តសម្រាប់ទប់ស្កាត់ និង បង្ការ ជាមួយមតិយោបល់នានាពីអ្នកឯកទេស' },
      { title: 'បម្រែបម្រួលរាង្គកាយក្មេងប្រុសនៅពេលពេញវ័យ', description: 'ជំងឺនានាដែលអ្នកគួរយល់ដឹងពាក់ពន្ធផ្លូវភេទ និងវិធីសាស្រ្តសម្រាប់ទប់ស្កាត់ និង បង្ការ ជាមួយមតិយោបល់នានាពីអ្នកឯកទេស' },
      { title: 'បម្រែបម្រួលរាង្គកាយក្មេងប្រុសនៅពេលពេញវ័យ', description: 'ជំងឺនានាដែលអ្នកគួរយល់ដឹងពាក់ពន្ធផ្លូវភេទ និងវិធីសាស្រ្តសម្រាប់ទប់ស្កាត់ និង បង្ការ ជាមួយមតិយោបល់នានាពីអ្នកឯកទេស' },
      { title: 'បម្រែបម្រួលរាង្គកាយក្មេងប្រុសនៅពេលពេញវ័យ', description: 'ជំងឺនានាដែលអ្នកគួរយល់ដឹងពាក់ពន្ធផ្លូវភេទ និងវិធីសាស្រ្តសម្រាប់ទប់ស្កាត់ និង បង្ការ ជាមួយមតិយោបល់នានាពីអ្នកឯកទេស' },
    ]

    return <View style={{flex: 1, width: '100%', borderWidth: 1}}>
            {
              cards.map((card, index) => {
                return <CardWithSoundWaveComponent item={card} key={index} />
              })
            }
          </View>
  }

  return (
    <View style={{flex: 1, backgroundColor: color.primaryColor, alignItems: 'center'}}>
      {/* <Text>Home screen</Text> */}
      { renderCards() }
    </View>
  )
}

export default HomeView