Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getSceneName = exports.getLocalStorageLevelKey = exports.getModelLength = undefined;
exports.getModelLength = function () {
  if (window.objectName_hall == "wenzizhaobutong") {
    if (window.model == 5 || window.model == 8) {
      return "endless";
    } else {
      return window.levelMaxModel;
    }
  }
  if (window.objectName_hall == "drawLineCar") {
    return window.levelMaxModel;
  }
  if (window.objectName_hall == "migong") {
    if (window.model == 5) {
      return "endless";
    } else {
      return window.mainthis["Model" + window.model + "LevelMax"];
    }
  }
  if (window.objectName_hall == "caijiqiuqiu") {
    if (window.model == 1) {
      return 50;
    }
    if (window.model == 2) {
      return "endless";
    }
  } else if (window.objectName_hall == "ballhome") {
    if (window.model == 1) {
      return 80;
    }
    if (window.model == 2) {
      return 200;
    }
  } else {
    if (window.objectName_hall == "saimanpingzi") {
      return 10;
    }
    if (window.objectName_hall == "dongwuxiaoxiao") {
      return 2;
    }
    if (window.objectName_hall == "ballneat") {
      return 200;
    }
    if (window.objectName_hall == "shaonao") {
      return window.levelRes.length;
    }
    if (window.objectName_hall == "ballhome") {
      if (window.model == 1) {
        return 80;
      }
      if (window.model == 2) {
        return 200;
      }
    } else {
      if (window.objectName_hall == "xiaochufangkuai") {
        return "endless";
      }
      if (window.objectName_hall == "wadong") {
        return window.levelRes.length;
      }
      if (window.objectName_hall == "linegame") {
        return 30;
      }
      if (window.objectName_hall == "bachudingzi") {
        if (window.model == 1) {
          return 2;
        }
      } else {
        if (window.objectName_hall == "xiujiao") {
          return window.levelArr.length;
        }
        if (window.objectName_hall == "duzhuxiaotou") {
          return window.levelMaxModel;
        }
        if (window.objectName_hall == "jiekailalian") {
          if (window.model == 1) {
            return 2;
          }
        } else {
          if (window.objectName_hall == "zhuabufeizei") {
            return 4;
          }
          if (window.objectName_hall != "jiaotongshudao") {
            if (window.objectName_hall == "wanmeiqiege") {
              return 10;
            } else if (window.objectName_hall == "huanraosaiche") {
              return 12;
            } else if (window.objectName_hall == "duokaimengshou") {
              return 8;
            } else if (window.objectName_hall == "huashangcesuo") {
              return 14;
            } else if (window.objectName_hall == "baohuxiaoyang") {
              return 10;
            } else if (window.objectName_hall == "xiangpudazhan") {
              return 2;
            } else if (window.objectName_hall == "huabituse") {
              return 4;
            } else if (window.objectName_hall == "xianglinbutongse") {
              return 8;
            } else if (window.objectName_hall == "jiujiuxiaoyu") {
              return 10;
            } else if (window.objectName_hall == "colorEgg") {
              return 868;
            } else if (window.objectName_hall == "zhediejinshutiao") {
              return 2;
            } else if (window.objectName_hall == "laganjiuyuan") {
              return 6;
            } else if (window.objectName_hall == "zhizuoguozhi") {
              return 16;
            } else if (window.objectName_hall == "duohuiqiuya") {
              return 20;
            } else if (window.objectName_hall == "laiduomaomao") {
              return 20;
            } else if (window.objectName_hall == "jiqiduijue") {
              return 2;
            } else if (window.objectName_hall == "shuiguanxiaochu") {
              return 12;
            } else {
              return "endless";
            }
          }
          if (window.model == 1) {
            return window.levelRes.length;
          }
        }
      }
    }
  }
};
exports.getLocalStorageLevelKey = function () {
  var e = "_" + window.objectName_hall;
  if (window.objectName_hall == "wenzizhaobutong") {
    return "level" + window.model + e;
  }
  if (window.objectName_hall == "drawLineCar") {
    return "level" + window.model + e;
  }
  if (window.objectName_hall == "migong") {
    return "model" + window.model + "Level" + e;
  }
  if (window.objectName_hall == "caijiqiuqiu") {
    if (window.model == 1) {
      return "422highLevel_caijiqiuqiu";
    }
    if (window.model == 2) {
      var o = "";
      if (t = cc.sys.localStorage.getItem("GameData2_caijiqiuqiu")) {
        o = JSON.parse(t).Level;
      }
      return o;
    }
  } else {
    if (window.objectName_hall == "ballhome") {
      return "model" + window.model + "Level" + e;
    }
    if (window.objectName_hall == "ballneat") {
      o = "";
      if (t = cc.sys.localStorage.getItem("cache_ballneat")) {
        o = JSON.parse(t).level;
      }
      return o;
    }
    if (window.objectName_hall == "shaonao") {
      return "level" + window.model + e;
    }
    if (window.objectName_hall == "ballhome") {
      return "model" + window.model + "Level" + e;
    }
    if (window.objectName_hall != "xiaochufangkuai") {
      if (window.objectName_hall == "wadong") {
        return "level" + window.model + e;
      } else if (window.objectName_hall == "linegame") {
        return "level" + window.model + e;
      } else if (window.objectName_hall == "xiujiao") {
        return "levelmodel" + window.model + e;
      } else {
        return "model" + window.model + e;
      }
    }
    if ([2, 3, 4, 7, 8, 9].indexOf(window.model) >= 0) {
      return "model" + window.model + "Level" + e;
    }
    if (window.model == 6) {
      var t;
      var n = "CC_MATCH_MOVE_xiaochufangkuai";
      if (window.abnormalVersion_xiaochufangkuai) {
        n = "CC_MATCH_MOVE_model6_abnormalVersion_xiaochufangkuai";
      }
      o = "";
      if (t = cc.sys.localStorage.getItem(n)) {
        o = JSON.parse(t).level;
      }
      return o;
    }
  }
};
exports.getSceneName = function () {
  var e = window.objectName_hall;
  var o = "_" + e;
  var t = window.model;
  if (window.objectName_hall == "wadong") {
    t = window.model.replace("model", "");
  }
  return "game" + t + window.common_hall.getCommonObj("sceneSkin_model" + t + o, e) + o;
};