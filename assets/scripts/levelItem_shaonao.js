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
    var t;
    this.level = e;
    this.levelNum.string = this.level + "";
    if (cc.sys.localStorage.getItem("starObj_shaonao")) {
      window.starObj = JSON.parse(cc.sys.localStorage.getItem("starObj_shaonao"));
    }
    if (window.home && window.home.isModelNowInModel12()) {
      o = Number(cc.sys.localStorage.getItem("level12_shaonao") || 1);
      for (var n = window.model12Arr[e - 1], i = 0, r = 0; r < e; r++) {
        if (window.model12Arr[r] == n) {
          i++;
        }
      }
      this.level = i;
    } else {
      o = Number(cc.sys.localStorage.getItem("level" + window.model + "_shaonao") || 1);
    }
    if (e < o) {
      this.lock.active = false;
      this.levelNum.node.active = true;
      if (window.starObj) {
        t = window.starObj[window.model + "level" + this.level + "starNum"];
      }
      if (t) {
        if (Number(t) >= 1) {
          this.node.getChildByName("star1").active = true;
        }
        if (Number(t) >= 2) {
          this.node.getChildByName("star2").active = true;
        }
        if (Number(t) >= 3) {
          this.node.getChildByName("star3").active = true;
        }
      }
    } else if (e == o) {
      this.lock.active = false;
      this.levelNum.node.active = true;
      this.node.getChildByName("star1").active = false;
      this.node.getChildByName("star2").active = false;
      this.node.getChildByName("star3").active = false;
    }
  };
  o.prototype.click = function () {
    var e = this;
    window.powerControl.decreasePower(function () {
      if (window.home && window.home.isModelNowInModel12()) {
        window.model = window.model12Arr[Number(e.levelNum.string) - 1];
      }
      window.currentLevel = e.level;
      cc.director.loadScene("game" + window.model + window.adUtil.useHallData("sceneSkin_model" + window.model + "_shaonao", "shaonao") + "_shaonao");
    });
  };
  r([l(cc.Node)], o.prototype, "lock", undefined);
  r([l(cc.Label)], o.prototype, "levelNum", undefined);
  return r([c], o);
}(cc.Component);
exports.default = d;