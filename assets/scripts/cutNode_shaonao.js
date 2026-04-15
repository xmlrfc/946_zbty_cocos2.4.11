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
    o.destinationNode = null;
    o.upMatchNode = null;
    o.downMatchNode = null;
    return o;
  }
  i(o, e);
  o.prototype.start = function () {
    this.schedule(this.check, 0.01);
  };
  o.prototype.check = function () {
    if (this.node.y + this.node.parent.y <= this.destinationNode.y) {
      this.unschedule(this.check);
      var e = this.node.parent;
      e.removeComponent(cc.BoxCollider);
      e.removeComponent(cc.RigidBody);
      if (window.game.leftCrossPoint && window.game.rightCrossPoint) {
        var o = new cc.Vec2(window.game.leftCrossPoint.x + e.x, window.game.leftCrossPoint.y + e.y);
        var t = new cc.Vec2(window.game.rightCrossPoint.x + e.x, window.game.rightCrossPoint.y + e.y);
        var n = cc.Intersection.linePolygon(o, t, this.upMatchNode.getComponent(cc.PolygonCollider).points);
        var i = cc.Intersection.linePolygon(o, t, this.downMatchNode.getComponent(cc.PolygonCollider).points);
        if (n || i) {
          console.log("fail");
          window.game.loadFail();
        } else {
          window.game.step++;
          cc.assetManager.loadBundle("resources_" + window.model + "_shaonao", function (e, o) {
            o.load("prefab/level/level" + window.currentLevel + "_" + window.game.step, cc.Prefab, function (e, o) {
              if (o) {
                var t = cc.instantiate(o);
                window.game.cutNode = t.getChildByName("cutNode");
                for (var n = 0; n < t.children.length; n++) {
                  t.children[n].parent = window.game.levelNode.getChildByName("level");
                }
                window.game.movingFlag = false;
              } else {
                window.game.loadWin();
                console.log("true");
              }
            });
          });
        }
      }
    }
  };
  r([l(cc.Node)], o.prototype, "destinationNode", undefined);
  r([l(cc.Node)], o.prototype, "upMatchNode", undefined);
  r([l(cc.Node)], o.prototype, "downMatchNode", undefined);
  return r([c], o);
}(cc.Component);
exports.default = d;