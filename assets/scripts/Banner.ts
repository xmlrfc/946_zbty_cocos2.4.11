

const { ccclass, property } = cc._decorator;

@ccclass
export default class Banner extends cc.Component {

    /**原生广告 */
    nativeAd = null;
    /**banner广告 */
    bannerAd = null;
    /**激励视频 */
    rewardedVideoAd = null;

    /**原生模板 */
    CustomAd = null;

    VideoNode = null;

    cityIsWhite = true;

    @property(cc.Sprite)
    NativeImage: cc.Sprite = null;

    @property(cc.Sprite)
    VideoIcon: cc.Sprite = null;



    VideoID: string = "13c3bfa3996244939aba1529619f562d";
    NativeID: string = "ffe622790d984884b69a4ce09599bda8";
    BannerID: string = "";

    private static _instance: any;
    public static get Instance(): Banner {
        if (Banner._instance == null)
            Banner._instance = new Banner();
        return Banner._instance;
    }
    onLoad() {
        Banner._instance = this;
    }
    // bannerAdHeight = 57;
    // bannerAdWidth = 360;
    // bannerAdTop = Laya.Browser.height;
    // bannerAdLeft = Laya.Browser.width;

    /**创建Banner */

    
    hideBannerAd() {
        try {
            if (!(typeof this.bannerAd == "undefined" || this.bannerAd == null)) {
                this.bannerAd.hide();
                this.destroyBannerAd();
            }
        } catch (error) {
            console.log(error);
        }
    }
    showBanner() {
        return
        // if (this.TimeManger(2024, 1, 1, 1, 1)) {
            // try {
                //如果已经有了对象则先销毁对象
                this.destroyBannerAd();
                //style为空的时候，默认是在最底端
                //创建的时候默认就已经加载Load的
                this.bannerAd = qg.createBannerAd({
                    posId: this.BannerID,
                    style: {
                        // top:1000
                    },
                    adIntervals: 30
                });
                //加载监听事件
                this.bannerAd.onLoad(this.onLoadCallBack_Banner);
                // this.bannerAd.onClose(this.onCloseCallBack_Banner);
                this.bannerAd.onError((e) => {
                    console.log('load bannerAd error:' + JSON.stringify(e));
                    const errCode = e.errCode
                    const errMsg = e.errMsg
                    console.log('bannerAd广告数据拉取失败:' + errMsg, errCode);
                });

                this.bannerAd.show();

            // } catch (error) {
            //     console.log("Banner展示失败：" + error.message);
            // }
        // }

    }
    destroyBannerAd() {
        try {
            //如果已经有了对象则先销毁对象
            if (!(typeof this.bannerAd == "undefined" || this.bannerAd == null)) {
                this.bannerAd.hide();
                this.bannerAd.offLoad(this.onLoadCallBack_Banner);
                this.bannerAd.offClose(this.onCloseCallBack_Banner);
                // this.bannerAd.offError(this.onErrorCallback_Banner);
                this.bannerAd.destroy();
                this.bannerAd = null;
            }
        } catch (error) {
            console.log(error);
        }
    }
    onLoadCallBack_Banner() {
        try {

            this.bannerAd.offLoad(this.onLoadCallBack_Banner);

        } catch (error) {
            console.log(error);
        }
    }
    onCloseCallBack_Banner() {
        try {

            this.bannerAd.offClose(this.onCloseCallBack_Banner);

            this.destroyBannerAd();

        } catch (error) {
            console.log(error);
        }
    }

    onErrorCallback_Banner() {
        try {
            //注销监听
            console.log('加载失败');
            // this.bannerAd.offError(this.onErrorCallback_Banner);
            this.destroyBannerAd();
            this.showBanner();
        } catch (error) {
            console.log(error);
        }
    }

    CreateVideo(callback) {
        // cc.resources.load("VideoTips",(err,prefab) =>{
        //     if(err){
        //         console.log("预制体不存在")
        //         return;
        //     }
        //     var newNode = cc.instantiate(prefab);
        //     cc.find("Canvas").addChild(newNode);
        //     cc.tween(newNode)
        //     .to(1,{opacity:0,y:300})
        //     .call(() =>{
        //         newNode.destroy();
        //     })
        //     .start()
        // })
        // return;
        this.destroyVideoAd();
        console.log("AAAAAAAAAAA");
        console.log(callback, this.VideoNode);
        if (this.rewardedVideoAd == null) {
            console.log("BBBBBBBBBBB");
            this.rewardedVideoAd = qg.createRewardedVideoAd({
                posId: this.VideoID,
            });
            console.log("CCCCCCCCCCC");

            this.rewardedVideoAd.load();
            this.rewardedVideoAd.onLoad((data) => {
                console.log('ad loaded.')
                this.rewardedVideoAd.show();
                console.info('广告数据拉取成功: ', data);
            })
            console.log("DDDDDDDDDDDD");

            this.rewardedVideoAd.onError((e) => {
                console.error('load ad error:' + JSON.stringify(e));
                const errCode = e.errCode
                const errMsg = e.errMsg
                console.log('load ad error:' + errMsg, errCode);

            })
            console.log("EEEEEEEEEEE");
            this.rewardedVideoAd.onClose((res) => {
                console.log('视频广告关闭回调')
                console.log(res, res.isEnded);
                if (res && res.isEnded) {
                    callback.bind(this.VideoNode)();

                    console.log("正常播放结束，可以下发游戏奖励");
                    // try {
                    //     Tools.emit(str);
                    // } catch (error) {
                    //     console.log('错误信息', error);
                    // }
                } else {
                    console.log("播放中途退出，不下发游戏奖励");
                    // ToastDialog.addToast('视频未观看完毕，无法获得奖励');
                }
            });
        } else {
            this.rewardedVideoAd.load();
        }
    }
    destroyVideoAd() {
        try {
            //如果已经有了对象则先销毁对象
            console.log("rewardedVideoAd this.destroy", this.rewardedVideoAd);
            if (!(typeof this.rewardedVideoAd == "undefined") || this.rewardedVideoAd == null) {
                console.log("rewardedVideoAd this.destroy");
                this.rewardedVideoAd.offLoad();
                // this.rewardedVideoAd.offError();
                this.rewardedVideoAd.offClose();
                this.rewardedVideoAd = null;
            }
        }
        catch (error) {
            console.log("异常信息：" + error.message);
        }

    }


    // 记录上次执行时间，初始化为0
    lastAdTime = 0;
    isCreatingAd: boolean = false;
    CreateCustomAd() {
        if(this.lastAdTime==null ||this.lastAdTime==undefined) this.lastAdTime=0;
        // 获取当前时间（毫秒级）
        const currentTime = Date.now();

        // 判断是否已经过了5秒（5000毫秒）
        if (currentTime - this.lastAdTime < 5000) {
            console.log("间隔不足5秒，不执行操作");
            return; // 未到5秒，直接返回
        }

        // 到了5秒，更新上次执行时间
        this.lastAdTime = currentTime;
        if (this.TimeManger(2025, 9, 8, 19, 0)) {
            this.DestroyCuseton();
            // console.log("1==================================",this.isCreatingAd)
            // if (this.CustomAd == null && !this.isCreatingAd) {
                // this.isCreatingAd = true;
                this.CustomAd = qg.createCustomAd({
                    adUnitId: this.NativeID,
                    style: {
                        left: cc.game.canvas.width / 4,
                        top: cc.game.canvas.height / 5
                    }
                });
                this.CustomAd.onError(err => {
                    console.log("原生模板广告加载失败", err);
                });
                this.CustomAd.show()
                    .then(() => {
                        console.log('原生模板广告展示完成');
                        // setTimeout(() => {
                        //     this.isCreatingAd = false;
                        // }, 3000);
                    })
                    .catch((err) => {
                        console.log('原生模板广告展示失败', JSON.stringify(err));
                        // this.isCreatingAd = false;
                    });
                    console.log("2==================================",this.isCreatingAd)
                    this.showBanner();
            }
            // Banner.Instance.showBanner();
        // }
    }
    DestroyCuseton() {

        if(this.CustomAd!=null||this.CustomAd!=undefined){
            
            this.CustomAd.destroy();
            this.CustomAd = null;
        }
        // try {
        //     if (this.CustomAd != null) {

        //         this.CustomAd.offLoad();

        //         this.CustomAd = null;
        //     }
        // }
        // catch (error) {
        //     console.log("异常信息：" + error.message);
        // }
    }
    // CreateCustomAd() {
    //     // 获取当前时间（毫秒级）
    //     const currentTime = Date.now();

    //     // 判断是否已经过了5秒（5000毫秒）
    //     if (currentTime - this.lastAdTime < 5000) {
    //         console.log("间隔不足5秒，不执行操作");
    //         return; // 未到5秒，直接返回
    //     }

    //     // 到了5秒，更新上次执行时间
    //     this.lastAdTime = currentTime;
    //     if (this.TimeManger(2025, 8, 9, 19, 0)) {
    //         this.DestroyCuseton();
    //         if (this.CustomAd == null) {
    //             this.CustomAd = qg.createCustomAd({
    //                 posId: this.NativeID,
    //                 style: {
    //                     // left: cc.game.canvas.width / 4,
    //                     // top: cc.game.canvas.height / 8
    //                 }
    //             });
    //             console.log("posid:",this.NativeID)
    //             this.CustomAd.onError(err => {
    //                 console.log("原生模板广告加载失败", err);
    //             });
    //             this.CustomAd.show().then(() => {
    //                 console.log('原生模板广告展示完成');
    //             }).catch((err) => {
    //                 console.log('原生模板广告展示失败', JSON.stringify(err));
    //             })

    //         }
    //         // this.showBanner();
    //     }
    // }
    // DestroyCuseton() {
    //     try {
    //         if (this.CustomAd != null) {

    //             this.CustomAd.offLoad();
    //             this.CustomAd = null;
    //         }
    //     }
    //     catch (error) {
    //         console.log("异常信息：" + error.message);
    //     }
    // }

    /**广告视频 */
    dUnitVideoUrlList = null;
    /**广告图片 */
    adUnitImgUrl = null;
    /**广告标识，用于上报曝光与点击 */
    adUnitAdid = null;
    /**获取广告类型，取值说明如下： */
    adUnitCreativeType = null;
    /**	获取广告点击之后的交互类型 */
    adUnitInteractionType = null;
    /**广告来源 */
    source = null;
    /**广告标题 */
    title = null;
    /**广告标签图片 */
    logoUrl = null;
    /**点击按钮文本描述 */
    clickBtnTxt = null;

    yuansheng_Node = null;
    //显示原生广告广告
    nativeLoad() {
        console.log("加载原生广告");

        var date = new Date();
        // if (date.getDate() < 24) {
        //     return;
        // }

        try {
            //先做销毁处理
            this.destroyNativeAd();
            this.nativeAd = qg.createNativeAd({
                posId: this.NativeID,
            })
            this.nativeAd.load();
            //加载监听事件
            this.nativeAd.onLoad((data) => {
                try {
                    console.info('ad data loaded: ' + JSON.stringify(data))
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
                    console.info('广告数据拉取成功: ' +
                        '图片路径', this.adUnitImgUrl + '\n',
                        '广告标识，adid', this.adUnitAdid + '\n',
                        '广告类型', this.adUnitCreativeType + '\n',
                        '广告点击之后的交互类型', this.adUnitInteractionType + '\n',
                        '广告来源', this.source + '\n',
                        '广告标题', this.title + '\n',
                        '广告标签图片', this.logoUrl + '\n',
                        '点击按钮文本描述', this.clickBtnTxt);

                    cc.resources.load("Prefabs/Oppo_YuanShengAD.prefab", cc.Prefab, function (err, res) {
                        if (err) {
                            console.log("预设不存在  " + name);
                            return;
                        }
                        if (Banner.Instance.yuansheng_Node != null) {
                            Banner.Instance.yuansheng_Node.destroy();
                        }
                        Banner.Instance.yuansheng_Node = cc.instantiate(res);
                        console.log(Banner.Instance.yuansheng_Node);
                        Banner.Instance.yuansheng_Node.parent = cc.find("Canvas");

                    });
                } catch (error) {
                    console.log(error);
                }
            });
            this.nativeAd.onError((e) => {
                console.log('load ad error:' + JSON.stringify(e));
                const errCode = e.errCode
                const errMsg = e.errMsg
                console.log('广告数据拉取失败:' + errMsg, errCode);
                // ToastDialog.addToast('原生广告数据拉取失败');
            });
        }
        catch (error) {
            console.log("异常信息：" + error.message);
        }
    }

    destroyNativeAd() {
        try {
            if (this.nativeAd != null) {

                this.nativeAd.offLoad();
                this.nativeAd.destroy();
                console.log("原生销毁：");
                // this.nativeAd.offError();
            } else {

                // this.nativeAd.offError();
            }
        }
        catch (error) {
            console.log("异常信息：" + error.message);
        }
    }
    // destroyVideoAd() {
    //     try {
    //         //如果已经有了对象则先销毁对象
    //         console.log("rewardedVideoAd this.destroy", this.rewardedVideoAd);
    //         if (!(typeof this.rewardedVideoAd == "undefined") || this.rewardedVideoAd == null) {
    //             console.log("rewardedVideoAd this.destroy");
    //             this.rewardedVideoAd.offLoad();
    //             // this.rewardedVideoAd.offError();
    //             this.rewardedVideoAd.offClose();
    //             // this.rewardedVideoAd = null;
    //         }
    //     }
    //     catch (error) {
    //         console.log("异常信息：" + error.message);
    //     }

    // }


    static isShouCang = false;
    icon = null;
    /**创建桌面图标 */
    createIcon() {
        qg.hasShortcutInstalled({
            success: function (status) {
                // 判断图标未存在时，创建图标
                if (status == false) {
                    qg.installShortcut({
                        success: function () {
                            // 执行用户创建图标奖励
                            Banner.isShouCang = true;
                        },
                        fail: function (err) {
                            console.log(err)
                        },
                        complete: function () {

                        }
                    })
                } else {

                }
            },
            fail: function (err) { },
        })
    }


    public boxPortalAd = null
    // 游戏首页等适合展示Icon的场景常驻展示（每次回到此页面均调用一次）
    showBoxPortalAd() {
        if (qg.createBoxPortalAd) {
            this.boxPortalAd = qg.createBoxPortalAd({
                posId: "",
                image: '',
                marginTop: 200
            })
            this.boxPortalAd.onError(function (err) {
                console.log("盒子九宫格广告加载失败", err)
            })
            this.boxPortalAd.onClose(function () {
                console.log('close')
                if (this.boxPortalAd.isDestroyed) {
                    return
                }
                // 当九宫格关闭之后，再次展示Icon
                this.boxPortalAd.show()
            })
            // 广告数据加载成功后展示
            this.boxPortalAd.show();
            this.boxPortalAd.onShow(() => {
                console.log('show success')
            })
        } else {
            console.log('暂不支持互推盒子相关 API')
        }
    }
    // 场景切换等需要关闭时调用
    closeBoxPortalAd() {
        if (this.boxPortalAd != null) {
            this.boxPortalAd.isDestroyed = true
            this.boxPortalAd.destroy()
        }
    }


    public TimeManger(_year, _month, _date, _h, _m): boolean {
        var nowdate = new Date();

        var year = nowdate.getFullYear();

        var month = nowdate.getMonth() + 1;

        var date = nowdate.getDate();

        var day = nowdate.getDay();

        var h = nowdate.getHours()

        var m = nowdate.getMinutes()

        var s = nowdate.getSeconds()
        console.log(year, month, date, h, m);
        if (year > _year) {
            return true
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
}






