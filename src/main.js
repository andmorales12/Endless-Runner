// Name: Andrea Morales Villegas
// Game Title: Endless Runner
// Time Completion:
// Creative Tilt Justification: 

let config = {
    type: Phaser.AUTO,
    width: 640,
    height: 480,
    scene: [ Load, Menu, Play ]
}

let game = new Phaser.Game(config)

// reserve keyboard

