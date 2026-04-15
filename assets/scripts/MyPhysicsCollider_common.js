cc.PhysicsManager.PTM_RATIO;
var t = cc.Class({
  extends: cc.PhysicsCollider,
  mixins: [cc.Collider.Polygon],
  properties: {
    lineWidth: 5
  },
  editor: {
    menu: false,
    requireComponent: cc.RigidBody
  },
  _createShape: function () {
    for (var e = [], o = this.points, t = (this.offset, 0); t < o.length - 1; t++) {
      var n = o[t];
      var i = o[t + 1];
      var r = n.sub(i).mag();
      var a = Math.atan2(i.y - n.y, i.x - n.x) - Math.PI / 2;
      var c = n.add(i).mul(0.5);
      var l = new b2.PolygonShape();
      if (l) {
        l.SetAsBox(this.lineWidth / 2 / 32, r / 2 / 32, new b2.Vec2(c.x / 32, c.y / 32), a);
        e.push(l);
      }
    }
    return e;
  }
});
module.exports = t;