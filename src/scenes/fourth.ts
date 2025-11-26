import { canvas, Rectangle, Text } from 'tscratch';

// Changable
const obstacleSize = 40;

// Floor
new Rectangle({
    y: -canvas.height / 2,
    width: canvas.width,
    height: obstacleSize,
    scene: 'fourth'
});

// Walls
new Rectangle({
    x: -canvas.width / 2,
    width: obstacleSize,
    height: canvas.height,
    scene: 'fourth'
});
new Rectangle({
    x: canvas.width / 2,
    y: -75,
    width: obstacleSize,
    height: canvas.height - 75,
    scene: 'fourth'
});
new Rectangle({
    x: -75,
    y: canvas.height / 2,
    width: canvas.width - 75,
    height: obstacleSize,
    scene: 'fourth'
});

// You won label
new Text({
    fontSize: 64,
    content: 'You won!',
    layer: -5,
    scene: 'fourth'
});