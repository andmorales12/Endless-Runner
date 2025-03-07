class Menu extends Phaser.Scene {
    constructor() {
        super("menuScene")
    }


    create() {
        this.add.image(0,0, 'titlescreen').setOrigin(0, 0).setDisplaySize(game.config.width, game.config.height);
    }

    update() {
        // check for input

    }

}