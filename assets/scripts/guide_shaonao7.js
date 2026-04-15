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
    var e = new cc.Node();
    this.node.addChild(e);
    e.name = "lineNode";
    this.lineNode = e;
    this.graphics = e.addComponent(cc.Graphics);
    this.graphics.lineWidth = 6;
    this.graphics.strokeColor = new cc.Color(92, 147, 58);
    this.posStart = this.node.getChildByName("guideStart").getPosition();
    this.posEnd = this.node.getChildByName("guideEnd").getPosition();
    this.drawLineOfDashes(this.graphics, this.posStart, this.posEnd);
    this.showHand();
  };
  o.prototype.drawLineOfDashes = function (e, o, t, n, i, r) {
    if (n === undefined) {
      n = true;
    }
    if (i === undefined) {
      i = 8;
    }
    if (r === undefined) {
      r = 8;
    }
    if (e) {
      for (var a = t.sub(o), c = a.normalize(), l = a.mag(), d = c.mul(i + r), s = c.mul(i), u = Math.floor(l / (i + r)), h = 0; h < u; ++h) {
        var w = o.add(d.mul(h));
        e.moveTo(w.x, w.y);
        var p = w.add(s);
        e.lineTo(p.x, p.y);
      }
      var f = o.add(d.mul(u));
      e.moveTo(f.x, f.y);
      if (i < l - (i + r) * u) {
        p = f.add(s);
        e.lineTo(p.x, p.y);
      } else {
        e.lineTo(t.x, t.y);
      }
      if (n) {
        e.stroke();
      }
    }
  };
  o.prototype.showHand = function () {
    var e = this;
    cc.assetManager.loadBundle("resources_shaonao", function (o, t) {
      t.load("prefab/ui/hand", cc.Prefab, function (o, t) {
        var n = cc.instantiate(t);
        e.node.addChild(n);
        var i = cc.moveTo(0.03, e.posStart);
        var r = cc.moveTo(1.3, e.posEnd);
        n.runAction(cc.repeatForever(cc.sequence(i, r)));
      });
    });
  };
  o.prototype.show = function () {
    this.lineNode.active = true;
    if (this.node.getChildByName("hand")) {
      this.node.getChildByName("hand").active = true;
    }
  };
  o.prototype.hide = function () {
    this.lineNode.active = false;
    if (this.node.getChildByName("hand")) {
      this.node.getChildByName("hand").active = false;
    }
  };
  return r([c], o);
}(cc.Component);
exports.default = l;