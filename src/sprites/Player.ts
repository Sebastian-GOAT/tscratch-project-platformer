import { Engine, ImageSprite, Sprite, type ImageSpriteOptions } from 'tscratch';

interface PlayerOptions extends ImageSpriteOptions {}

export default class Player extends ImageSprite {

    public gravity: number;
    public jumpForce: number;
    public drag: number;
    public speed: number;

    public vX: number;
    public vY: number;
    public falling: number;

    public level: string;

    // Handle user input (w/a/s/space)
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

        // Pick specific objects to collide with based on their type
        const condition = (s: Sprite) => s.discriminant !== 'text' && s !== this;

        const localObstacles = engine.sceneMap.get(this.level)!.sprites.filter(condition);
        const globalObstacles = engine.sceneMap.get('*')!.sprites.filter(condition);

        // Array of obstacles that the player can collide with
        const obstacles = [...localObstacles, ...globalObstacles];

        // Move & check collisions on both axes (X, Y)
        this.falling++;
        for (let i = 0; i < steps; i++) {

            // Y axis
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

            // X axis
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

    // Run every frame
    public update() {
        this.vX *= this.drag;
        this.vY += this.gravity;

        this.controls();
        this.moveInSteps(Math.abs(this.vX) + Math.abs(this.vY));
    }

    // Set initial properties
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