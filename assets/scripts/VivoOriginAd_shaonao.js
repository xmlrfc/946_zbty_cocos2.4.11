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
var l = a.property;
var d = function (e) {
  function o() {
    var o = e !== null && e.apply(this, arguments) || this;
    o.nodeBottom = null;
    o.spriteBottom = null;
    o.nodeMiddle = null;
    o.spriteMiddle = null;
    return o;
  }
  i(o, e);
  o.prototype.onLoad = function () {
    window.vivoOriginAdThis = this;
    if (window.customAdStart == null) {
      window.customAdStart = new Array(1000);
    }
    if (window.customAd == null) {
      window.customAd = new Array(1000);
    }
    if (window.customAdCount == null) {
      window.customAdCount = 0;
      window.customAdCountNext = 0;
    }
    if (window.customMiddleAdCount == null) {
      window.customMiddleAdCount = 1;
      window.customMiddleAdCountNext = 1;
    }
    if (window.originRes == null) {
      window.originRes = new Array(1000);
    }
    if (window.nativeCurrentAd == null) {
      window.nativeCurrentAd = new Array(1000);
    }
    if (window.nativeCurrentAdId == null) {
      window.nativeCurrentAdId = new Array(1000);
    }
    if (window.customAdClick == null) {
      window.customAdClick = new Array(1000);
    }
  };
  o.prototype.start = function () {
    window.vivoOriginAdThis = this;
  };
  o.prototype.update = function () {
    window.vivoOriginAdThis = this;
  };
  o.prototype.initRewardedAdCommon = function (e) {
    try {
      if (window.vivoOriginAdThis.nodeBottom) {
        window.vivoOriginAdThis.nodeBottom.active = false;
      }
      console.log("原生广告加载开始");
      window.customAdCount = window.customAdCountNext;
      window.customAdCount;
      window.customAdCountNext = window.customAdCount + 2;
      if (window.miniPlatForm == "oppo") {
        if (window.customAdCount > 0 && window.customAd[window.customAdCount - 2]) {
          window.customAd[window.customAdCount - 2].destroy();
          window.customAd[window.customAdCount - 2] = null;
        }
        window.customAdStart[window.customAdCount] = 0;
        window.customAd[window.customAdCount] = qg.createNativeAd({
          adUnitId: "849381"
        });
        window.customAd[window.customAdCount].onLoad(function (o) {
          window.originRes[window.customAdCount] = o;
          if (window.originRes[window.customAdCount] && window.originRes[window.customAdCount].adList) {
            window.nativeCurrentAd[window.customAdCount] = window.originRes[window.customAdCount].adList.pop();
            window.nativeCurrentAdId[window.customAdCount] = window.nativeCurrentAd[window.customAdCount].adId.toString();
          }
          window.customAd[window.customAdCount].reportAdShow({
            adId: window.nativeCurrentAdId[window.customAdCount]
          });
          cc.loader.load({
            url: window.nativeCurrentAd[window.customAdCount].icon,
            type: "png"
          }, function (e, o) {
            try {
              if (e) {
                if (window.customAdStart[window.customAdCount] > 0) {
                  return;
                }
                window.customAdStart[window.customAdCount] += 1;
                if (window.vivoOriginAdThis.nodeBottom) {
                  window.vivoOriginAdThis.nodeBottom.active = false;
                }
                return void window.vivoOriginAdThis.nextStepNoAd();
              }
              if (window.customAdStart[window.customAdCount] > 0) {
                return;
              }
              window.customAdStart[window.customAdCount] = -100;
              window.vivoOriginAdThis.spriteBottom.spriteFrame = new cc.SpriteFrame(o);
              if (window.vivoOriginAdThis.nodeBottom) {
                window.vivoOriginAdThis.nodeBottom.active = true;
              }
            } catch (t) {
              if (window.customAdStart[window.customAdCount] > 0) {
                return;
              }
              window.customAdStart[window.customAdCount] += 1;
              if (window.vivoOriginAdThis.nodeBottom) {
                window.vivoOriginAdThis.nodeBottom.active = false;
              }
              window.vivoOriginAdThis.nextStepNoAd();
            }
          });
          e();
        });
        window.customAd[window.customAdCount].onError(function () {
          if (!(window.customAdStart[window.customAdCount] > 0)) {
            window.customAdStart[window.customAdCount] += 1;
            if (window.vivoOriginAdThis.nodeBottom) {
              window.vivoOriginAdThis.nodeBottom.active = false;
            }
            window.vivoOriginAdThis.nextStepNoAd();
          }
        });
        window.customAd[window.customAdCount].load();
      } else {
        this.showAd(window.adUtil.useHallData("vivoCustomAdId"), window.customAdCount, 0.33, true, function () {
          window.vivoOriginAdThis.nextStepNoAd();
        }, function () {});
      }
    } catch (o) {
      window.vivoOriginAdThis.nextStepNoAd();
    }
  };
  o.prototype.initRewardedHomeAd = function () {
    this.initRewardedAdCommon(function () {});
  };
  o.prototype.initRewardedAd = function () {
    this.initRewardedAdCommon(function () {
      window.originAdTime = new Date().getTime();
      if (new Date().getTime() > window.setAdTime) {
        if (window.originAdShowSuccessCount) {
          window.originAdShowSuccessCount += 1;
        } else {
          window.originAdShowSuccessCount = 1;
        }
        console.log("window.originAdShowSuccessCount: " + window.originAdShowSuccessCount);
        if (window.originAdShowSuccessCount % 4 == 0) {
          window.vivoOriginAdThis.scheduleOnce(function () {
            window.vivoOriginControlThis.clickBottom();
          }, 0.5);
        }
      }
    });
  };
  o.prototype.initRewardedMiddleAd = function () {
    try {
      if (window.vivoOriginAdThis.nodeMiddle) {
        window.vivoOriginAdThis.nodeMiddle.active = false;
        window.vivoOriginAdThis.nodeMiddle.zIndex = 32000;
      }
      console.log("原生广告加载开始");
      window.customMiddleAdCount = window.customMiddleAdCountNext;
      var e = window.customMiddleAdCount;
      window.customMiddleAdCountNext = window.customMiddleAdCount + 2;
      if (window.miniPlatForm == "oppo") {
        window.customAdStart[e] = 0;
        window.customAd[e] = qg.createNativeAd({
          adUnitId: "849381"
        });
        window.customAd[e].onLoad(function (o) {
          window.originRes[e] = o;
          console.log("原生广告加载完成-onload触发", JSON.stringify(window.originRes[e]));
          if (window.originRes[e] && window.originRes[e].adList) {
            window.nativeCurrentAd[e] = window.originRes[e].adList.pop();
            window.nativeCurrentAdId[e] = window.nativeCurrentAd[e].adId.toString();
          }
          window.customAd[e].reportAdShow({
            adId: window.nativeCurrentAdId[e]
          });
          cc.loader.load({
            url: window.nativeCurrentAd[e].imgUrlList[0].toString(),
            type: "png"
          }, function (o, t) {
            try {
              if (o) {
                if (window.customAdStart[e] > 0) {
                  return;
                }
                window.customAdStart[e] += 1;
                return void window.vivoOriginAdThis.nextStepNoMiddleAd();
              }
              if (window.customAdStart[e] > 0) {
                return;
              }
              window.customAdStart[e] = -100;
              window.vivoOriginAdThis.spriteMiddle.spriteFrame = new cc.SpriteFrame(t);
              if (window.vivoOriginAdThis.nodeMiddle) {
                window.vivoOriginAdThis.nodeMiddle.active = true;
              }
            } catch (n) {
              if (window.customAdStart[e] > 0) {
                return;
              }
              window.customAdStart[e] += 1;
              if (window.vivoOriginAdThis.nodeMiddle) {
                window.vivoOriginAdThis.nodeMiddle.active = false;
              }
              window.vivoOriginAdThis.nextStepNoMiddleAd();
            }
          });
        });
        window.customAd[e].onError(function () {
          if (!(window.customAdStart[e] > 0)) {
            window.customAdStart[e] += 1;
            if (window.vivoOriginAdThis.nodeMiddle) {
              window.vivoOriginAdThis.nodeMiddle.active = false;
            }
            window.vivoOriginAdThis.nextStepNoMiddleAd();
          }
        });
        window.customAd[e].load();
        this.scheduleOnce(function () {
          try {
            if (window.customAdStart[e] > 0 || -100 == window.customAdStart[e] || -99 == window.customAdStart[e]) {
              return;
            }
            window.customAdStart[e] += 1;
            if (window.vivoOriginAdThis.nodeMiddle) {
              window.vivoOriginAdThis.nodeMiddle.active = false;
            }
            window.vivoOriginAdThis.nextStepNoMiddleAd();
          } catch (o) {}
        }, 3);
      } else {
        this.showAd(window.adUtil.useHallData("vivoCustomAdId"), e, 0.33, false, function () {
          window.vivoOriginAdThis.nextStepNoMiddleAd();
        }, function () {});
      }
    } catch (o) {
      window.vivoOriginAdThis.nextStepNoMiddleAd();
    }
  };
  o.prototype.loadOppoCustomAd = function () {
    if (window.fromBoxUIFlag && window.loadBoxUIFlag) {
      window.fromBoxUIFlag = false;
    } else {
      window.fromBoxUIFlag = false;
      window.loadBoxUIFlag = false;
      window.adUtil.closeOppoCustomAd();
      window.customMiddleAdCount = window.customMiddleAdCountNext;
      var e = window.customMiddleAdCount;
      window.customMiddleAdCountNext = window.customMiddleAdCount + 2;
      this.oppoAdCalledSource = "customAd";
      this.loadOppoAd(window.adUtil.useHallData("oppoCustomAdId"), e, 0.3, false, function () {}, function () {});
    }
  };
  o.prototype.loadOppoBannerAd = function () {
    window.adUtil.closeBannerAd();
    window.customMiddleAdCount = window.customMiddleAdCountNext;
    var e = window.customMiddleAdCount;
    window.customMiddleAdCountNext = window.customMiddleAdCount + 2;
    this.oppoAdCalledSource = "bannerAd";
    this.loadOppoAd(window.adUtil.useHallData("oppoCustomAsBannerAdId"), e, 0.8, false, function () {}, function () {});
  };
  o.prototype.loadOppoAd = function (e, o, t, n, i) {
    var r = cc.view.getFrameSize();
    new Date().getTime();
    try {
      window.customAdStart[o] = 0;
      if (qg && qg.createCustomAd) {
        window.customAd[o] = qg.createCustomAd({
          adUnitId: e,
          style: {
            top: r.height * t
          }
        });
        window.customAd[o].onError(function (e) {
          if (!(window.customAdStart[o] > 0)) {
            window.customAdStart[o] += 1;
            window.vivoOriginAdThis.showInsertAd(o, i);
            console.log("原生模板广告加载失败", e);
          }
        });
        window.customAd[o].onShow(function () {
          if (window.vivoOriginAdThis.oppoAdCalledSource == "customAd") {
            window.oppoCustomAdFlag = true;
          } else if (window.vivoOriginAdThis.oppoAdCalledSource == "bannerAd") {
            window.oppoBannerAdFlag = true;
          } else if (window.vivoOriginAdThis.oppoAdCalledSource == "customIconAd") {
            window.oppoCustomIconAdFlag = true;
          }
          if (window.originEndAdShowSuccessCount) {
            window.originEndAdShowSuccessCount += 1;
          } else {
            window.originEndAdShowSuccessCount = 1;
          }
        });
        window.customAd[o].onHide(function () {
          if (!(window.customAdStart[o] > 0)) {
            window.customAdStart[o] += 1;
            try {
              i();
              if (window.vivoOriginAdThis.oppoAdCalledSource == "customAd") {
                window.adUtil.closeOppoCustomAd();
              } else if (window.vivoOriginAdThis.oppoAdCalledSource == "bannerAd") {
                window.adUtil.closeBannerAd();
              } else if (window.vivoOriginAdThis.oppoAdCalledSource == "customIconAd") {
                window.adUtil.closeOppoCustomIconAd();
              }
            } catch (e) {}
          }
        });
      }
    } catch (a) {
      if (window.customAdStart[o] > 0) {
        return;
      }
      window.customAdStart[o] += 1;
      window.vivoOriginAdThis.showInsertAd(o, i);
    }
  };
  o.prototype.showOppoCustomAd = function () {
    try {
      var e = window.customMiddleAdCount;
      window.customAd[e].show().then(function () {
        if (!(window.customAdStart[e] > 0)) {
          window.customAdStart[e] = -100;
          console.log("原生模板广告展示完成");
        }
      }, function () {
        try {
          if (window.customAdStart[e] > 0) {
            return;
          }
          window.customAdStart[e] += 1;
        } catch (o) {}
      }).catch(function (o) {
        if (!(window.customAdStart[e] > 0)) {
          window.customAdStart[e] += 1;
          console.log("原生模板广告展示失败", JSON.stringify(o));
        }
      }).finally(function () {
        if (!(window.customAdStart[e] > 0 || -100 == window.customAdStart[e])) {
          window.customAdStart[e] += 1;
        }
      });
    } catch (o) {}
  };
  o.prototype.pop = function () {
    try {
      if (window.nativeCurrentAdId[window.customAdCount]) {
        window.customAd[window.customAdCount].reportAdClick({
          adId: window.nativeCurrentAdId[window.customAdCount]
        });
        window.customAdClick[window.customAdCount] = 1;
      }
      if (window.vivoOriginAdThis.nodeBottom) {
        window.vivoOriginAdThis.nodeBottom.active = false;
      }
    } catch (e) {}
  };
  o.prototype.popMiddle = function () {
    try {
      if (window.nativeCurrentAdId[window.customMiddleAdCount]) {
        window.customAd[window.customMiddleAdCount].reportAdClick({
          adId: window.nativeCurrentAdId[window.customMiddleAdCount]
        });
        window.customAdClick[window.customMiddleAdCount] = 1;
      }
    } catch (e) {}
  };
  o.prototype.cancel = function () {
    this.hide();
  };
  o.prototype.cancelMiddle = function () {
    this.hideMiddle();
  };
  o.prototype.hide = function () {
    if (window.customAd[window.customAdCount]) {
      window.customAd[window.customAdCount].destroy();
      window.customAd[window.customAdCount] = null;
    }
    if (window.vivoOriginAdThis.nodeBottom) {
      window.vivoOriginAdThis.nodeBottom.active = false;
    }
    this.nextStepNoAd();
  };
  o.prototype.hideMiddle = function () {
    if (window.customAd[window.customMiddleAdCount]) {
      window.customAd[window.customMiddleAdCount].destroy();
    }
    if (window.vivoOriginAdThis.nodeMiddle) {
      window.vivoOriginAdThis.nodeMiddle.active = false;
    }
    this.nextStepNoMiddleAd();
  };
  o.prototype.nextStepNoMiddleAd = function () {
    if (window.ballGameHall && window.ballGameHall.mask) {
      window.ballGameHall.mask.active = false;
    }
    if (window.BallGameScene && window.BallGameScene.mask) {
      window.BallGameScene.mask.active = false;
    }
  };
  o.prototype.nextStepNoAd = function () {
    if (window.gameover && window.gameover.mask) {
      window.gameover.mask.active = false;
    }
    if (window.home && window.home.mask) {
      window.home.mask.active = false;
    }
  };
  o.prototype.showInsertAd = function (e, o) {
    o();
  };
  o.prototype.showAd = function (e, o, t, n, i, r) {
    new Date().getTime();
    if (window.sevenDaysNoAdFlag) {
      i();
    } else {
      var a = cc.view.getFrameSize();
      try {
        window.customAdStart[o] = 0;
        if (qg && qg.createCustomAd) {
          window.customAd[o] = qg.createCustomAd({
            posId: e,
            style: {
              top: a.height * t
            }
          });
          window.customAd[o].onError(function (e) {
            if (!(window.customAdStart[o] > 0)) {
              window.customAdStart[o] += 1;
              window.vivoOriginAdThis.showInsertAd(o, i);
              console.log("原生模板广告加载失败", JSON.stringify(e));
            }
          });
          window.customAd[o].show().then(function () {
            if (!(window.customAdStart[o] > 0)) {
              window.customerAdShowTime = new Date().getTime();
              if (r) {
                r();
              }
              window.customAdStart[o] = -100;
              console.log("原生模板广告展示完成");
            }
          }, function () {
            try {
              if (window.customAdStart[o] > 0) {
                return;
              }
              window.customAdStart[o] += 1;
              window.vivoOriginAdThis.showInsertAd(o, i);
            } catch (e) {}
          }).catch(function (e) {
            if (!(window.customAdStart[o] > 0)) {
              window.customAdStart[o] += 1;
              window.vivoOriginAdThis.showInsertAd(o, i);
              console.log("原生模板广告展示失败", JSON.stringify(e));
            }
          }).finally(function () {
            if (!(window.customAdStart[o] > 0 || -100 == window.customAdStart[o])) {
              window.customAdStart[o] += 1;
              window.vivoOriginAdThis.showInsertAd(o, i);
            }
          });
          window.customAd[o].onClose(function () {
            if (!(window.customAdStart[o] > 0)) {
              window.customAdStart[o] += 1;
              try {
                i();
              } catch (e) {}
            }
          });
        }
      } catch (c) {
        if (window.customAdStart[o] > 0) {
          return;
        }
        window.customAdStart[o] += 1;
        window.vivoOriginAdThis.showInsertAd(o, i);
      }
      this.scheduleOnce(function () {
        try {
          if (window.customAdStart[o] > 0 || -100 == window.customAdStart[o] || -99 == window.customAdStart[o]) {
            return;
          }
          window.customAdStart[o] += 1;
          i();
        } catch (c) {}
      }, 3);
    }
  };
  r([l(cc.Node)], o.prototype, "nodeBottom", undefined);
  r([l(cc.Sprite)], o.prototype, "spriteBottom", undefined);
  r([l(cc.Node)], o.prototype, "nodeMiddle", undefined);
  r([l(cc.Sprite)], o.prototype, "spriteMiddle", undefined);
  return r([c], o);
}(cc.Component);
exports.default = d;