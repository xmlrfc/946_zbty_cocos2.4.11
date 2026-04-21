const {ccclass, property} = cc._decorator;

declare var tt: any;
import Banner from "../../scripts/Banner";
/**
 * 抖音侧边栏跳转管理类
 * 实现侧边栏场景检测、跳转和奖励领取功能
 */
@ccclass
export default class DouYin extends cc.Component {
    
    @property(cc.Label)
    gameNameLabel1: cc.Label = null;
    @property(cc.Label)
    gameNameLabel2: cc.Label = null;
    @property(cc.Sprite)
    gameIcon: cc.Sprite = null;
    @property(cc.Node)
    rewardBtn1: cc.Node = null; // 跳转按钮
    @property(cc.Node)
    rewardBtn2: cc.Node = null; // 领取奖励按钮 
    @property(cc.Node)
    Tips:cc.Node = null; // 提示文本节点
    @property(cc.Node)
    GiftBtn: cc.Node = null; // 礼物按钮
    
    
    @property({
        displayName: "游戏名称",
        tooltip: "游戏的显示名称"
    })
    gameName: string = "1";
    
    @property({
        displayName: "游戏图标",
        type: cc.SpriteFrame,
        tooltip: "游戏的图标图片"
    })
    iconSpriteFrame: cc.SpriteFrame = null;
    
    // 是否支持侧边栏场景
    private isSidebarSupported: boolean = false;
    
    // 最新的启动信息
    private latestLaunchInfo: any = null;
    
    // 是否从侧边栏启动
    private isFromSidebar: boolean = false;
    
    onLoad() {
        // 设置游戏名称和图标
        this.setupGameInfo();
        
        // 检查是否是抖音环境
        // if (typeof tt === 'undefined') {
        //     console.log('非抖音环境，侧边栏功能不可用');
        //     return;
        // }
        
        // 步骤一：启动时监听 onShow
        this.setupOnShowListener();
        
        // 检查是否支持侧边栏场景
        this.checkSidebarScene();
    }
    
    /**
     * 设置游戏信息（名称和图标）
     */
    private setupGameInfo() {
        // 设置游戏名称
        if (this.gameNameLabel1) {
            this.gameNameLabel1.string = this.gameName;
            this.gameNameLabel2.string = this.gameName;
            console.log('设置游戏名称:', this.gameName);
        }
        
        // 设置游戏图标
        if (this.gameIcon && this.iconSpriteFrame) {
            this.gameIcon.spriteFrame = this.iconSpriteFrame;
            console.log('设置游戏图标');
        }
    }
    
    /**
     * 设置 onShow 监听器
     * 监听小游戏启动和从后台返回前台的事件
     */
    private setupOnShowListener() {
        tt.onShow((res: any) => {
            console.log('tt.onShow 回调:', res);
            
            // 保存最新的启动信息
            this.latestLaunchInfo = res;
            
            // 判断是否从侧边栏启动
            // launch_from = 'homepage' 且 location = 'sidebar_card'
            this.isFromSidebar = res.launch_from === 'homepage' && res.location === 'sidebar_card';
            
            if (this.isFromSidebar) {
                console.log('用户从侧边栏启动，可以领取奖励');
                // 这里可以触发奖励领取相关逻辑
                this.onReturnFromSidebar();
            }
        });
    }
    
    /**
     * 检查当前宿主是否支持侧边栏场景
     */
    private checkSidebarScene() {
        tt.checkScene({
            scene: "sidebar",
            success: (res: any) => {
                console.log('checkScene 成功:', res.isExist);
                this.isSidebarSupported = res.isExist;
                
                if (res.isExist) {
                    // 支持侧边栏，显示奖励入口
                    this.rewardBtn1.active = true;

                } else {
                    // 不支持侧边栏，隐藏奖励入口
                    this.rewardBtn1.active = false;
                }
            },
            fail: (res: any) => {
                console.log('checkScene 失败:', res);
                this.isSidebarSupported = false;
            }
        });
    }
    
    /**
     * 步骤二：用户点击奖励入口时调用
     * 跳转到侧边栏
     */
    private navigateToSidebar() {
        if (!this.isSidebarSupported) {
            console.log('当前宿主不支持侧边栏');
            return;
        }
        
        console.log('准备跳转到侧边栏');
        
        tt.navigateToScene({
            scene: "sidebar",
            success: (res: any) => {
                console.log('跳转侧边栏成功');
                // 跳转成功，可以关闭当前奖励界面
                // 这里可以添加关闭界面的逻辑
            },
            fail: (res: any) => {
                console.log('跳转侧边栏失败:', res);
                // 可以提示用户跳转失败
            }
        });
    }
    
    /**
     * 领取奖励
     */
    private claimReward() {
        console.log('领取奖励');
        // 这里实现具体的奖励领取逻辑
        // 例如：增加金币、道具等
        Banner.Instance.setTr(); 
        
        // 示例：显示奖励领取成功提示
        Banner.Instance.setFreeInfo(2); // 示例：设置剩余免费跳过广告次数为2
        this.Tips.active = true;
        this.rewardBtn1.active =false;
        this.rewardBtn2.active =false;
        this.scheduleOnce(()=>{
            this.GiftBtn.active = false;
            this.HideGiftPanel();
        },2);
    }
    
    /**
     * 从侧边栏返回时的回调
     */
    private onReturnFromSidebar() {
        console.log('从侧边栏返回小游戏');
        // 更新奖励按钮状态为"可领取"
        this.rewardBtn1.active = false; // 隐藏跳转按钮
        this.rewardBtn2.active = true; // 显示领取奖励按钮
    }

    
    
    /**
     * 检查是否支持侧边栏
     * @returns 是否支持
     */
    public isSidebarAvailable(): boolean {
        return this.isSidebarSupported;
    }
    
    /**
     * 检查是否可以领取奖励
     * @returns 是否可以领取
     */
    public canClaimReward(): boolean {
        return this.isFromSidebar;
    }
    HideGiftPanel(){
        this.node.active = false;
    }
}
