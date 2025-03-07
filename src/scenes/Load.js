class Load extends Phaser.Scene {
    constructor() {
        super('loadScene')
    }

    preload() {
        // loading bar
        // see: https://rexrainbow.github.io/phaser3-rex-notes/docs/site/loader/
        // let loadingBar = this.add.graphics();
        // this.load.on('progress', (value) => {
        //     loadingBar.clear();                                 // reset fill/line style
        //     loadingBar.fillStyle(0xFFFFFF, 1);                  // (color, alpha)
        //     loadingBar.fillRect(0, centerY, w * value, 5);  // (x, y, w, h)
        // });
        // this.load.on('complete', () => {
        //     loadingBar.destroy();
        // });

        // change path to begin loading different assets
        this.load.path = './assets'

        // load images
        this.load.image('titlescreen', '/images/titlescreen.png')

        // load bitmap font


        // load sprites


        // load music


        // load sfx
    }

    create() {
        // go to the game menu screen
        this.scene.start('menuScene')
    }

    update() {
        
    }
}