import { canvas, Rectangle, Square } from 'tscratch';

// Changable
const obstacleSize = 40;

// Floor
new Rectangle({
    y: -canvas.height / 2,
    width: canvas.width,
    height: obstacleSize,
    scene: 'second'
});

// Walls
new Rectangle({
    x: canvas.width / 2,
    width: obstacleSize,
    height: canvas.height,
    scene: 'second'
});

// Stairs
new Square({ x: obstacleSize * -4, y: -180, scene: 'second' });
new Square({ x: obstacleSize * -3, y: -160, scene: 'second' });
new Square({ x: obstacleSize * -2, y: -140, scene: 'second' });
new Square({ x: obstacleSize * -1, y: -120, scene: 'second' });
new Square({ x: obstacleSize * 0, y: -100, scene: 'second' });
new Square({ x: obstacleSize * 1, y: -80, scene: 'second' });
new Square({ x: obstacleSize * 2, y: -60, scene: 'second' });
new Square({ x: obstacleSize * 3, y: -40, scene: 'second' });
new Square({ x: obstacleSize * 4, y: -20, scene: 'second' });
new Square({ x: obstacleSize * 5, y: 0, scene: 'second' });
new Square({ x: obstacleSize * 6, y: 20, scene: 'second' });
new Square({ x: obstacleSize * 7, y: 40, scene: 'second' });
new Square({ x: obstacleSize * 8, y: 60, scene: 'second' });
new Square({ x: obstacleSize * 9, y: 80, scene: 'second' });
new Square({ x: obstacleSize * 10, y: 100, scene: 'second' });

// Pad
new Square({ x: obstacleSize * 10.5, y: 180, scene: 'second', sideLength: 10 });