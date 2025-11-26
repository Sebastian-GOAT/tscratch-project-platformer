import { canvas, Circle, Rectangle, Square } from 'tscratch';

// Changable
const obstacleSize = 40;

// Floor
new Rectangle({
    y: -canvas.height / 2,
    width: canvas.width,
    height: obstacleSize
});

// Walls
new Rectangle({
    x: -canvas.width / 2,
    width: obstacleSize,
    height: canvas.height
});
new Rectangle({
    y: canvas.height / 2,
    width: canvas.width,
    height: obstacleSize
});

// Stairs
new Square({ x: obstacleSize * -4, y: -180 });
new Square({ x: obstacleSize * -3, y: -160 });
new Square({ x: obstacleSize * -2, y: -140 });
new Square({ x: obstacleSize * -1, y: -120 });
new Square({ x: 0, y: -100 });
new Square({ x: obstacleSize * 1, y: -120 });
new Square({ x: obstacleSize * 2, y: -140 });
new Square({ x: obstacleSize * 3, y: -160 });
new Square({ x: obstacleSize * 4, y: -180 });

// Parkour
new Circle({ x: 300, y: -120 });
new Circle({ x: 400, y: -40 });

new Circle({ x: 300, y: 40 });
new Circle({ x: 400, y: 120 });