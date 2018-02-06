class RoomEUI extends eui.Component implements eui.UIComponent {
	public constructor() {
		super();
		this.skinName = "RoomEUISkin";
		this.y = Data.getscreenHeight() / 2 - this.height / 2;
		this.addEventListener(egret.Event.ADDED_TO_STAGE,this.createScene,this);

	}

	protected partAdded(partName: string, instance: any): void {
		super.partAdded(partName, instance);
	}

	protected childrenCreated(): void {
		super.childrenCreated();
		
	}

	public buttonL: eui.Button;
	public buttonR: eui.Button;
	public buttonFinish: eui.Button;
	public buttonXL: eui.Button;
	public buttonXR: eui.Button;
	public buttonClear: eui.Button;
	public button0: eui.Button;
	public button1: eui.Button;
	public button2: eui.Button;
	public button3: eui.Button;
	public button4: eui.Button;
	public button5: eui.Button;
	public button6: eui.Button;
	public button7: eui.Button;
	public button8: eui.Button;


	private createScene() 
	{
		this.removeEventListener(egret.Event.ADDED_TO_STAGE,this.createScene,this);
		
		let tw = egret.Tween.get(this.buttonR, { loop: true });
		tw.to({ x: this.buttonR.x + this.buttonR.width }, 500);
		let tw2 = egret.Tween.get(this.buttonL, { loop: true });
		tw2.to({ x: this.buttonL.x - this.buttonL.width }, 500);

		this.buttonR.addEventListener(egret.TouchEvent.TOUCH_END, this.Touch, this);
		this.buttonL.addEventListener(egret.TouchEvent.TOUCH_END, this.Touch, this);
	}

	private Touch() {
		if (this.x > -100) {
			let tw = egret.Tween.get(this);
			tw.to({ x: this.x - this.width / 2 }, 500);
		}
		else {
			let tw = egret.Tween.get(this);
			tw.to({ x: this.x + this.width / 2 }, 500);
		}

	}


}