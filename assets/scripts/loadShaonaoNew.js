Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.loadGame = undefined;
var n = "shaonaoNew";
var i = "_shaonaoNew";
function r() {
  window.gameModel = "model1";
  if (window.common_hall.getCommonObj("needLevelScene", n)) {
    cc.director.loadScene("level1_wenzimoniqi" + i);
  } else {
    var e = cc.sys.localStorage.getItem("level" + window.gameModel + i);
    if (e && e == "passAll") {
      cc.sys.localStorage.setItem("level" + window.gameModel + i, window.levelArr[0] + "");
    }
    window.maxLevel = Number(cc.sys.localStorage.getItem("level" + window.gameModel + i) || window.levelArr[0]);
    window.currentLevel = window.maxLevel;
    window.powerControl.decreasePower(function () {
      cc.director.loadScene("game1_wenzimoniqi" + i);
    });
  }
}
exports.loadGame = function (e) {
  window.objectName_hall = n;
  cc.game.groupList = ["default"];
  cc.game.collisionMatrix = [[true]];
  if (e == "1_new") {
    window.levelArr = [44, 45, 46, 43, 32, 33, 34, 35, 36, 37, 38, 39, 40, 28, 14, 15, 16, 17, 31, 27, 18, 19, 20, 21, 22, 23, 24];
  } else if (e == "1_old") {
    window.levelArr = [13, 4, 3, 10, 2, 8, 11, 1, 5, 6];
  }
  new Date().getTime();
  for (var o = [27, 28, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 43, 44, 45, 46], t = window.levelArr.length - 1; t >= 0; t--) {
    if (o.indexOf(window.levelArr[t]) >= 0) {
      window.levelArr.splice(t, 1);
    }
  }
  var i = window.levelArr.slice(0);
  i.sort(function (e, o) {
    return e - o;
  });
  console.log(i);
  r();
};