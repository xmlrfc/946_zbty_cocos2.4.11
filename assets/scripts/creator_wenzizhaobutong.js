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
    o.json = null;
    o.positionJson = null;
    o.width = 8;
    o.height = 11;
    o.esayModel = false;
    return o;
  }
  i(o, e);
  o.prototype.onLoad = function () {
    window.creator = this;
    for (var e = this.json.json[3], o = 0; o < e.length - 1; o++) {
      for (var t = 0; t < e.length - 1 - o; t++) {
        r += e[t].length;
        var n = t + 1;
        if (e[t].length < e[n].length) {
          var i = e[t];
          e[t] = e[n];
          e[n] = i;
        }
      }
    }
    console.log("下边的内容也复制到level.json里，因为生成的position是按从长到短排列的");
    console.log(e);
    var r = 0;
    this.ArrLengthOfAllWords = [];
    for (var a = 0; a < e.length; a++) {
      r += e[a].length;
      this.ArrLengthOfAllWords.push(e[a].length);
    }
    console.log("总长度：" + r);
    this.width;
    this.height;
  };
  o.prototype.start = function () {
    this.schedule(this.createArr, 0.5);
  };
  o.prototype.createArr = function () {
    for (var e = [], o = this.ArrLengthOfAllWords, t = 0; t < this.width * this.height; t++) {
      e.push(t);
    }
    for (var n = [], i = 0; i < o.length; i++) {
      var r = Math.floor(Math.random() * e.length);
      this.startPos = e[r];
      var a = o[i];
      var c = [this.startPos];
      e.splice(r, 1);
      for (var l = 0; l < a - 1; l++) {
        var d = this.judgein(c[l], c, e);
        if (!d) {
          return void this.createArr();
        }
        c.push(d);
        for (var s = 0; s < e.length; s++) {
          if (e[s] == d) {
            e.splice(s, 1);
            break;
          }
        }
      }
      n.push(c);
    }
    console.log(n);
    this.unschedule(this.createArr);
  };
  o.prototype.reWriteObj = function (e, o) {
    var t = {};
    for (var n in e) {
      var i = Number(n);
      if (i) {
        if (!t[i + 1 + ""]) {
          t[i + 1 + ""] = e[n];
        }
        var r = i + "-sound";
        var a = i + "-width";
        if (e[r]) {
          if (!t[i + 1 + "-sound"]) {
            t[i + 1 + "-sound"] = e[r];
          }
        }
        if (e[a]) {
          if (!t[i + 1 + "-width"]) {
            t[i + 1 + "-width"] = e[a];
          }
        }
      } else if (n.indexOf("endless_") >= 0) {
        if (!t[n]) {
          t[n] = e[n];
        }
      }
    }
    console.log(t);
    var c = JSON.stringify(t, null, "\t");
    var l = "data:application/json;charset=utf-8," + encodeURIComponent(c);
    var d = o;
    var s = document.createElement("a");
    s.setAttribute("href", l);
    s.setAttribute("download", d);
    s.click();
  };
  o.prototype.judgein = function (e, o, t) {
    var n = [];
    var i = e - this.width;
    var r = e + this.width;
    var a = e - 1;
    var c = e + 1;
    if (i >= 0 && !o.includes(i) && t.includes(i)) {
      n.push(i);
    }
    if (r < this.width * this.height && !o.includes(r) && t.includes(r)) {
      n.push(r);
    }
    if (e % this.width != 0 && !o.includes(a) && t.includes(a)) {
      n.push(a);
    }
    if (e % this.width != this.width - 1 && !o.includes(c) && t.includes(c)) {
      n.push(c);
    }
    if (this.esayModel) {
      return n[Math.floor(Math.random() * n.length)];
    }
    for (var l = [], d = 0; d < n.length; d++) {
      var s = n[d];
      var u = s % this.width;
      var h = Math.floor(s / this.width);
      u = this.width - u > u ? u : this.width - u;
      h = this.height - h > h ? h : this.height - h;
      l.push(u + h);
    }
    for (var w = l.sort(function (e, o) {
        return e - o;
      }), p = 0, f = 0; f < w.length; f++) {
      var y = w[0];
      if (w[f] > y) {
        p = f - 1;
        break;
      }
    }
    var g = Math.floor(Math.random() * (p + 1));
    return n[l.indexOf(w[g])];
  };
  o.prototype.toast = function () {
    cc.assetManager.loadBundle("resources", function (e, o) {
      o.load("prefab/toast", cc.Prefab, function (e, o) {
        var t = cc.instantiate(o);
        cc.find("Canvas").addChild(t);
      });
    });
  };
  r([l(cc.JsonAsset)], o.prototype, "json", undefined);
  r([l(cc.JsonAsset)], o.prototype, "positionJson", undefined);
  return r([c], o);
}(cc.Component);
exports.default = d;