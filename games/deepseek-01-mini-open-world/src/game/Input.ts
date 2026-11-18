export class Input {
  private keys = new Set<string>();
  private pressed = new Set<string>();

  private onKeyDown = (e: KeyboardEvent) => {
    if (e.repeat) return;
    if (!this.keys.has(e.code)) this.pressed.add(e.code);
    this.keys.add(e.code);
    if (
      e.code === 'Space' ||
      e.code === 'ArrowUp' ||
      e.code === 'ArrowDown' ||
      e.code === 'ArrowLeft' ||
      e.code === 'ArrowRight'
    ) {
      e.preventDefault();
    }
  };

  private onKeyUp = (e: KeyboardEvent) => {
    this.keys.delete(e.code);
  };

  private onBlur = () => {
    this.keys.clear();
    this.pressed.clear();
  };

  attach() {
    window.addEventListener('keydown', this.onKeyDown);
    window.addEventListener('keyup', this.onKeyUp);
    window.addEventListener('blur', this.onBlur);
  }

  detach() {
    window.removeEventListener('keydown', this.onKeyDown);
    window.removeEventListener('keyup', this.onKeyUp);
    window.removeEventListener('blur', this.onBlur);
  }

  isDown(code: string): boolean {
    return this.keys.has(code);
  }

  wasPressed(code: string): boolean {
    return this.pressed.has(code);
  }

  axis(neg: string[], pos: string[]): number {
    let v = 0;
    for (const k of neg) if (this.keys.has(k)) v -= 1;
    for (const k of pos) if (this.keys.has(k)) v += 1;
    return Math.max(-1, Math.min(1, v));
  }

  endFrame() {
    this.pressed.clear();
  }
}