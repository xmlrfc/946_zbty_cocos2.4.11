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
  o.prototype.onLoad = function () {};
  o.prototype.start = function () {};
  o.prototype.setOriginalPos = function (e) {
    this.originalPos = e;
  };
  o.prototype.getOriginalPos = function () {
    return this.originalPos;
  };
  o.prototype.moveInAnswer = function () {
    if (!this.moveInFlag) {
      this.moveInFlag = true;
    }
    if (window.game8.answers.length >= window.game8.answersMaxLength) {
      window.adUtil.toast("槽位已满，请先清空槽位");
    } else {
      this.node.parent = window.game8.answerNode;
      this.node.x = 0;
      this.node.y = 0;
      this.node.anchorY = 0.5;
      this.node.getChildByName("zi").y = 0;
      window.game8.pushIntoAnswer(this.node.getChildByName("zi").getComponent(cc.Label).string);
      if (window.currentLevel == 1) {
        if (window.game8.guideNum < window.game8.guideArr.length - 1) {
          window.game8.guideArr[window.game8.guideNum].destroy();
          window.adUtil.loadGuide(window.game8.guideArr[window.game8.guideNum + 1], cc.v2(window.game8.guideArr[window.game8.guideNum + 1].width / 2, -window.game8.guideArr[window.game8.guideNum + 1].height / 2));
          window.game8.guideNum++;
        } else {
          window.game8.guideArr[window.game8.guideNum].destroy();
        }
      }
    }
  };
  o.prototype.moveOutAnswer = function () {
    this.moveInFlag = false;
    this.node.parent = window.game8.layoutNode;
    this.node.x = this.originalPos.x;
    this.node.y = this.originalPos.y;
    this.node.anchorY = 1;
    this.node.getChildByName("zi").y = -40;
    this.index = -1;
  };
  return r([c], o);
}(cc.Component);
exports.default = l;