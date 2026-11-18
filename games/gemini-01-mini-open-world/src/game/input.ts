export class InputController {
  private keys = new Set<string>();
  private justPressed = new Set<string>();

  constructor() {
    window.addEventListener('keydown', this.handleKeyDown, { capture: true });
    window.addEventListener('keyup', this.handleKeyUp, { capture: true });
    window.addEventListener('blur', this.handleBlur);
  }

  // Resolves physical key codes, layout keys (EN, RU, AZERTY), and action names
  private getActionNames(code: string, key: string): string[] {
    const names = new Set<string>();
    const c = (code || '').toLowerCase();
    const k = (key || '').toLowerCase();

    // Raw entries
    if (c) names.add(c);
    if (k) names.add(k);

    // If code starts with "key" (e.g. "keyw" -> "w")
    if (c.startsWith('key') && c.length === 4) {
      names.add(c.charAt(3));
    }

    // Forward: W, ArrowUp, Russian Ц, AZERTY Z
    if (c === 'keyw' || c === 'keyz' || c === 'arrowup' || k === 'w' || k === 'z' || k === 'ц' || k === 'arrowup') {
      names.add('forward');
      names.add('w');
      names.add('keyw');
      names.add('arrowup');
    }

    // Backward: S, ArrowDown, Russian Ы
    if (c === 'keys' || c === 'arrowdown' || k === 's' || k === 'ы' || k === 'arrowdown') {
      names.add('backward');
      names.add('s');
      names.add('keys');
      names.add('arrowdown');
    }

    // Left: A, ArrowLeft, Russian Ф, AZERTY Q
    if (c === 'keya' || c === 'keyq' || c === 'arrowleft' || k === 'a' || k === 'q' || k === 'ф' || k === 'arrowleft') {
      names.add('left');
      names.add('a');
      names.add('keya');
      names.add('arrowleft');
    }

    // Right: D, ArrowRight, Russian В
    if (c === 'keyd' || c === 'arrowright' || k === 'd' || k === 'в' || k === 'arrowright') {
      names.add('right');
      names.add('d');
      names.add('keyd');
      names.add('arrowright');
    }

    // Interact (Enter / Exit Vehicle): E, F, Enter, Russian У, Russian А
    if (
      c === 'keye' || c === 'keyf' || c === 'enter' || c === 'numpadenter' ||
      k === 'e' || k === 'f' || k === 'у' || k === 'а' || k === 'enter'
    ) {
      names.add('interact');
      names.add('e');
      names.add('f');
      names.add('keye');
      names.add('keyf');
      names.add('enter');
    }

    // Handbrake: Space
    if (c === 'space' || k === ' ' || k === 'space') {
      names.add('handbrake');
      names.add('space');
      names.add(' ');
    }

    // Sprint: Shift
    if (c === 'shiftleft' || c === 'shiftright' || k === 'shift') {
      names.add('sprint');
      names.add('shift');
    }

    // Restart: R, Russian К
    if (c === 'keyr' || k === 'r' || k === 'к') {
      names.add('restart');
      names.add('r');
      names.add('keyr');
    }

    // Toggle Sound: M, Russian Ь
    if (c === 'keym' || k === 'm' || k === 'ь') {
      names.add('togglesound');
      names.add('m');
      names.add('keym');
    }

    // Toggle Camera: C, V, Russian С, М
    if (c === 'keyc' || c === 'keyv' || k === 'c' || k === 'v' || k === 'с' || k === 'м') {
      names.add('cameratoggle');
      names.add('c');
      names.add('keyc');
    }

    // Help Toggle: H, Russian Р
    if (c === 'keyh' || k === 'h' || k === 'р') {
      names.add('helptoggle');
      names.add('h');
      names.add('keyh');
    }

    return Array.from(names);
  }

  private handleKeyDown = (e: KeyboardEvent) => {
    // Avoid default browser scrolling for arrow keys, space, and page down
    if (['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'Space'].includes(e.code) || e.key === ' ') {
      e.preventDefault();
    }

    const names = this.getActionNames(e.code, e.key);
    for (const name of names) {
      if (!this.keys.has(name)) {
        this.justPressed.add(name);
      }
      this.keys.add(name);
    }
  };

  private handleKeyUp = (e: KeyboardEvent) => {
    const names = this.getActionNames(e.code, e.key);
    for (const name of names) {
      this.keys.delete(name);
    }
  };

  private handleBlur = () => {
    this.keys.clear();
    this.justPressed.clear();
  };

  public isDown(action: string): boolean {
    return this.keys.has(action.toLowerCase());
  }

  public isJustPressed(action: string): boolean {
    const a = action.toLowerCase();
    if (this.justPressed.has(a)) {
      this.justPressed.delete(a);
      return true;
    }
    return false;
  }

  public triggerAction(action: string) {
    const a = action.toLowerCase();
    this.justPressed.add(a);
  }

  public getMovementInput(): {
    forward: boolean;
    backward: boolean;
    left: boolean;
    right: boolean;
    handbrake: boolean;
    sprint: boolean;
  } {
    return {
      forward: this.isDown('forward') || this.isDown('w') || this.isDown('arrowup'),
      backward: this.isDown('backward') || this.isDown('s') || this.isDown('arrowdown'),
      left: this.isDown('left') || this.isDown('a') || this.isDown('arrowleft'),
      right: this.isDown('right') || this.isDown('d') || this.isDown('arrowright'),
      handbrake: this.isDown('handbrake') || this.isDown('space') || this.isDown(' '),
      sprint: this.isDown('sprint') || this.isDown('shift'),
    };
  }

  public resetJustPressed() {
    this.justPressed.clear();
  }

  public dispose() {
    window.removeEventListener('keydown', this.handleKeyDown, { capture: true });
    window.removeEventListener('keyup', this.handleKeyUp, { capture: true });
    window.removeEventListener('blur', this.handleBlur);
  }
}
