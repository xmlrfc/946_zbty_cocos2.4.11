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
var a = require("./levelMessage_hall");
var c = cc._decorator;
var l = c.ccclass;
var d = c.property;
var s = function (e) {
  function o() {
    var o = e !== null && e.apply(this, arguments) || this;
    o.lock = null;
    o.levelNum = null;
    o.level = 0;
    return o;
  }
  i(o, e);
  o.prototype.onLoad = function () {};
  o.prototype.start = function () {};
  o.prototype.init = function (e) {
    var o;
    this.level = e;
    this.levelNum.string = this.level + "";
    if (window.objectName_hall == "ballhome") {
      o = Number(cc.sys.localStorage.getItem(a.getLocalStorageLevelKey()) || 0);
      o++;
      this.showStar();
    } else {
      o = window.objectName_hall == "ballneat" || window.objectName_hall == "xiaochufangkuai" && window.model == 6 || window.objectName_hall == "caijiqiuqiu" && window.model == 2 ? Number(a.getLocalStorageLevelKey() || 1) : Number(cc.sys.localStorage.getItem(a.getLocalStorageLevelKey()) || 1);
    }
    if (e <= o || window.noAdFlag) {
      this.lock.active = false;
      this.levelNum.node.active = true;
    }
  };
  o.prototype.showStar = function () {
    var e;
    if (window.model == 1) {
      e = "ScoreList_ballhome";
    } else if (window.model == 2) {
      e = "adventure-scores_ballhome";
    }
    var o = [];
    if (cc.sys.localStorage.getItem(e)) {
      o = JSON.parse(cc.sys.localStorage.getItem(e));
    }
    if (o[this.level - 1] >= 1) {
      this.node.getChildByName("star1").active = true;
    }
    if (o[this.level - 1] >= 2) {
      this.node.getChildByName("star2").active = true;
    }
    if (o[this.level - 1] >= 3) {
      this.node.getChildByName("star3").active = true;
    }
  };
  o.prototype.click = function () {
    var e = this;
    window.powerControl.decreasePower(function () {
      if (window.objectName_hall == "ballhome") {
        window.currentLevel = e.level - 1;
      } else {
        window.currentLevel = e.level;
      }
      if (window.objectName_hall == "ballneat") {
        if (window.currentLevel > Number(a.getLocalStorageLevelKey() || 1)) {
          var o = {
            money: 0,
            level: window.currentLevel,
            closeAudio: false,
            closeBgm: false,
            videoTime: 0,
            content: {
              ball: {
                choose: "1",
                open: ["1"]
              },
              tube: {
                choose: "1",
                open: ["1"]
              },
              theme: {
                choose: "1",
                open: ["1"]
              }
            }
          };
          if (cc.sys.localStorage.getItem("cache_ballneat")) {
            (o = JSON.parse(cc.sys.localStorage.getItem("cache_ballneat"))).level = window.currentLevel;
          }
          cc.sys.localStorage.setItem("cache_ballneat", JSON.stringify(o));
        }
      } else if (window.objectName_hall == "caijiqiuqiu" && window.model == 2) {
        if (window.currentLevel > Number(a.getLocalStorageLevelKey() || 1)) {
          o = {
            Level: 1,
            Hp: 0,
            MaxHp: 0,
            Armor: 0,
            MaxArmor: 0,
            IsRevive: false
          };
          if (cc.sys.localStorage.getItem("GameData2_caijiqiuqiu")) {
            (o = JSON.parse(cc.sys.localStorage.getItem("GameData2_caijiqiuqiu"))).Level = window.currentLevel;
          }
          cc.sys.localStorage.setItem("GameData2_caijiqiuqiu", JSON.stringify(o));
        }
      } else if (window.objectName_hall == "xiaochufangkuai" && window.model == 6) {
        var t = "CC_MATCH_MOVE_xiaochufangkuai";
        if (window.abnormalVersion_xiaochufangkuai) {
          t = "CC_MATCH_MOVE_model6_abnormalVersion_xiaochufangkuai";
        }
        var n = cc.sys.localStorage.getItem(t);
        if (n) {
          var i = JSON.parse(n);
          if (window.currentLevel > i.level) {
            i.level = window.currentLevel;
          }
          cc.sys.localStorage.setItem(t, JSON.stringify(i));
        }
      } else if (window.currentLevel > Number(cc.sys.localStorage.getItem(a.getLocalStorageLevelKey()) || 1)) {
        cc.sys.localStorage.setItem(a.getLocalStorageLevelKey(), window.currentLevel + "");
      }
      cc.director.loadScene(a.getSceneName());
    });
  };
  r([d(cc.Node)], o.prototype, "lock", undefined);
  r([d(cc.Label)], o.prototype, "levelNum", undefined);
  return r([l], o);
}(cc.Component);
exports.default = s;