Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.loadGame = undefined;
var n = require("./levelMessage_hall");
exports.loadGame = function (e) {
  window.objectName_hall = "jingchazhuaxiaotou";
  window.model = Number(e);
  window.powerControl.decreasePower(function () {
    window.currentLevel = Number(cc.sys.localStorage.getItem("model" + window.model + "_jingchazhuaxiaotou") || 1);
    cc.director.loadScene(n.getSceneName());
  });
};