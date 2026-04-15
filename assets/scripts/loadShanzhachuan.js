Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.loadGame = undefined;
var n = require("./levelMessage_hall");
exports.loadGame = function (e) {
  window.objectName_hall = "shanzhachuan";
  window.model = Number(e);
  if (window.model == 1) {
    window.powerControl.decreasePower(function () {
      cc.director.loadScene(n.getSceneName());
    });
  }
};