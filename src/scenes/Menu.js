class Menu extends Phaser.Scene {
    constructor() {
        super("menuScene")
    }


    create() {
        // add background image
        this.add.image(0,0, 'titlescreen').setOrigin(0, 0).setDisplaySize(game.config.width, game.config.height);

        // add title text
        this.add.bitmapText(centerX, titleY, 'pixelmania', 'CAT RUN', 64).setOrigin(0.5)

        // add text for game instructions
        this.add.bitmapText(centerX, centerY + 60, 'reppixel', 'USE UP & DOWN ARROWS TO MOVE', 16).setOrigin(0.5)
        this.add.bitmapText(centerX, centerY + 100, 'reppixel', 'PRESS SPACE TO BEGIN', 16).setOrigin(0.5)
    }

    update() {
        // check for input

    }

}