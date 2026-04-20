
const { ccclass, property } = cc._decorator;
const oriPos: cc.Vec3 = cc.v3(0, 100, 0);

@ccclass
export default class Tip extends cc.Component {
    mask: cc.Node = null!;
    tipLb: cc.Label = null!;

    onLoad() {
        this.mask = this.node.getChildByName(`Mask`);
        this.tipLb = this.node.getChildByName(`TipLb`).getComponent(cc.Label);
    }

    Show(content: string, delay: number = 0.75, tweenType: number = 1) {
        this.node.opacity = 255;

        this.tipLb.string = `${content}`;

        this.scheduleOnce(() => {
            this.mask.setContentSize(this.tipLb.node.getContentSize().width + 200, 75);
        });

        switch (tweenType) {
            case 1:
                this.ShowTween1(delay);
                break;
            case 2:
                this.ShowTween2(delay);
                break;
            default:
                this.ShowTween2(delay);
                break;
        }
    }

    ShowTween1(delay: number = 1) {
        cc.Tween.stopAllByTarget(this.node);
        this.node.setScale(0, 0, 0);
        this.node.setPosition(oriPos);
        cc.tween(this.node)
            .to(0.2, { scale: 1 }, { easing: `backOut` })
            .delay(delay)
            .to(0.25, { position: cc.v3(0, 250), opacity: 100 })
            .call(() => { this.node.destroy() })
            .start();
    }

    ShowTween2(delay: number = 0.75) {
        cc.Tween.stopAllByTarget(this.node);
        this.node.setScale(1);
        this.node.setPosition(oriPos);
        cc.tween(this.node).delay(delay).to(0.25, { position: cc.v3(0, 250), opacity: 0 }).call(() => { this.node.destroy() }).start();
    }

    public static ShowTip(parent: cc.Node, content: string, delay: number = 0.75, tweenType: number = 1) {
        cc.resources.load("Tip", function (err, prefab: cc.Prefab) {
            if (err) {
                console.error(err);
                return;
            }

            let node = cc.instantiate(prefab);

            if (!parent) {
                parent = cc.find("Canvas");
            }

            parent.addChild(node);
            node.setPosition(cc.Vec3.ZERO);
            node.setSiblingIndex(9999);
            node.getComponent(Tip).Show(content, delay, tweenType)
        });
    }
}
