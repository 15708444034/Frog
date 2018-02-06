class Main extends eui.UILayer {
    protected createChildren(): void {
        super.createChildren();

        egret.lifecycle.addLifecycleListener((context) => {
            // custom lifecycle plugin
        })

        egret.lifecycle.onPause = () => {
            egret.ticker.pause();
        }

        egret.lifecycle.onResume = () => {
            egret.ticker.resume();
        }

        //inject the custom material parser
        //注入自定义的素材解析器
        let assetAdapter = new AssetAdapter();
        egret.registerImplementation("eui.IAssetAdapter", assetAdapter);
        egret.registerImplementation("eui.IThemeAdapter", new ThemeAdapter());


        this.runGame().catch(e => {
            console.log(e);
        })
    }

    private async runGame() {
        await this.loadResource()
        this.createGameScene();
        const result = await RES.getResAsync("description_json")
        //this.startAnimation(result);
        await platform.login();
        const userInfo = await platform.getUserInfo();
        console.log(userInfo);

    }

    private async loadResource() {
        try {
            const loadingView = new LoadingUI();
            this.stage.addChild(loadingView);
            await RES.loadConfig("resource/default.res.json", "resource/");
            await this.loadTheme();
            await RES.loadGroup("preload", 0, loadingView);
            this.stage.removeChild(loadingView);
        }
        catch (e) {
            console.error(e);
        }
    }

    private loadTheme() {
        return new Promise((resolve, reject) => {
            // load skin theme configuration file, you can manually modify the file. And replace the default skin.
            //加载皮肤主题配置文件,可以手动修改这个文件。替换默认皮肤。
            let theme = new eui.Theme("resource/default.thm.json", this.stage);
            theme.addEventListener(eui.UIEvent.COMPLETE, () => {
                resolve();
            }, this);

        })
    }

    private textfield: egret.TextField;
    /**
     * 根据name关键字创建一个Bitmap对象。name属性请参考resources/resource.json配置文件的内容。
     * Create a Bitmap object according to name keyword.As for the property of name please refer to the configuration file of resources/resource.json.
     */
    private createBitmapByName(name: string): egret.Bitmap {
        let result = new egret.Bitmap();
        let texture: egret.Texture = RES.getRes(name);
        result.texture = texture;
        return result;
    }
    /**
     * 描述文件加载成功，开始播放动画
     * Description file loading is successful, start to play the animation
     */
    /*private startAnimation(result: Array<any>): void {
        let parser = new egret.HtmlTextParser();

        let textflowArr = result.map(text => parser.parse(text));
        let textfield = this.textfield;
        let count = -1;
        let change = () => {
            count++;
            if (count >= textflowArr.length) {
                count = 0;
            }
            let textFlow = textflowArr[count];

            // 切换描述内容
            // Switch to described content
            textfield.textFlow = textFlow;
            let tw = egret.Tween.get(textfield);
            tw.to({ "alpha": 1 }, 200);
            tw.wait(2000);
            tw.to({ "alpha": 0 }, 200);
            tw.call(change, this);
        };

        change();
    }*/

    /**
     * 点击按钮
     * Click the button
     */
    
    /*private onButtonClick(e: egret.TouchEvent) {
        let panel = new eui.Panel();
        panel.title = "Title";
        panel.horizontalCenter = 0;
        panel.verticalCenter = 0;
        this.addChild(panel);
    }*/

    /**
     * 创建场景界面
     * Create scene interface
     */
	private courtyard: Courtyard;
    private room: Room;
    private shop_EUI:Shop_EUI;
     
    protected createGameScene(): void {

        Data.readShopTable();

        this.shop_EUI=new Shop_EUI();
        //this.addChild(this.shop_EUI);

	    Data.initlist();
        this.courtyard = new Courtyard();
        this.addChild(this.courtyard);

        let icon = new egret.Bitmap();
        icon.texture = RES.getRes("icon_house_84_88_png");
        this.addChild(icon);
        icon.x = Data.getscreenWidth() - icon.width - 15;
        icon.y = Data.getscreenHeight() - icon.height - 10;
        icon.touchEnabled=true;
        icon.addEventListener(egret.TouchEvent.TOUCH_BEGIN,this.loadRoom,this);

        let clover = new egret.Bitmap();
        clover.texture = RES.getRes("sys_clover_window_png");
        this.addChild(clover);
        clover.x = 15;
        clover.y = 10;

        let clovertext = new egret.TextField;
        clovertext.text = "113";
        clovertext.textColor = 0;
        clovertext.x = 150;
        clovertext.y = 30;
        this.addChild(clovertext);
       
        

    }
    private loadRoom(){
        this.removeChild(this.courtyard);
        this.room=new Room(); 
        this.addChild(this.room);
         let icon = new egret.Bitmap();
        icon.texture = RES.getRes("icon_house_84_88_png");
        this.addChild(icon);
        icon.x = Data.getscreenWidth() - icon.width - 15;
        icon.y = Data.getscreenHeight() - icon.height - 10;
        icon.touchEnabled=true;
        icon.addEventListener(egret.TouchEvent.TOUCH_BEGIN,this.loadCourtyard,this);

    }
    private loadCourtyard(){
        this.courtyard = new Courtyard();
        this.addChild(this.courtyard);

        let icon = new egret.Bitmap();
        icon.texture = RES.getRes("icon_house_84_88_png");
        this.addChild(icon);
        icon.x = Data.getscreenWidth() - icon.width - 15;
        icon.y = Data.getscreenHeight() - icon.height - 10;
        icon.touchEnabled=true;
        icon.addEventListener(egret.TouchEvent.TOUCH_BEGIN,this.loadRoom,this);

        let clover = new egret.Bitmap();
        clover.texture = RES.getRes("sys_clover_window_png");
        this.addChild(clover);
        clover.x = 15;
        clover.y = 10;

        let clovertext = new egret.TextField;
        clovertext.text = "113";
        clovertext.textColor = 0;
        clovertext.x = 150;
        clovertext.y = 30;
        this.addChild(clovertext);
    }
    
}
