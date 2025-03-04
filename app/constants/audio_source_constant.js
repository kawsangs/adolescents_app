const audioSources = {
  "0.1.mp3": require("../assets/audios/20221124_0.1.mp3"),
  "0.2.mp3": require("../assets/audios/20221124_0.2.mp3"),
  "0.3.mp3": require("../assets/audios/20221124_0.3.mp3"),
  "0.4.mp3": require("../assets/audios/20221124_0.4.mp3"),
  "0.5.mp3": require("../assets/audios/20221124_0.5.mp3"),
  "0.6.mp3": require("../assets/audios/20221124_0.6.mp3"),
  "0.7.mp3": require("../assets/audios/20221124_0.7.mp3"),
  "0.8.mp3": require("../assets/audios/20221124_0.8.mp3"),
  "0.10.mp3": require("../assets/audios/20221124_0.10.mp3"),
  "0.11.mp3": require("../assets/audios/20221124_0.11.mp3"),
  "0.12.mp3": require("../assets/audios/20221124_0.12.mp3"),
  "0.13.mp3": require("../assets/audios/20221124_0.13.mp3"),
  "0.14.mp3": require("../assets/audios/20221124_0.14.mp3"),
  "0.15.mp3": require("../assets/audios/20221124_0.15.mp3"),
  "0.16.mp3": require("../assets/audios/20221124_0.16.mp3"),
  "0.17.mp3": require("../assets/audios/20221124_0.17.mp3"),
  "0.18.mp3": require("../assets/audios/20221124_0.18.mp3"),
  "0.19.mp3": require("../assets/audios/20221124_0.19.mp3"),
  "0.20.mp3": require("../assets/audios/20221124_0.20.mp3"),
  "0.21.mp3": require("../assets/audios/20221124_0.21.mp3"),
  "0.22.mp3": require("../assets/audios/20221124_0.22.mp3"),
  "0.23.mp3": require("../assets/audios/20221124_0.23.mp3"),
  "0.24.mp3": require("../assets/audios/20221124_0.24.mp3"),
  "0.25.mp3": require("../assets/audios/20221124_0.25.mp3"),
  "0.26.mp3": require("../assets/audios/20221124_0.26.mp3"),
  "0.27.mp3": require("../assets/audios/20221124_0.27.mp3"),
  "0.28.mp3": require("../assets/audios/20221124_0.28.mp3"),
  "0.29.mp3": require("../assets/audios/20221124_0.29.mp3"),
  "0.30.mp3": require("../assets/audios/20221124_0.30.mp3"),
  "0.31.mp3": require("../assets/audios/20221124_0.31.mp3"),
  "0.32.mp3": require("../assets/audios/20221124_0.32.mp3"),
  "0.33.mp3": require("../assets/audios/20221124_0.33.mp3"),
  "0.34.mp3": require("../assets/audios/20221124_0.34.mp3"),
  "0.35.mp3": require("../assets/audios/20221124_0.35.mp3"),
  "0.36.mp3": require("../assets/audios/20221124_0.36.mp3"),
  "0.37.mp3": require("../assets/audios/20221124_0.37.mp3"),
  "0.38.mp3": require("../assets/audios/20221124_0.38.mp3"),
  "0.39.mp3": require("../assets/audios/20230228_0.39.mp3"),
  "0.40.mp3": require("../assets/audios/20230228_0.40.mp3"),
  "0.41.mp3": require("../assets/audios/20230228_0.41.mp3"),
  "0.42.mp3": require("../assets/audios/20230307_0.42.mp3"),
  "0.43.mp3": require("../assets/audios/20230228_0.43.mp3"),
  "0.44.mp3": require("../assets/audios/20230307_0.44.mp3"),

  // Categories
  // Home page
  "4.mp3": require("../assets/audios/20221124_4.mp3"),
  "5.mp3": require("../assets/audios/20221124_5.mp3"),
  "6.mp3": require("../assets/audios/20221124_6.mp3"),

  // សុខភាពផ្លូវភេទនិងសុខភាពបន្តពូជ
  "health.1.mp3": require("../assets/audios/20231218_health.1.mp3"),
  "1.1.mp3": require("../assets/audios/20221116_1.1.mp3"),
  "1.2.mp3": require("../assets/audios/20221116_1.2.mp3"),
  "1.3.mp3": require("../assets/audios/20221116_1.3.mp3"),
  "1.4.mp3": require("../assets/audios/20221116_1.4.mp3"),

  // old: សុខភាពបន្តពូជ => new: under សុខភាពផ្លូវភេទនិងសុខភាពបន្តពូជ
  "2.1.mp3": require("../assets/audios/20221116_2.1.mp3"),
  "2.2.mp3": require("../assets/audios/20221116_2.2.mp3"),
  "2.3.mp3": require("../assets/audios/20221116_2.3.mp3"),
  "2.4.mp3": require("../assets/audios/20221116_2.4.mp3"),
  "2.5.mp3": require("../assets/audios/20221116_2.5.mp3"),

  // យេនឌ័រនិងនិន្នាការភេទ
  "gender_3.mp3": require("../assets/audios/20231218_gender_3.mp3"),
  "3.1.mp3": require("../assets/audios/20221116_3.1.mp3"),
  "3.2.mp3": require("../assets/audios/20221116_3.2.mp3"),
  "3.3.mp3": require("../assets/audios/20221116_3.3.mp3"),
  "gender_3.4.mp3": require("../assets/audios/20231220_gender_3.4.mp3"),

  // ការបង្ការគ្រឿងញៀននិងគ្រឿងស្រវឹង
  "drug.3.mp3": require("../assets/audios/20231218_drug.3.mp3"),
  "drug.3.1.mp3": require("../assets/audios/20231218_drug.3.1.mp3"),

  // ការយល់ដឹងពីមេរោគអេដស៍
  "hiv.4.mp3": require("../assets/audios/20231218_hiv.4.mp3"),
  "hiv.4.1.mp3": require("../assets/audios/20231218_hiv.4.1.mp3"),
  "hiv.4.2.mp3": require("../assets/audios/20231218_hiv.4.2.mp3"),
  "hiv.4.3.mp3": require("../assets/audios/20231218_hiv.4.3.mp3"),
  "hiv.4.4.mp3": require("../assets/audios/20231218_hiv.4.4.mp3"),

  // ចំណាកស្រុកយុវជន
  "migrant.5.mp3": require("../assets/audios/20231218_migrant.5.mp3"),
  "migrant.5.1.mp3": require("../assets/audios/20231218_migrant.5.1.mp3"),

  "7.1.mp3": require("../assets/audios/20221104_7.1.mp3"),
  "7.2.mp3": require("../assets/audios/20221104_7.2.mp3"),
  "7.3.mp3": require("../assets/audios/20221104_7.3.mp3"),
  "7.4.mp3": require("../assets/audios/20221104_7.4.mp3"),
  "7.5.mp3": require("../assets/audios/20221104_7.5.mp3"),
  "7.6.mp3": require("../assets/audios/20221104_7.6.mp3"),
  "7.7.mp3": require("../assets/audios/20221104_7.7.mp3"),
  "7.8.mp3": require("../assets/audios/20221104_7.8.mp3"),
  "7.9.mp3": require("../assets/audios/20221104_7.9.mp3"),
  "7.10.mp3": require("../assets/audios/20221104_7.10.mp3"),
  "7.11.mp3": require("../assets/audios/20221104_7.11.mp3"),
  "7.12.mp3": require("../assets/audios/20221104_7.12.mp3"),
}

export default audioSources;