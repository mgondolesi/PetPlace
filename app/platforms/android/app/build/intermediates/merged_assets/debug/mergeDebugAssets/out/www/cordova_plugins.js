cordova.define('cordova/plugin_list', function(require, exports, module) {
  module.exports = [
    {
      "id": "cordova-plugin-device.device",
      "file": "plugins/cordova-plugin-device/www/device.js",
      "pluginId": "cordova-plugin-device",
      "clobbers": [
        "device"
      ]
    },
    {
      "id": "cordova-plugin-ionic-keyboard.keyboard",
      "file": "plugins/cordova-plugin-ionic-keyboard/www/android/keyboard.js",
      "pluginId": "cordova-plugin-ionic-keyboard",
      "clobbers": [
        "window.Keyboard"
      ]
    },
    {
      "id": "cordova-plugin-ionic-webview.IonicWebView",
      "file": "plugins/cordova-plugin-ionic-webview/src/www/util.js",
      "pluginId": "cordova-plugin-ionic-webview",
      "clobbers": [
        "Ionic.WebView"
      ]
    },
    {
      "id": "cordova-plugin-splashscreen.SplashScreen",
      "file": "plugins/cordova-plugin-splashscreen/www/splashscreen.js",
      "pluginId": "cordova-plugin-splashscreen",
      "clobbers": [
        "navigator.splashscreen"
      ]
    },
    {
      "id": "phonegap-plugin-push.PushNotification",
      "file": "plugins/phonegap-plugin-push/www/push.js",
      "pluginId": "phonegap-plugin-push",
      "clobbers": [
        "PushNotification"
      ]
    }
  ];
  module.exports.metadata = {
    "cordova-android-support-gradle-release": "3.0.0",
    "cordova-plugin-device": "2.0.2",
    "cordova-plugin-ionic-keyboard": "2.1.2",
    "cordova-plugin-ionic-webview": "2.0.2",
    "cordova-plugin-splashscreen": "5.0.2",
    "cordova-plugin-vibration": "3.1.0",
    "cordova-plugin-whitelist": "1.3.3",
    "cordova-support-google-services": "1.1.0",
    "phonegap-plugin-multidex": "1.0.0",
    "phonegap-plugin-push": "2.2.3",
    "cordova-plugin-androidx-adapter": "1.1.0"
  };
});