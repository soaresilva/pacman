
class Pacman {
  constructor(Stage, xPos, yPos, mouth, pacDirection) {
    this.Stage = Stage;
    this.xPos = xPos;
    this.yPos = yPos;
    this.mouth = mouth;
    this.pacDirection = pacDirection;
  }

  render() {
    this.element = document.createElement('div');
    this.element.className = 'entity entity--pac pacboy-active-light';
    this.element.innerHTML = (``)
    return this.element;
  }

  move() {
    // MOVING UP DOWN LEFT RIGHT
    document.addEventListener('keydown', (e) => {

      if (e.keyCode === 39) {
        // if(this.Stage.collisionDetection(this.xPos - 1, this.yPos - 1) === true) {
        //   if(this.Stage.type === 'wall') {
        //     console.log('hahahah')
        //   }
        // }
        console.log(this.Stage.collisionDetection(2, 1))

        this.element.style.backgroundPositionY = '0px';
        this.mouth = this.element.classList.toggle('entity--pac--mouthClosed')
        this.pacDirection = 'right';
        this.xPos += 1;
        this.update();
      } else if(e.keyCode === 37) {
        console.log(this.Stage.collisionDetection(2,1))

        this.element.style.backgroundPositionY = '-85px';
        this.mouth = this.element.classList.toggle('entity--pac--mouthClosed')
        this.pacDirection = 'left';
        this.xPos -= 1;
        this.update();
      } else if(e.keyCode === 38) {
        console.log(this.Stage.collisionDetection(2,1))

        this.element.style.backgroundPositionY = '-255px';
        this.mouth = this.element.classList.toggle('entity--pac--mouthClosed')
        this.pacDirection = 'up';
        this.yPos -= 1;
        this.update();
      } else if(e.keyCode === 40) {
        console.log(this.Stage.collisionDetection(2,1))

        this.element.style.backgroundPositionY = '-170px';
        this.mouth = this.element.classList.toggle('entity--pac--mouthClosed')
        this.pacDirection = 'down';
        this.yPos += 1;
        this.update();
      }
    })
  };

  update() {
    
    if(this.pacDirection === 'right') {
      if (this.xPos > this.Stage.width - 1) {
        this.xPos = this.Stage.width - 1;
      }
      this.element.style.left = this.xPos * 85 + 'px';

    } else if(this.pacDirection === 'left') {
      if (this.xPos < 0) {
        this.xPos = 0;
      }
      this.element.style.left = this.xPos * 85 + 'px';

    } else if(this.pacDirection === 'up') {
      if (this.yPos < 0) {
        this.yPos = 0;
      }
      this.element.style.top = this.yPos * 85 + 'px';

    } else if(this.pacDirection === 'down') {
      if (this.yPos > this.Stage.height - 1) {
        this.yPos = this.Stage.height - 1;
      }
      this.element.style.top = this.yPos * 85 + 'px';
    }
  }
  
  mount(parent) {
    parent.appendChild(this.render());
  }
  
}

document.addEventListener('DOMContentLoaded', () => {
  const app = document.getElementById('app');
  const stage = new Stage(12, 6);
  stage.mount(app);

  const stageOne = document.querySelector('.stage')

  //WALL ENTITTY
  const wall = new Entity(stage, 7, 5, 'wall');
  const wall1 = new Entity(stage, 3, 5, 'wall');
  const wall2= new Entity(stage, 2, 5, 'wall');
  const wall3 = new Entity(stage, 4, 3, 'wall');
  const wall4 = new Entity(stage, 1, 5, 'wall');
  const wall5 = new Entity(stage, 4, 4, 'wall');
  const wall6 = new Entity(stage, 2, 1, 'wall');
  const wallStreet = new Entity(stage, 3, 3, 'wall');
  
  stage.entities.push(wall, wall1, wall2, wall3, wall4, wall5, wall6, wallStreet);
  console.log(stage.entities);
  // stage.collisionDetection(7, 5);
  //APPLE ENTITY

  const pacBoy = new Pacman(stage, 0, 0, 'mouth');
  wall.mount(stageOne);
  wall1.mount(stageOne);
  wall2.mount(stageOne);
  wall3.mount(stageOne);
  wall4.mount(stageOne);
  wall5.mount(stageOne);
  wall6.mount(stageOne);
  wallStreet.mount(stageOne);
  pacBoy.mount(stageOne)
  
  pacBoy.move();
});



// Create a class called Pacman which will hold the x position and mouth closed/opened state. For the closed/opened state use a variable called mouth.
// Create a method moveRight() inside your class that will move the pacman to the right.
// Create an update() function that will update the pacman's position on the screen.