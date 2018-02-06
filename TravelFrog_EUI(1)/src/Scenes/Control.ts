// TypeScript file
class Control extends egret.Sprite {

	public constructor() {
		super();
		this.Createhomeicon();

	}
	private homeicon: egret.Bitmap;
	private Courtyardicon: egret.Bitmap;
	private clover: egret.Bitmap;
	private clovertext: egret.TextField;
	private courtyard: Courtyard;
	private room: Room;
	private shop: egret.Bitmap;
	private frogread: egret.Bitmap;

	/*重置按钮*/
	private reset:egret.Bitmap;

	private Createhomeicon() {
		if(egret.localStorage.getItem(Data.isfirst) != "no"){
			Data.initlist();
		}else{
			Data.loadlist();
		}
		
		this.room = new Room();

		this.courtyard = new Courtyard();
		this.addChild(this.courtyard);

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
		this.reset=new egret.Bitmap();
		this.reset.texture=RES.getRes("raffle_84_88_png");
		this.addChild(this.reset);
		this.reset.touchEnabled=true;
		this.reset.addEventListener(egret.TouchEvent.TOUCH_BEGIN, function(){Data.reset()}, this);


	}
	private loadRoom() {
		this.addChildAt(this.homeicon, 0);


		this.addChild(this.room);
		this.addChild(this.Courtyardicon);
		this.addChild(this.shop);
		this.addChild(this.clover);
		this.addChild(this.clovertext);
		this.addChild(this.reset);

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


		this.addChildAt(this.Courtyardicon, 0);

		this.addChild(this.courtyard);

		this.addChild(this.homeicon);
		this.addChild(this.shop);
		this.addChild(this.clover);
		this.addChild(this.clovertext);
		this.addChild(this.reset);
	}
}