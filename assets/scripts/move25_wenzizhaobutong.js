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
    var o = e !== null && e.apply(this, arguments) || this;
    o.originalPos = null;
    return o;
  }
  i(o, e);
  o.prototype.start = function () {
    this.node.on(cc.Node.EventType.TOUCH_START, this.onTouchStart, this);
    this.node.on(cc.Node.EventType.TOUCH_CANCEL, this.onTouchEnd, this);
    this.node.on(cc.Node.EventType.TOUCH_MOVE, this.onTouchMove, this);
    this.node.on(cc.Node.EventType.TOUCH_END, this.onTouchEnd, this);
  };
  o.prototype.onTouchStart = function () {
    this.originalPos = this.node.position;
    window.game.removeGuideNode();
  };
  o.prototype.onTouchMove = function (e) {
    var o = e.getDelta();
    this.node.x += o.x;
    this.node.y += o.y;
  };
  o.prototype.onTouchEnd = function () {
    for (var e, o = false, t = window.game.answerArr, n = 0; n < t.length; n++) {
      if (this.node.name == t[n].n && (e = cc.v3(t[n].x, -t[n].y), this.node.position.sub(e).mag() < 50)) {
        var i = JSON.parse(cc.sys.localStorage.getItem("answer25_wenzizhaobutong") || "{}");
        var r = Number(cc.sys.localStorage.getItem("level" + window.model + "_wenzizhaobutong") || 1);
        var a = i[window.game.quest];
        if (a) {
          for (var c = 0; c < a.length; c++) {
            var l = a[c];
            if (l == window.game.answer[n] && window.currentLevel >= r) {
              window.adUtil.toast(l + "已经回答过了");
              return void (this.node.position = this.originalPos);
            }
          }
        }
        o = true;
        window.game.correctAnswer = window.game.answer[n];
        break;
      }
    }
    if (o) {
      this.node.position = e;
      window.game.showWinUI();
    } else {
      this.node.position = this.originalPos;
    }
  };
  return r([c], o);
}(cc.Component);
exports.default = l;