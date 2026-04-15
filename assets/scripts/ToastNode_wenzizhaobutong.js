cc.Class({
  extends: cc.Component,
  properties: {
    contentLabel: cc.Label
  },
  onLoad: function () {
    window.toastNode = this;
  },
  initData: function (e) {
    if (window.common_hall.getCommonObj("language") == "en") {
      var o = window.common_hall.translateToEnglish(e);
      if (o) {
        e = o;
      }
    }
    this.contentLabel.string = e;
    this.runMoveAction();
  },
  runMoveAction: function () {
    var e = cc.moveTo(1, cc.v2(0, 200));
    var o = cc.fadeTo(0.6, 0);
    var t = cc.callFunc(function () {
      this.runEndAction();
    }, this);
    this.node.runAction(cc.sequence(e, o, t));
  },
  runEndAction: function () {
    this.node.destroy();
  },
  onDestroy: function () {}
});