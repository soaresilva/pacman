class Entity {
  constructor(stage, x, y, type) {
    this.x = x;
    this.y = y;
    this.type = type;
    this.stage = stage;
  }

  render() {
    this.element = document.createElement('div');
    this.element.className = `entity entity--${this.type}`;
  

    this.element.style.left = this.x * 85 + 'px';
    this.element.style.top = this.y * 85 + 'px';

    return this.element;
  }

  mount(parent) {
    parent.appendChild(this.render());
  }

  unmount(parent) {
    parent.removeChild(this.render());
  }
}

const wall = new Entity();