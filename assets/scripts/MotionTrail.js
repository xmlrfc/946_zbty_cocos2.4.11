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
var a = cc.gfx;
var c = function () {
  this.x = 0;
  this.y = 0;
  this.dis = 0;
  this.cos = 0;
  this.sin = 0;
};
var l = cc._decorator;
var d = l.ccclass;
var s = l.property;
var u = l.playOnFocus;
var h = l.menu;
var w = function (e) {
  function o() {
    var o = e !== null && e.apply(this, arguments) || this;
    o.atlas = null;
    o._spriteFrame = null;
    o._active = true;
    o._isWorldXY = true;
    o.offset = cc.v2(0, 0);
    o._length = 20;
    o._headWidth = 100;
    o._tailWidth = 0;
    o._headOpacity = 255;
    o._tailOpacity = 0;
    o.renderData = null;
    o.meshID = 0;
    o.capacity = 0;
    o.verticesCount = 0;
    o.indicesCount = 0;
    o.$flush = null;
    o.$xyOffset = 100000000;
    o.$uvOffset = 100000000;
    o.$colorOffset = 100000000;
    o.$step = 0;
    o.trailData = [];
    o.$getVData = function () {
      return o.renderData.vDatas[o.meshID];
    };
    o.$getUintVData = function () {
      return o.renderData.uintVDatas[o.meshID];
    };
    o.$getIData = function () {
      return o.renderData.iDatas[o.meshID];
    };
    return o;
  }
  i(o, e);
  Object.defineProperty(o.prototype, "$spriteFrame", {
    get: function () {
      return this._spriteFrame;
    },
    set: function (e) {
      this._spriteFrame = e;
      this.$updateSpriteFrame();
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(o.prototype, "active", {
    get: function () {
      return this._active;
    },
    set: function (e) {
      this._active = e;
      this.enabled = e;
      this.$updateActive();
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(o.prototype, "$isWorldXY", {
    get: function () {
      return this._isWorldXY;
    },
    set: function (e) {
      this._isWorldXY = e;
      this.$updateXY();
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(o.prototype, "length", {
    get: function () {
      return this._length;
    },
    set: function (e) {
      this._length = Math.max(e, 0);
      this.updateLength();
      this.updateWidth();
      this.$updateUV();
      this.$updateColor();
      this.resetPos();
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(o.prototype, "headWidth", {
    get: function () {
      return this._headWidth;
    },
    set: function (e) {
      this._headWidth = Math.max(e, 0);
      this.updateWidth();
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(o.prototype, "tailWidth", {
    get: function () {
      return this._tailWidth;
    },
    set: function (e) {
      this._tailWidth = Math.max(e, 0);
      this.updateWidth();
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(o.prototype, "headOpacity", {
    get: function () {
      return this._headOpacity;
    },
    set: function (e) {
      this._headOpacity = e;
      this.$updateColor();
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(o.prototype, "tailOpacity", {
    get: function () {
      return this._tailOpacity;
    },
    set: function (e) {
      this._tailOpacity = e;
      this.$updateColor();
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(o.prototype, "$vDataLength", {
    get: function () {
      return this.verticesCount * this.$step;
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(o.prototype, "$iDataLength", {
    get: function () {
      return this.indicesCount;
    },
    enumerable: false,
    configurable: true
  });
  o.prototype._resetAssembler = function () {
    var e = this._assembler = new p();
    e.init(this);
    e.updateRenderData = this.$onFlushed.bind(this);
    this.$flush = this.setVertsDirty;
    var o = this.renderData = new cc.RenderData();
    o.init(e);
    this.meshID = o.meshCount;
    this.$init();
  };
  o.prototype.$init = function () {
    this.$setVFmt();
    this.updateLength();
    this.updateWidth();
    this.node.on(cc.Node.EventType.COLOR_CHANGED, this.$updateColor, this);
    this.resetPos();
  };
  o.prototype.start = function () {
    this.$updateSpriteFrame();
    cc.director.once(cc.Director.EVENT_AFTER_DRAW, this.$updateColor, this);
  };
  o.prototype.$setVFmt = function (e) {
    if (e === undefined) {
      e = new a.VertexFormat([{
        name: a.ATTR_POSITION,
        type: a.ATTR_TYPE_FLOAT32,
        num: 2
      }, {
        name: a.ATTR_UV0,
        type: a.ATTR_TYPE_FLOAT32,
        num: 2
      }, {
        name: a.ATTR_COLOR,
        type: a.ATTR_TYPE_UINT8,
        num: 4,
        normalize: true
      }]);
    }
    var o = this._assembler;
    if (cc.sys.isNative) {
      o.setVertexFormat(e);
    }
    for (var t = e._elements, n = t.length - 1; n > -1; --n) {
      this.$step += t[n].bytes >> 2;
    }
    var i = e._attr2el;
    this.$xyOffset = i[a.ATTR_POSITION].offset >> 2;
    this.$uvOffset = i[a.ATTR_UV0].offset >> 2;
    this.$colorOffset = i[a.ATTR_COLOR].offset >> 2;
  };
  o.prototype.$createBuffer = function (e, o, t) {
    if (o === undefined) {
      o = e - 2;
    }
    if (t === undefined) {
      t = 2;
    }
    t = Math.max(t, 1.5);
    var n = this.renderData;
    this.verticesCount = Math.max(e, 0);
    this.indicesCount = Math.max(3 * o, 0);
    var i = !n.vDatas[this.meshID];
    if (this.verticesCount > this.capacity) {
      this.capacity = ~~Math.max(this.capacity * t, this.verticesCount);
      i = true;
    } else if (this.verticesCount < this.capacity / t) {
      this.capacity = ~~Math.max(this.capacity / t, this.verticesCount);
      i = true;
    }
    if (i) {
      var r = new Float32Array(this.verticesCount * this.$step);
      var a = new Uint16Array(this.indicesCount);
      n.updateMesh(this.meshID, r, a);
    }
    this.$updateIndice();
  };
  o.prototype.update = function () {
    if (cc.sys.isNative) {
      this.$updateColor();
    }
    this.$flush();
  };
  o.prototype.$onFlushed = function () {
    if (this.active !== false && this.$spriteFrame !== null && this.length !== 0) {
      for (var e = this.trailData, o = this.length - 1; o > 0; --o) {
        var t = e[o];
        var n = e[o - 1];
        t.x = n.x;
        t.y = n.y;
        t.sin = n.sin;
        t.cos = n.cos;
      }
      if (this.$isWorldXY) {
        var i = this.node._worldMatrix.m;
        this.node._updateWorldMatrix();
        e[0].x = this.offset.x + i[12];
        e[0].y = this.offset.y + i[13];
      } else {
        e[0].x = this.offset.x + this.node.x;
        e[0].y = this.offset.y + this.node.y;
      }
      this.$updateXY();
    }
  };
  o.prototype.$updateActive = function () {
    if (this.active) {
      this.resetPos();
    }
  };
  o.prototype.$updateSpriteFrame = function () {
    var e = this.$spriteFrame;
    var o = this.getMaterial(0) || cc.Material.getBuiltinMaterial("2d-sprite");
    o.define("USE_TEXTURE", true);
    o.setProperty("texture", e ? e.getTexture() : null);
    this.$updateUV();
  };
  o.prototype.$updateXY = function () {
    var e = this.$getVData();
    var o = null;
    var t = null;
    var n = 0;
    var i = 0;
    var r = 0;
    var a = 0;
    var c = 0;
    var l = this.$step;
    var d = 0;
    var s = 0;
    if (!this.$isWorldXY) {
      d = this.node.x;
      s = this.node.y;
    }
    for (var u = this.trailData, h = 0, w = this.length - 1; h < w; ++h) {
      o = u[h];
      t = u[h + 1];
      n = o.x - d;
      i = o.y - s;
      r = t.x - d;
      a = t.y - s;
      if (h === 0) {
        var p = Math.atan2(a - i, r - n);
        o.sin = Math.sin(p);
        o.cos = Math.cos(p);
      }
      e[c] = n + o.dis * o.sin;
      e[c + 1] = i - o.dis * o.cos;
      e[c += l] = n - o.dis * o.sin;
      e[c + 1] = i + o.dis * o.cos;
      c += l;
    }
    e[c] = r + t.dis * o.sin;
    e[c + 1] = a - t.dis * o.cos;
    e[c += l] = r - t.dis * o.sin;
    e[c + 1] = a + t.dis * o.cos;
  };
  o.prototype.$updateUV = function () {
    if (this.$spriteFrame !== null) {
      for (var e = this.$getVData(), o = this.$step, t = 1 / (this.trailData.length - 1), n = this.$uvOffset, i = 0, r = this.$vDataLength; n < r; n += o, ++i) {
        e[n] = 1 & i;
        e[n + 1] = 1 - t * (i >> 1);
      }
      this.$fitUV();
    }
  };
  o.prototype.$updateColor = function () {
    for (var e = this.$getUintVData(), o = this.length, t = this.headOpacity, n = (t - this.tailOpacity) / (o - 1), i = this.node.opacity / 255, r = this.node.color.b << 16 | this.node.color.g << 8 | this.node.color.r, a = 0, c = this.$colorOffset, l = this.$step; a < o; ++a) {
      var d = (t - n * a) * i << 24 | r;
      e[c] = d;
      e[c += l] = d;
      c += l;
    }
  };
  o.prototype.$updateIndice = function () {
    for (var e = this.$getIData(), o = 0, t = 0, n = this.$iDataLength; o < n; ++t) {
      e[o++] = t;
      e[o++] = t + 1;
      e[o++] = t + 2;
    }
  };
  o.prototype.updateLength = function () {
    var e = this.length;
    this.trailData = [];
    for (var o = 0; o < e; ++o) {
      this.trailData[o] = new c();
    }
    this.$createBuffer(e << 1);
  };
  o.prototype.updateWidth = function () {
    for (var e = this.trailData, o = this.length, t = 0.5 * this.headWidth, n = (t - 0.5 * this.tailWidth) / (o - 1), i = 0; i < o; ++i) {
      e[i].dis = t - n * i;
    }
  };
  o.prototype.resetPos = function () {
    var e = this.trailData;
    var o = this.offset.x;
    var t = this.offset.y;
    if (this.$isWorldXY) {
      var n = this.node._worldMatrix.m;
      this.node._updateWorldMatrix();
      o += n[12];
      t += n[13];
    } else {
      o += this.node.x;
      t += this.node.y;
    }
    for (var i = this.length - 1; i > -1; --i) {
      e[i].x = o;
      e[i].y = t;
    }
    for (var r = this.$getVData(), a = this.$step, c = (i = 0, this.$vDataLength); i < c; i += a) {
      r[i] = o;
      r[i + 1] = t;
    }
  };
  o.prototype.$fitUV = function () {
    if (this.$spriteFrame !== null) {
      var e = this.$step;
      var o = this.$spriteFrame.getTexture().width;
      var t = this.$spriteFrame.getTexture().height;
      var n = this.$spriteFrame.getRect();
      var i = this.$getVData();
      if (this.$spriteFrame._rotated) {
        for (var r = this.$uvOffset, a = 0, c = this.$vDataLength; r < c; r += e, ++a) {
          var l = i[r];
          i[r] = ((1 - i[r + 1]) * n.height + n.x) / o;
          i[r + 1] = (l * n.width + n.y) / t;
        }
      } else {
        r = this.$uvOffset;
        a = 0;
        c = this.$vDataLength;
        r = this.$uvOffset;
        a = 0;
        c = this.$vDataLength;
        for (; r < c; r += e, ++a) {
          i[r] = (i[r] * n.width + n.x) / o;
          i[r + 1] = (i[r + 1] * n.height + n.y) / t;
        }
      }
    }
  };
  o.prototype.onDestroy = function () {
    this.node.targetOff(this);
  };
  r([s({
    type: cc.SpriteAtlas,
    editorOnly: true,
    readonly: true,
    displayName: ""
  })], o.prototype, "atlas", undefined);
  r([s], o.prototype, "_spriteFrame", undefined);
  r([s({
    type: cc.SpriteFrame,
    displayName: ""
  })], o.prototype, "$spriteFrame", null);
  r([s], o.prototype, "_active", undefined);
  r([s({
    displayName: "",
    tooltip: ""
  })], o.prototype, "active", null);
  r([s], o.prototype, "_isWorldXY", undefined);
  r([s({
    displayName: "",
    tooltip: ""
  })], o.prototype, "$isWorldXY", null);
  r([s({
    displayName: ""
  })], o.prototype, "offset", undefined);
  r([s], o.prototype, "_length", undefined);
  r([s({
    type: cc.Integer,
    displayName: ""
  })], o.prototype, "length", null);
  r([s], o.prototype, "_headWidth", undefined);
  r([s({
    displayName: ""
  })], o.prototype, "headWidth", null);
  r([s], o.prototype, "_tailWidth", undefined);
  r([s({
    displayName: ""
  })], o.prototype, "tailWidth", null);
  r([s], o.prototype, "_headOpacity", undefined);
  r([s({
    type: cc.Integer,
    min: 0,
    max: 255,
    slide: true,
    displayName: ""
  })], o.prototype, "headOpacity", null);
  r([s], o.prototype, "_tailOpacity", undefined);
  r([s({
    type: cc.Integer,
    min: 0,
    max: 255,
    slide: true,
    displayName: ""
  })], o.prototype, "tailOpacity", null);
  return r([d, u, h("Comp/MotionTrail")], o);
}(cc.RenderComponent);
exports.default = w;
var p = function (e) {
  function o() {
    return e !== null && e.apply(this, arguments) || this;
  }
  i(o, e);
  o.prototype.fillBuffers = function (e) {
    var o = e.renderData.vDatas[e.meshID];
    var t = e.renderData.iDatas[e.meshID];
    var n = cc.renderer._handle._meshBuffer;
    var i = n.request(e.verticesCount, e.indicesCount);
    var r = i.byteOffset >> 2;
    var a = n._vData;
    if (o.length + r > a.length) {
      a.set(o.subarray(0, a.length - r), r);
    } else {
      a.set(o, r);
    }
    for (var c = n._iData, l = i.indiceOffset, d = i.vertexOffset, s = 0, u = t.length; s < u; s++) {
      c[l++] = d + t[s];
    }
  };
  return o;
}(cc.Assembler);