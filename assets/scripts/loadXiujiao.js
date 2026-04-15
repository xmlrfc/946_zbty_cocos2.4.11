Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.loadGame = undefined;
exports.loadGame = function (e) {
  window.objectName_hall = "xiujiao";
  cc.game.groupList = ["default", "block", "blockBg", "circle"];
  cc.game.collisionMatrix = [[true, null, false], [false, false, null, true], [false, false, false, true], [false, true, true, false]];
  var o = e;
  window.gameModel = "model" + o;
  window.model = Number(o);
  window.powerControl.decreasePower(function () {
    window.gameModel = "model" + o;
    if (o == "1") {
      window.levelArr = [3, 2, 1, 4, 6, 7, 10, 8, 5, 9];
      if (window.miniPlatForm == "tt") {
        window.levelArr = [5, 4, 7, 2, 3, 1, 6, 8, 9, 10];
      }
    } else if (o == "2") {
      window.levelArr = [];
      for (var e = 1; e <= 23; e++) {
        window.levelArr.push(e);
      }
    }
    window.maxLevel = Number(cc.sys.localStorage.getItem("level" + window.gameModel + "_xiujiao") || window.levelArr[0]);
    window.currentLevel = window.maxLevel;
    if (window.levelArr.indexOf(window.currentLevel) < 0) {
      window.currentLevel = window.levelArr[0];
      window.maxLevel = window.levelArr[window.levelArr.length - 1];
    }
    cc.director.loadScene("game" + o + "_xiujiao");
  });
};