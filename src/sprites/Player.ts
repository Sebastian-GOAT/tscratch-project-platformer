import { Engine, Rectangle, Sprite, type RectangleOptions } from 'tscratch';

interface PlayerOptions extends RectangleOptions {

}

export default class Player extends Rectangle {

    public gravity: number;
    public jumpForce: number;
    public drag: number;
    public speed: number;

    public vX: number;
    public vY: number;
    public falling: number;

    public level: string;

    private controls() {
        const engine = Engine.init();

        if ((engine.keyPressed('w') || engine.keyPressed('space')) && this.falling < 3) {
            this.vY = this.jumpForce;
        }
        if (engine.keyPressed('a')) {
            this.vX -= this.speed;
        }
        if (engine.keyPressed('d')) {
            this.vX += this.speed;
        }
    }

    private moveInSteps(steps: number) {
        const engine = Engine.init();

        const condition = (s: Sprite) =>
            (
                s.discriminant === 'rectangle' ||
                s.discriminant === 'square' ||
                s.discriminant === 'circle'
            ) && s !== this;

        const localObstacles = engine.sceneMap.get(this.level)!.sprites.filter(condition);
        const globalObstacles = engine.sceneMap.get('*')!.sprites.filter(condition);

        const obstacles = [...localObstacles, ...globalObstacles];

        this.falling++;
        for (let i = 0; i < steps; i++) {

            const lastY = this.y;
            this.changeY(this.vY / steps);

            for (const obstacle of obstacles) {
                if (this.touching(obstacle)) {
                    this.setY(lastY);
                    if (this.vY < 0)
                        this.falling = 0;
                    this.vY = 0;
                    break;
                }
            }

            const lastX = this.x;
            this.changeX(this.vX / steps);

            for (const obstacle of obstacles) {
                if (this.touching(obstacle)) {
                    this.setX(lastX);
                    this.vX = 0;
                    break;
                }
            }
        }
    }

    public update() {
        this.vX *= this.drag;
        this.vY += this.gravity;

        this.controls();
        this.moveInSteps(Math.abs(this.vX) + Math.abs(this.vY));
    }

    constructor(options?: PlayerOptions) {
        super(options);

        this.gravity = -1;
        this.jumpForce = 10;
        this.drag = 0.75;
        this.speed = 2;

        this.vX = 0;
        this.vY = 0;
        this.falling = 3;

        this.level = 'main';
    }
}