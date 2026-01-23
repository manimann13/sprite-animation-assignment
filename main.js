const gameEngine = new GameEngine();

const ASSET_MANAGER = new AssetManager();

ASSET_MANAGER.queueDownload("background.png");
ASSET_MANAGER.queueDownload("Run.png");


ASSET_MANAGER.downloadAll(() => {
	const canvas = document.getElementById("gameWorld");
	const ctx = canvas.getContext("2d");
	ctx.imageSmoothingEnabled = false;
	
	gameEngine.addEntity(new Wolf(gameEngine));
	gameEngine.addEntity(new Background(gameEngine));
	
	gameEngine.init(ctx);
	gameEngine.start();
});
