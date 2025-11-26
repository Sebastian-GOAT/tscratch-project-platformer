import { Watermark, type WatermarkOptions } from 'tscratch';

export default class Timer extends Watermark {

    public timeMs = 0;
    private stopped = false;
    private start = performance.now();

    public stop() {
        if (this.stopped) return;

        this.stopped = true;

        const elapsed = performance.now() - this.start;
        const wr = localStorage.getItem('wr');

        if (!wr || elapsed < Number(wr))
            localStorage.setItem('wr', String(elapsed));
    }

    public update() {
        if (this.stopped) return;
        
        const elapsed = performance.now() - this.start;

        const s = Math.floor(elapsed / 1000);
        const ms = Math.floor(elapsed % 1000).toString().padStart(3, "0");

        this.setContent(`Time: ${s}.${ms}`);
    }

    constructor(options?: WatermarkOptions) {
        super(options);
    }
}