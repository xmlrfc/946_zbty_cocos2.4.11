import Banner from "../scripts/Banner";
import Tip from "./Tip";


const { ccclass, property } = cc._decorator;

@ccclass
export default class HwLoginPanel extends cc.Component {
    static Panel: cc.Node = null;

    Label: cc.Label = null;
    cb: Function = null;
    elapsedTime: number = 0;
    updateInterval: number = 0.5; // 点变化的时间间隔
    dots: string = "";
    maxDots: number = 3;

    static Show(parent: cc.Node = null, cb: Function = null) {
        console.log("弹出华为登录界面");
        cc.resources.load("HwLoginPanel", function (err, prefab: cc.Prefab) {
            if (err) {
                console.error(err);
                return;
            }

            let node = cc.instantiate(prefab);

            if (!parent) {
                parent = cc.find("Canvas");
            }

            if (cc.isValid(HwLoginPanel.Panel)) {
                HwLoginPanel.Panel.destroy();
            }

            HwLoginPanel.Panel = node;

            parent.addChild(node);
            node.setPosition(cc.Vec3.ZERO);
            node.setSiblingIndex(9999);
            let privacyPanel = node.getComponent(HwLoginPanel);
            privacyPanel.Show(cb);
        });
    }

    protected onLoad(): void {
        this.Label = this.node.getChildByName("Label").getComponent(cc.Label);
    }

    Show(cb: Function = null) {
        this.cb = cb;
        this.updateInterval = 0.5; // 点变化的时间间隔
        this.elapsedTime = 0; // 累计时间

        Banner.Instance.HWGameLogin(() => {
            Banner.IsLogin = true;
            this.cb && this.cb();
            this.node.destroy();
        }, () => {
            Tip.ShowTip(this.node, "登陆失败");
        });
    }

    protected update(dt: number): void {
        this.elapsedTime += dt;

        // 每隔一定时间更新一次
        if (this.elapsedTime >= this.updateInterval) {
            this.elapsedTime = 0;

            // 更新点数
            this.dots = this.dots.length < this.maxDots ? this.dots + '.' : '';
            this.Label.string = '登录中' + this.dots;
        }

    }

    OnMaskButtonClick() {
        Banner.Instance.HWGameLogin(() => {
            Banner.IsLogin = true;
            this.cb && this.cb();
            this.node.destroy();
        }, () => {
            Tip.ShowTip(this.node, "登陆失败");
        });
    }
}