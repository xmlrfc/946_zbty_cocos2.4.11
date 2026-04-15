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
    o.bg1 = null;
    o.bg1Active = null;
    o.bg2 = null;
    o.bg2Active = null;
    o.bg3 = null;
    o.bg3Active = null;
    return o;
  }
  i(o, e);
  o.prototype.onLoad = function () {
    if (cc.sys.localStorage.getItem("muteMusicEffectFlag")) {
      this.bg1.active = true;
      this.bg1Active.active = false;
    } else {
      this.bg1.active = false;
      this.bg1Active.active = true;
    }
    if (cc.sys.localStorage.getItem("muteMusicFlag")) {
      this.bg2.active = true;
      this.bg2Active.active = false;
    } else {
      this.bg2.active = false;
      this.bg2Active.active = true;
    }
  };
  o.prototype.start = function () {};
  o.prototype.clickMuteMusicEffect = function () {
    cc.sys.localStorage.setItem("muteMusicEffectFlag", "1");
    this.bg1.active = true;
    this.bg1Active.active = false;
  };
  o.prototype.clickMusicEffect = function () {
    cc.sys.localStorage.removeItem("muteMusicEffectFlag");
    this.bg1.active = false;
    this.bg1Active.active = true;
  };
  o.prototype.clickMuteMusic = function () {
    cc.audioEngine.pauseMusic();
    cc.sys.localStorage.setItem("muteMusicFlag", "1");
    this.bg2.active = true;
    this.bg2Active.active = false;
  };
  o.prototype.clickMusic = function () {
    cc.sys.localStorage.removeItem("muteMusicFlag");
    if (cc.audioEngine.isMusicPlaying()) {
      cc.audioEngine.resumeMusic();
    } else if (window.home) {
      window.home.playBgm();
    } else {
      window.homeHall.playBgm();
    }
    this.bg2.active = false;
    this.bg2Active.active = true;
  };
  o.prototype.clickMuteVibrateShort = function () {
    cc.sys.localStorage.setItem("muteVibrateShortFlag", "1");
    this.bg3.active = true;
    this.bg3Active.active = false;
  };
  o.prototype.clickVibrateShort = function () {
    cc.sys.localStorage.removeItem("muteVibrateShortFlag");
    this.bg3.active = false;
    this.bg3Active.active = true;
  };
  r([l(cc.Node)], o.prototype, "bg1", undefined);
  r([l(cc.Node)], o.prototype, "bg1Active", undefined);
  r([l(cc.Node)], o.prototype, "bg2", undefined);
  r([l(cc.Node)], o.prototype, "bg2Active", undefined);
  r([l(cc.Node)], o.prototype, "bg3", undefined);
  r([l(cc.Node)], o.prototype, "bg3Active", undefined);
  return r([c], o);
}(cc.Component);
exports.default = d;