Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.loadGame = undefined;
exports.loadGame = function (e) {
  window.objectName_hall = "jianfengchazhen";
  cc.game.groupList = ["default", "needle", "Loop", "shoot", "hideHeadNeedle", "chassis"];
  cc.game.collisionMatrix = [[true], [false, true, false], [false, false, false, true], [false, false, true, false, true, true], [false, false, false, true, false], [false, false, false, true, false, false]];
  window.model = Number(e);
  cc.assetManager.loadBundle("resources_jianfengchazhen", function (e, o) {
    o.load("UI/initGame", cc.Prefab, function (e, o) {
      var t = cc.instantiate(o);
      cc.find("Canvas").addChild(t);
      t.zIndex = 1;
    });
  });
};