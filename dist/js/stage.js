class Stage {
  constructor(width, height, entities) {
    this.width = width;
    this.height = height;
    this.entities = [];
  }

  collisionDetection(x, y) {
    for(let i = 0; i < this.entities.length; i+=1) {
      let a = this.entities[i].x;
      let  b = this.entities[i].y;
      let type = this.entities[i].type;
      //  console.log(type)
      console.log(a + ' ' + b)
       if(a === x && b === y) {
         return true;
       } else {
         return false;
       }
    }
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
