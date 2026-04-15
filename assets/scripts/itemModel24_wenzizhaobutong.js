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
  o.prototype.start = function () {
    this.onClick();
    this.parent = "levelNode";
  };
  o.prototype.init = function (e, o) {
    this.word = e;
    this.index = o;
    this.node.getComponent(cc.Label).string = e;
  };
  o.prototype.onClick = function () {
    this.node.on(cc.Node.EventType.TOUCH_START, this.touchStart, this);
    this.node.on(cc.Node.EventType.TOUCH_END, this.touchEnd, this);
    this.node.on(cc.Node.EventType.TOUCH_CANCEL, this.touchCancle, this);
  };
  o.prototype.offClick = function () {
    this.node.off(cc.Node.EventType.TOUCH_START, this.touchStart, this);
    this.node.off(cc.Node.EventType.TOUCH_END, this.touchEnd, this);
    this.node.off(cc.Node.EventType.TOUCH_CANCEL, this.touchCancle, this);
  };
  o.prototype.touchStart = function () {
    if (this.parent == "levelNode") {
      this.node.scale = 0.7;
    } else {
      this.node.scale = 0.9;
    }
  };
  o.prototype.touchEnd = function () {
    if (!(this.gameSuccFlag || this.gameFailFlag)) {
      window.adUtil.playMusicEffect(window.game.clickClip, false);
      this.offClick();
      if (this.parent == "levelNode") {
        this.node.scale = 1;
        this.node.getComponent(cc.Label).fontSize = 45;
        this.node.height *= 0.7;
        this.node.width *= 0.7;
        this.click1();
      } else {
        this.click2();
      }
    }
  };
  o.prototype.touchCancle = function () {
    this.node.scale = 1;
  };
  o.prototype.click1 = function () {
    var e = this;
    window.game.answer.push(this.word);
    window.game.answerIndex.push(this.index);
    var o = this.node.parent.convertToWorldSpaceAR(this.node.getPosition());
    var t = window.game.answerNode.convertToNodeSpaceAR(o);
    var n = window.game.answerNode.children[window.game.answerNode.children.length - 1];
    var i = 0;
    if (n) {
      i = n.x + 40;
    }
    var r = this.node.getPosition().x;
    var a = this.node.getPosition().y;
    cc.tween(this.node).to(0.5, {
      x: r - t.x + i,
      y: a - t.y
    }).call(function () {
      e.node.removeFromParent(false);
      e.node.setPosition(0, 0);
      window.game.answerNode.addChild(e.node);
      e.parent = "answerNode";
      e.onClick();
      window.game.checkEnd();
    }).start();
  };
  o.prototype.click2 = function () {
    var e = this;
    var o = window.game.answerIndex.indexOf(this.index);
    window.game.answerIndex.splice(o, 1);
    window.game.answer.splice(o, 1);
    var t = this.node.parent.convertToWorldSpaceAR(this.node.getPosition());
    var n = window.game.levelNode.convertToNodeSpaceAR(t);
    this.node.removeFromParent(false);
    this.node.setPosition(n.x, n.y);
    window.game.levelNode.addChild(this.node);
    cc.tween(this.node).to(0.5, {
      x: window.game.position[this.index].x,
      y: window.game.position[this.index].y,
      scale: 1
    }).call(function () {
      e.node.getComponent(cc.Label).fontSize = 60;
      e.node.height /= 0.7;
      e.node.width /= 0.7;
      e.parent = "levelNode";
      e.onClick();
    }).start();
  };
  return r([c], o);
}(cc.Component);
exports.default = l;