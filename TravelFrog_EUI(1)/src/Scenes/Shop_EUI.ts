class Shop_EUI extends eui.Component implements eui.UIComponent {
	public constructor() {
		super();

		this.skinName = "Shop_EUISkin";
		this.width = Data.getscreenWidth();
		this.height = Data.getscreenHeight();
		this.GenerateGroup();
	}

	protected partAdded(partName: string, instance: any): void {
		super.partAdded(partName, instance);
	}


	protected childrenCreated(): void {
		super.childrenCreated();
	}

	public ButtonR: eui.Button;
	public ButtonL: eui.Button;
	public ButtonS: eui.Button;
	public Txt: eui.Label;

	private Groups: eui.Component;
	private GenerateGroup() {
		this.Groups = new eui.Component();
		var index = 1;
		for (let i in Data.ShopTable) {
			let bsketgroup = new Basket_EUI();
			bsketgroup.Image0.source = Data.ShopTable[i][2];
			bsketgroup.Name0.text = Data.ShopTable[i][3];
			bsketgroup.Price0.text = Data.ShopTable[i][4];
			this.Groups.addChild(bsketgroup);
			bsketgroup.x = index * 300;
			index++;
		}
		//this.Groups.y=Data.getscreenHeight()/2-this.Groups.height/2;
		this.addChild(this.Groups);
		this.ButtonR.addEventListener(egret.TouchEvent.TOUCH_END, this.moveR, this);
		this.ButtonL.addEventListener(egret.TouchEvent.TOUCH_END, this.moveL, this);
	}

	private moveR() {
		if (this.Groups.x>-this.Groups.width) {
			let tw = egret.Tween.get(this.Groups);
			tw.to({ x: this.Groups.x - Data.getscreenWidth() }, 500);
		}
	}

	private moveL() {
		if (this.Groups.x<0){
			let tw = egret.Tween.get(this.Groups);
			tw.to({ x: this.Groups.x + Data.getscreenWidth() }, 500);
		}
	}

}