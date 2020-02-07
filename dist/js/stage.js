class Stage {
  constructor(width, height, entities) {
    this.width = width;
    this.height = height;
    this.entities = [];
  }

  collisionDetection(x, y) {
    for(let i = 0; i < this.entities.length; i+=1) {
      if(this.entities[i].x === x && this.entities[i].y === y) {
        if(this.entities[i].type === 'wall') {
          return true;
        } else if(this.entities[i].type === 'apple') {
          console.log('oh an apple')
        }
      }
    }
    return null;

      //  a.push(this.entities[i].x);
      //   b.push(this.entities[i].y);
      // let type = this.entities[i].type;
    }

    
  removeEntity(entity) {
    
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
}

// Inside your stage create a method called collisionDetection. Let it have two inputs x and y. If there is an entity on the stage at position (x, y) return this entity, otherwise return null. We will use this method to prevent the pacman moving through walls, allow him to pick apples etc.
