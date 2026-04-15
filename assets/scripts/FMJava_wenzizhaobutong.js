Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = function () {
  function e() {}
  e.initSDK = function () {
    if (cc.sys.platform == cc.sys.ANDROID && window.miniPlatForm == "vivoApp") {
      jsb.reflection.callStaticMethod("org/cocos2dx/javascript/AppActivity", "initSDK", "()V");
    }
  };
  e.showRewardedVideoAd = function (e, o) {
    var t = this;
    if (cc.sys.platform == cc.sys.ANDROID) {
      if (this.IsLookVideo) {
        return;
      }
      this.IsLookVideo = true;
      setTimeout(function () {
        t.IsLookVideo = false;
      }, 3000);
      this.onClose = e;
      this.onFailed = o;
      console.log("播放激励视频");
      jsb.reflection.callStaticMethod("org/cocos2dx/javascript/AppActivity", "showRewardedVideoAd", "()V");
    } else {
      e(true);
    }
  };
  e.show_FullScreenVideo = function (e, o) {
    this.onClose = e;
    this.onFailed = o;
    console.log("播放激励视频");
    jsb.reflection.callStaticMethod("org/cocos2dx/javascript/AppActivity", "show_FullScreenVideo", "()V");
  };
  e.listener_Video_finish = function () {
    console.log(" 回调  激励视频播放成功");
    if (this.onClose) {
      this.onClose(true);
    }
  };
  e.listener_Video_Error = function () {
    console.log(" 回调  激励视频播放错误");
    if (this.onFailed) {
      this.onFailed();
    }
  };
  e.listener_Video_Close = function () {
    console.log(" 回调  视频播放关闭");
    if (this.onClose) {
      this.onClose(false);
    }
  };
  e.showSplashAd = function () {
    if (cc.sys.platform == cc.sys.ANDROID) {
      jsb.reflection.callStaticMethod("org/cocos2dx/javascript/AppActivity", "showSplashAd", "()V");
    }
  };
  e.ShowBannerAd = function () {
    if (cc.sys.platform == cc.sys.ANDROID) {
      jsb.reflection.callStaticMethod("org/cocos2dx/javascript/AppActivity", "ShowBannerAd", "()V");
    }
  };
  e.HideBannerAd = function () {
    if (cc.sys.platform == cc.sys.ANDROID) {
      jsb.reflection.callStaticMethod("org/cocos2dx/javascript/AppActivity", "HideBannerAd", "()V");
    }
  };
  e.Native_Interstitial_Ad = function () {
    if (cc.sys.platform == cc.sys.ANDROID) {
      jsb.reflection.callStaticMethod("org/cocos2dx/javascript/AppActivity", "Native_Interstitial_Ad", "()V");
    }
  };
  e.Interstitial_Image_Ad = function () {
    if (cc.sys.platform == cc.sys.ANDROID) {
      jsb.reflection.callStaticMethod("org/cocos2dx/javascript/AppActivity", "Interstitial_Image_Ad", "()V");
    }
  };
  e.Interstitial_Video_Ad = function () {
    if (cc.sys.platform == cc.sys.ANDROID) {
      jsb.reflection.callStaticMethod("org/cocos2dx/javascript/AppActivity", "Interstitial_Video_Ad", "()V");
    }
  };
  e.onClose = null;
  e.onFailed = null;
  e.InterstitialAdNowTime = 0;
  e.InterstitialAdstopTime = 0;
  e.IsLookVideo = false;
  return e;
}();
exports.default = n;