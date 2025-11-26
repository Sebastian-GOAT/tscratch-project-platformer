import { canvas, Engine, Rectangle, Square, type RectangleOptions } from 'tscratch';
import player from '@/player.ts';

const engine = Engine.init();

// Changable
const obstacleSize = 40;
const lowestMovingObstacleY = -175;
const movingObstacleGap = 50;
const speed = 2;

// Floor
new Rectangle({
    x: -75,
    y: -canvas.height / 2,
    width: canvas.width - 75,
    height: obstacleSize,
    scene: 'third'
});

// Walls
new Rectangle({
    x: -canvas.width / 2,
    y: -75,
    width: obstacleSize,
    height: canvas.height - 75,
    scene: 'third'
});
new Rectangle({
    x: canvas.width / 2,
    width: obstacleSize,
    height: canvas.height,
    scene: 'third'
});

// Pad
new Square({ x: canvas.width / 2 - 110, y: -250, scene: 'third', sideLength: 10 });

// Moving objects
const moving1 = new Rectangle({
    y: lowestMovingObstacleY,
    width: 100,
    height: obstacleSize / 2,
    scene: 'third'
});
const moving2 = moving1.clone({ width: 100, height: obstacleSize / 2, y: lowestMovingObstacleY + movingObstacleGap * 1 } as RectangleOptions);
const moving3 = moving1.clone({ width: 100, height: obstacleSize / 2, y: lowestMovingObstacleY + movingObstacleGap * 2 } as RectangleOptions);
const moving4 = moving1.clone({ width: 100, height: obstacleSize / 2, y: lowestMovingObstacleY + movingObstacleGap * 3 } as RectangleOptions);
const moving5 = moving1.clone({ width: 100, height: obstacleSize / 2, y: lowestMovingObstacleY + movingObstacleGap * 4 } as RectangleOptions);
const moving6 = moving1.clone({ width: 100, height: obstacleSize / 2, y: lowestMovingObstacleY + movingObstacleGap * 5 } as RectangleOptions);
const moving7 = moving1.clone({ width: 100, height: obstacleSize / 2, y: lowestMovingObstacleY + movingObstacleGap * 6 } as RectangleOptions);

const movingObstacles = [
    moving1,
    moving2,
    moving3,
    moving4,
    moving5,
    moving6,
    moving7
];
const offsets = [
    0,
    70,
    140,
    210,
    280,
    350,
    420
];

let theta = 0;

// Scene loop
export default () => {

    for (let i = 0; i < movingObstacles.length; i++) {

        const moving = movingObstacles[i]!;
        const offset = offsets[i]!;

        // Move the moving sprites
        moving.setX(150 * engine.sin(theta + offset));

        // Fix collisions
        if (player.touching(moving)) {
            player.setX(
                player.x > moving.x
                    ? moving.x + moving.width / 2 + player.width / 2
                    : moving.x - moving.width / 2 - player.width / 2
            );
        }
    }

    // Update the angle
    theta = (theta + speed) % 360;
};