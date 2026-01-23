class Wolf {
    constructor(game) {
        this.game = game;

        this.x = 500;
        this.y = 450;

        this.animator = new Animator(
            ASSET_MANAGER.getAsset("Run.png"), 
            0, 0, 
            129, 128, 
            9, 0.1
        );
    };

    update() {
        this.x += 250 * this.game.clockTick;
        if (this.x >= 1500)
            this.x = -250
    };

    draw(ctx) {
        this.animator.drawFrame(this.game.clockTick, ctx, this.x, this.y);
    }
    
}