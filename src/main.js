// Name: Andrea Morales Villegas
// Game Title: Endless Runner
// Time Completion:
// Creative Tilt Justification: 

let config = {
    type: Phaser.AUTO,
    render: {
        pixelArt: true
    },
    height: 640,
    width: 960,
    scale: {
        autoCenter: Phaser.Scale.CENTER_BOTH
    },
    physics: {
        default: 'arcade',
        arcade: {
            //debug: true,
            gravity: {
                x: 0,
                y: 0
            }
        }
    },
    scene: [ Load, Menu, Play, GameOver ]
}

let game = new Phaser.Game(config)

// set global variables
const centerX = game.config.width / 2
const centerY = game.config.height / 2

