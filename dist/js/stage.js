class Stage {
  constructor(width, height, Pacman) {
    this.Pacman = Pacman;
    this.width = width;
    this.height = height;
    this.entities = [];
    this.type = '';
  }

  collisionDetection(x, y) {
    for(let i = 0; i < this.entities.length; i+=1) {
      if(this.entities[i].x === x && this.entities[i].y === y) {
        if(this.entities[i].type === 'wall') {
          this.type = 'wall';
          return true;
        } else if(this.entities[i].type === 'apple') {
          this.type = 'apple';
          this.removeEntity(this.entities[i]);
        }
      }
    }
    return null;
  }

  render() {
    this.element = document.createElement('div');
    this.element.className = 'stage';
    this.element.innerHTML = (``)
    
    this.element.style.width = this.width * 85 + 'px';
    this.element.style.height = this.height * 85 + 'px';
    return this.element;  
  }
  
  mount(parent) {
    parent.appendChild(this.render());
  }

  removeEntity(ent) {
    const idx = this.entities.indexOf(ent);
    if(idx > -1) {
      this.entities.splice(idx, 1);
      ent.unmount();
    }
  }
}
