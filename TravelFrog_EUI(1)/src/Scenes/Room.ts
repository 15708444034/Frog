class Room extends egret.Sprite {
	public constructor() {
		super();
		this.CreateScene();
		this.createBags();
	}

	private background: egret.Bitmap;
	private iconTrip: egret.Bitmap;
	private uiTrip: egret.Bitmap;

	private CreateScene() 
	{
		this.background = new egret.Bitmap();
		this.background.texture = RES.getRes("back_mainIn_png");
		this.addChild(this.background);
		this.background.width = Data.getscreenWidth();
		this.background.height = Data.getscreenHeight();

		this.iconTrip = new egret.Bitmap();
		this.iconTrip.texture = RES.getRes("Z11_png");
		this.addChild(this.iconTrip);
		this.iconTrip.x+=15;
		this.iconTrip.y+=Data.getscreenHeight()-this.iconTrip.height-10;
		this.iconTrip.touchEnabled=true;
		this.iconTrip.addEventListener(egret.TouchEvent.TOUCH_END,this.TouchTrip,this);

	}

	private TouchTrip()
	{
		if(!this.getChildByName( "Trip" ))
		{
			this.addChild(this.roomEUI);
		}
		else
		{
			this.removeChild(this.roomEUI);
		}
		
	}

	private roomEUI:RoomEUI;
	private backpack_EUI:Backpack_EUI;
	private createBags()
	{
		this.roomEUI = new RoomEUI();
		this.roomEUI.name="Trip";
		
		this.roomEUI.buttonXL.addEventListener(egret.TouchEvent.TOUCH_END,this.TouchTrip,this);
		this.roomEUI.buttonXR.addEventListener(egret.TouchEvent.TOUCH_END,this.TouchTrip,this);
		this.roomEUI.button0.addEventListener(egret.TouchEvent.TOUCH_END,this.openBackpack,this);
		this.roomEUI.button1.addEventListener(egret.TouchEvent.TOUCH_END,this.openBackpack,this);
		this.roomEUI.button2.addEventListener(egret.TouchEvent.TOUCH_END,this.openBackpack,this);
		this.roomEUI.button3.addEventListener(egret.TouchEvent.TOUCH_END,this.openBackpack,this);
		this.roomEUI.button4.addEventListener(egret.TouchEvent.TOUCH_END,this.openBackpack,this);
		this.roomEUI.button5.addEventListener(egret.TouchEvent.TOUCH_END,this.openBackpack,this);
		this.roomEUI.button6.addEventListener(egret.TouchEvent.TOUCH_END,this.openBackpack,this);
		this.roomEUI.button7.addEventListener(egret.TouchEvent.TOUCH_END,this.openBackpack,this);
		this.roomEUI.button8.addEventListener(egret.TouchEvent.TOUCH_END,this.openBackpack,this);

		this.backpack_EUI=new Backpack_EUI();
		this.backpack_EUI.name="Backpack";
		this.backpack_EUI.buttonX.addEventListener(egret.TouchEvent.TOUCH_END,this.openBackpack,this);
	}

	
	private openBackpack()
	{
		if(!this.getChildByName( "Backpack" ))
		{
			this.addChild(this.backpack_EUI);
		}
		else
		{
			this.removeChild(this.backpack_EUI);
		}
		
	}
}