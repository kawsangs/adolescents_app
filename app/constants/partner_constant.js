import { widthPercentageToDP as wp } from 'react-native-responsive-screen';

export const initiators = [
  {
    logo: require("../assets/images/NYDC_logo.png"),
    url: "https://m.facebook.com/nydc.gov.kh/",
    style: { width: wp("30%"), height: wp("30%"), marginRight: 16 }
  },
  {
    logo: require("../assets/images/MoEYS_cambodia_logo.png"),
    url: "http://moeys.gov.kh",
    style: { width: wp("30%"), height: wp("30%") }
  }
];

export const funders = [
  {
    logo: require("../assets/images/UNFPA_logo.png"),
    url: "https://cambodia.unfpa.org/en",
    style: { width: wp("30%"), height: wp("30%"), marginRight: 30, marginTop: -20 }
  },
  {
    logo: require("../assets/images/Japanese_logo.jpg"),
    url: null,
    style: { width: wp("31%"), height: wp("31%"), marginTop: -20 }
  }
]

export const implementors = [
  {
    logo: require("../assets/images/child_helpline_logo.png"),
    url: "https://www.childhelpline.org.kh/",
    style: { width: wp("45%"), height: 120, marginRight: 30, marginTop: -26 }
  },
  {
    logo: require("../assets/images/kawsang_logo.png"),
    url: "https://www.kawsang.com/",
    style: { width: wp("40"), height: 120, marginTop: -26 }
  }
]