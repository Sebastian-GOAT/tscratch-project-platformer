import { canvas, Engine } from 'tscratch';
import Player from './sprites/Player.ts';
import './scenes/main.ts';
import './scenes/second.ts';

const engine = Engine.init();
engine.setMaxFramesPerSecond(40); // Nax 40 FPS

// Player
const player = new Player({
    x: 80,
    y: 100,
    width: 50,
    height: 80,
    color: 'red',
    scene: '*'
});

// 1st scene/level
engine.setLoop('main', () => {

    player.update();

    if (player.x > canvas.width / 2) {
        player.setX(-canvas.width / 2);
        engine.changeScene('second');
        player.level = 'second';
    }
});

// 2nd scene/level
engine.setLoop('second', () => {

    player.update();

    if (player.x < -canvas.width / 2) {
        player.setX(canvas.width / 2);
        engine.changeScene('main');
        player.level = 'main';
    }
});