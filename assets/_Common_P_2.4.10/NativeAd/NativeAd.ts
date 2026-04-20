import Banner from "../../scripts/Banner";

const { ccclass, property } = cc._decorator;
const oriPos: cc.Vec3 = cc.v3(0, 100, 0);

@ccclass
export default class NativeAd extends cc.Component {
    content: cc.Node = null;
    closeButton: cc.Node = null;
    title: cc.Node = null;
    source: cc.Node = null;
    current_Ad = null;

    onLoad() {
        this.content = cc.find("AD/Content", this.node);
        this.closeButton = cc.find("AD/CloseButton", this.node);
        this.title = cc.find("AD/TitleLb", this.node);
        this.source = cc.find("AD/SourceLb", this.node);
        if (!this.content) console.error(`找不到 content。`);
        if (!this.closeButton) console.error(`找不到 closeButton。`);
        if (!this.title) console.error(`找不到 title。`);
        if (!this.source) console.error(`找不到 source。`);

        this.display_Ad();

        //@ts-ignore
        qg.onShow(this.report_Ad_Show);
    }

    onCloseButtonClick() {
        console.log("原生自渲染-关闭按钮点击");
        this.off_YuanSheng();
    }

    /**
    * 展示广告
    ** adId	string	广告标识，用来上报曝光与点击
    ** title	string	广告标题
    ** desc	string	广告描述
    ** icon	string	推广应用的Icon图标
    ** imgUrlList	Array	广告图片，建议使用该图片资源
    ** logoUrl	string	广告标签图片
    ** clickBtnTxt	string	点击按钮文本描述
    ** creativeType	number	获取广告类型，取值说明：0：无 1：纯文字 2：图片 3：图文混合 4：视频 6. 640x320 大小图文混合 7. 320x210 大小图文单图 8. 320x210 大小图文多图
    ** interactionType	number	获取广告点击之后的交互类型，取值说明：0：无 1：浏览类 2：下载类 3：浏览器（下载中间页广告） 4：打开应用首页 5：打开应用详情页
    */
    display_Ad() {
        console.log("原生自渲染-展示广告...");
        let self = this;
        // 原生广告在没有被曝光或者点击的情况下，再去拉去原生广告就会返回空广告
        // 所以load完要去执行reportAdShow和reportAdClick 才能正常拉取下一条广告
        // 注意：需要先调用reportAdShow上报广告曝光，才能调用reportAdClick去上报点击！！！
        self.report_Ad_Show();
        let adId = Banner.Instance.adUnitAdid;      //广告标识，用来上报曝光与点击
        let imgURL = Banner.Instance.adUnitImgUrl;
        let title = Banner.Instance.title;          //广告标题
        let desc = Banner.Instance.clickBtnTxt;     //广告描述
        let source = Banner.Instance.source;        //广告来源

        if (!imgURL) {
            //this.off_YuanSheng();
            console.error("原生自渲染-没有图片路径");
            Banner.Instance.yuansheng_Node.destroy();
        }

        self.title.getComponent(cc.Label).string = title ? title : '';
        self.source.getComponent(cc.Label).string = source ? source : '';

        self.content.on(cc.Node.EventType.TOUCH_END, function (event) {
            console.log("原生自渲染-广告点击");
            self.report_Ad_Click();
        });

        cc.loader.load({ url: imgURL, type: 'png' }, function (err, texture) {
            if (err) {
                console.log('------> 原生广告图片加载error ------> ', err.message || err);
                self.node.destroy();
                return;
            }

            console.log("原生广告图片-----------> 1");

            try {
                // 图片
                const sprite = new cc.SpriteFrame(texture);
                self.content.addComponent(cc.Sprite).spriteFrame = sprite;
                self.content.setContentSize(600, 350);
                self.content.opacity = 255;
                console.log("原生广告图片-----------> 2");
            } catch (e) {
                console.log("原生广告图片-----------> 3");
                self.content.opacity = 255;
            }
        });

        console.log("原生自渲染-展示广告成功");
    }

    report_Ad_Show() {
        console.log("原生自渲染-广告上报展示");
        Banner.Instance.nativeAd.reportAdShow({
            adId: Banner.Instance.adUnitAdid
        });
    }

    report_Ad_Click() {
        console.log("原生自渲染-广告上报点击");
        let self = this;
        Banner.Instance.nativeAd.reportAdClick({
            adId: Banner.Instance.adUnitAdid
        });
        self.off_YuanSheng();
    }

    off_YuanSheng() {
        console.log("原生自渲染-广告销毁");

        if (Banner.Instance.nativeAd) {
            Banner.Instance.nativeAd.offLoad();
            Banner.Instance.nativeAd.offError();
        }

        Banner.Instance.nativeAd.destroy()
        Banner.Instance.nativeAd = null;
        this.node.destroy();
    }

}