Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.loadGame = undefined;
var n = require("./levelMessage_hall");
exports.loadGame = function (e) {
  window.objectName_hall = "zhuazhuhunhun";
  window.model = Number(e);
  window.powerControl.decreasePower(function () {
    window.currentLevel = Number(cc.sys.localStorage.getItem(n.getLocalStorageLevelKey()) || 1);
    if (window.currentLevel > n.getModelLength()) {
      window.currentLevel = n.getModelLength();
    }
    cc.director.loadScene(n.getSceneName());
  });
};