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
    o.boxPrefab = null;
    o.boxLayer = null;
    o.videoBtnNode = null;
    o.abortBtnNode = null;
    o.nextBtnNode = null;
    return o;
  }
  i(o, e);
  o.prototype.onLoad = function () {
    window.boxUI = this;
    cc.sys.localStorage.setItem("boxDateString", new Date().toLocaleDateString());
    this.freeNums = [3, 2, 1];
    this.freeCount = 0;
    this.showIndex = Number(cc.sys.localStorage.getItem("showBoxIndex") || 0);
    cc.sys.localStorage.setItem("showBoxIndex", this.showIndex + 1 + "");
    for (var e = [this.addOnePower, this.addOnePower, this.addOnePower, this.addOnePower, this.addOnePower, this.addOnePower, this.addOnePower, this.addOnePower, this.addOnePower], o = 0; o < 9; o++) {
      var t = cc.instantiate(this.boxPrefab);
      var n = t.getComponent("box_hall" + window.adUtil.useHallData("boxUISkin"));
      var i = Math.floor(Math.random() * e.length);
      n.setGetCb(e[i]);
      e.splice(i, 1);
      this.boxLayer.addChild(t);
    }
    if (window.miniPlatForm != "tt") {
      this.abortBtnNode.active = false;
      this.videoBtnNode.x = 0;
    } else {
      this.videoBtnNode.active = false;
      this.abortBtnNode.active = false;
    }
  };
  o.prototype.start = function () {};
  o.prototype.addOnePower = function () {
    window.powerControl.addPower(1);
  };
  o.prototype.videoAllGet = function () {
    window.vivoVideoAd_hall.initRewardedAd(window.boxUI.allGet.bind(window.boxUI), function () {});
  };
  o.prototype.allGet = function () {
    for (var e = 0; e < this.boxLayer.children.length; e++) {
      this.boxLayer.children[e].getComponent("box_hall" + window.adUtil.useHallData("boxUISkin")).get();
    }
    this.videoBtnNode.active = false;
    this.abortBtnNode.active = false;
    this.nextBtnNode.active = true;
  };
  o.prototype.abort = function () {
    this.showNext();
    this.node.destroy();
  };
  o.prototype.showOnce = function () {
    var e = this;
    var o = 1;
    if (this.showIndex < this.freeNums.length) {
      o = this.freeNums[this.showIndex];
    }
    if (new Date().getTime() <= window.setAdTime && window.miniPlatForm == "vivo") {
      o = 3;
    }
    if (window.miniPlatForm == "oppo") {
      o = 3;
    }
    this.freeCount++;
    if (this.freeCount >= o) {
      this.scheduleOnce(function () {
        for (var o = 0; o < e.boxLayer.children.length; o++) {
          e.boxLayer.children[o].getComponent("box_hall" + window.adUtil.useHallData("boxUISkin")).showVideoNode();
        }
        if (!window.boxUI.nextBtnNode.active) {
          window.boxUI.abortBtnNode.active = true;
          window.boxUI.videoBtnNode.active = true;
          window.boxUI.videoBtnNode.x = -120;
        }
      }, 0.3);
    }
  };
  o.prototype.setShowNext = function (e) {
    this.showNext = e;
  };
  r([l(cc.Prefab)], o.prototype, "boxPrefab", undefined);
  r([l(cc.Node)], o.prototype, "boxLayer", undefined);
  r([l(cc.Node)], o.prototype, "videoBtnNode", undefined);
  r([l(cc.Node)], o.prototype, "abortBtnNode", undefined);
  r([l(cc.Node)], o.prototype, "nextBtnNode", undefined);
  return r([c], o);
}(cc.Component);
exports.default = d;