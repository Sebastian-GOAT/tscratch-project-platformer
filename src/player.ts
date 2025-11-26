import { Watermark } from 'tscratch';
import Player from './sprites/Player.ts';

// Watermark
const watermark = new Watermark();
watermark.changeX(20);

// Player
export default new Player({
    x: 80,
    y: 100,
    width: 50,
    height: 80,
    color: 'red',
    scene: '*'
});