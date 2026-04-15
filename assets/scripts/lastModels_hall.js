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
var l = require("./loadWenzizhaobutong");
var d = require("./loadShaonao");
var s = require("./loadMigong");
var u = require("./loadBallhome");
var h = cc._decorator;
var w = h.ccclass;
h.property;
var p = function (e) {
  function o() {
    return e !== null && e.apply(this, arguments) || this;
  }
  i(o, e);
  o.prototype.start = function () {};
  o.prototype.cancel = function () {
    this.node.destroy();
  };
  o.prototype.migong1 = function () {
    return a(this, undefined, undefined, function () {
      return c(this, function () {
        this.unlockOneFlag("migong1", function () {
          window.powerControl.decreasePower(function () {
            window.homeHall.clearRes("migong");
            if (!window.migong1LoadedFlag) {
              window.homeHall.showLoading();
            }
            window.migong1LoadedFlag = true;
            s.loadGame1();
          }.bind(this));
        }.bind(this));
        return [2];
      });
    });
  };
  o.prototype.migong5 = function () {
    return a(this, undefined, undefined, function () {
      return c(this, function () {
        this.unlockOneFlag("migong5", function () {
          window.powerControl.decreasePower(function () {
            window.homeHall.clearRes("migong");
            if (!window.migong5LoadedFlag) {
              window.homeHall.showLoading();
            }
            window.migong5LoadedFlag = true;
            s.loadGame5();
          }.bind(this));
        });
        return [2];
      });
    });
  };
  o.prototype.ballhome2 = function () {
    return a(this, undefined, undefined, function () {
      return c(this, function () {
        this.unlockOneFlag("ballhome2", function () {
          window.powerControl.decreasePower(function () {
            window.homeHall.clearRes("ballhome");
            if (!window.ballhome2LoadedFlag) {
              window.homeHall.showLoading();
            }
            window.ballhome2LoadedFlag = true;
            u.loadGame2();
          }.bind(this));
        });
        return [2];
      });
    });
  };
  o.prototype.shaonao3 = function () {
    return a(this, undefined, undefined, function () {
      return c(this, function () {
        this.unlockOneFlag("shaonao3", function () {
          window.powerControl.decreasePower(function () {
            window.homeHall.clearRes("shaonao");
            if (!window.shaonao3LoadedFlag) {
              window.homeHall.showLoading();
            }
            window.shaonao3LoadedFlag = true;
            d.loadGame3();
          }.bind(this));
        });
        return [2];
      });
    });
  };
  o.prototype.wenzizhaobutong3 = function () {
    return a(this, undefined, undefined, function () {
      return c(this, function () {
        this.unlockOneFlag("wenzizhaobutong3", function () {
          window.powerControl.decreasePower(function () {
            window.homeHall.clearRes("wenzizhaobutong");
            if (!window.wenzizhaobutong3LoadedFlag) {
              window.homeHall.showLoading();
            }
            window.wenzizhaobutong3LoadedFlag = true;
            l.loadGame3();
          }.bind(this));
        });
        return [2];
      });
    });
  };
  o.prototype.wenzizhaobutong7 = function () {
    return a(this, undefined, undefined, function () {
      return c(this, function () {
        this.unlockOneFlag("wenzizhaobutong7", function () {
          window.powerControl.decreasePower(function () {
            window.homeHall.clearRes("wenzizhaobutong");
            if (!window.wenzizhaobutong7LoadedFlag) {
              window.homeHall.showLoading();
            }
            window.wenzizhaobutong7LoadedFlag = true;
            l.loadGame7();
          }.bind(this));
        });
        return [2];
      });
    });
  };
  o.prototype.wenzizhaobutong8 = function () {
    return a(this, undefined, undefined, function () {
      return c(this, function () {
        this.unlockOneFlag("wenzizhaobutong8", function () {
          window.powerControl.decreasePower(function () {
            window.homeHall.clearRes("wenzizhaobutong");
            if (!window.wenzizhaobutong8LoadedFlag) {
              window.homeHall.showLoading();
            }
            window.wenzizhaobutong8LoadedFlag = true;
            l.loadGame8();
          }.bind(this));
        });
        return [2];
      });
    });
  };
  o.prototype.wenzizhaobutong11 = function () {
    return a(this, undefined, undefined, function () {
      return c(this, function () {
        this.unlockOneFlag("wenzizhaobutong11", function () {
          window.powerControl.decreasePower(function () {
            window.homeHall.clearRes("wenzizhaobutong");
            if (!window.wenzizhaobutong11LoadedFlag) {
              window.homeHall.showLoading();
            }
            window.wenzizhaobutong11LoadedFlag = true;
            l.loadGame11();
          }.bind(this));
        });
        return [2];
      });
    });
  };
  o.prototype.wenzizhaobutong20 = function () {
    return a(this, undefined, undefined, function () {
      return c(this, function () {
        this.unlockOneFlag("wenzizhaobutong20", function () {
          window.powerControl.decreasePower(function () {
            window.homeHall.clearRes("wenzizhaobutong");
            if (!window.wenzizhaobutong20LoadedFlag) {
              window.homeHall.showLoading();
            }
            window.wenzizhaobutong20LoadedFlag = true;
            l.loadGame20();
          }.bind(this));
        });
        return [2];
      });
    });
  };
  o.prototype.wenzizhaobutong21 = function () {
    return a(this, undefined, undefined, function () {
      return c(this, function () {
        this.unlockOneFlag("wenzizhaobutong21", function () {
          window.powerControl.decreasePower(function () {
            window.homeHall.clearRes("wenzizhaobutong");
            if (!window.wenzizhaobutong21LoadedFlag) {
              window.homeHall.showLoading();
            }
            window.wenzizhaobutong21LoadedFlag = true;
            l.loadGame21();
          }.bind(this));
        });
        return [2];
      });
    });
  };
  o.prototype.wenzizhaobutong22 = function () {
    return a(this, undefined, undefined, function () {
      return c(this, function () {
        this.unlockOneFlag("wenzizhaobutong22", function () {
          window.powerControl.decreasePower(function () {
            window.homeHall.clearRes("wenzizhaobutong");
            if (!window.wenzizhaobutong22LoadedFlag) {
              window.homeHall.showLoading();
            }
            window.wenzizhaobutong22LoadedFlag = true;
            l.loadGame22();
          }.bind(this));
        });
        return [2];
      });
    });
  };
  o.prototype.wenzizhaobutong23 = function () {
    return a(this, undefined, undefined, function () {
      return c(this, function () {
        this.unlockOneFlag("wenzizhaobutong23", function () {
          window.powerControl.decreasePower(function () {
            window.homeHall.clearRes("wenzizhaobutong");
            if (!window.wenzizhaobutong23LoadedFlag) {
              window.homeHall.showLoading();
            }
            window.wenzizhaobutong23LoadedFlag = true;
            l.loadGame23();
          }.bind(this));
        });
        return [2];
      });
    });
  };
  o.prototype.unlockOneFlag = function (e, o) {
    window.gameName = e;
    if (this.unlockAllFlag()) {
      o();
    } else if (cc.sys.localStorage.getItem("unlock" + window.gameName)) {
      o();
    } else {
      cc.assetManager.loadBundle("resources", function (e, o) {
        o.load("prefab/ui/unlock", cc.Prefab, function (e, o) {
          var t = cc.instantiate(o);
          cc.find("Canvas").addChild(t);
        });
      });
    }
  };
  o.prototype.unlockAllFlag = function () {
    var e = cc.sys.localStorage.getItem("unlockAllLevelDate");
    var o = new Date().toLocaleDateString();
    return !(!e || e != o);
  };
  return r([w], o);
}(cc.Component);
exports.default = p;