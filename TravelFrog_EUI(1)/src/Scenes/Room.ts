class Room extends egret.Sprite {
	public constructor() {
		super();
		this.CreateScene();
		this.createBags();
	}

	private background: egret.Bitmap;
	private iconTrip: egret.Bitmap;
	private uiTrip: egret.Bitmap;
	private myfrog: Frog;
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
			this.myfrog = new Frog();
			this.addChild(this.myfrog);

	}

	private TouchTrip()
	{
		if(!this.getChildByName( "Trip" ))
		{
			this.addChild(this.bagsSprite);
		}
		else
		{
			this.removeChild(this.bagsSprite);
			
		}
		
	}

	private bagsSprite:egret.Sprite;
	private createBags()
	{
		this.bagsSprite=new egret.Sprite();
		this.bagsSprite.name="Trip";

		let roomEUI = new RoomEUI();
        this.bagsSprite.addChild(roomEUI);
		roomEUI.buttonXL.addEventListener(egret.TouchEvent.TOUCH_END,this.TouchTrip,this);
		roomEUI.buttonXR.addEventListener(egret.TouchEvent.TOUCH_END,this.TouchTrip,this);
	}

	private Finish()
	{
		
	}
}