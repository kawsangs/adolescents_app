# Adolescents app
Adolescents app (Youth Health) is designed to enable children, adolescents, and youth to make better choices and exercise their rights. The application interface and content are designed for novice and inclusive users by using visual aids such as audio, animation, videos, and role plays for their future goals.

## Getting Start

### Prerequisites

- Make sure your environment is set up to run React Native applications. Follow the [React Native](https://reactnative.dev/docs/environment-setup?guide=native) instructions for getting started.
- React Native 0.70.3
- Node version 18.12.1
- Apps using Realm 11.2.0

#### Run the application
**1.** Go to the project directory
```
$cd adolescents_app
```
**2.** Install dependencies by running the below command
```
$npm install
```
**3.** In "environment.js" in the "app/config" directory, update the API URL and credentials accordingly.


**4.** Start the Metro, run the below command inside your React Native project directory
```
npm start
```

**5.** Open a new tab of your terminal to run the on iOS or Android
#### For Android
- To run the application on Android
```
$npm run android
```

#### For iOS
- Go to the 'ios' directory then run below command
```
$pod install
```
**Note:** If it gets an error when running pod install try removing the file "Podfile.lock" in the ios folder then run pod install again.

- To run the application on iOS
```
$npm run ios
```

#### Build for Release
- If no existed keystore, you can create a new one, or use the exsited keystore and follow
[Build for release](https://reactnative.dev/docs/signed-apk-android)