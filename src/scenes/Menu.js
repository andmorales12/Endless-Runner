class Menu extends Phaser.Scene {
    constructor() {
        super("menuScene")
    }

    preload() {
        // loading title image
        this.load.image('menu', './assets/images/titlescreen.png')

    }

    create() {
        this.add.image(0,0, 'background').setOrigin(0, 0).setDisplaySize(game.config.width, game.config.height);
    }

    update() {

    }

}