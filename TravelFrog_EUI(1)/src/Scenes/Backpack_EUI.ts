class Backpack_EUI extends eui.Component implements  eui.UIComponent {
	public constructor() {
		super();
		this.skinName="Backpack_EUISkin";
		this.addEventListener(egret.Event.ADDED_TO_STAGE,this.createBackpackTable,this);
	}

	protected partAdded(partName:string,instance:any):void
	{
		super.partAdded(partName,instance);
	}


	protected childrenCreated():void
	{
		super.childrenCreated();
	}

	public buttonX:eui.Button;

	private backpackTable:BackpackTable;

	private createBackpackTable()
	{
		let index:number=0;
		for(let i in Data.BackpackTable)
		{
			if( Data.BackpackTable[i]!=0)
			{
				this.backpackTable=new BackpackTable();
				this.backpackTable.label2.text=Data.BackpackTable[i].toString();
				this.backpackTable.label0.text=Data.ShopTable[i][3];
				this.backpackTable.label1.text=Data.ShopTable[i][6];
				this.backpackTable.image2.source=Data.ShopTable[i][2];
				this.addChild(this.backpackTable);
				this.backpackTable.y+=index*200;
			}
		}
	}
	
}