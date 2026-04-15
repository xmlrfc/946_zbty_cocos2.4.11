cc.Class({
  extends: cc.Component,
  properties: {
    exclude_list: {
      default: [],
      type: cc.Node
    },
    _middlePositionX: 0,
    _influence_self: false,
    _frameSize: cc.Size,
    _top_size: 0,
    _top_size_pe: 0,
    _bottom_size: 0,
    _bottom_size_pe: 0
  },
  onLoad: function () {
    this.top_size = 0;
    this.bottom_size = 0;
    this.iphoneX = {
      width_px: 1125,
      height_px: 2436,
      width_pt: 375,
      height_pt: 812,
      top_size_px: 50,
      top_size_pe: 0.06875,
      bottom_size_px: 30,
      bottom_size_pe: 0.046875
    };
    this.iphoneXS = {
      width_px: 1125,
      height_px: 2436,
      width_pt: 375,
      height_pt: 812,
      top_size_px: 50,
      top_size_pe: 0.06875,
      bottom_size_px: 30,
      bottom_size_pe: 0.046875
    };
    this.iphoneXSM = {
      width_px: 1242,
      height_px: 2688,
      width_pt: 414,
      height_pt: 896,
      top_size_px: 50,
      top_size_pe: 0.0491,
      bottom_size_px: 30,
      bottom_size_pe: 0.03348
    };
    this.iphoneXR = {
      width_px: 750,
      height_px: 1624,
      width_pt: 375,
      height_pt: 812,
      top_size_px: 50,
      top_size_pe: 0.05418,
      bottom_size_px: 30,
      bottom_size_pe: 0.03694
    };
    this._frameSize = cc.view.getFrameSize();
    cc.log("FullWidget framesize:", this._frameSize.width, this._frameSize.height);
    this.updateWidget();
  },
  updateWidget: function () {
    if (this.isIphoneX()) {
      cc.log("updateWidget.iphoneX");
      this._top_size = this.iphoneX.top_size_px;
      this._top_size_pe = this.iphoneX.top_size_pe;
      this._bottom_size = this.iphoneX.bottom_size_px;
      this._bottom_size_pe = this.iphoneX.bottom_size_pe;
      this.throughNode();
    } else if (this.isIphoneXS()) {
      cc.log("updateWidget.iphoneXS");
      this._top_size = this.iphoneXS.top_size_px;
      this._top_size_pe = this.iphoneXS.top_size_pe;
      this._bottom_size = this.iphoneXS.bottom_size_px;
      this._bottom_size_pe = this.iphoneXS.bottom_size_pe;
      this.throughNode();
    } else if (this.isIphoneXSM()) {
      cc.log("updateWidget.iphoneXSM");
      this._top_size = this.iphoneXSM.top_size_px;
      this._top_size_pe = this.iphoneXSM.top_size_pe;
      this._bottom_size = this.iphoneXSM.bottom_size_px;
      this._bottom_size_pe = this.iphoneXSM.bottom_size_pe;
      this.throughNode();
    } else if (this.isIphoneXR()) {
      cc.log("updateWidget.iphoneXR");
      this._top_size = this.iphoneXR.top_size_px;
      this._top_size_pe = this.iphoneXR.top_size_pe;
      this._bottom_size = this.iphoneXR.bottom_size_px;
      this._bottom_size_pe = this.iphoneXR.bottom_size_pe;
      this.throughNode();
    } else if (this._frameSize.height / this._frameSize.width >= 1.8) {
      cc.log("updateWidget.scale");
      this._top_size = this.top_size + 40;
      this._top_size_pe = this._top_size / this._frameSize.height;
      this._bottom_size = this.bottom_size;
      this._bottom_size_pe = this._bottom_size / this._frameSize.height;
      this.throughNode();
    } else {
      this._top_size = this.top_size;
      this._top_size_pe = this._top_size / this._frameSize.height;
      this._bottom_size = this.bottom_size;
      this._bottom_size_pe = this._bottom_size / this._frameSize.height;
      this.throughNode();
    }
  },
  throughNode: function () {
    if (this._influence_self) {
      this.updateAlignment(this.node);
    }
    for (var e = this.node.children, o = 0; o < e.length; o++) {
      var t = e[o];
      if (!t.getComponent("FullWidget")) {
        for (var n = false, i = 0; i < this.exclude_list.length; i++) {
          if (this.exclude_list[i] === t) {
            n = true;
            break;
          }
        }
        if (!n) {
          this.updateAlignment(t);
        }
      }
    }
  },
  updateAlignment: function (e) {
    var o = e.getComponent(cc.Widget);
    var t = e.getComponent(cc.ScrollView);
    if (o) {
      if (o.isAlignTop) {
        if (o.isAbsoluteTop) {
          o.top += this._top_size;
        } else {
          o.top += this._top_size_pe;
        }
      }
      if (o.isAlignBottom && !t) {
        if (o.isAbsoluteBottom) {
          o.bottom += this._bottom_size;
        } else {
          o.bottom += this._bottom_size_pe;
        }
      }
    }
  },
  isIphoneX: function () {
    var e = cc.view.getFrameSize();
    return e.width === this.iphoneX.width_px && e.height === this.iphoneX.height_px || e.width === this.iphoneX.width_pt && e.height === this.iphoneX.height_pt;
  },
  isIphoneXS: function () {
    var e = cc.view.getFrameSize();
    return e.width === this.iphoneXS.width_px && e.height === this.iphoneXS.height_px || e.width === this.iphoneXS.width_pt && e.height === this.iphoneXS.height_pt;
  },
  isIphoneXSM: function () {
    var e = cc.view.getFrameSize();
    return e.width === this.iphoneXSM.width_px && e.height === this.iphoneXSM.height_px || e.width === this.iphoneXSM.width_pt && e.height === this.iphoneXSM.height_pt;
  },
  isIphoneXR: function () {
    var e = cc.view.getFrameSize();
    return e.width === this.iphoneXR.width_px && e.height === this.iphoneXR.height_px || e.width === this.iphoneXR.width_pt && e.height === this.iphoneXR.height_pt;
  }
});