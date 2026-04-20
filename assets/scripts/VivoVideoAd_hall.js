const { default: Banner } = require("./Banner");

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
    window.vivoVideoAd_hall = this;
  };
  o.prototype.start = function () {};
  o.prototype.initRewardedAd = function (e, o) {
    Banner.Instance.ShowVideoAd(() => {
      e();
    }, () => {
      o();
    });
    return
    if (window.noAdFlag) {
      e();
    } else {
      try {
        if (window.miniPlatForm == "oppoApp" || window.miniPlatForm == "vivoApp") {
          return void window.fmJava.showRewardedVideoAd(function () {
            e();
          }, function () {
            window.adUtil.toast("激励视频广告加载失败，无法获得奖励");
            o();
          });
        }
        var t = function (n) {
          console.log("视频广告关闭回调");
          if (n && n.isEnded || window.miniPlatForm == "ks" && n == null) {
            console.log("正常播放结束，可以下发游戏奖励");
            e();
          } else {
            window.adUtil.toast("播放中途退出，无法获得奖励");
            o();
          }
          if (window.miniPlatForm == "oppo" || window.miniPlatForm == "tt" || window.miniPlatForm == "ks") {
            window.videoRewardedAd.destroy();
          } else if (window.miniPlatForm == "qq") {
            if (cc.director.isPaused()) {
              cc.director.resume();
            }
            window.videoRewardedAd.offClose(t);
          }
        };
        if (window.miniPlatForm == "oppo") {
          window.videoRewardedAd = qg.createRewardedVideoAd({
            adUnitId: window.common_hall.getCommonObj("oppoRewardedVideoAdId")
          });
        } else if (window.miniPlatForm == "tt") {
          window.videoRewardedAd = tt.createRewardedVideoAd({
            adUnitId: window.common_hall.getCommonObj("ttRewardedVideoAdId")
          });
        } else if (window.miniPlatForm == "ks") {
          window.videoRewardedAd = ks.createRewardedVideoAd({
            adUnitId: "2300003821_01"
          });
        } else if (window.miniPlatForm == "qq") {
          window.videoRewardedAd = qq.createRewardedVideoAd({
            adUnitId: window.common_hall.getCommonObj("qqRewardedVideoAdId")
          });
        } else {
          if (window.miniPlatForm == "huawei") {
            window.videoRewardedAd.offClose(null);
            window.videoRewardedAd.onClose(t);
            if (window.videoRewardedAdLoadSuccessFlag) {
              window.videoRewardedAd.show();
            } else {
              window.adUtil.toast("暂无广告");
            }
            window.videoRewardedAdLoadSuccessFlag = false;
            return void setTimeout(function () {
              window.videoRewardedAd.load();
            }, 500);
          }
          window.videoRewardedAd = qg.createRewardedVideoAd({
            posId: window.common_hall.getCommonObj("vivoRewardedVideoAdId")
          });
        }
        window.videoRewardedAd.onError(function (e) {
          console.log("激励视频广告加载失败", e);
          window.adUtil.toast("激励视频广告加载失败，无法获得奖励");
          if (window.miniPlatForm == "oppo" || window.miniPlatForm == "tt" || window.miniPlatForm == "ks") {
            window.videoRewardedAd.destroy();
          } else if (window.miniPlatForm == "qq") {
            window.videoRewardedAd.offClose(t);
          }
          o();
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
                window.videoRewardedAd.offClose(t);
              }
              o();
            });
          });
        }
        window.videoRewardedAd.onClose(t);
        if (window.miniPlatForm == "oppo" || window.miniPlatForm == "tt") {
          window.videoRewardedAd.load();
        } else if (window.miniPlatForm == "ks") {
          window.videoRewardedAd.show();
        } else if (window.miniPlatForm == "qq") {
          window.videoRewardedAd.load().then(function () {
            console.log("激励视频加载成功");
            window.videoRewardedAd.show().then(function () {
              if (!cc.director.isPaused()) {
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
      } catch (n) {
        e();
      }
    }
  };
  return r([c], o);
}(cc.Component);
exports.default = l;