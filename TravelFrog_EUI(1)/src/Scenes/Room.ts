class Room extends egret.Sprite {
	public constructor() {
		super();
		this.CreateScene();
		this.createBags();

		this.backpackGrops = new eui.Group();
		this.backpackGrops.addEventListener(egret.Event.ADDED_TO_STAGE, this.createBackpackTable, this);
		this.backpackGrops.addEventListener(egret.Event.REMOVED_FROM_STAGE, this.clearBackpackTable, this);
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
		this.roomEUI.image.addEventListener(egret.TouchEvent.TOUCH_END,this.openBackpack,this);
		this.roomEUI.image0.addEventListener(egret.TouchEvent.TOUCH_END,this.openBackpack,this);
		this.roomEUI.image1.addEventListener(egret.TouchEvent.TOUCH_END,this.openBackpack,this);
		this.roomEUI.image2.addEventListener(egret.TouchEvent.TOUCH_END,this.openBackpack,this);
		this.roomEUI.image3.addEventListener(egret.TouchEvent.TOUCH_END,this.openBackpack,this);
		this.roomEUI.image4.addEventListener(egret.TouchEvent.TOUCH_END,this.openBackpack,this);
		this.roomEUI.image5.addEventListener(egret.TouchEvent.TOUCH_END,this.openBackpack,this);
		this.roomEUI.image6.addEventListener(egret.TouchEvent.TOUCH_END,this.openBackpack,this);
		this.roomEUI.image7.addEventListener(egret.TouchEvent.TOUCH_END,this.openBackpack,this);

		this.backpack_EUI=new Backpack_EUI();
		this.backpack_EUI.name="Backpack";
		this.backpack_EUI.buttonX.addEventListener(egret.TouchEvent.TOUCH_END,this.openBackpack,this);
	}

	private temp:eui.Image;
	private openBackpack(e:egret.Event)
	{
		if(!this.getChildByName( "Backpack" ))
		{
			this.addChild(this.backpack_EUI);
			this.addChild(this.backpackGrops);
			this.temp=<eui.Image>e.currentTarget;
		}
		else
		{
			this.removeChild(this.backpack_EUI);
			this.removeChild(this.backpackGrops);
			this.temp=null;
		}
		
	}

	private backpackGrops: eui.Group;

	private createBackpackTable() {
		let index: number = 0;
		for (let i in Data.BackpackTable) {

			if (Data.BackpackTable[i] != 0) {
				let backpackTable = new BackpackTable();
				backpackTable.id=i;
				backpackTable.label2.text = Data.BackpackTable[i].toString();
				backpackTable.label0.text = Data.ShopTable[i][3];
				backpackTable.label1.text = Data.ShopTable[i][6];
				backpackTable.image2.source = Data.ShopTable[i][2];
				this.backpackGrops.addChild(backpackTable);
				backpackTable.x=Data.getscreenWidth()/2-backpackTable.width/2;
				backpackTable.y += 400+index * backpackTable.height;
				backpackTable.touchEnabled=true;
				backpackTable.addEventListener(egret.TouchEvent.TOUCH_END,this.equip,this);
				index++;
			}
		}
		
	}

	private clearBackpackTable() {
		if (this.backpackGrops.numChildren != 0) {
			this.backpackGrops.removeChildren();
		}
	}

	private equip(e:egret.Event)
	{
		this.temp.source=Data.ShopTable[e.currentTarget.id][2];
		Data.BackpackTable[e.currentTarget.id]-=1;
		this.openBackpack(e);
	}
}