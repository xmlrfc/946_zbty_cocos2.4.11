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
var l = require("./loadXiujiao");
var d = require("./loadShaonaoNew");
var s = cc._decorator;
var u = s.ccclass;
s.property;
var h = function (e) {
  function o() {
    return e !== null && e.apply(this, arguments) || this;
  }
  i(o, e);
  o.prototype.onLoad = function () {
    window.loadBundleForSubproject = this;
  };
  o.prototype.start = function () {};
  o.prototype.pushBundle = function (e, o) {
    var t = false;
    if (window.homeHallBundles) {
      for (var n = 0; n < window.homeHallBundles.length; n++) {
        if (window.homeHallBundles[n].name == o.name) {
          t = true;
          break;
        }
      }
    }
    if (!t) {
      e.push(o);
    }
    return e;
  };
  o.prototype.loadXiujiao1ForLevelBundle = function (e) {
    return a(this, undefined, undefined, function () {
      var o;
      return c(this, function (t) {
        switch (t.label) {
          case 0:
            return [4, l.loadXiujiao1ForLevelBundle(e)];
          case 1:
            o = t.sent();
            window.homeHallBundles = this.pushBundle(window.homeHallBundles, o);
            return [2];
        }
      });
    });
  };
  o.prototype.loadShaonaoNew1ForLevelBundle = function (e) {
    return a(this, undefined, undefined, function () {
      var o;
      return c(this, function (t) {
        switch (t.label) {
          case 0:
            return [4, d.loadShaonaoNew1ForLevelBundle(e)];
          case 1:
            o = t.sent();
            window.homeHallBundles = this.pushBundle(window.homeHallBundles, o);
            return [2];
        }
      });
    });
  };
  return r([u], o);
}(cc.Component);
exports.default = h;