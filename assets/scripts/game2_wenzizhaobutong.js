import Banner from "./Banner";
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
var l = require("./game_wenzizhaobutong");
var d = cc._decorator;
var s = d.ccclass;
var u = d.property;
var h = function (e) {
  function o() {
    var o = e !== null && e.apply(this, arguments) || this;
    o.layoutNode = null;
    o.successNode = null;
    o.failNode = null;
    o.titleLabel = null;
    o.btnNode = null;
    o.tipsNode = null;
    o.adNode = null;
    o.hintNode = null;
    o.hintNum = null;
    o.questionImgNode = null;
    o.successClip = null;
    o.failClip = null;
    o.musicBg = null;
    o.size = 72;
    o.levelLength = 225;
    o.diffNode = null;
    return o;
  }
  i(o, e);
  o.prototype.onLoad = function () {
    return a(this, undefined, undefined, function () {
      var o;
      var t;
      var n;
      var i;
      var r;
      var a;
      var l;
      var d;
      var s;
      var u;
      return c(this, function (c) {
        switch (c.label) {
          case 0:
            window.game2 = this;
            this.btnNode.active = false;
            e.prototype.onLoad.call(this);
            window.levelMaxModel = this.levelLength;
            if (window.currentLevel > this.levelLength) {
              window.currentLevel = this.levelLength;
            }
            o = window.currentLevel <= 5 ? "resources_2_1_wenzizhaobutong" : window.currentLevel <= 10 ? "resources_2_2_wenzizhaobutong" : "resources_2_3_wenzizhaobutong";
            t = window.currentLevel;
            n = window.currentLevel + "d";
            i = Math.floor(Math.random() * this.size);
            return [4, window.adUtil.loadSpriteFrameByBundleSync(o, "textures/game2/orgi_" + t)];
          case 1:
            r = c.sent();
            return [4, window.adUtil.loadSpriteFrameByBundleSync(o, "textures/game2/orgi_" + n)];
          case 2:
            a = c.sent();
            l = 0;
            c.label = 3;
          case 3:
            if (l < this.size) {
              return [4, window.adUtil.loadPrefabByBundleSync("resources_wenzizhaobutong", "prefab/ui/item2")];
            } else {
              return [3, 6];
            }
          case 4:
            d = c.sent();
            s = cc.instantiate(d);
            if (l == i) {
              this.diffNode = s;
              s.getChildByName("item").getComponent(cc.Sprite).spriteFrame = a;
              s.on(cc.Node.EventType.TOUCH_END, this.clickSuccess, this);
              // Banner.Instance.ShowCustomAd();
            } else {
              s.getChildByName("item").getComponent(cc.Sprite).spriteFrame = r;
              s.on(cc.Node.EventType.TOUCH_END, this.clickFail, this);
              // Banner.Instance.ShowCustomAd();
            }
            s.getChildByName("item").getComponent(cc.Sprite).sizeMode = 1;
            if (l == i) {
              u = cc.instantiate(s);
              this.questionImgNode.addChild(u);
              u.active = false;
            }
            this.layoutNode.addChild(s);
            c.label = 5;
          case 5:
            l++;
            return [3, 3];
          case 6:
            u.active = true;
            this.btnNode.active = true;
            return [2];
        }
      });
    });
  };
  o.prototype.start = function () {
    if (!(window.musicBgFlag && window.miniPlatForm != "tt")) {
      window.adUtil.playMusic(this.musicBg, true);
      window.musicBgFlag = true;
    }
    this.loadStartAd();
  };
  o.prototype.clickFail = function () {
    var e = this;
    window.adUtil.playMusicEffect(this.failClip, false);
    this.failNode.active = true;
    this.scheduleOnce(function () {
      e.failNode.active = false;
    }, 0.5);
    console.log("fail");
    Banner.Instance.ShowCustomAd();
  };
  o.prototype.clickSuccess = function () {
    var e = this;
    if (!this.successNode.active) {
      window.adUtil.playMusicEffect(this.successClip, false);
      this.successNode.active = true;
      this.scheduleOnce(function () {
        e.levelUpCallback();
        e.judgeShowWinUI(1);
      }, 0.5);
      console.log("success");
      Banner.Instance.ShowCustomAd();
    }
  };
  o.prototype.showTips = function () {
    var e = function () {
      cc.assetManager.loadBundle("resources_wenzizhaobutong", function (e, o) {
        o.load("prefab/ui/circle2", cc.Prefab, function (e, o) {
          var t = cc.instantiate(o);
          window.game2.diffNode.addChild(t);
        });
      });
    };
    var o = Number(cc.sys.localStorage.getItem("hintNum_wenzizhaobutong"));
    if (o > 0) {
      o--;
      cc.sys.localStorage.setItem("hintNum_wenzizhaobutong", o + "");
      e();
      if (o <= 0) {
        this.adNode.active = true;
        this.hintNode.active = false;
      } else {
        this.hintNum.string = o + "";
      }
      this.tipsNode.getComponent(cc.Button).interactable = false;
    } else {
      window.vivoVideoAd_hall.initRewardedAd(function () {
        e();
      }, function () {});
    }
  };
  r([u(cc.Node)], o.prototype, "layoutNode", undefined);
  r([u(cc.Node)], o.prototype, "successNode", undefined);
  r([u(cc.Node)], o.prototype, "failNode", undefined);
  r([u(cc.Label)], o.prototype, "titleLabel", undefined);
  r([u(cc.Node)], o.prototype, "btnNode", undefined);
  r([u(cc.Node)], o.prototype, "tipsNode", undefined);
  r([u(cc.Node)], o.prototype, "adNode", undefined);
  r([u(cc.Node)], o.prototype, "hintNode", undefined);
  r([u(cc.Label)], o.prototype, "hintNum", undefined);
  r([u(cc.Node)], o.prototype, "questionImgNode", undefined);
  r([u(cc.AudioClip)], o.prototype, "successClip", undefined);
  r([u(cc.AudioClip)], o.prototype, "failClip", undefined);
  r([u(cc.AudioClip)], o.prototype, "musicBg", undefined);
  return r([s], o);
}(l.default);
exports.default = h;