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
var l = require("./adBase_shaonao");
var d = cc._decorator;
var s = d.ccclass;
var u = d.property;
var h = function (e) {
  function o() {
    var o = e !== null && e.apply(this, arguments) || this;
    o.succClip = null;
    o.failClip = null;
    o.messageClip = null;
    o.titleLabel = null;
    o.targetNode = null;
    o.contentNode = null;
    o.targetContentLabel = null;
    o.aiPrefab = null;
    o.ownPrefab = null;
    o.npcPrefab = null;
    o.scrollView = null;
    o.leftNode = null;
    o.rightNode = null;
    o.leftLabel = null;
    o.rightLabel = null;
    o.manHeadArr = [];
    o.womanHeadArr = [];
    return o;
  }
  i(o, e);
  o.prototype.onLoad = function () {
    window.game = this;
    this.manHeadIndex1 = Math.floor(10 * Math.random());
    this.manHeadIndex2 = Math.floor(10 * Math.random());
    for (; this.manHeadIndex2 == this.manHeadIndex1;) {
      this.manHeadIndex2 = Math.floor(10 * Math.random());
    }
    this.womanHeadIndex1 = Math.floor(10 * Math.random());
    this.womanHeadIndex2 = Math.floor(10 * Math.random());
    for (; this.womanHeadIndex2 == this.womanHeadIndex1;) {
      this.womanHeadIndex2 = Math.floor(10 * Math.random());
    }
    window.miniPlatForm;
  };
  o.prototype.start = function () {
    this.loadConfig();
    this.showGameAd();
    this.scheduleOnce(this.loadRawardedStartAd, 1);
  };
  o.prototype.loadConfig = function () {
    return a(this, undefined, undefined, function () {
      var e;
      var o;
      return c(this, function (t) {
        switch (t.label) {
          case 0:
            e = window;
            return [4, window.adUtil.loadDirByBundleSync("resources_" + window.model + "_shaonao", "json/json" + window.model)];
          case 1:
            e.levelRes = t.sent();
            if (window.currentLevel > window.levelRes.length) {
              window.currentLevel = window.levelRes.length;
            }
            return [4, window.adUtil.loadJsonByBundleSync("resources_" + window.model + "_shaonao", "json/json" + window.model + "/1-" + window.currentLevel)];
          case 2:
            o = t.sent();
            this.data = o.json;
            this.titleLabel.string = this.data.aiName;
            this.targetContentLabel.string = this.data.target;
            this.scheduleOnce(this.startChat, 1);
            return [2];
        }
      });
    });
  };
  o.prototype.startChat = function () {
    this.targetNode.active = false;
    this.addAiMessage(this.data.data[0]);
  };
  o.prototype.addAiMessage = function (e) {
    var o = this;
    window.adUtil.playMusicEffect(this.messageClip, false);
    var t;
    var n = cc.instantiate(this.aiPrefab);
    if (this.data.aiSex == "男") {
      n.getChildByName("head").getComponent(cc.Sprite).spriteFrame = this.manHeadArr[this.manHeadIndex1];
    } else if (this.data.aiSex == "女") {
      n.getChildByName("head").getComponent(cc.Sprite).spriteFrame = this.womanHeadArr[this.womanHeadIndex1];
    }
    n.getChildByName("label").getComponent(cc.Label).string = e.content;
    t = e.isEnd;
    var i = 30 * e.content.length;
    if (i > 400) {
      i = 400;
    }
    n.getChildByName("label").width = i;
    n.getChildByName("nameLabel").getComponent(cc.Label).string = this.data.aiName;
    n.getChildByName("bg").width = i + 50;
    this.contentNode.addChild(n);
    this.scrollView.scrollToBottom(0.1);
    var r = 0;
    if (e.picIndex) {
      for (var a = function (t) {
          c.scheduleOnce(function () {
            var n = cc.instantiate(o.npcPrefab);
            o.contentNode.addChild(n);
            if (cc.sys.localStorage.getItem("level" + window.model + "pic" + window.currentLevel + "_shaonao")) {
              window.npc.clearMosaic();
            } else {
              window.npc.setMosaic();
            }
            window.npc.setPic(e.picIndex[t]);
            o.scrollView.scrollToBottom(0.1);
          });
        }, c = this, l = 0; l < e.picIndex.length; l++) {
        a(l);
      }
      r = 1;
    }
    this.scheduleOnce(function () {
      if (t == 0) {
        o.scheduleOnce(function () {
          o.leftNode.active = true;
          o.rightNode.active = true;
          o.leftId = e.next[0];
          o.rightId = e.next[1];
          o.leftLabel.string = o.data.data[o.leftId].content;
          o.rightLabel.string = o.data.data[o.rightId].content;
        }, 0.5);
      } else if (-1 == t) {
        o.loadFail();
      } else if (t == 1) {
        o.loadWin();
      }
    }, r);
  };
  o.prototype.loadFail = function () {
    window.adUtil.playMusicEffect(this.failClip, false);
    this.scheduleOnce(function () {
      cc.assetManager.loadBundle("resources_shaonao", function (e, o) {
        o.load("prefab/ui/failUI" + window.adUtil.useHallData("gameoverSkin", "shaonao"), cc.Prefab, function (e, o) {
          var t = cc.instantiate(o);
          cc.find("Canvas").addChild(t);
        });
      });
    }, 2);
  };
  o.prototype.loadWin = function () {
    window.adUtil.playMusicEffect(this.succClip, false);
    window.currentLevel += 1;
    if (window.currentLevel > window.maxLevel) {
      cc.sys.localStorage.setItem("level" + window.model + "_shaonao", window.currentLevel + "");
      window.maxLevel = window.currentLevel;
      if (window.home && window.home.isModelNowInModel12()) {
        window.home.calculateLevel();
      }
    }
    this.scheduleOnce(function () {
      if (window.adUtil.canLoadBoxUI()) {
        window.adUtil.loadBoxUI(window.game.showWinUI);
      } else {
        window.game.showWinUI();
      }
    }, 2);
  };
  o.prototype.win = function () {
    window.adUtil.playMusicEffect(this.succClip, false);
    window.game.loadWin = true;
    window.currentLevel += 1;
    if (window.currentLevel > window.maxLevel) {
      cc.sys.localStorage.setItem("level" + window.model + "_shaonao", window.currentLevel + "");
      window.maxLevel = window.currentLevel;
      if (window.home && window.home.isModelNowInModel12()) {
        window.home.calculateLevel();
      }
    }
    this.scheduleOnce(function () {
      cc.assetManager.loadBundle("resources_shaonao", function (e, o) {
        o.load("prefab/ui/winUI" + window.adUtil.useHallData("gameoverSkin", "shaonao"), cc.Prefab, function (e, o) {
          var t = cc.instantiate(o);
          cc.find("Canvas").addChild(t);
        });
      });
    }, 1.5);
  };
  o.prototype.clickBack = function () {
    if (cc.assetManager.bundles.find(function (e) {
      return e.getSceneInfo("level");
    })) {
      cc.director.loadScene("level");
    } else {
      cc.director.loadScene("home" + window.common_hall.getCommonObj("homeSceneSkin"));
    }
  };
  o.prototype.leftClick = function () {
    this.leftRightCommonClick(0);
  };
  o.prototype.rightClick = function () {
    this.leftRightCommonClick(1);
  };
  o.prototype.leftRightCommonClick = function (e) {
    var o;
    var t = this;
    this.leftNode.active = false;
    this.rightNode.active = false;
    o = e == 0 ? this.leftId : this.rightId;
    var n = this.data.data[o];
    var i = n.content;
    var r = cc.instantiate(this.ownPrefab);
    if (this.data.ownSex == "男") {
      r.getChildByName("head").getComponent(cc.Sprite).spriteFrame = this.manHeadArr[this.manHeadIndex2];
    } else if (this.data.ownSex == "女") {
      r.getChildByName("head").getComponent(cc.Sprite).spriteFrame = this.womanHeadArr[this.womanHeadIndex2];
    }
    var a = 30 * i.length;
    if (a > 400) {
      a = 400;
    }
    r.getChildByName("label").width = a;
    r.getChildByName("nameLabel").getComponent(cc.Label).string = this.data.ownName;
    r.getChildByName("label").getComponent(cc.Label).string = i;
    r.getChildByName("bg").width = a + 50;
    this.contentNode.addChild(r);
    this.scrollView.scrollToBottom(0.1);
    var c = 0;
    if (n.picIndex) {
      for (var l = function (e) {
          d.scheduleOnce(function () {
            var o = cc.instantiate(t.npcPrefab);
            t.contentNode.addChild(o);
            if (cc.sys.localStorage.getItem("level" + window.model + "pic" + window.currentLevel + "_shaonao")) {
              window.npc.clearMosaic();
            } else {
              window.npc.setMosaic();
            }
            window.npc.setPic(n.picIndex[e]);
            t.scrollView.scrollToBottom(0.1);
          });
        }, d = this, s = 0; s < n.picIndex.length; s++) {
        l(s);
      }
      c = 1;
    }
    var u = n.isEnd;
    this.scheduleOnce(function () {
      if (u == 0) {
        t.scheduleOnce(function () {
          t.addAiMessage(t.data.data[n.next[0]]);
        }, 0.5);
      } else if (-1 == u) {
        t.loadFail();
      } else if (u == 1) {
        t.loadWin();
      }
    }, c);
  };
  r([u(cc.AudioClip)], o.prototype, "succClip", undefined);
  r([u(cc.AudioClip)], o.prototype, "failClip", undefined);
  r([u(cc.AudioClip)], o.prototype, "messageClip", undefined);
  r([u(cc.Label)], o.prototype, "titleLabel", undefined);
  r([u(cc.Node)], o.prototype, "targetNode", undefined);
  r([u(cc.Node)], o.prototype, "contentNode", undefined);
  r([u(cc.Label)], o.prototype, "targetContentLabel", undefined);
  r([u(cc.Prefab)], o.prototype, "aiPrefab", undefined);
  r([u(cc.Prefab)], o.prototype, "ownPrefab", undefined);
  r([u(cc.Prefab)], o.prototype, "npcPrefab", undefined);
  r([u(cc.ScrollView)], o.prototype, "scrollView", undefined);
  r([u(cc.Node)], o.prototype, "leftNode", undefined);
  r([u(cc.Node)], o.prototype, "rightNode", undefined);
  r([u(cc.Label)], o.prototype, "leftLabel", undefined);
  r([u(cc.Label)], o.prototype, "rightLabel", undefined);
  r([u([cc.SpriteFrame])], o.prototype, "manHeadArr", undefined);
  r([u([cc.SpriteFrame])], o.prototype, "womanHeadArr", undefined);
  return r([s], o);
}(l.default);
exports.default = h;