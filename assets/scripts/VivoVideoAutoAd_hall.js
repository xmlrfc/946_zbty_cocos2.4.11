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
    window.vivoVideoAutoAd = this;
  };
  o.prototype.start = function () {};
  o.prototype.initRewardedAd = function (e, o) {
    if (window.noAdFlag) {
      e();
    } else {
      try {
        if (window.miniPlatForm == "oppoApp" || window.miniPlatForm == "vivoApp") {
          return void window.fmJava.showRewardedVideoAd(function () {
            e();
            window.adUtil.toast("恭喜,已获得体力+5");
            window.powerControl.addPower(5);
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
            window.adUtil.toast("恭喜,已获得体力+5");
            window.powerControl.addPower(5);
          } else {
            window.adUtil.toast("播放中途退出，无法获得体力");
            o();
          }
          if (window.miniPlatForm == "oppo" || window.miniPlatForm == "tt" || window.miniPlatForm == "ks") {
            window.videoRewardedAutoAd.destroy();
          } else if (window.miniPlatForm == "qq") {
            if (cc.director.isPaused()) {
              cc.director.resume();
            }
            window.videoRewardedAutoAd.offClose(t);
          }
        };
        if (window.miniPlatForm == "oppo") {
          window.videoRewardedAutoAd = qg.createRewardedVideoAd({
            adUnitId: window.common_hall.getCommonObj("oppoRewardedVideoAdId")
          });
        } else if (window.miniPlatForm == "tt") {
          window.videoRewardedAutoAd = tt.createRewardedVideoAd({
            adUnitId: window.common_hall.getCommonObj("ttRewardedVideoAdId")
          });
        } else if (window.miniPlatForm == "ks") {
          window.videoRewardedAutoAd = ks.createRewardedVideoAd({
            adUnitId: "2300003821_01"
          });
        } else if (window.miniPlatForm == "qq") {
          window.videoRewardedAutoAd = qq.createRewardedVideoAd({
            adUnitId: window.common_hall.getCommonObj("qqRewardedVideoAdId")
          });
        } else {
          window.videoRewardedAutoAd = qg.createRewardedVideoAd({
            posId: window.common_hall.getCommonObj("vivoRewardedVideoAdId")
          });
        }
        window.videoRewardedAutoAd.onError(function (e) {
          console.log("激励视频广告加载失败", e);
          window.adUtil.toast("激励视频广告加载失败，无法获得体力");
          if (window.miniPlatForm == "oppo" || window.miniPlatForm == "tt" || window.miniPlatForm == "ks") {
            window.videoRewardedAutoAd.destroy();
          } else if (window.miniPlatForm == "qq") {
            window.videoRewardedAutoAd.offClose(t);
          }
          o();
        });
        if (!(window.miniPlatForm != "vivo" && window.miniPlatForm != "oppo" && window.miniPlatForm != "tt")) {
          window.videoRewardedAutoAd.onLoad(function (e) {
            console.log("激励视频广告加载完成-onload触发", JSON.stringify(e));
            window.videoRewardedAutoAd.show().then(function () {
              console.log("激励视频广告展示完成");
            }).catch(function () {
              window.adUtil.toast("激励视频广告加载失败，无法获得体力");
              if (window.miniPlatForm == "oppo" || window.miniPlatForm == "tt" || window.miniPlatForm == "ks") {
                window.videoRewardedAutoAd.destroy();
              } else if (window.miniPlatForm == "qq") {
                window.videoRewardedAutoAd.offClose(t);
              }
              o();
            });
          });
        }
        window.videoRewardedAutoAd.onClose(t);
        if (window.miniPlatForm == "oppo" || window.miniPlatForm == "tt") {
          window.videoRewardedAutoAd.load();
        } else if (window.miniPlatForm == "ks") {
          window.videoRewardedAutoAd.show();
        } else if (window.miniPlatForm == "qq") {
          window.videoRewardedAutoAd.load().then(function () {
            console.log("激励视频加载成功");
            window.videoRewardedAutoAd.show().then(function () {
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
      } catch (n) {
        e();
        window.adUtil.toast("恭喜,已获得体力+5");
        window.powerControl.addPower(5);
      }
    }
  };
  o.prototype.loadVideo = function () {};
  return r([c], o);
}(cc.Component);
exports.default = l;