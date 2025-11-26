import { Watermark } from 'tscratch';
import Player from './sprites/Player.ts';
import Timer from './sprites/Timer.ts';

// Watermark
const watermark = new Watermark({ scene: '*' });
watermark.changeX(20);
watermark.changeY(-20);

// Timer
export const timer = new Timer({ scene: '*', content: 'Time: 0.000' });
timer.changeX(20);
timer.changeY(-40);

// World record label
const wrLabel = new Watermark({ scene: '*' });
wrLabel.changeX(20);
wrLabel.changeY(-60);

const elapsed = localStorage.getItem('wr');

const s = Math.floor(Number(elapsed) / 1000);
const ms = Math.floor(Number(elapsed) % 1000).toString().padStart(3, "0");

const display = elapsed ? `${s}.${ms}` : 'not set';

wrLabel.setContent(`World record: ${display}`);

// Player sizing
const playerAspectRatio = 1122 / 529;
const playerSize = 35;

// Player
export const player = new Player({
    x: 80,
    y: 100,
    width: playerSize,
    height: playerAspectRatio * playerSize,
    src: '/player.png',
    scene: '*'
});