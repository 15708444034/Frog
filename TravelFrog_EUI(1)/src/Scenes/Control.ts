// TypeScript file
class Control extends egret.Sprite {

	public constructor() {
		super();
		this.refresh();
		
		this.Createhomeicon();
		
	}
	private ishome:boolean=false;
	private homeicon: egret.Bitmap;
	private Courtyardicon: egret.Bitmap;
	private clover: egret.Bitmap;
	private clovertext: egret.TextField;
	private courtyard: Courtyard;
	private room: Room;
	private shop: egret.Bitmap;
	private frogread: egret.Bitmap;
	private store: Shop_EUI;

	/*重置按钮*/
	private reset: egret.Bitmap;

	private Createhomeicon() {
		if (egret.localStorage.getItem(Data.isfirst) != "no") {
			Data.savetime(Data.grasstime);
			Data.savetime(Data.gametime);
			Data.initbackpack();
			Data.initlist();
		} else {
			Data.loadlist();
		}
		Data.readShopTable();
		this.store = new Shop_EUI();
		this.room = new Room();

		this.courtyard = new Courtyard();
		this.addChild(this.courtyard);
		this.courtyard.addEventListener(egret.Event.ENTER_FRAME, this.refresh, this);
		this.courtyard.addEventListener(egret.Event.ENTER_FRAME, this.stateRefresh, this);

		this.Courtyardicon = new egret.Bitmap();
		this.Courtyardicon.texture = RES.getRes("icon_out_84_88_png");
		this.addChildAt(this.Courtyardicon, 0);
		this.Courtyardicon.x = Data.getscreenWidth() - this.Courtyardicon.width - 15;
		this.Courtyardicon.y = Data.getscreenHeight() - this.Courtyardicon.height - 10;
		this.Courtyardicon.touchEnabled = true;
		this.Courtyardicon.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.loadCourtyard, this);


		this.homeicon = new egret.Bitmap();
		this.homeicon.texture = RES.getRes("icon_house_84_88_png");
		this.addChild(this.homeicon);
		this.homeicon.x = Data.getscreenWidth() - this.homeicon.width - 15;
		this.homeicon.y = Data.getscreenHeight() - this.homeicon.height - 10;
		this.homeicon.touchEnabled = true;
		this.homeicon.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.loadRoom, this);

		this.shop = new egret.Bitmap();
		this.shop.texture = RES.getRes("icon_shop_84_88_png")
		this.addChild(this.shop);
		this.shop.x = this.Courtyardicon.x;
		this.shop.y = this.Courtyardicon.y - this.Courtyardicon.height - 10;
		this.shop.touchEnabled = true;
		this.shop.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.loadshop, this);

		this.clover = new egret.Bitmap();
		this.clover.texture = RES.getRes("sys_clover_window_png");
		this.addChild(this.clover);
		this.clover.x = 15;
		this.clover.y = 10;

		this.clovertext = new egret.TextField;

		this.clovertext.addEventListener(egret.Event.ENTER_FRAME, this.numberchange, this)
		this.clovertext.textColor = 0;
		this.clovertext.x = 150;
		this.clovertext.y = 30;
		this.addChild(this.clovertext);

		//重置
		this.reset = new egret.Bitmap();
		this.reset.texture = RES.getRes("raffle_84_88_png");
		this.addChild(this.reset);
		this.reset.touchEnabled = true;
		this.reset.addEventListener(egret.TouchEvent.TOUCH_BEGIN, function () { Data.reset() }, this);


	}
	private stateRefresh() {
		let timestamp = new Date().getTime();
		
		if (timestamp - Data.loadtime(Data.gametime) > 1800000) {
			Data.savetime(Data.gametime);
			let random = Math.random();
		
			if (random < 0.5) {
				
				Data.changestate();
				Data.savestate();
				this.room = new Room();
				if(this.ishome){
					this.loadRoom();
				}
				let news = new egret.Bitmap();
				news.texture = RES.getRes("label_04_png");
				news.y = this.height / 3;
				let canvs=new egret.Bitmap();
				canvs.texture = RES.getRes("frame_tsukue_png");
				canvs.width=this.width;
				canvs.height=this.height;
				canvs.touchEnabled=true;
				canvs.alpha=0;
				let newstext=new egret.TextField();
				newstext.y=news.y+50;
				newstext.x=this.width/7;
				newstext.textColor = 0;
				if(Data.getfrogstate()){
					newstext.text="青蛙回家了！！";
				}else{
					newstext.text="青蛙出去旅行了。。";
				}
				this.addChild(canvs);
				this.addChild(news);
				this.addChild(newstext);
				canvs.addEventListener(egret.TouchEvent.TOUCH_BEGIN, function () {this.removeChild(canvs);this.removeChild(news),this.removeChild(newstext)}, this);

			}
		
			
		}
		

	}

	private refresh() {
		let timestamp = new Date().getTime();
		if (timestamp - Data.loadtime(Data.grasstime) > 3600000) {
			Data.savetime(Data.grasstime);
			Data.initlist();
			this.courtyard.removeEventListener(egret.Event.ENTER_FRAME, this.refresh, this);
			this.courtyard = new Courtyard();
			this.courtyard.addEventListener(egret.Event.ENTER_FRAME, this.refresh, this);
			Data.savelist();
		}
	}

	private loadRoom() {
		this.ishome=true;
		this.addChildAt(this.homeicon, 0);
		this.addChild(this.room);
		this.Courtyardicon.y = Data.getscreenHeight() - this.Courtyardicon.height - 10;
		this.addChild(this.Courtyardicon);
		this.addChild(this.shop);
		this.addChild(this.clover);
		this.addChild(this.clovertext);
		this.addChild(this.reset);

	}

	private loadshop() {
		this.ishome=false;
		this.addChild(this.store);
		this.addChild(this.homeicon);
		this.Courtyardicon.y = this.shop.y;
		this.addChild(this.Courtyardicon);
		this.addChild(this.clover);
		this.addChild(this.clovertext);
	}
	private numberchange() {

		if (egret.localStorage.getItem(Data.key) == null) {
			Data.save();
			this.clovertext.text = egret.localStorage.getItem(Data.key);

		}
		else {
			this.clovertext.text = egret.localStorage.getItem(Data.key);
		}

	}
	private loadCourtyard() {

		this.ishome=false;
		this.addChildAt(this.Courtyardicon, 0);

		this.addChild(this.courtyard);

		this.addChild(this.homeicon);
		this.addChild(this.shop);
		this.addChild(this.clover);
		this.addChild(this.clovertext);
		this.addChild(this.reset);
	}


}