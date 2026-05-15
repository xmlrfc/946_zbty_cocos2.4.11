const { ccclass, property } = cc._decorator;
declare const qg, tt;

@ccclass
export default class Banner extends cc.Component {
  static TestMode: boolean = false;
  static IsNative: boolean = false;
  static RegionMask: boolean = false; //地区判断.true为有广告，false为无广告（不需要再此处手动修改，所有广告修改前往BannerManager）
  static IsLogin: boolean = false;
  private FreeInfo: number = 0; //免费跳过广告次数
  static Owner: string = `著作权人：厦门来日方长信息科技有限公司`; //健康忠告-著作权人
  static License: string = `登记号:2026SA0054418`; //健康忠告-登记号
  static AgeLimit: number = 12; //健康忠告-适龄

  static Company: string = `厦门来日方长信息科技有限公司`; //公司
  static Email: string = `gamekf_666@sina.com`; //联系邮箱

  _appId: string = "115645129";
  _videoId: string = "68a7b09b41d648ca9d6cd182861159e9";
  _customId: string = "b6009d8a84084de499ca60c00ba8f9c0";
  _bannerId: string = "5a6f0687ada34a009e6a17f5fffcf1e7";
  _carouselBoxId: string = ""; // 轮播盒子广告ID

  _year: number = 2026;
  _month: number = 4;
  _date: number = 22;
  _hour: number = 19;

  nativeAd = null; //原生广告
  bannerAd = null; //Banner广告
  customAd = null; //原生模板
  rewardedVideoAd = null; //激励视频
  carouselBoxAd = null; //轮播盒子广告

  private _videoLock: boolean = false;//鸿蒙激励视频快速点击锁
  private _isPaused: boolean = false;//游戏是否已暂停
  private _isCreatingCarouselBoxAd: boolean = false; //防止重复创建轮播盒子广告

  setFreeInfo(info: number) {
    this.FreeInfo = info;
  }
  public GetFreeInfo() {
    return this.FreeInfo;
  }
  /**Banner广告 */
  ShowBannerAd() {
    //抖音直接退出
    if (Banner.Is_DY_GAME) {
      return;
    }
    if (!this.TimeManager(this._year, this._month, this._date, this._hour, 0))
      return;

    if (!Banner.Is_HarmonyOSNext_GAME) console.log("%c弹出Banner", "color:purple; font-size:20px;");

    if (Banner.TestMode || cc.sys.platform == cc.sys.DESKTOP_BROWSER) return;

    if (Banner.Is_VIVO_GAME) {
      this.CreateVIVOBannerAd();
    }

    if (Banner.Is_OPPO_GAME) {
      this.CreateOPPOBannerAd();
    }

    if (Banner.Is_XIAOMI_GAME) {
      this.CreateXMBannerAd();
    }

    if (Banner.Is_HUAWEI_GAME) {
      this.ShowHWBannerAd();
    }

    if (Banner.Is_HarmonyOSNext_GAME) {
    }

    if (Banner.Is_Honor) {
      this.CreateHonorBannerAd();
    }

    if (Banner.Is_ANDROID) {
    }
  }

  /**原生广告 */
  ShowCustomAd() {
    //抖音直接退出
    if (Banner.Is_DY_GAME) {
      return;
    }
    console.log(Banner.Is_HUAWEI_GAME, cc.sys.platform);
    if (!this.TimeManager(this._year, this._month, this._date, this._hour, 0))
      return;

    if (!Banner.Is_HarmonyOSNext_GAME) console.log("%c弹出原生", "color:purple; font-size:20px;");

    if (Banner.TestMode || cc.sys.platform == cc.sys.DESKTOP_BROWSER) return;

    if (Banner.Is_VIVO_GAME) {
      this.CreateVIVOCustomAd();
    }

    if (Banner.Is_OPPO_GAME) {
      this.CreateOPPOCustomAd();
    }

    if (Banner.Is_XIAOMI_GAME) {
      this.CreateXMCustomAd();
    }

    if (Banner.Is_HUAWEI_GAME) {
      if (Banner.IsNative) {
        this.CreateHWNativeAd();
      } else {
        this.CreateHWCustomAd();
      }
    }

    if (Banner.Is_HarmonyOSNext_GAME) {
      //this.CreateHarmonyOsNextCustomAd();
    }

    if (Banner.Is_Honor) {
      this.CreateHonorCustomAd();
    }

    if (Banner.Is_ANDROID) {
      this.AndroidCustomAd();
    }

    this.ShowBannerAd();
    this.ShowCarouselBoxAd();
  }

  /**激励视频 */
  ShowVideoAd(callback, args?: any) {
    if (this.FreeInfo > 0) {
      //剩余免费跳过广告次数不为零就直接获取奖励
      
      this.FreeInfo -= 1;
      console.log(`免费跳过广告，剩余次数：${this.FreeInfo}`);
      if (args) {
        callback(args);
      } else {
        callback();
      }
      return;
    }
    if (!Banner.Is_HarmonyOSNext_GAME) console.log("%c弹出视频", "color:purple; font-size:20px;");

    if (Banner.TestMode || cc.sys.platform == cc.sys.DESKTOP_BROWSER) {
      // if (args) {
      //   callback(args);
      // } else {
        callback();
      // }
      return;
    }

    if (Banner.Is_VIVO_GAME) {
      this.CreateVIVORewardedVideoAd(callback, args);
    }

    if (Banner.Is_OPPO_GAME) {
      this.CreateOPPORewardedVideoAd(callback, args);
    }

    if (Banner.Is_XIAOMI_GAME) {
      this.CreateXMRewardedVideoAd(callback, args);
    }

    if (Banner.Is_HUAWEI_GAME) {
      this.CreateHWVideoAd(callback, args);
    }

    if (Banner.Is_Honor) {
      this.CreateHonorRewardedVideoAd(callback, args);
    }

    if (Banner.Is_HarmonyOSNext_GAME) {
      this.CreateHarmonyORewardVideoAd(callback, args);
    }

    if (Banner.Is_ANDROID) {
      this.CreateAndroidVideoAd(callback, args);
    }

    if (Banner.Is_DY_GAME) {
      this.CreateDYRewardedVideoAd(callback, args);
    }
  }

  /**轮播盒子广告 */
  ShowCarouselBoxAd() {
    if (!this.TimeManager(this._year, this._month, this._date, this._hour, 0))
      return;

    console.log("%c弹出轮播盒子广告", "color:purple; font-size:20px;");

    if (Banner.TestMode || cc.sys.platform == cc.sys.DESKTOP_BROWSER) return;

    if (Banner.Is_Honor) {
      this.CreateHonorCarouselBoxAd();
    }
  }



  /**创建桌面图标 */
  AddShortcut(reward: Function = null) {
    console.log("%c创建桌面图标", "color:purple; font-size:20px;");

    if (Banner.TestMode || cc.sys.platform == cc.sys.DESKTOP_BROWSER) {
      reward && reward();
      return;
    }
    if (Banner.GetBool(Banner.Key_AddShortcut)) {
      return;
    }

    if (Banner.Is_VIVO_GAME) {
      this.AddVIVOShortcut(reward);
    }

    if (Banner.Is_OPPO_GAME) {
      this.AddOPPOShortcut(reward);
    }

    if (Banner.Is_XIAOMI_GAME) {
      this.AddXMShortcut(reward);
    }
  }

  /**手机震动 */
  VibrateShort(vibrateType: VibrateType = VibrateType.Heavy) {
    console.log("%c手机短震动", "color:purple; font-size:20px;");

    if (Banner.Is_VIVO_GAME) {
      this.VIVOVibrateShort(vibrateType);
    }

    if (Banner.Is_OPPO_GAME) {
      this.OPPOVibrateShort(vibrateType);
    }

    if (Banner.Is_XIAOMI_GAME) {
      this.XMVibrateShort(vibrateType);
    }
  }

  /**手机震动 持续400ms */
  VibrateLong() {
    console.log("%c手机长震动", "color:purple; font-size:20px;");

    if (Banner.Is_VIVO_GAME) {
      this.VIVOVibrateLong();
    }

    if (Banner.Is_OPPO_GAME) {
      this.OPPOVibrateLong();
    }

    if (Banner.Is_XIAOMI_GAME) {
      this.XMVibrateLong();
    }
  }

  /**退出游戏 */
  QuitGame() {
    console.log("%c点击退出游戏", "color:purple; font-size:20px;");

    if (Banner.Is_OPPO_GAME || Banner.Is_VIVO_GAME || Banner.Is_HUAWEI_GAME) {
      qg.exitApplication({
        success: function () {
          console.log("exitApplication success");
        },
        fail: function () {
          console.log("exitApplication fail");
        },
        complete: function () {
          console.log("exitApplication complete");
        },
      });
    }

    if (Banner.Is_HarmonyOSNext_GAME) {
    }

    if (Banner.Is_ANDROID) {
      this.AndroidQuitGame();
    }
  }

  popupAdIndex: number = -1;

  //**开启原生自弹 */
  StartPopupAd(second: number = 30) {
    if (!this.TimeManager(this._year, this._month, this._date, this._hour, 0)) return;

    console.log(`开启原生自弹`);
    clearInterval(this.popupAdIndex);
    this.popupAdIndex = setInterval(() => { this.ShowCustomAd() }, 1000 * second);
  }

  //**关闭原生自弹 */
  StopPopupAd() {
    console.log(`关闭原生自弹`);
    clearInterval(this.popupAdIndex);
  }
  /**暂停游戏和音乐 */
  private PauseGame() {
    if (this._isPaused) return;

    console.log("%c暂停游戏进程和音乐", "color:orange; font-size:16px;");

    // 暂停游戏
    cc.game.pause();

    // 暂停所有音效和音乐
    cc.audioEngine.pauseAll();

    this._isPaused = true;
  }

  /**恢复游戏和音乐 */
  private ResumeGame() {
    if (!this._isPaused) return;

    console.log("%c恢复游戏进程和音乐", "color:green; font-size:16px;");

    // 恢复游戏
    cc.game.resume();

    // 恢复所有音效和音乐
    cc.audioEngine.resumeAll();

    this._isPaused = false;
  }
  /**隐藏轮播盒子广告 */
  HideCarouselBoxAd() {
    console.log("%c隐藏轮播盒子广告", "color:purple; font-size:20px;");
    if (this.carouselBoxAd) {
      try {
        this.carouselBoxAd.hide && this.carouselBoxAd.hide();
      } catch (e) {
        console.warn("隐藏轮播盒子广告失败:", e);
      }
    }
  }

  /**销毁轮播盒子广告 */
  DestroyCarouselBoxAd() {
    console.log("%c销毁轮播盒子广告", "color:purple; font-size:20px;");
    if (this.carouselBoxAd) {
      try {
        this.carouselBoxAd.destroy && this.carouselBoxAd.destroy();
        this.carouselBoxAd = null;
      } catch (e) {
        console.warn("销毁轮播盒子广告失败:", e);
      }
    }
  }
  //#region VIVO小游戏

  private CreateVIVOBannerAd() {
    try {
      if (!!this.bannerAd) this.bannerAd.destroy();
      this.bannerAd = null;
      let BannerID = Banner.Instance._bannerId;
      //@ts-ignore
      this.bannerAd = qg.createBannerAd({
        posId: BannerID,
        style: {
          //vivo
          // left: view.getVisibleSize().width / 2 - 150,
          // top: view.getVisibleSize().height + 150
        },
        adIntervals: 30,
      });

      //加载监听事件
      this.bannerAd.onLoad(() => {
        console.log("Banner广告加载成功");
      });
      this.bannerAd.onSize(this.BannerOnSizeCallback);
      this.bannerAd.onError((e) =>
        console.log(`Banner出现错误：${JSON.stringify(e)}`)
      );
      this.bannerAd.show();
    } catch (error) {
      console.log("Banner展示失败：" + error.message);
    }
  }

  private CreateVIVOCustomAd() {
    try {
      if (!!this.customAd) this.customAd.destroy();
      this.customAd = null;
      let BannerID = Banner.Instance._customId;

      this.customAd = qg.createCustomAd({
        posId: BannerID,
        style: {
          gravity: `center`,
        },
      });

      this.customAd.onError((err) =>
        console.error(`原生广告出现错误：${JSON.stringify(err)}`)
      );
      this.customAd
        .show()
        .then(() => console.log("原生模板广告展示完成"))
        .catch((err) =>
          console.log("原生模板广告展示失败", JSON.stringify(err))
        );
      this.customAd.onClose(() => { });
    } catch (error) {
      console.error(error);
    }
  }

  private CreateVIVORewardedVideoAd(callback, args?: any) {
    try {
      if (!!this.rewardedVideoAd) this.rewardedVideoAd.destroy();
      this.rewardedVideoAd = null;

      //@ts-ignore
      this.rewardedVideoAd = qg.createRewardedVideoAd({
        posId: Banner.Instance._videoId,
      });

      this.rewardedVideoAd.load();

      this.rewardedVideoAd.onLoad((data) => {
        this.PauseGame(); // 暂停游戏
        this.rewardedVideoAd.show();
        console.info("激励视频数据拉取成功: ", data);
      });

      this.rewardedVideoAd.onError((e) => {
        this.ResumeGame(); // 恢复游戏
        qg.showToast({ message: "激励视频加载失败" });
        console.error(`激励视频出现错误：${JSON.stringify(e)}`);
      });

      this.rewardedVideoAd.onClose((res) => {
        this.ResumeGame(); // 恢复游戏
        if (res && res.isEnded) {
          args ? callback(args) : callback();
          console.log("正常播放结束，可以下发游戏奖励");
        } else {
          console.log("播放中途退出，不下发游戏奖励");
          setTimeout(() => {
            Banner.Instance.ShowCustomAd();
          }, 1000);
        }
      });
    } catch (error) {
      this.ResumeGame(); // 恢复游戏
      console.error(`激励视频异常信息：${error.message}`);
    }
  }

  private AddVIVOShortcut(reward: Function) {
    qg.hasShortcutInstalled({
      success: function (status) {
        if (status) {
          console.log(`已创建桌面图标`);
          Banner.SetBool(Banner.Key_AddShortcut, true);
        } else {
          //@ts-ignore
          qg.installShortcut({
            success: function () {
              reward && reward();
              console.log(`建桌面图标成功`);
            },
          });
        }
      },
    });
  }

  //触发较短时间震动，持续15ms
  private VIVOVibrateShort(vibrateType: VibrateType) {
    qg.vibrateShort({
      type: vibrateType,
      success: function (res) {
        console.log(`震动成功：${JSON.stringify(res)}`);
      },
      fail: function (res) {
        console.log(`震动失败：${JSON.stringify(res)}`);
      },
      complete: function (res) { },
    });
  }

  //触发较长时间震动，持续400ms
  private VIVOVibrateLong() {
    qg.vibrateLong();
  }

  //#endregion

  //#region OPPO小游戏

  private CreateOPPOBannerAd() {
    if (!this.TimeManager(this._year, this._month, this._date, this._hour, 0))
      return;

    try {
      if (!!this.bannerAd) this.bannerAd.destroy();
      this.bannerAd = null;
      this.bannerAd = qg.createBannerAd({
        posId: Banner.Instance._bannerId,
        // style: {
        //     top: 300,
        //     left: 0,
        //     width: 900,
        //     height: 300
        // },
        adIntervals: 30,
      });
      this.bannerAd.onLoad(() => {
        console.log("Banner广告加载成功");
      });
      this.bannerAd.onError((e) =>
        console.error(`Banner广告出现错误：${JSON.stringify(e)}`)
      );
      this.bannerAd.onResize(this.BannerOnSizeCallback);
      this.bannerAd.show();
    } catch (error) {
      console.error("Banner展示失败：" + error.message);
    }
  }

  //版本号>=1094
  private CreateOPPOCustomAd() {
    try {
      if (!!this.customAd) this.customAd.destroy();
      this.customAd = null;
      this.customAd = qg.createCustomAd({
        posId: Banner.Instance._customId,
        style: {
          top: qg.getSystemInfoSync().screenHeight / 2 - 120,
          // left: 0,
          // width: qg.getSystemInfoSync().screenWidth,
        },
      });

      this.customAd.onLoad(() => console.log(`原生广告加载成功`));
      this.customAd.onError((err) =>
        console.error(`原生广告出现错误：${JSON.stringify(err)}`)
      );
      this.customAd
        .show()
        .then(() => console.log("原生模板广告展示完成"))
        .catch((err) =>
          console.error(`原生广告出现错误：${JSON.stringify(err)}`)
        );
      this.customAd.onHide(() => { });
    } catch (error) {
      console.log(error);
    }
  }

  private CreateOPPORewardedVideoAd(callback, args?: any) {
    try {
      if (!!this.rewardedVideoAd) this.rewardedVideoAd.destroy();
      this.rewardedVideoAd = null;

      //@ts-ignore
      this.rewardedVideoAd = qg.createRewardedVideoAd({
        adUnitId: Banner.Instance._videoId,
      });

      this.rewardedVideoAd.load();

      this.rewardedVideoAd.onLoad((data) => {
        this.PauseGame(); // 暂停游戏
        this.rewardedVideoAd.show();
        console.info("激励视频数据拉取成功: ", data);
      });

      this.rewardedVideoAd.onError((e) => {
        this.ResumeGame(); // 恢复游戏
        qg.showToast({ message: "激励视频加载失败" });
        console.error(`激励视频出现错误：${JSON.stringify(e)}`);
      });

      this.rewardedVideoAd.onClose((res) => {
        this.ResumeGame(); // 恢复游戏
        console.log("视频广告关闭回调");
        if (res && res.isEnded) {
          args ? callback(args) : callback();
          console.log("正常播放结束，可以下发游戏奖励");
        } else {
          console.log("播放中途退出，不下发游戏奖励");
        }
      });
    } catch (error) {
      this.ResumeGame(); // 恢复游戏
      console.error("激励视频异常信息：" + error.message);
    }
  }

  private AddOPPOShortcut(reward: Function) {
    //@ts-ignore
    qg.hasShortcutInstalled({
      success: function (status) {
        // 判断图标未存在时，创建图标
        if (status == false) {
          //@ts-ignore
          qg.installShortcut({
            success: function () {
              reward && reward();
              console.log(`创建桌面图标成功`);
              Banner.SetBool(Banner.Key_AddShortcut, true);
            },
            fail: function (err) {
              console.log(`创建桌面图标失败：${err}`);
            },
            complete: function () { },
          });
        }
      },
      fail: function (err) {
        console.log(`创建桌面图标失败：${err}`);
      },
    });
  }

  //使手机发生较短时间的振动（20 ms）
  private OPPOVibrateShort(vibrateType: VibrateType) {
    //@ts-ignore
    qg.vibrateShort({
      type: vibrateType,
      success: function (res) { },
      fail: function (res) { },
      complete: function (res) { },
    });
  }

  //触发较长时间震动，持续400ms
  private OPPOVibrateLong() {
    //@ts-ignore
    qg.vibrateLong({
      success: function (res) { },
      fail: function (res) { },
      complete: function (res) { },
    });
  }

  //#endregion

  //#region 小米小游戏

  private CreateXMBannerAd() {
    if (!this.TimeManager(this._year, this._month, this._date, this._hour, 0))
      return;

    try {
      if (!!this.bannerAd) this.bannerAd.destroy();
      this.bannerAd = null;
      let BannerID = Banner.Instance._bannerId;
      //@ts-ignore
      this.bannerAd = qg.createBannerAd({
        adUnitId: BannerID,
        style: {
          //vivo
          // left: view.getVisibleSize().width / 2 - 150,
          // top: view.getVisibleSize().height + 150
        },
        adIntervals: 30,
      });

      //加载监听事件
      this.bannerAd.onLoad(() => {
        console.log("Banner广告加载成功");
      });
      // this.bannerAd.onSize(this.BannerOnSizeCallback);
      this.bannerAd.onError((e) =>
        console.log(`Banner出现错误：${JSON.stringify(e)}`)
      );
      this.bannerAd.show();
    } catch (error) {
      console.log("Banner展示失败：" + error.message);
    }
  }

  private CreateXMCustomAd() {
    if (!this.TimeManager(this._year, this._month, this._date, this._hour, 0))
      return;

    try {
      if (!!this.customAd) this.customAd.destroy();
      this.customAd = null;
      let BannerID = Banner.Instance._customId;

      //@ts-ignore
      this.customAd = qg.createCustomAd({
        adUnitId: BannerID,
        style: {
          top: qg.getSystemInfoSync().screenHeight / 2 - 120,
          // gravity: `center`,
        },
      });

      this.customAd.onError((err) =>
        console.error(`原生广告出现错误：${JSON.stringify(err)}`)
      );
      this.customAd
        .show()
        .then(() => console.log("原生模板广告展示完成"))
        .catch((err) =>
          console.log("原生模板广告展示失败", JSON.stringify(err))
        );
      this.customAd.onClose(() => { });
    } catch (error) {
      console.error(error);
    }
  }

  private CreateXMRewardedVideoAd(callback, args?: any) {
    try {
      if (!!this.rewardedVideoAd)
        // this.rewardedVideoAd.destroy();
        this.rewardedVideoAd = null;

      //@ts-ignore
      this.rewardedVideoAd = qg.createRewardedVideoAd({
        adUnitId: Banner.Instance._videoId,
      });

      this.rewardedVideoAd.load();

      this.PauseGame(); // 暂停游戏
      this.rewardedVideoAd.show();

      this.rewardedVideoAd.onLoad((data) => {

        console.info("激励视频数据拉取成功: ", data);
      });

      this.rewardedVideoAd.onError((e) => {
        this.ResumeGame(); // 恢复游戏
        qg.showToast({ message: "激励视频加载失败" });
        console.error(`激励视频出现错误：${JSON.stringify(e)}`);
      });

      this.rewardedVideoAd.onClose((res) => {
        this.ResumeGame(); // 恢复游戏
        if (res && res.isEnded) {
          args ? callback(args) : callback();
          console.log("正常播放结束，可以下发游戏奖励");
        } else {
          console.log("播放中途退出，不下发游戏奖励");
          setTimeout(() => {
            Banner.Instance.ShowCustomAd();
          }, 1000);
        }
      });
    } catch (error) {
      this.ResumeGame(); // 恢复游戏
      console.error(`激励视频异常信息：${error.message}`);
    }
  }

  private AddXMShortcut(reward: Function) {
    qg.hasShortcutInstalled({
      success: function (status) {
        if (status) {
          console.log(`已创建桌面图标`);
          Banner.SetBool(Banner.Key_AddShortcut, true);
        } else {
          //@ts-ignore
          qg.installShortcut({
            success: function () {
              reward && reward();
              console.log(`建桌面图标成功`);
            },
          });
        }
      },
    });
  }

  //触发较短时间震动，持续15ms
  private XMVibrateShort(vibrateType: VibrateType) {
    qg.vibrateShort({
      type: vibrateType,
      success: function (res) {
        console.log(`震动成功：${JSON.stringify(res)}`);
      },
      fail: function (res) {
        console.log(`震动失败：${JSON.stringify(res)}`);
      },
      complete: function (res) { },
    });
  }

  //触发较长时间震动，持续400ms
  private XMVibrateLong() {
    qg.vibrateLong();
  }

  //#endregion

  //#region HUAWEI小游戏

  private DestroyVideoAd() {
    try {
      //如果已经有了对象则先销毁对象
      console.log("rewardedVideoAd this.destroy", this.rewardedVideoAd);
      if (
        !(typeof this.rewardedVideoAd == "undefined") ||
        this.rewardedVideoAd == null
      ) {
        console.log("rewardedVideoAd this.destroy");
        this.rewardedVideoAd.offLoad();
        //this.rewardedVideoAd.offError();
        this.rewardedVideoAd.offClose();
        this.rewardedVideoAd.destroy();
        this.rewardedVideoAd = null;
      }
    } catch (error) {
      console.log("异常信息：" + error.message);
    }
  }

  private CreateHWVideoAd(callback, args?: any) {
    this.DestroyVideoAd();
    try {
      if (this.rewardedVideoAd == null) {
        //@ts-ignore
        this.rewardedVideoAd = qg.createRewardedVideoAd({
          adUnitId: this._videoId,
        });

        this.rewardedVideoAd.load();
        this.rewardedVideoAd.onLoad((data) => {
          this.PauseGame(); // 暂停游戏
          this.rewardedVideoAd.show();
          console.info("激励视频数据拉取成功: ", data);
        });
        this.rewardedVideoAd.onError((e) => {
          this.ResumeGame(); // 恢复游戏
          qg.showToast({ message: "激励视频加载失败" });
          console.error("load ad error:" + JSON.stringify(e));
          console.log("load ad error:" + e.errMsg, e.errCode);
        });
        this.rewardedVideoAd.onClose((res) => {
          this.ResumeGame(); // 恢复游戏
          console.log("视频广告关闭回调");
          if (res && res.isEnded) {
            if (args) {
              callback(args);
            } else {
              callback();
            }
            console.log("正常播放结束，可以下发游戏奖励");
          } else {
            console.log("播放中途退出，不下发游戏奖励");
          }
        });
      } else {
        this.rewardedVideoAd.load();
      }
    } catch (error) {
      this.ResumeGame(); // 恢复游戏
      console.error("激励视频异常信息：" + error.message);
    }
  }

  HWGameLogin(successCallback, failCallback) {
    console.log(`HW游戏登陆...`);

    if (Banner.TestMode || cc.sys.platform == cc.sys.DESKTOP_BROWSER) {
      successCallback();
      return;
    }

    qg.gameLoginWithReal({
      forceLogin: 1,
      appid: this._appId,
      success: (data) => {
        console.log(`HW游戏登陆成功：${JSON.stringify(data)}`);
        successCallback();
      },
      fail: (data, code) => {
        console.error(`HW游戏登陆失败：${data} -data：${data} -code：${code}`);
        //状态码为7004或者2012，表示玩家取消登录。
        //此时，建议返回游戏界面，可以让玩家重新进行登录操作。
        if (code == 7004 || code == 2012) {
          console.log("玩家取消登录，返回游戏界面让玩家重新登录。");
          failCallback();
        }
        //状态码为7021表示玩家取消实名认证。
        //在中国大陆的情况下，此时需要禁止玩家进入游戏。
        if (code == 7021) {
          console.log(
            "The player has canceled identity verification. Forbid the player from entering the game."
          );
          cc.game.end();
        }
      },
    });
  }

  private CreateHWCustomAd(bannerID?: string) {
    try {
      if (!!this.customAd) this.customAd.destroy();
      this.customAd = null;
      let BannerID = Banner.Instance._customId;
      if (bannerID != null) {
        BannerID = bannerID;
      }
      //@ts-ignore
      this.customAd = qg.createNativeAd({
        adUnitId: BannerID,
        success: (code) => {
          console.log("loadNativeAd loadNativeAd : success");
        },
        fail: (data, code) => {
          console.log("loadNativeAd loadNativeAd fail: " + data + "," + code);
        },
        complete: () => {
          console.log("loadNativeAd loadNativeAd : complete");
        },
      });

      this.customAd.onLoad((data) => {
        console.info("ad data loaded: " + JSON.stringify(data));
      });
      this.customAd.load();

      // this.customAd = ad.createInterstitialAd({
      //     adUnitId: this._customId
      // });

      // this.customAd.onLoad(function (data) { console.log(`原生广告加载成功:` + JSON.stringify(data)); });
      // this.customAd.onError((err) => { console.log(`原生广告出现错误：${JSON.stringify(err)}`) });
      // this.customAd.show().then(() => { console.log('插屏广告show成功') }, () => { console.log('插屏广告show失败') });
    } catch (error) {
      console.error(`原生广告出现错误：${JSON.stringify(error)}`);
    }
  }

  private ShowHWBannerAd(bannerID?: string) {
    try {
      console.log(`加载 HWBanner ...`);
      // this.DestroyOPPOBanner();
      let BannerID = Banner.Instance._bannerId;
      if (bannerID != null) {
        BannerID = bannerID;
      }
      //@ts-ignore
      var height = qg.getSystemInfoSync().safeArea.height;
      //@ts-ignore
      this.bannerAd = qg.createBannerAd({
        adUnitId: BannerID,
        style: {
          top: height - 57,
          left: 0,
          height: 57,
          width: 360,
        },
      });

      //加载监听事件
      this.bannerAd.onLoad();
      this.bannerAd.onClose();
      this.bannerAd.onError((e) => {
        const errCode = e.errCode;
        const errMsg = e.errMsg;
        console.error(
          `HWBanner 广告数据拉取失败:[${JSON.stringify(
            e
          )}]-[${errMsg}]-[${errCode}]`
        );
      });

      console.log(`加载 HWBanner 成功`);

      this.bannerAd.show();
    } catch (error) {
      console.error("Banner展示失败：" + error.message);
    }
  }

  //#endregion

  //#region 鸿蒙

  private CreateHarmonyOsNextBannerAd() {
    return;
    console.log(`弹出鸿蒙 Banner 广告`);
    jsb.reflection.callStaticMethod("entry/src/main/ets/pages/index", "showBanner", null, false);
  }

  private CreateHarmonyOsNextCustomAd() {
    return;
    console.log(`弹出鸿蒙 原生 广告`);
    //@ts-ignore
    // jsb.reflection.callStaticMethod(true, "entry/src/main/ets/interface/OHOSSDK", "entry/loadInterstitialAds", "");
  }

  private CreateHarmonyORewardVideoAd(callback, args?: any) {
    // 快速点击保护
    if (this._videoLock) return;

    setTimeout(() => {
      this._videoLock = false;
    }, 2000);

    this._videoLock = true;

    console.log(`弹出鸿蒙 激励视频 广告`);
    this.PauseGame(); // 暂停游戏
    //@ts-ignore
    jsb.reflection.callStaticMethod(false, "entry/src/main/ets/interface/OHOSSDK", "entry/loadRewardAds", "param")

    //@ts-ignore
    window.CallBack = () => {
      this._videoLock = false;
      this.ResumeGame(); // 恢复游戏
      callback && callback(args)
    }

    //@ts-ignore
    window.CallBackFail = () => {
      this._videoLock = false;
      this.ResumeGame(); // 恢复游戏
      console.log("鸿蒙激励视频播放失败或中途退出");
    }

  }

  private HarmonyOsNexQuit() {
    console.log(`鸿蒙退出游戏`);
    jsb.reflection.callStaticMethod("entry/src/main/ets/interface/OHOSSDK", "entry/exitGame", "param", true);
  }

  HarmonyOsNexPrivacy() {
    console.log(`弹出鸿蒙隐私`);
    //@ts-ignore
    if (Banner.Is_HarmonyOSNext_GAME) jsb.reflection.callStaticMethod(true, "entry/src/main/ets/interface/OHOSSDK", "entry/Privacy", "");
  }

  //#endregion

  //#region 荣耀小游戏

  private CreateHonorBannerAd() {
    try {
      if (!!this.bannerAd) this.bannerAd.destroy();
      this.bannerAd = null;
      //@ts-ignore
      this.bannerAd = qg.createBannerAd({
        adUnitId: Banner.Instance._bannerId,
        style: {
          left: 0,
          top: 0,
          gravity: "bottom|center"
        }
      });

      //加载监听事件
      this.bannerAd.load().then(() => {
        console.log('广告加载成功')
      })
      // this.bannerAd.onResize(this.BannerOnSizeCallback);
      this.bannerAd.onError((e) =>
        console.log(`Banner出现错误：${JSON.stringify(e)}`)
      );
      this.bannerAd.show().then(() => {
        console.log('Banner广告展示成功')
      })
    } catch (error) {
      console.log("Banner展示失败：" + error.message);
    }
  }

  private CreateHonorCustomAd() {
    try {
      if (!!this.customAd) this.customAd.destroy();
      this.customAd = null;

      this.customAd = qg.createNativeAd({
        adUnitId: Banner.Instance._customId,
        style: {
          top: 0,
          left: 0,
          gravity: "center"
        },
      });

      this.customAd.load().then(() => {
        console.log('原生广告加载成功')
      })

      this.customAd.show().then(() => {
        console.log('原生广告显示成功')
      })

      this.customAd.onError((err) =>
        console.error(`原生广告出现错误：${JSON.stringify(err)}`)
      );

      this.customAd.onClose(() => { });
    } catch (error) {
      console.error(error);
    }
  }

  private CreateHonorRewardedVideoAd(callback, args?: any) {
    try {
      if (!!this.rewardedVideoAd) this.rewardedVideoAd.destroy();
      this.rewardedVideoAd = null;

      this.rewardedVideoAd = qg.createRewardedVideoAd({
        adUnitId: Banner.Instance._videoId,
      });

      this.rewardedVideoAd.load().then(() => {
        console.log('激励广告加载成功')
      })

      this.PauseGame(); // 暂停游戏
      this.rewardedVideoAd.show().then(() => {
        console.log('激励广告展示成功')
      })

      this.rewardedVideoAd.onError((e) => {
        this.ResumeGame(); // 恢复游戏
        qg.showToast({ message: "激励视频加载失败" });
        console.error(`激励视频出现错误：${JSON.stringify(e)}`);
      });

      this.rewardedVideoAd.onClose((res) => {
        this.ResumeGame(); // 恢复游戏
        if (res && res.isEnded) {
          args ? callback(args) : callback();
          console.log("正常播放结束，可以下发游戏奖励");
        } else {
          console.log("播放中途退出，不下发游戏奖励");
          setTimeout(() => {
            Banner.Instance.ShowCustomAd();
          }, 1000);
        }
      });
    } catch (error) {
      this.ResumeGame(); // 恢复游戏
      console.error(`激励视频异常信息：${error.message}`);
    }
  }

  // 创建荣耀轮播盒子广告
  private CreateHonorCarouselBoxAd() {
    // 防止重复创建
    if (this._isCreatingCarouselBoxAd) {
      console.log("轮播盒子广告正在创建中，跳过");
      return;
    }

    try {
      this._isCreatingCarouselBoxAd = true;

      // 销毁旧广告
      if (this.carouselBoxAd) {
        this.carouselBoxAd.destroy();
      }
      this.carouselBoxAd = null;

      // 创建轮播盒子广告
      this.carouselBoxAd = qg.createCarouselBoxAd({
        adUnitId: this._carouselBoxId,
        style: {  // 使用默认位置（底部居中），如需自定义位置可取消注释
          left: 0,
          top: 0,
          gravity: "top|center_horizontal"
        },
        backgroundColor: 'white', // white 或 black
        orientation: 'horizontal' // vertical 或 horizontal
      });

      console.log('carouselBoxAd:', this.carouselBoxAd);

      // 监听加载事件
      this.carouselBoxAd.onLoad((data) => {
        console.log('轮播盒子广告加载成功:', data);
        this._isCreatingCarouselBoxAd = false;
      });

      // 监听尺寸变化事件
      this.carouselBoxAd.onResize((data) => {
        console.log('轮播盒子广告尺寸变化:', data);
      });

      // 监听显示事件
      this.carouselBoxAd.onShow((data) => {
        console.log('轮播盒子广告显示:', data);
      });

      // 监听隐藏事件
      this.carouselBoxAd.onHide((data) => {
        console.log('轮播盒子广告隐藏:', data);
      });

      // 监听关闭事件
      this.carouselBoxAd.onClose((data) => {
        console.log('轮播盒子广告关闭:', data);
        this._isCreatingCarouselBoxAd = false;
      });

      // 监听错误事件
      this.carouselBoxAd.onError((err) => {
        console.error('轮播盒子广告错误:', JSON.stringify(err));
        this._isCreatingCarouselBoxAd = false;

        // 错误码说明
        if (err.errCode === 1000) {
          console.error('无网络');
        } else if (err.errCode === 1001) {
          console.error('广告单元无效');
        } else if (err.errCode === 1002) {
          console.error('无可用的广告');
        } else if (err.errCode === 1003) {
          console.error('广告单元已关闭');
        } else if (err.errCode === 1004) {
          console.error('内部错误，子错误码:', err.subErrCode);
        }
      });

      // 加载广告
      this.carouselBoxAd.load()
        .then(() => {
          console.log('轮播盒子广告加载完成');
          // 加载完成后展示广告
          return this.carouselBoxAd.show();
        })
        .then(() => {
          console.log('轮播盒子广告展示成功');
        })
        .catch((err) => {
          console.error('轮播盒子广告操作失败:', JSON.stringify(err));
          this._isCreatingCarouselBoxAd = false;
        });

    } catch (error) {
      console.error('创建轮播盒子广告异常:', error);
      this._isCreatingCarouselBoxAd = false;
    }
  }



  //#endregion

  //#region 快手小游戏

  private CreateKSCustomAd(bannerID?: string) {
    this.DestroyKSCustomAd();
    try {
      let param = {};
      let BannerID = Banner.Instance._customId;
      if (bannerID != null) {
        BannerID = bannerID;
      }
      //@ts-ignore
      param.adUnitId = BannerID;
      //@ts-ignore
      this.customAd = ks.createInterstitialAd(param);
      if (this.customAd) {
        this.customAd.onClose((res) => {
          // 插屏广告关闭事件
        });
        this.customAd.onError((res) => {
          // 插屏广告Error事件
        });
        let p = this.customAd.show();
        p.then(function (result) {
          // 插屏广告展示成功
          console.log(`show interstitial ad success, result is ${result}`);
        }).catch(function (error) {
          // 插屏广告展示失败
          console.log(`show interstitial ad failed, error is ${error}`);
          if (error.code === -10005) {
            // 表明当前app版本不支持插屏广告，可以提醒用户升级app版本
          }
        });
      } else {
        console.log("创建插屏广告组件失败");
      }
    } catch (error) {
      console.log(error);
    }
  }

  private DestroyKSCustomAd() {
    try {
      if (this.customAd != null) {
        this.customAd.destroy();
        this.customAd = null;
        console.log("销毁原来存在的原生");
      }
    } catch (error) {
      console.log("异常信息：" + error.message);
    }
  }

  private CreateKSRewardedVideoAd(callback, args?: any) {
    this.DestroyKSVideoAd();

    let param = {};
    //@ts-ignore
    param.adUnitId = this._videoId;
    //@ts-ignore
    param.multiton = true; //需要注意再看一个生效的版本11.11.40
    //@ts-ignore
    param.multitonRewardMsg = ["更多奖励1"];
    //@ts-ignore
    param.multitonRewardTimes = 1;
    //@ts-ignore
    param.progressTip = false;
    //@ts-ignore
    this.rewardedVideoAd = ks.createRewardedVideoAd(param);
    if (this.rewardedVideoAd) {
      this.rewardedVideoAd.onClose((res) => {
        // 用户点击了【关闭广告】按钮
        if (res && res.isEnded) {
          // 正常播放结束，可以下发游戏奖励
          if (args != null) {
            callback(args);
          } else {
            callback();
          }
        } else {
          // 播放中途退出，不下发游戏奖励
        }
      });
      this.rewardedVideoAd.onError((res) => {
        // 激励视频广告Error事件
        console.error(`show rewarded video ad failed, error is ${res}`);
      });
      let p = this.rewardedVideoAd.show();
      p.then(function (result) {
        // 激励视频展示成功
        console.log(`show rewarded video ad success, result is ${result}`);
      }).catch(function (error) {
        // 激励视频展示失败
        console.error(`show rewarded video ad failed, error is ${error}`);
      });
    } else {
      console.log("创建激励视频组件失败");
    }
  }

  private DestroyKSVideoAd() {
    try {
      if (
        !(typeof this.rewardedVideoAd == "undefined") ||
        this.rewardedVideoAd != null
      ) {
        this.rewardedVideoAd.destroy();
        this.rewardedVideoAd = null;
        console.log("销毁原来存在的激励视频");
      }
    } catch (error) {
      console.log("异常信息：" + error.message);
    }
  }

  private AddKSShortcut(reward) {
    //@ts-ignore
    ks.addShortcut({
      success() {
        console.log("添加桌面成功");
        Banner.SetBool(Banner.Key_AddShortcut, true);
        reward && reward();
      },
      fail(err) {
        if (err.code === -10005) {
          console.log("暂不支持该功能");
        } else {
          console.log("添加桌面失败", err.msg);
        }
      },
    });
  }
  //#endregion

  //#region 抖音小游戏
  private CreateDYRewardedVideoAd(callback, args?: any) {
    // 如果已存在广告实例，先销毁
    this.DestroyDYVideoAd();

    let param: any = {};
    param.adUnitId = this._videoId; // 假设 this._videoId 已存储广告位ID
    param.multiton = true; // 再看一个功能，注意支持版本
    param.multitonRewardMsg = ["更多奖励1"]; // 再看一个时的提示文案
    param.multitonRewardTimes = 1; // 再看一个可获得的奖励次数
    param.progressTip = false; // 是否显示进度提示，可选

    // 创建抖音激励视频广告实例
    this.rewardedVideoAd = tt.createRewardedVideoAd(param);

    if (this.rewardedVideoAd) {
      // 监听广告关闭事件
      this.rewardedVideoAd.onClose((res) => {
        if (res && res.isEnded) {
          // 完整观看，发放奖励
          if (args != null) {
            callback(args);
          } else {
            callback();
          }
        } else {
          // 未完整观看，不发放奖励
          console.log("用户未完整观看广告");
        }
      });

      // 监听广告错误事件
      this.rewardedVideoAd.onError((err) => {
        console.error(`抖音激励视频广告错误: ${err.errMsg}`, err);
        // 可在此进行错误上报或提示用户
      });

      // 显示广告
      this.rewardedVideoAd.show().then((result) => {
        console.log("抖音激励视频广告展示成功", result);
      }).catch((error) => {
        console.error("抖音激励视频广告展示失败", error);
        // 展示失败时可尝试重新加载
        this.rewardedVideoAd.load().then(() => {
          this.rewardedVideoAd.show();
        }).catch((loadErr) => {
          console.error("重试加载广告失败", loadErr);
        });
      });
    } else {
      console.error("创建抖音激励视频广告实例失败");
    }
  }

  // 销毁广告实例的方法，可在类中定义
  private DestroyDYVideoAd() {
    try {
      if (this.rewardedVideoAd) {
        this.rewardedVideoAd.destroy();
        this.rewardedVideoAd = null;
        console.log("销毁原来存在的激励视频");
      }
    } catch (error) {
      console.log("异常信息：" + error.message);
    }
  }


  //#endregion

  //#region 自渲染

  dUnitVideoUrlList = null; //广告视频
  adUnitImgUrl = null; //广告图片
  adUnitAdid = null; //广告标识，用于上报曝光与点击
  adUnitCreativeType = null; //获取广告类型，取值说明如下：
  adUnitInteractionType = null; //获取广告点击之后的交互类型
  source = null; //广告来源
  title = null; //广告标题
  logoUrl = null; //广告标签图片
  clickBtnTxt = null; //点击按钮文本描述
  yuansheng_Node = null;

  private CreateHWNativeAd(bannerID?: string) {
    if (
      !this.TimeManager(
        this._year,
        this._month,
        this._date,
        this._hour,
        this._hour
      )
    )
      return;
    try {
      this.DestroyNative();

      console.log(`加载 HW原生自渲染...`);
      let BannerID = Banner.Instance._customId;
      if (bannerID != null) {
        BannerID = bannerID;
      }
      //@ts-ignore
      this.nativeAd = qg.createNativeAd({
        adUnitId: BannerID,
        style: {
          left: 0,
          top: 0,
        },
      });
      this.nativeAd.load();
      this.nativeAd.onLoad((data) => {
        // var _data = eval(JSON.stringify(data));
        // BannerAd.adUnitVideoUrlList = _data.adList[0]
        this.adUnitImgUrl = data.adList[0].imgUrlList[0];
        this.adUnitAdid = data.adList[0].adId;
        this.adUnitCreativeType = data.adList[0].creativeType;
        this.adUnitInteractionType = data.adList[0].interactionType;
        this.source = data.adList[0].source;
        this.title = data.adList[0].title;
        this.logoUrl = data.adList[0].logoUrl;
        this.clickBtnTxt = data.adList[0].clickBtnTxt;

        // this.NativeImage.spriteFrame.setTexture = this.adUnitImgUrl;
        // this.NativeImage.node.active = true;
        console.info(
          "广告数据拉取成功: " + "图片路径",
          this.adUnitImgUrl + "\n",
          "广告标识，adid",
          this.adUnitAdid + "\n",
          "广告类型",
          this.adUnitCreativeType + "\n",
          "广告点击之后的交互类型",
          this.adUnitInteractionType + "\n",
          "广告来源",
          this.source + "\n",
          "广告标题",
          this.title + "\n",
          "广告标签图片",
          this.logoUrl + "\n",
          "点击按钮文本描述",
          this.clickBtnTxt
        );

        cc.resources.load("NativeAd", cc.Prefab, function (err, res) {
          console.log(`加载 HW原生自渲染预制体...`);
          if (err) {
            console.error(`预制体不存在:"NativeAd [${err}]"`);
            return;
          }
          if (Banner.Instance.yuansheng_Node != null) {
            Banner.Instance.yuansheng_Node.destroy();
          }
          Banner.Instance.yuansheng_Node = cc.instantiate(res);

          Banner.Instance.yuansheng_Node.parent = cc.find("Canvas");
          Banner.Instance.yuansheng_Node.setPosition(0, 0, 0);
          console.log(`加载 HW原生自渲染预制体成功`);
          Banner.Instance.yuansheng_Node.setSiblingIndex(999);
          // Banner.Instance.yuansheng_Node.zIndex = 500;
        }
        );
      });

      this.nativeAd.onError((e) => {
        const errCode = e.errCode;
        const errMsg = e.errMsg;
        console.error(
          `HW 自渲染广告数据拉取失败:[${JSON.stringify(
            e
          )}]-[${errMsg}]-[${errCode}]`
        );
      });

      console.log(`加载 HW原生自渲染成功`);
    } catch (error) {
      console.error("HW原生自渲染失败：" + error.message);
    }
  }

  private DestroyNative() {
    try {
      if (this.nativeAd != null) {
        this.nativeAd.offLoad();
        this.nativeAd.destroy();
        console.log("原生销毁：");
        // this.nativeAd.offError();
      } else {
        // this.nativeAd.offError();
      }
    } catch (error) {
      console.log("异常信息：" + error.message);
    }
  }

  //#endregion

  //#region 安卓

  private AndroidCustomAd() {
    jsb.reflection.callStaticMethod(
      "org/cocos2dx/javascript/AppActivity",
      "ChaPing",
      "()V"
    );
  }

  private CreateAndroidVideoAd(callback, args?: any) {
    this.PauseGame(); // 暂停游戏
    jsb.reflection.callStaticMethod(
      "org/cocos2dx/javascript/AppActivity",
      "GameVideo1",
      "()V"
    );
    const self = this;
    //@ts-ignore
    cc.playVideoSuccess1 = function () {
      self.ResumeGame(); // 恢复游戏
      callback && callback(args);
    };
  }

  AndroidKeFu() {
    if (Banner.Is_ANDROID) {
      jsb.reflection.callStaticMethod(
        "org/cocos2dx/javascript/AppActivity",
        "KeFu",
        "()V"
      );
    }
    console.log("点击联系客服");
  }

  AndriodPrivacy() {
    if (Banner.Is_ANDROID) {
      jsb.reflection.callStaticMethod(
        "org/cocos2dx/javascript/AppActivity",
        "Hide",
        "()V"
      );
    }
    console.log("点击隐私政策");
  }

  AndroidLogout() {
    if (Banner.Is_ANDROID) {
      jsb.reflection.callStaticMethod(
        "org/cocos2dx/javascript/AppActivity",
        "cleanPackageData",
        "()V"
      );
    }
    console.log("点击注销");
  }

  AndroidMoreGame() {
    if (Banner.Is_ANDROID) {
      jsb.reflection.callStaticMethod(
        "org/cocos2dx/javascript/AppActivity",
        "MoreGame",
        "()V"
      );
    }
    console.log("点击更多精彩");
  }

  private AndroidQuitGame() {
    jsb.reflection.callStaticMethod(
      "org/cocos2dx/javascript/AppActivity",
      "QuitGame",
      "()V"
    );
  }

  //#endregion

  TimeManager(_year, _month, _date, _h, _m): boolean {
    var nowdate = new Date();
    var year = nowdate.getFullYear(); //年
    var month = nowdate.getMonth() + 1; //月 获取当前月（注意：返回数值为0~11，需要自己+1来显示）
    var date = nowdate.getDate(); //日
    var day = nowdate.getDay(); //周几
    var h = nowdate.getHours(); //小时
    var m = nowdate.getMinutes(); //分钟
    var s = nowdate.getSeconds(); //秒

    if (year > _year) {
      return true;
    } else if (year == _year) {
      if (month > _month) {
        return true;
      } else if (month == _month) {
        if (date > _date) {
          return true;
        } else if (date == _date) {
          if (h > _h) {
            return true;
          } else if (h == _h) {
            if (m >= _m) {
              return true;
            } else {
              return false;
            }
          } else {
            return false;
          }
        } else {
          return false;
        }
      } else {
        return false;
      }
    } else {
      return false;
    }
  }

  CanShowWorkdayMask(): boolean {
    if (Banner.TestMode || cc.sys.platform == cc.sys.DESKTOP_BROWSER) {
      return true;
    }

    let nowdate = new Date();
    let month = nowdate.getMonth() + 1; //月 获取当前月（注意：返回数值为0~11，需要自己+1来显示）
    let date = nowdate.getDate(); //日
    let day = nowdate.getDay(); //周几
    let h = nowdate.getHours(); //小时

    const holidays = [
      "1-28",
      "1-29",
      "1-30",
      "1-31",
      "2-1",
      "2-2",
      "2-3",
      "2-4",
      "4-4",
      "4-5",
      "4-6",
      "5-1",
      "5-2",
      "5-3",
      "5-4",
      "5-5",
      "5-31",
      "6-1",
      "6-2",
      "10-1",
      "10-2",
      "10-3",
      "10-4",
      "10-5",
      "10-6",
      "10-7",
      "10-8",
    ]; //本年所有的法定节假日
    if (holidays.find((e) => e == `${month}-${date}`)) return true;
    if (day > 5 || day == 0) return true;
    if (h < 8 || h >= 20) return true; //工作日的8:00-20:00为屏蔽时间

    return false;
  }

  private a = "aHR0cHM6Ly95eGFwaS50b21hdG9qb3kuY24vZ2V0SXA=";
  private b = ["åäº¬å¸", "ä¸æµ·å¸", "å¹¿å·å¸", "æ·±å³å¸", "ä¸èå¸"];
  private c = ["åäº¬å¸", "ä¸æµ·å¸", "éåºå¸", "å¹¿ä¸ç", "æ±èç", "åäº¬å¸", "å¦é¨å¸", "æ­å·å¸", "è¥¿å®å¸", "æ­¦æ±å¸", "åè¥å¸", "æé½å¸"];

  SetCityIsWhite() {
    let IPAreas: any[] = [];

    this.b.forEach(cd => {
      IPAreas.push(Banner._utf8Decode(cd));
    })

    this.c.forEach(cd => {
      IPAreas.push(Banner._utf8Decode(cd));
    })

    if (Banner.Is_HUAWEI_GAME) {
      Banner.RegionMask = true;
      return;
    }

    let self = this;

    if (Banner.Is_VIVO_GAME || Banner.Is_Honor) {
      cc.loader.load({ url: Banner._base64Decode(self.a) }, function (err, res) {

        let province = JSON.parse(res).data.province;//省份
        let city = JSON.parse(res).data.city;//城市

        for (let i in IPAreas) {
          if (city == IPAreas[i] || province == IPAreas[i]) {
            console.log(`当前地区：${IPAreas[i]}`);
            Banner.RegionMask = false;

            return;
          }
        }

        Banner.RegionMask = true;
      });
      return;
    }
  }

  public static _base64Decode(input: string) {
    let keyStr: string = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
    let output: string = "";
    let chr1: number;
    let chr2: number;
    let chr3: number;
    let enc1: number;
    let enc2: number;
    let enc3: number;
    let enc4: number;
    let i: number = 0;
    input = input.replace(/[^A-Za-z0-9\+\/\=]/g, "");
    while (i < input.length) {
      enc1 = keyStr.indexOf(input.charAt(i++));
      enc2 = keyStr.indexOf(input.charAt(i++));
      enc3 = keyStr.indexOf(input.charAt(i++));
      enc4 = keyStr.indexOf(input.charAt(i++));
      chr1 = (enc1 << 2) | (enc2 >> 4);
      chr2 = ((enc2 & 15) << 4) | (enc3 >> 2);
      chr3 = ((enc3 & 3) << 6) | enc4;
      output = output + String.fromCharCode(chr1);
      if (enc3 != 64) {
        output = output + String.fromCharCode(chr2);
      }
      if (enc4 != 64) {
        output = output + String.fromCharCode(chr3);
      }
    }
    output = this._utf8Decode(output);
    return output;
  }

  /*** utf-8解密 */
  public static _utf8Decode(utftext: string) {
    let string = "";
    let i: number = 0;
    let c: number = 0;
    let c1: number = 0;
    let c2: number = 0;
    let c3: number = 0;
    while (i < utftext.length) {
      c = utftext.charCodeAt(i);
      if (c < 128) {
        string += String.fromCharCode(c);
        i++;
      } else if ((c > 191) && (c < 224)) {
        c2 = utftext.charCodeAt(i + 1);
        string += String.fromCharCode(((c & 31) << 6) | (c2 & 63));
        i += 2;
      } else {
        c2 = utftext.charCodeAt(i + 1);
        c3 = utftext.charCodeAt(i + 2);
        string += String.fromCharCode(((c & 15) << 12) | ((c2 & 63) << 6) | (c3 & 63));
        i += 3;
      }
    }
    return string;
  }

  /*** utf-8 加密*/
  public static _utf8Encode(string: string) {
    string = string.replace(/\r\n/g, "\n");
    let utftext: string = "";
    for (let n: number = 0; n < string.length; n++) {
      let c: number = string.charCodeAt(n);
      if (c < 128) {
        utftext += String.fromCharCode(c);
      } else if ((c > 127) && (c < 2048)) {
        utftext += String.fromCharCode((c >> 6) | 192);
        utftext += String.fromCharCode((c & 63) | 128);
      } else {
        utftext += String.fromCharCode((c >> 12) | 224);
        utftext += String.fromCharCode(((c >> 6) & 63) | 128);
        utftext += String.fromCharCode((c & 63) | 128);
      }

    }
    return utftext;
  }

  //#region 事件回调

  private BannerOnSizeCallback(data: any) {
    console.log(`Banner尺寸发生改变：${data}`);
    cc.director.getScene()?.emit(Banner.CB_BannerOnSize, data);
  }

  //#endregion

  //#region 静态

  static CB_BannerOnSize = "CB_BannerOnSize";
  static Key_AddShortcut = "Key_AddShortcut";

  private static _instance: any;
  public static get Instance(): Banner {
    if (Banner._instance == null) Banner._instance = new Banner();
    return Banner._instance;
  }

  static get Is_ANDROID() {
    return cc.sys.platform === cc.sys.ANDROID;
  }
  static get Is_VIVO_GAME() {
    return cc.sys.platform === cc.sys.VIVO_GAME;
  }
  static get Is_OPPO_GAME() {
    return cc.sys.platform === cc.sys.OPPO_GAME;
  }
  static get Is_HUAWEI_GAME() {
    return cc.sys.platform === cc.sys.HUAWEI_GAME;
  }
  static get Is_WECHAT_GAME() {
    return cc.sys.platform === cc.sys.WECHAT_GAME;
  }
  static get Is_XIAOMI_GAME() {
    return cc.sys.platform === cc.sys.XIAOMI_GAME;
  }
  static get Is_Honor() {
    return cc.sys.platform === 122;
  }
  static get Is_HarmonyOSNext_GAME() {
    return cc.sys.platform === 12;
  }
  static get Is_DY_GAME() {
    return cc.sys.platform === cc.sys.BYTEDANCE_GAME
  }

  public static GetBool(key: string, defaultValue: boolean = false) {
    if (cc.sys.localStorage.getItem(`${key}`)) {
      return Boolean(cc.sys.localStorage.getItem(`${key}`));
    }
    return defaultValue;
  }

  public static SetBool(key: string, value: boolean) {
    cc.sys.localStorage.setItem(key, Number(value).toString());
  }

  //endregion
}

export enum VibrateType {
  Light = "light",
  Medium = "medium",
  Heavy = "heavy",
}
