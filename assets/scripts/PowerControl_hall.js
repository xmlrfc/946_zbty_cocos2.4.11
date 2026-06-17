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
    o.powerLabel = null;
    o.timeLabel = null;
    return o;
  }
  i(o, e);
  o.prototype.onLoad = function () {
    window.powerControl = this;
  };
  o.prototype.start = function () {
    var e = this;
    this.schedule(function () {
      // e.powerTimeUpdate();
      e.adTimeLabelUpdate();
    }, 0.2);
    this.updatePowerLabel();
    var o = cc.sys.localStorage.getItem("lastTime");
    if (o) {
      window.lastTime = Number(o);
    } else {
      window.lastTime = new Date().getTime();
      cc.sys.localStorage.setItem("lastTime", window.lastTime + "");
    }
    var t = cc.sys.localStorage.getItem("energy");
    if (t) {
      window.energy = Number(t);
    } else {
      if (window.miniPlatForm == "oppo") {
        window.energy = 3;
      } else if (window.miniPlatForm == "tt" || window.miniPlatForm == "ks") {
        window.energy = 3;
      } else {
        window.energy = 3;
      }
      cc.sys.localStorage.setItem("energy", window.energy + "");
    }
  };
  o.prototype.adTimeLabelUpdate = function () {
    this.updatePowerLabel();
  };
  o.prototype.onClick = function () {};
  o.prototype.updatePowerLabel = function () {
    if (!window.timeStr) {
      window.timeStr = "00:00";
    }
    if (!window.energy) {
      window.energy = 0;
    }
    this.timeLabel.string = "";
    this.powerLabel.string = window.energy + "";
  };
  o.prototype.powerTimeUpdate = function () {
    var e = window.lastTime + 90000;
    if (!(window.miniPlatForm != "tt" && window.miniPlatForm != "ks" && window.miniPlatForm != "qq")) {
      e = window.lastTime + 600000;
    }
    var o = new Date().getTime();
    if (e) {
      var t = e - o;
      if (t <= 0) {
        window.timeStr = "00:00";
        window.lastTime = o;
        cc.sys.localStorage.setItem("lastTime", window.lastTime + "");
        this.addPower(1);
        return void (t <= -300000 && this.addPower(2));
      }
      var n = function (e) {
        for (var o = (e + "").length, t = "", n = 0; n < 2 - o; n++) {
          t += "0";
        }
        return t + e;
      };
      t = Math.max(t, 0);
      t = Math.floor(t / 1000);
      var i = n(Math.floor(t / 60));
      var r = n(t % 60);
      window.timeStr = i + ":" + r;
    } else {
      window.timeStr = "00:00";
    }
  };
  o.prototype.addPower = function (e) {
    window.energy += e;
    cc.sys.localStorage.setItem("energy", window.energy + "");
  };
  o.prototype.decreasePower = function (e) {
    if (window.energy >= 1) {
      window.energy -= 1;
      cc.sys.localStorage.setItem("energy", window.energy + "");
      e();
    } else {
      this.showAddPowerByShare();
    }
  };
  o.prototype.clickAddPower = function () {
    this.showAddPower();
  };
  o.prototype.getAddPowerByShareKey = function () {
    return "addPowerByShareDate";
  };
  o.prototype.canShowAddPowerByShare = function () {
    return cc.sys.localStorage.getItem(this.getAddPowerByShareKey()) != new Date().toLocaleDateString();
  };
  o.prototype.markAddPowerByShare = function () {
    cc.sys.localStorage.setItem(this.getAddPowerByShareKey(), new Date().toLocaleDateString());
  };
  o.prototype.showAddPowerByShare = function () {
    var e = this;
    if (!this.canShowAddPowerByShare()) {
      return void this.showAddPower();
    }
    cc.resources.load("addPowerbyShare", cc.Prefab, function (o, t) {
      if (o) {
        return void e.showAddPower();
      }
      var n = cc.instantiate(t);
      cc.find("Canvas").addChild(n);
      n.zIndex = 3001;
    });
  };
  o.prototype.showAddPower = function () {
    cc.assetManager.loadBundle("resources_energySkin" + window.common_hall.getCommonObj("energySkin"), function (e, o) {
      o.load("addPower", cc.Prefab, function (e, o) {
        var t = cc.instantiate(o);
        cc.find("Canvas").addChild(t);
        t.zIndex = 3001;
      });
    });
  };
  r([l(cc.Label)], o.prototype, "powerLabel", undefined);
  r([l(cc.Label)], o.prototype, "timeLabel", undefined);
  return r([c], o);
}(cc.Component);
exports.default = d;
