App.info({
  name: 'Pokhara Tourism',
  description: 'An app built to promote tourism in Pokhara',
  version: '1.0'
});

App.accessRule('*');

App.icons({
  // iOS
  'iphone_2x': 'launcher/icons/iphone-app-60pt@2x.png',
  'ipad': 'launcher/icons/ipad-app-76pt@1x.png',
  'ipad_2x': 'launcher/icons/ipad-app-76pt@2x.png',

  // Android
  'android_ldpi': 'launcher/mipmap-xxhdpi/ic_launcher.png',
  'android_mdpi': 'launcher/mipmap-mdpi/ic_launcher.png',
  'android_hdpi': 'launcher/mipmap-hdpi/ic_launcher.png',
  'android_xhdpi': 'launcher/mipmap-xhdpi/ic_launcher.png',
  'android_xxhdpi': 'launcher/mipmap-xxhdpi/ic_launcher.png',
  'android_xxxhdpi': 'launcher/mipmap-xxxhdpi/ic_launcher.png'
});

App.launchScreens({
  // iOS
  'iphone_2x': 'splash/iTunesArtwork.png',
  'iphone5': 'splash/iTunesArtwork.png.png',
  'ipad_portrait': 'splash/iTunesArtwork@2x.png',
  'ipad_portrait_2x': 'splash/iTunesArtwork@2x.png.png',
  // 'ipad_landscape': 'splash/splash-1024x768.png',
  // 'ipad_landscape_2x': 'splash/splash-1024x768@2x.png',

});

App.setPreference("SplashScreenDelay", 4000);
