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
    window.vivoVideoUnlockAllLevelAd = this;
  };
  o.prototype.start = function () {};
  o.prototype.initRewardedAd = function (e) {
    var o = e;
    if (window.noAdFlag) {
      window.unlockAllUI.videoCount++;
      return void o();
    }
    try {
      if (window.miniPlatForm == "oppoApp" || window.miniPlatForm == "vivoApp") {
        return void window.fmJava.showRewardedVideoAd(function () {
          window.unlockAllUI.videoCount++;
          o();
        }, function () {
          window.adUtil.toast("激励视频广告加载失败，无法获得奖励");
        });
      }
      var t = function (e) {
        console.log("视频广告关闭回调");
        if (e && e.isEnded || window.miniPlatForm == "ks" && e == null) {
          console.log("正常播放结束，可以下发游戏奖励" + e.count);
          if (window.miniPlatForm == "tt") {
            window.vivoVideoUnlockAllLevelAd.ttMutiply(e, o);
          } else {
            window.unlockAllUI.videoCount++;
            o();
          }
        } else if (window.miniPlatForm == "tt") {
          window.vivoVideoUnlockAllLevelAd.ttMutiply(e, o);
        } else {
          window.adUtil.toast("播放中途退出，无法获得奖励");
        }
        if (window.miniPlatForm == "oppo" || window.miniPlatForm == "tt" || window.miniPlatForm == "ks") {
          window.vivoRewardedUnlockAllLevelAd.destroy();
        } else if (window.miniPlatForm == "qq") {
          window.vivoRewardedUnlockAllLevelAd.offClose(t);
        }
      };
      if (window.miniPlatForm == "oppo") {
        window.vivoRewardedUnlockAllLevelAd = qg.createRewardedVideoAd({
          adUnitId: window.common_hall.getCommonObj("oppoRewardedVideoAdId")
        });
      } else if (window.miniPlatForm == "tt") {
        window.vivoRewardedUnlockAllLevelAd = tt.createRewardedVideoAd({
          adUnitId: window.common_hall.getCommonObj("ttRewardedVideoAdId"),
          multiton: true,
          multitonRewardMsg: ["解锁全部关卡"],
          multitonRewardTimes: 2 - Number(window.unlockAllUI.watchCountNum.string),
          progressTip: true
        });
      } else if (window.miniPlatForm == "ks") {
        window.vivoRewardedUnlockAllLevelAd = ks.createRewardedVideoAd({
          adUnitId: "2300003148_01"
        });
      } else if (window.miniPlatForm == "qq") {
        window.vivoRewardedUnlockAllLevelAd = qq.createRewardedVideoAd({
          adUnitId: window.common_hall.getCommonObj("qqRewardedVideoAdId")
        });
      } else {
        window.vivoRewardedUnlockAllLevelAd = qg.createRewardedVideoAd({
          posId: window.common_hall.getCommonObj("vivoRewardedVideoAdId")
        });
      }
      window.vivoRewardedUnlockAllLevelAd.onError(function (e) {
        console.log("激励视频广告加载失败", e);
        window.adUtil.toast("激励视频广告加载失败，无法获得奖励");
        if (window.miniPlatForm == "oppo" || window.miniPlatForm == "tt" || window.miniPlatForm == "ks") {
          window.vivoRewardedUnlockAllLevelAd.destroy();
        } else if (window.miniPlatForm == "qq") {
          window.vivoRewardedUnlockAllLevelAd.offClose(t);
        }
      });
      if (!(window.miniPlatForm != "vivo" && window.miniPlatForm != "oppo" && window.miniPlatForm != "tt")) {
        window.vivoRewardedUnlockAllLevelAd.onLoad(function (e) {
          console.log("激励视频广告加载完成-onload触发", JSON.stringify(e));
          window.vivoRewardedUnlockAllLevelAd.show().then(function () {
            console.log("激励视频广告展示完成");
          }).catch(function () {
            window.adUtil.toast("激励视频广告加载失败，无法获得奖励");
            if (window.miniPlatForm == "oppo" || window.miniPlatForm == "tt" || window.miniPlatForm == "ks") {
              window.vivoRewardedUnlockAllLevelAd.destroy();
            } else if (window.miniPlatForm == "qq") {
              window.vivoRewardedUnlockAllLevelAd.offClose(t);
            }
          });
        });
      }
      window.vivoRewardedUnlockAllLevelAd.onClose(t);
      if (window.miniPlatForm == "oppo" || window.miniPlatForm == "tt") {
        window.vivoRewardedUnlockAllLevelAd.load();
      } else if (window.miniPlatForm == "ks") {
        window.vivoRewardedUnlockAllLevelAd.show();
      } else if (window.miniPlatForm == "qq") {
        window.vivoRewardedUnlockAllLevelAd.load().then(function () {
          console.log("激励视频加载成功");
          window.vivoRewardedUnlockAllLevelAd.show().then(function () {
            console.log("激励视频 广告显示成功");
          }).catch(function () {
            console.log("激励视频 广告显示失败");
          });
        }).catch(function () {
          console.log("激励视频加载失败");
        });
      }
    } catch (n) {
      window.unlockAllUI.videoCount++;
      o();
    }
  };
  o.prototype.ttMutiply = function (e, o) {
    console.log("res.count" + e.count);
    window.unlockAllUI.videoCount += e.count;
    o();
  };
  return r([c], o);
}(cc.Component);
exports.default = l;