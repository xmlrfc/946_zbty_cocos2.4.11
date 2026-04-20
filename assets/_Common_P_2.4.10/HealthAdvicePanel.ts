import Banner from "../scripts/Banner";
import PrefsManager from "./PrefsManager";
import PrivacyPanel from "./PrivacyPanel";

const { ccclass, property } = cc._decorator;

@ccclass
export default class HealthAdvicePanel extends cc.Component {

    @property(cc.SpriteAtlas)
    AgeLimitAtlas: cc.SpriteAtlas = null;

    @property
    Test: boolean = false;

    loadSceneName: string = "home"; //跳转的场景
    bundles = []; //需要加载的分包

    loadBundlesDone: boolean = false;
    agreePolicy: boolean = false;

    protected onLoad(): void {
        if (!PrefsManager.GetBool("AgreePolicy") && !Banner.Is_VIVO_GAME) {
            PrivacyPanel.Show(true, cc.find("Canvas"), () => {
                this.agreePolicy = true;
                this.loadScene();
            });
        } else {
            this.agreePolicy = true;
            this.loadScene();
        }

        this.loadAllBundlesAndEnterScene(() => {
            this.loadBundlesDone = true;
            this.loadScene();
        });

        this.node.getChildByName(`CompanyLb`).getComponent(cc.Label).string = `${Banner.Owner}`;
        this.node.getChildByName(`LicenseLb`).getComponent(cc.Label).string = `${Banner.License}`;
        this.node.getChildByName(`Buttons`).active = this.Test;

        //适龄提示角标
        let ageLimitSp: cc.Sprite = this.node.getChildByName(`AgeLimitSp`).getComponent(cc.Sprite);
        switch (Banner.AgeLimit) {
            case 8:
                ageLimitSp.spriteFrame = this.AgeLimitAtlas.getSpriteFrame(`8`);
                break;
            case 12:
                ageLimitSp.spriteFrame = this.AgeLimitAtlas.getSpriteFrame(`12`);
                break;
            case 16:
                ageLimitSp.spriteFrame = this.AgeLimitAtlas.getSpriteFrame(`16`);
                break;
            case 18:
                ageLimitSp.spriteFrame = this.AgeLimitAtlas.getSpriteFrame(`18`);
                break;

            default:
                ageLimitSp.spriteFrame = this.AgeLimitAtlas.getSpriteFrame(`16`);
                break;
        }
    }

    private async loadAllBundlesAndEnterScene(callback: Function) {
        try {
            for (const bundleName of this.bundles) {
                await this.loadBundleAsync(bundleName);
            }

            callback && callback();

        } catch (e) {
            console.error("Error loading bundles", e);
        }
    }

    loadBundleAsync(name: string): Promise<any> {
        return new Promise((resolve, reject) => {
            cc.assetManager.loadBundle(name, (err, bundle) => {
                if (err) {
                    console.error(`Failed to load bundle: ${name}`, err);
                    reject(err);
                } else {
                    console.log(`加载分包：[${name}] 成功。`);
                    resolve(bundle);
                }
            });
        });
    }

    loadScene() {
        if (this.loadBundlesDone && this.agreePolicy) {
            this.scheduleOnce(() => {
                if (this.loadSceneName == "") {
                    console.log(`没有填写跳转场景名称`);
                    return;
                }

                if (this.Test) {
                    console.log(`测试广告不跳转场景`);
                    return;
                }

                cc.director.loadScene(this.loadSceneName);
            }, 1);
        }

    }

    OnButtonClick(event: cc.Event) {
        switch (event.target.name) {
            case "Banner":
                Banner.Instance.ShowBannerAd();
                break;

            case "原生":
                Banner.Instance.ShowCustomAd();
                break;

            case "视频":
                Banner.Instance.ShowVideoAd(() => { });
                break;

            case "创建桌面图标":
                Banner.Instance.AddShortcut();
                break;

            case "短震动":
                Banner.Instance.VibrateShort();
                break;

            case "长震动":
                Banner.Instance.VibrateLong();
                break;
        }
    }

}