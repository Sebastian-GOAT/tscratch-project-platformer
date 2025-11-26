import { canvas, Engine } from 'tscratch';
import player from './player.ts';
import './scenes/main.ts';
import './scenes/second.ts';
import thirdLoop from './scenes/third.ts';
import './scenes/fourth.ts';

const engine = Engine.init();
engine.setMaxFramesPerSecond(40); // Nax 40 FPS

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
    if (player.y > canvas.height / 2) {
        player.setY(-canvas.height / 2);
        engine.changeScene('third');
        player.level = 'third';
    }
});

// 3rd scene/level
engine.setLoop('third', () => {

    player.update();
    thirdLoop();

    if (player.x < -canvas.width / 2) {
        player.setX(canvas.width / 2);
        engine.changeScene('fourth');
        player.level = 'fourth';
    }
    if (player.y < -canvas.height / 2) {
        player.setY(canvas.height / 2);
        engine.changeScene('second');
        player.level = 'second';
    }
});

// 4th scene/level
engine.setLoop('fourth', () => {

    player.update();

    if (player.x > canvas.width / 2) {
        player.setX(-canvas.width / 2);
        engine.changeScene('third');
        player.level = 'third';
    }
});