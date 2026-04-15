Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.loadGame = undefined;
var n = require("./levelMessage_hall");
exports.loadGame = function (e) {
  window.objectName_hall = "xiaochufangkuai";
  cc.game.groupList = ["default"];
  cc.game.collisionMatrix = [[true]];
  if (e == "6_abnormalVersion") {
    window.model = 6;
    window.abnormalVersion_xiaochufangkuai = true;
  } else {
    window.model = Number(e);
    window.abnormalVersion_xiaochufangkuai = false;
  }
  window.powerControl.decreasePower(function () {
    if ([2, 3, 4, 7, 8, 9].indexOf(window.model) >= 0) {
      window.currentLevel = Number(cc.sys.localStorage.getItem(n.getLocalStorageLevelKey()) || 1);
    } else if (window.model == 6) {
      window.currentLevel = Number(n.getLocalStorageLevelKey() || 1);
    }
    cc.director.loadScene(n.getSceneName());
  });
};