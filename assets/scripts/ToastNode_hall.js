cc.Class({
  extends: cc.Component,
  properties: {
    contentLabel: cc.Label
  },
  onLoad: function () {
    window.toastNode = this;
  },
  initData: function (e) {
    this.contentLabel.string = e;
    this.runMoveAction();
  },
  runMoveAction: function () {
    var e = cc.moveBy(1, cc.v2(0, 200));
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