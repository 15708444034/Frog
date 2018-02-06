// TypeScript file

class Frog extends egret.Sprite {
    public constructor() {
        super();
        this.initState();

    }

    private behavior: egret.MovieClip;

    private initState() {
        let temp: number;
        let ran = Math.random();
        if (ran < 0.5) {
            temp = 1;
        }
        else {
            temp = 2;
        }
        if (Data.getfrogstate()) {
            switch (temp) {
                case 1:
                    var data = RES.getRes("eat_json");
                    var txtr = RES.getRes("eat_png");
                    var mcFactory: egret.MovieClipDataFactory = new egret.MovieClipDataFactory(data, txtr);
                    this.behavior = new egret.MovieClip(mcFactory.generateMovieClipData("Eat"));
                    this.behavior.x = Data.getscreenWidth() * 0.81 - this.behavior.width;
                    this.behavior.y = Data.getscreenHeight() * 2 / 3 - this.behavior.height;
                    this.addChild(this.behavior);
                    this.behavior.gotoAndPlay(1, -1);
                    break;
                case 2:
                    var data = RES.getRes("read_json");
                    var txtr = RES.getRes("read_png");
                    var mcFactory: egret.MovieClipDataFactory = new egret.MovieClipDataFactory(data, txtr);
                    this.behavior = new egret.MovieClip(mcFactory.generateMovieClipData("Read"));
                    this.behavior.x = Data.getscreenWidth() * 0.72 - this.behavior.width;
                    this.behavior.y = Data.getscreenHeight() * 0.25 - this.behavior.height;

                    this.addChild(this.behavior);
                    this.behavior.gotoAndPlay(1, -1);
                    break;

            }
        }
    }

}
