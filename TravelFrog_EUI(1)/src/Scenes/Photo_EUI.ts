class Photo_EUI extends eui.Component implements eui.UIComponent {
	public constructor() {
		super();
		this.skinName = "Photo_EUISkin";
		this.addEventListener(egret.Event.ADDED_TO_STAGE, this.RefreshGroups, this);
		this.showT();
		this.Bl.addEventListener(egret.TouchEvent.TOUCH_END, this.L, this);
		this.Br.addEventListener(egret.TouchEvent.TOUCH_END, this.R, this);
	}

	protected partAdded(partName: string, instance: any): void {
		super.partAdded(partName, instance);
	}


	protected childrenCreated(): void {
		super.childrenCreated();
	}

	private groups: eui.Group;
	private RefreshGroups() {
		this.groups = new eui.Group();
		let index = 0;
		for (let i in Data.Photo) {
			if (Data.Photo[i] != 0) {
				let temp = new eui.Image();
				temp.source = i;
				this.groups.addChild(temp);
				temp.touchEnabled = true;
				temp.addEventListener(egret.TouchEvent.TOUCH_END, this.Show, this);
				temp.width = Data.getscreenWidth() / 3;
				temp.height = temp.width;
				if (index % 3 == 0) {
					temp.x = (Data.getscreenWidth() / 2 - temp.width) / 2 + index * Data.getscreenWidth() / 6;
					temp.y = 200;
				}
				else if (index % 3 == 1) {
					temp.x = (Data.getscreenWidth() / 2 - temp.width) / 2 + (index - 1) * Data.getscreenWidth() / 6;
					temp.y = 450;
				}
				else {
					temp.x = (Data.getscreenWidth() / 2 - temp.width) / 2 + (index - 2) * Data.getscreenWidth() / 6;
					temp.y = 700;
				}
				index++;
			}
		}
		this.addChildAt(this.groups,2);
	}

	private t: eui.Image;
	private showT() {
		this.t = new eui.Image();
		this.t.width = Data.getscreenWidth();
		this.t.height = this.t.width;
		this.t.y = 200;
		this.t.touchEnabled = true;
		this.t.addEventListener(egret.TouchEvent.TOUCH_END, function () { this.removeChild(this.t) }, this);
	}
	private Show(e: egret.Event) {
		this.t.source = e.currentTarget.source;
		this.addChild(this.t);
	}

	public Bx: eui.Button;
	public Bl: eui.Button;
	public Br: eui.Button;

	private L() {
		if (this.groups.x <0){
			this.groups.x += Data.getscreenWidth();
		}
	}
	private R() {
		if (this.groups.x >-(this.groups.width-Data.getscreenWidth())){
			this.groups.x -= Data.getscreenWidth();
		}
	}

}