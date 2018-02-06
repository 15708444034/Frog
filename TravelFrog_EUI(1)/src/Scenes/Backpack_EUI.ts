class Backpack_EUI extends eui.Component implements eui.UIComponent {
	public constructor() {
		super();
		this.skinName = "Backpack_EUISkin";
		
	}

	protected partAdded(partName: string, instance: any): void {
		super.partAdded(partName, instance);
	}


	protected childrenCreated(): void {
		super.childrenCreated();
	}

	public buttonX: eui.Button;

	//private backpackTable: BackpackTable;
	

}