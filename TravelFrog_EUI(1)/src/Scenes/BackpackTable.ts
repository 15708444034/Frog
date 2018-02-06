class BackpackTable extends eui.Component implements eui.UIComponent {
	public constructor() {
		super();
		this.skinName = "BackpackTableSkin";
	}

	protected partAdded(partName: string, instance: any): void {
		super.partAdded(partName, instance);
	}


	protected childrenCreated(): void {
		super.childrenCreated();
	}

	public image0: eui.Image;
	public image1: eui.Image;
	public image2: eui.Image;
	public label0: eui.Label;
	public label1: eui.Label;
	public label2: eui.Label;
	public id:string;

}