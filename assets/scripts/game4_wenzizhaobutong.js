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
    o.questionSprite = null;
    o.successClip = null;
    o.failClip = null;
    o.musicBg = null;
    o.itemPrefab = null;
    o.size = 42;
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
      var l;
      var d;
      var s;
      var u;
      var h;
      var w;
      var p;
      var f;
      var y = this;
      return c(this, function (g) {
        switch (g.label) {
          case 0:
            window.game4 = this;
            this.btnNode.active = false;
            cc.director.getPhysicsManager().enabled = true;
            cc.director.getPhysicsManager().gravity = new cc.Vec2(0, -1200);
            cc.director.getActionManager().enabledAccumulator = true;
            cc.director.getActionManager().FIXED_TIME_STEP = 1 / 30;
            cc.director.getPhysicsManager().VELOCITY_ITERATIONS = 8;
            cc.director.getCollisionManager().enabled = true;
            e.prototype.onLoad.call(this);
            window.levelMaxModel = this.levelLength;
            if (window.currentLevel > this.levelLength) {
              window.currentLevel = this.levelLength;
            }
            this.titleLabel.string = "第" + window.currentLevel + "关";
            o = window.currentLevel;
            t = window.currentLevel + "d";
            n = Math.floor(Math.random() * this.size);
            i = 460;
            r = 560;
            l = 0.05;
            if (!window.firstEnterFlag) {
              window.firstEnterFlag = true;
              l = 0.1;
            }
            d = window.currentLevel <= 5 ? "resources_2_1_wenzizhaobutong" : window.currentLevel <= 10 ? "resources_2_2_wenzizhaobutong" : "resources_2_3_wenzizhaobutong";
            return [4, window.adUtil.loadSpriteFrameByBundleSync(d, "textures/game2/orgi_" + o)];
          case 1:
            s = g.sent();
            return [4, window.adUtil.loadSpriteFrameByBundleSync(d, "textures/game2/orgi_" + t)];
          case 2:
            u = g.sent();
            h = function (e) {
              p = w;
              w.scheduleOnce(function () {
                return a(y, undefined, undefined, function () {
                  var o;
                  var t;
                  var a;
                  var l;
                  return c(this, function () {
                    o = cc.instantiate(this.itemPrefab);
                    this.layoutNode.addChild(o);
                    if (e == n) {
                      this.diffNode = o;
                      o.getChildByName("item").getComponent(cc.Sprite).spriteFrame = u;
                      o.on(cc.Node.EventType.TOUCH_END, this.clickSuccess, this);
                    } else {
                      o.getChildByName("item").getComponent(cc.Sprite).spriteFrame = s;
                      o.on(cc.Node.EventType.TOUCH_END, this.clickFail, this);
                    }
                    t = Math.floor(360 * Math.random()) - 179;
                    a = Math.floor(20 * Math.random()) - 10;
                    l = Math.floor(500 * Math.random()) - 250;
                    if (e == n) {
                      p.questionSprite.spriteFrame = u;
                      p.questionSprite.node.active = false;
                    }
                    o.x = l;
                    o.y = e % 2 == 0 ? i + a : r + a;
                    o.rotation = t;
                    if (e == this.size - 1) {
                      this.btnNode.active = true;
                      this.questionSprite.node.active = true;
                    }
                    return [2];
                  });
                });
              }, e * l);
            };
            w = this;
            f = 0;
            for (; f < this.size; f++) {
              h(f);
            }
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
    }
  };
  o.prototype.showTips = function () {
    var e = function () {
      cc.assetManager.loadBundle("resources_wenzizhaobutong", function (e, o) {
        o.load("prefab/ui/circle2", cc.Prefab, function (e, o) {
          var t = cc.instantiate(o);
          t.x = window.game4.diffNode.x;
          t.y = window.game4.diffNode.y;
          cc.find("Canvas").addChild(t);
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
  r([u(cc.Sprite)], o.prototype, "questionSprite", undefined);
  r([u(cc.AudioClip)], o.prototype, "successClip", undefined);
  r([u(cc.AudioClip)], o.prototype, "failClip", undefined);
  r([u(cc.AudioClip)], o.prototype, "musicBg", undefined);
  r([u(cc.Prefab)], o.prototype, "itemPrefab", undefined);
  return r([s], o);
}(l.default);
exports.default = h;