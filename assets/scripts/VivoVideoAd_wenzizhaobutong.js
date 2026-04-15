var n;
var i = this && this.__extends || (n = function (e, o) {
  return (n = Object.setPrototypeOf || {
    __proto__: []
  } instanceof Array && function (e, o) {
    e.__proto__ = o;
  } || function (e, o) {
    for (var t in o) {
      if (Object.prototype.hasOwnProperty.call(o, t)) {
        e[t] = o[t];
      }
    }
  })(e, o);
}, function (e, o) {
  function t() {
    this.constructor = e;
  }
  n(e, o);
  e.prototype = o === null ? Object.create(o) : (t.prototype = o.prototype, new t());
});
var r = this && this.__decorate || function (e, o, t, n) {
  var i;
  var r = arguments.length;
  var a = r < 3 ? o : n === null ? n = Object.getOwnPropertyDescriptor(o, t) : n;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function") {
    a = Reflect.decorate(e, o, t, n);
  } else {
    for (var c = e.length - 1; c >= 0; c--) {
      if (i = e[c]) {
        a = (r < 3 ? i(a) : r > 3 ? i(o, t, a) : i(o, t)) || a;
      }
    }
  }
  if (r > 3 && a) {
    Object.defineProperty(o, t, a);
  }
  return a;
};
Object.defineProperty(exports, "__esModule", {
  value: true
});
var a = cc._decorator;
var c = a.ccclass;
a.property;
var l = function (e) {
  function o() {
    return e !== null && e.apply(this, arguments) || this;
  }
  i(o, e);
  o.prototype.onLoad = function () {
    window.vivoVideoAd_wenzizhaobutong = this;
  };
  o.prototype.start = function () {};
  o.prototype.initRewardedAd = function (e, o) {
    var t = e;
    var n = o;
    if (window.noAdFlag) {
      t();
    } else {
      try {
        if (window.miniPlatForm == "oppoApp" || window.miniPlatForm == "vivoApp") {
          return void window.fmJava.showRewardedVideoAd(function () {
            window.adUtil.toast("恭喜获得奖励");
            t();
          }, function () {
            window.adUtil.toast("激励视频广告加载失败，无法获得奖励");
            n();
          });
        }
        var i = function (e) {
          console.log("视频广告关闭回调");
          if (e && e.isEnded || window.miniPlatForm == "ks" && e == null) {
            console.log("正常播放结束，可以下发游戏奖励");
            window.adUtil.toast("恭喜获得奖励");
            t();
          } else {
            window.adUtil.toast("播放中途退出，不下发游戏奖励");
            n();
          }
          if (window.miniPlatForm == "oppo" || window.miniPlatForm == "tt" || window.miniPlatForm == "ks") {
            window.videoRewardedAd.destroy();
          } else if (window.miniPlatForm == "qq") {
            if (cc.director.isPaused()) {
              cc.director.resume();
            }
            window.videoRewardedAd.offClose(i);
          }
        };
        if (window.miniPlatForm == "yoomi") {
          window.videoRewardedAd.offClose();
          window.videoRewardedAd.onClose(i);
          return void window.videoRewardedAd.show().then(function () {
            console.log("激励视频广告展示完成");
          }).catch(function () {
            window.videoRewardedAd.load().then(function () {
              console.log("load 成功回调");
              window.videoRewardedAd.show();
            }).catch(function () {
              console.log("load 失败回调");
            });
          });
        }
        if (window.miniPlatForm == "oppo") {
          window.videoRewardedAd = qg.createRewardedVideoAd({
            adUnitId: window.adUtil.useHallData("oppoRewardedVideoAdId")
          });
        } else if (window.miniPlatForm == "tt") {
          window.videoRewardedAd = tt.createRewardedVideoAd({
            adUnitId: window.adUtil.useHallData("ttRewardedVideoAdId")
          });
        } else if (window.miniPlatForm == "ks") {
          window.videoRewardedAd = ks.createRewardedVideoAd({
            adUnitId: "2300003821_01"
          });
        } else if (window.miniPlatForm == "qq") {
          window.videoRewardedAd = qq.createRewardedVideoAd({
            adUnitId: window.adUtil.useHallData("qqRewardedVideoAdId")
          });
        } else {
          window.videoRewardedAd = qg.createRewardedVideoAd({
            posId: window.adUtil.useHallData("vivoRewardedVideoAdId")
          });
        }
        window.videoRewardedAd.onError(function (e) {
          console.log("激励视频广告加载失败", e);
          window.adUtil.toast("激励视频广告加载失败，无法获得奖励");
          if (window.miniPlatForm == "oppo" || window.miniPlatForm == "tt" || window.miniPlatForm == "ks") {
            window.videoRewardedAd.destroy();
          } else if (window.miniPlatForm == "qq") {
            window.videoRewardedAd.offClose(i);
          }
          n();
        });
        if (!(window.miniPlatForm != "vivo" && window.miniPlatForm != "oppo" && window.miniPlatForm != "tt")) {
          window.videoRewardedAd.onLoad(function (e) {
            console.log("激励视频广告加载完成-onload触发", JSON.stringify(e));
            window.videoRewardedAd.show().then(function () {
              console.log("激励视频广告展示完成");
            }).catch(function () {
              window.adUtil.toast("激励视频广告加载失败，无法获得奖励");
              if (window.miniPlatForm == "oppo" || window.miniPlatForm == "tt" || window.miniPlatForm == "ks") {
                window.videoRewardedAd.destroy();
              } else if (window.miniPlatForm == "qq") {
                window.videoRewardedAd.offClose(i);
              }
              n();
            });
          });
        }
        window.videoRewardedAd.onClose(i);
        if (window.miniPlatForm == "oppo" || window.miniPlatForm == "tt") {
          window.videoRewardedAd.load();
        } else if (window.miniPlatForm == "ks") {
          window.videoRewardedAd.show();
        } else if (window.miniPlatForm == "qq") {
          window.videoRewardedAd.load().then(function () {
            console.log("激励视频加载成功");
            window.videoRewardedAd.show().then(function () {
              if (!(window.model != 5 && window.model != 22 || cc.director.isPaused())) {
                cc.director.pause();
              }
              console.log("激励视频 广告显示成功");
            }).catch(function () {
              console.log("激励视频 广告显示失败");
            });
          }).catch(function () {
            console.log("激励视频加载失败");
          });
        }
      } catch (r) {
        window.adUtil.toast("恭喜获得奖励");
        t();
      }
    }
  };
  return r([c], o);
}(cc.Component);
exports.default = l;