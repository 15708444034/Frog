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
		var index = 0;
		for (let i in Data.ShopTable) {
			let bsketgroup = new Basket_EUI();
			bsketgroup.Image1.source = Data.ShopTable[i][2];
			bsketgroup.Name0.text = Data.ShopTable[i][3];
			bsketgroup.Price0.text = Data.ShopTable[i][4];
			bsketgroup.id=i;
			bsketgroup.touchEnabled=true;
			bsketgroup.addEventListener(egret.TouchEvent.TOUCH_END, this.Touch, this);
			this.Groups.addChild(bsketgroup);
			if(index%2==0){
				bsketgroup.x = index * Data.getscreenWidth()/4;
			}
			else{
				bsketgroup.x = (index-1) * Data.getscreenWidth()/4;
				bsketgroup.y +=300;
			}
			index++;
		}
		this.addChildAt(this.Groups,5);
		this.ButtonR.addEventListener(egret.TouchEvent.TOUCH_END, this.moveR, this);
		this.ButtonL.addEventListener(egret.TouchEvent.TOUCH_END, this.moveL, this);
	}

	private moveR() {
		if (this.Groups.x>-(this.Groups.numChildren/4*Data.getscreenWidth())+Data.getscreenWidth()) {
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
	private TouchId:string=null;
	private Touch(e: egret.Event)
	{
		if(this.TouchId!=e.currentTarget.id||this.TouchId==null){
			this.TouchId=e.currentTarget.id;
			this.Txt.text= Data.ShopTable[e.currentTarget.id][6];
		}
		else
		{
			Data.Buy(e.currentTarget.id);
		}
	}

}