class Background {
    constructor(game) {
        this.game = game;
        this.image = ASSET_MANAGER.getAsset("background.png");
    }

    update() {}

    draw(ctx) {
        ctx.drawImage(this.image, 0, 0,1600,900);
    }
};