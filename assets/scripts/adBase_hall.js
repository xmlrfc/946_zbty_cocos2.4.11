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
var a = this && this.__awaiter || function (e, o, t, n) {
  return new (t || (t = Promise))(function (i, r) {
    function a(e) {
      try {
        l(n.next(e));
      } catch (o) {
        r(o);
      }
    }
    function c(e) {
      try {
        l(n.throw(e));
      } catch (o) {
        r(o);
      }
    }
    function l(e) {
      var o;
      if (e.done) {
        i(e.value);
      } else {
        (o = e.value, o instanceof t ? o : new t(function (e) {
          e(o);
        })).then(a, c);
      }
    }
    l((n = n.apply(e, o || [])).next());
  });
};
var c = this && this.__generator || function (e, o) {
  var t;
  var n;
  var i;
  var r;
  var a = {
    label: 0,
    sent: function () {
      if (1 & i[0]) {
        throw i[1];
      }
      return i[1];
    },
    trys: [],
    ops: []
  };
  r = {
    next: c(0),
    throw: c(1),
    return: c(2)
  };
  if (typeof Symbol == "function") {
    r[Symbol.iterator] = function () {
      return this;
    };
  }
  return r;
  function c(e) {
    return function (o) {
      return l([e, o]);
    };
  }
  function l(r) {
    if (t) {
      throw new TypeError("Generator is already executing.");
    }
    for (; a;) {
      try {
        t = 1;
        if (n && (i = 2 & r[0] ? n.return : r[0] ? n.throw || ((i = n.return) && i.call(n), 0) : n.next) && !(i = i.call(n, r[1])).done) {
          return i;
        }
        n = 0;
        if (i) {
          r = [2 & r[0], i.value];
        }
        switch (r[0]) {
          case 0:
          case 1:
            i = r;
            break;
          case 4:
            a.label++;
            return {
              value: r[1],
              done: false
            };
          case 5:
            a.label++;
            n = r[1];
            r = [0];
            continue;
          case 7:
            r = a.ops.pop();
            a.trys.pop();
            continue;
          default:
            if (!(i = (i = a.trys).length > 0 && i[i.length - 1]) && (r[0] === 6 || r[0] === 2)) {
              a = 0;
              continue;
            }
            if (r[0] === 3 && (!i || r[1] > i[0] && r[1] < i[3])) {
              a.label = r[1];
              break;
            }
            if (r[0] === 6 && a.label < i[1]) {
              a.label = i[1];
              i = r;
              break;
            }
            if (i && a.label < i[2]) {
              a.label = i[2];
              a.ops.push(r);
              break;
            }
            if (i[2]) {
              a.ops.pop();
            }
            a.trys.pop();
            continue;
        }
        r = o.call(e, a);
      } catch (c) {
        r = [6, c];
        n = 0;
      } finally {
        t = i = 0;
      }
    }
    if (5 & r[0]) {
      throw r[1];
    }
    return {
      value: r[0] ? r[1] : undefined,
      done: true
    };
  }
};
Object.defineProperty(exports, "__esModule", {
  value: true
});
var l = require("./levelMessage_hall");
var d = cc._decorator;
var s = d.ccclass;
d.property;
var u = function (e) {
  function o() {
    return e !== null && e.apply(this, arguments) || this;
  }
  i(o, e);
  o.prototype.init = function () {
    window.game.loadWinFlag = false;
    window.game.loadFailFlag = false;
  };
  o.prototype.showGameAd = function () {
    if (window.miniPlatForm == "tt" || window.miniPlatForm == "ks") {
      if (!window.gameRecorderManagerStartFlag) {
        window.adUtil.startRecord();
        window.gameRecorderManagerStartTime = new Date().getTime();
      }
      window.adUtil.closeBannerAd();
      if (window.miniPlatForm == "tt") {
        window.adUtil.createInterstitialAd();
      }
    } else {
      window.adUtil.showBannerAd();
      window.adUtil.showNewNativeAd();
      window.adUtil.showGameCustomAd();
      window.adUtil.showOppoCustomIconAd();
      if (window.miniPlatForm == "oppo") {
        window.game.unschedule(window.adUtil.showBannerAd);
        window.game.schedule(window.adUtil.showBannerAd, 15);
      }
    }
  };
  o.prototype.showGameoverAd = function () {
    if (window.miniPlatForm == "tt" || window.miniPlatForm == "ks") {
      if (this.btnShare) {
        this.btnShare.active = true;
      }
      window.adUtil.showInterstitialAd();
      window.adUtil.stopRecord();
      window.adUtil.showBannerAd();
    } else {
      if (this.btnShare) {
        this.btnShare.active = false;
      }
      if (window.miniPlatForm != "oppo") {
        window.adUtil.closeBannerAd();
      }
      window.adUtil.showInterstitialAd();
      if (window.miniPlatForm == "vivo") {
        if (this.mask) {
          this.mask.active = true;
        }
        window.vivoOriginAdThis.initRewardedAd();
      } else if (window.miniPlatForm == "oppo") {
        window.game.unschedule(window.adUtil.showBannerAd);
        window.adUtil.closeBannerAd();
        if (new Date().getTime() > window.setAdTime) {
          window.vivoOriginAdThis.loadOppoCustomAd();
          window.vivoOriginAdThis.showOppoCustomAd();
        }
      }
    }
    if (window.gameRecorderManagerStartFlag) {
      window.adUtil.stopRecord();
    }
  };
  o.prototype.showCountdown = function (e) {
    if (e === undefined) {
      e = true;
    }
    if (!(window.game.loadWinFlag || window.game.loadFailFlag || window.game.timeStopFlag)) {
      this.time--;
      this.showTimeLabel(e);
      if (this.time <= 0) {
        window.game.loadFailFlag = true;
        this.scheduleOnce(this.showFailUI, 1);
      }
    }
  };
  o.prototype.showTimeLabel = function (e) {
    if (e === undefined) {
      e = true;
    }
    if (e) {
      var o = this.addPreZero(Math.floor(this.time / 60));
      var t = this.addPreZero(this.time % 60);
      this.timeLabel.string = o + ":" + t;
    } else {
      this.timeLabel.string = this.time + "";
    }
  };
  o.prototype.addPreZero = function (e) {
    for (var o = (e + "").length, t = "", n = 0; n < 2 - o; n++) {
      t += "0";
    }
    return t + e;
  };
  o.prototype.loadGuide = function (e) {
    cc.assetManager.loadBundle("resources", function (o, t) {
      t.load("prefab/ui/guide_common", cc.Prefab, function (o, t) {
        var n = cc.instantiate(t);
        cc.find("Canvas").addChild(n);
        n.x = e.x;
        n.y = e.y;
      });
    });
  };
  o.prototype.loadGuideMove = function (e, o, t) {
    if (t === undefined) {
      t = 0.5;
    }
    cc.assetManager.loadBundle("resources", function (n, i) {
      i.load("prefab/ui/guideMove_common", cc.Prefab, function (n, i) {
        var r = cc.instantiate(i);
        r.x = e.x;
        r.y = e.y;
        r.getComponent("guideMove_common").init(e, o, t);
        cc.find("Canvas").addChild(r);
      });
    });
  };
  o.prototype.removeGuideNode = function () {
    var e = cc.find("Canvas/guide_common");
    if (e) {
      e.destroy();
    }
  };
  o.prototype.nextLevel = function () {
    window.adUtil.closeOppoCustomAd();
    window.powerControl.decreasePower(function () {
      cc.director.loadScene("game" + window.model + "_" + window.objectName_hall);
    });
  };
  o.prototype.restart = function () {
    window.adUtil.closeOppoCustomAd();
    window.powerControl.decreasePower(function () {
      cc.director.loadScene("game" + window.model + "_" + window.objectName_hall);
    });
  };
  o.prototype.refresh = function () {
    cc.director.loadScene("game" + window.model + "_" + window.objectName_hall);
  };
  o.prototype.reviveBase = function (e) {
    window.vivoVideoAd_hall.initRewardedAd(function () {
      e();
      this.node.destroy();
    }.bind(this), function () {});
  };
  o.prototype.adGetEnergy = function () {
    window.vivoVideoAd_hall.initRewardedAd(function () {
      window.adUtil.toast("获得体力+5");
      window.powerControl.addPower(5);
      if (window.addPower && window.addPower.node) {
        window.addPower.node.destroy();
      }
    }, function () {});
  };
  o.prototype.back = function () {
    window.adUtil.closeOppoCustomAd();
    if (cc.assetManager.bundles.find(function (e) {
      return e.getSceneInfo("level");
    })) {
      cc.director.loadScene("level");
    } else {
      cc.director.loadScene("home" + window.common_hall.getCommonObj("homeSceneSkin"));
    }
  };
  o.prototype.backHome = function () {
    cc.director.loadScene("home" + window.common_hall.getCommonObj("homeSceneSkin"));
  };
  o.prototype.clickShare = function () {
    window.adUtil.shareVideo();
  };
  o.prototype.winV0 = function (e) {
    if (e === undefined) {
      e = true;
    }
    this.levelUpCallback();
    var o = e ? this.showWinUI : this.showWinUIV2;
    if (window.adUtil.canLoadBoxUI()) {
      window.adUtil.loadBoxUI(o);
    } else {
      o();
    }
  };
  o.prototype.win = function () {
    this.winV1();
  };
  o.prototype.winV1 = function () {
    this.levelUpCallback();
    if (window.currentLevel != 2 || window.miniPlatForm != "tt") {
      if (window.adUtil.canLoadBoxUI()) {
        window.adUtil.loadBoxUI(this.showWinUI);
      } else {
        this.showWinUI();
      }
    } else {
      this.loadDifficultyUp();
    }
  };
  o.prototype.winV2 = function () {
    this.levelUpCallback();
    if (window.currentLevel != 2 || window.miniPlatForm != "tt") {
      if (window.adUtil.canLoadBoxUI()) {
        window.adUtil.loadBoxUI(this.showWinUIV2);
      } else {
        this.showWinUIV2();
      }
    } else {
      this.loadDifficultyUp();
    }
  };
  o.prototype.levelUpCallback = function () {
    window.currentLevel++;
    var e = Number(cc.sys.localStorage.getItem("model" + window.model + "_" + window.objectName_hall) || 1);
    if (window.currentLevel > e) {
      cc.sys.localStorage.setItem("model" + window.model + "_" + window.objectName_hall, window.currentLevel + "");
    }
  };
  o.prototype.loadDifficultyUp = function () {
    return a(this, undefined, undefined, function () {
      var e;
      var o;
      return c(this, function (t) {
        switch (t.label) {
          case 0:
            return [4, window.adUtil.loadPrefabByBundleSync("resources", "prefab/ui/difficultyUp")];
          case 1:
            e = t.sent();
            o = cc.instantiate(e);
            this.node.addChild(o);
            this.scheduleOnce(function () {
              cc.director.loadScene("game" + window.model + "_" + window.objectName_hall);
            }, 1);
            return [2];
        }
      });
    });
  };
  o.prototype.showRight = function (e) {
    cc.assetManager.loadBundle("resources", function (o, t) {
      t.load("prefab/ui/right", cc.Prefab, function (o, t) {
        var n = cc.instantiate(t);
        cc.find("Canvas").addChild(n);
        n.zIndex = 99;
        if (e) {
          n.x = e.x;
          n.y = e.y;
        }
      });
    });
  };
  o.prototype.showWrong = function (e) {
    cc.assetManager.loadBundle("resources", function (o, t) {
      t.load("prefab/ui/wrong", cc.Prefab, function (o, t) {
        var n = cc.instantiate(t);
        cc.find("Canvas").addChild(n);
        n.zIndex = 99;
        if (e) {
          n.x = e.x;
          n.y = e.y;
        }
      });
    });
  };
  o.prototype.showWinUI = function () {
    if (window.game.judgeShowXiaobaiWinUI()) {
      cc.sys.localStorage.setItem("skinRewardFlag_xiaobai_" + window.objectName_hall + "_model" + window.model, "1");
      return void window.home.showRewardUI();
    }
    cc.assetManager.loadBundle("resources_" + window.model + "_" + window.objectName_hall, function (e, o) {
      o.load("prefabs/winUI", cc.Prefab, function (e, o) {
        return a(this, undefined, undefined, function () {
          var t;
          return c(this, function (n) {
            switch (n.label) {
              case 0:
                if (e) {
                  return [4, window.adUtil.loadPrefabSync("prefab/ui/winUI")];
                } else {
                  return [3, 2];
                }
              case 1:
                o = n.sent();
                n.label = 2;
              case 2:
                t = cc.instantiate(o);
                cc.find("Canvas").addChild(t);
                t.zIndex = 100;
                return [2];
            }
          });
        });
      });
    });
  };
  o.prototype.showFailUI = function () {
    cc.assetManager.loadBundle("resources_" + window.model + "_" + window.objectName_hall, function (e, o) {
      o.load("prefabs/failUI", cc.Prefab, function (e, o) {
        return a(this, undefined, undefined, function () {
          var t;
          return c(this, function (n) {
            switch (n.label) {
              case 0:
                if (e) {
                  return [4, window.adUtil.loadPrefabSync("prefab/ui/failUI")];
                } else {
                  return [3, 2];
                }
              case 1:
                o = n.sent();
                n.label = 2;
              case 2:
                t = cc.instantiate(o);
                cc.find("Canvas").addChild(t);
                t.zIndex = 100;
                return [2];
            }
          });
        });
      });
    });
  };
  o.prototype.showWinUIV2 = function () {
    return a(this, undefined, undefined, function () {
      var e;
      var o;
      return c(this, function (t) {
        switch (t.label) {
          case 0:
            if (window.game.judgeShowXiaobaiWinUI()) {
              cc.sys.localStorage.setItem("skinRewardFlag_xiaobai_" + window.objectName_hall + "_model" + window.model, "1");
              window.home.showRewardUI();
              return [2];
            } else {
              return [4, window.adUtil.loadPrefabSync("prefab/ui/winUI")];
            }
          case 1:
            e = t.sent();
            o = cc.instantiate(e);
            cc.find("Canvas").addChild(o);
            o.zIndex = 100;
            return [2];
        }
      });
    });
  };
  o.prototype.judgeShowXiaobaiWinUI = function () {
    var e = window.common_hall.getCommonObj("homeSceneSkin");
    if (e && e == "_xiaobai") {
      var o = l.getModelLength();
      if (o != "endless" && window.currentLevel > o && !cc.sys.localStorage.getItem("skinRewardFlag_xiaobai_" + window.objectName_hall + "_model" + window.model)) {
        return true;
      }
    }
    return false;
  };
  o.prototype.showFailUIV2 = function () {
    return a(this, undefined, undefined, function () {
      var e;
      var o;
      return c(this, function (t) {
        switch (t.label) {
          case 0:
            return [4, window.adUtil.loadPrefabSync("prefab/ui/failUI")];
          case 1:
            e = t.sent();
            o = cc.instantiate(e);
            cc.find("Canvas").addChild(o);
            o.zIndex = 100;
            return [2];
        }
      });
    });
  };
  o.prototype.showBlock = function () {
    this.blockNode.active = true;
  };
  o.prototype.hideBlock = function () {
    this.blockNode.active = false;
  };
  o.prototype.skip = function (e, o) {
    if (o === undefined) {
      o = "V1";
    }
    if (!(window.game.loadWinFlag || window.game.loadFailFlag)) {
      window.vivoVideoAd_hall.initRewardedAd(function () {
        return a(this, undefined, undefined, function () {
          return c(this, function () {
            this["win" + o]();
            return [2];
          });
        });
      }.bind(this), function () {});
    }
  };
  o.prototype.hintClick = function (e) {
    var o = this;
    if (!window.game.loadWinFlag && !window.game.loadFailFlag) {
      var t = e.currentTarget.getChildByName("ad");
      var n = function () {
        return a(o, undefined, undefined, function () {
          var e;
          var o;
          var n;
          return c(this, function (i) {
            switch (i.label) {
              case 0:
                return [4, window.adUtil.loadPrefabByBundleSync("resources", "prefab/ui/hintUI")];
              case 1:
                e = i.sent();
                return [4, window.adUtil.loadSpriteFrameByBundleSync("resources_" + window.model + "_" + window.objectName_hall, "textures/hintGame" + window.model + "/" + window.currentLevel)];
              case 2:
                o = i.sent();
                (n = cc.instantiate(e)).getComponent("hintUI_common_hall").init(o);
                cc.find("Canvas").addChild(n);
                cc.sys.localStorage.setItem("level" + window.currentLevel + "hintFlag_" + window.objectName_hall, "true");
                t.active = false;
                return [2];
            }
          });
        });
      };
      if (t.active) {
        window.vivoVideoAd_hall.initRewardedAd(n, function () {});
      } else {
        n();
      }
    }
  };
  o.prototype.showHintAdNode = function () {
    if (cc.sys.localStorage.getItem("level" + window.currentLevel + "hintFlag_" + window.objectName_hall)) {
      this.hintPropNode.getChildByName("ad").active = false;
    }
  };
  return r([s], o);
}(cc.Component);
exports.default = u;