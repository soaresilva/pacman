
class Pacman {
  constructor(Stage, xPos, yPos, mouth, pacDirection, score, name) {
    this.stopGame = false;
    this.Stage = Stage;
    this.xPos = xPos;
    this.yPos = yPos;
    this.mouth = mouth;
    this.score = score;
    this.name = name;
    this.pacDirection = pacDirection;
  }

  render() {
    this.element = document.createElement('div');
    this.element.className = 'entity entity--pac pacboy-active-light';
    this.element.innerHTML = (`<h5 class="pacName">${this.name} Score: <span class="pacScore">${this.score}</span></h5>`)
    return this.element;
  }

   addScore() {
    const pacScore = this.element.querySelector('.pacScore');
    pacScore.textContent = Number(pacScore.textContent) + 1;
  }

  pacmanDies() {
    const randomNum = Math.round(Math.random() * 10)
    if(randomNum < 5) {
      this.element.className = 'entity entity--tomb';
      this.stopGame = true;
    }
  }

  move() {
    // MOVING UP DOWN LEFT RIGHT
    document.addEventListener('keydown', (e) => {
      if(!this.stopGame) {

      if (e.keyCode === 39) {
        this.element.style.backgroundPositionY = '0px';
        this.mouth = this.element.classList.toggle('entity--pac--mouthClosed')
        this.pacDirection = 'right';
        if(this.Stage.collisionDetection(this.xPos + 1, this.yPos) === true) {
          this.yPos = this.yPos;
        } else {
          //adding score when apple is eaten
          if(this.Stage.type === 'apple'){
            this.addScore();
          } else if(this.Stage.type === 'bomb') {
            this.pacmanDies();
          }
          this.Stage.type = '';
          this.xPos += 1;
        }
        this.update();

      } else if(e.keyCode === 37) {
        this.element.style.backgroundPositionY = '-85px';
        this.mouth = this.element.classList.toggle('entity--pac--mouthClosed')
        this.pacDirection = 'left';
        if(this.Stage.collisionDetection(this.xPos - 1, this.yPos) === true) {
          this.xPos = this.xPos;
        } else {
          //adding score when apple is eaten
          if(this.Stage.type === 'apple'){
            this.addScore();
          } else if(this.Stage.type === 'bomb') {
            this.pacmanDies();
          }
          this.Stage.type = '';
          this.xPos -= 1;
        }
        this.update();

      } else if(e.keyCode === 38) {
        this.element.style.backgroundPositionY = '-255px';
        this.mouth = this.element.classList.toggle('entity--pac--mouthClosed')
        this.pacDirection = 'up';
        if(this.Stage.collisionDetection(this.xPos, this.yPos - 1) === true) {
          this.yPos = this.yPos;
        } else {
          //adding score when apple is eaten
          if(this.Stage.type === 'apple'){
            this.addScore();
          } else if(this.Stage.type === 'bomb') {
            this.pacmanDies();
          }
          this.Stage.type = '';
          this.yPos -= 1;
        }
        this.update();

      } else if(e.keyCode === 40) {
        this.element.style.backgroundPositionY = '-170px';
        this.mouth = this.element.classList.toggle('entity--pac--mouthClosed')
        this.pacDirection = 'down';
        if(this.Stage.collisionDetection(this.xPos, this.yPos + 1) === true) {
          this.yPos = this.yPos;
        } else {
          //adding score when apple is eaten
          if(this.Stage.type === 'apple'){
            this.addScore();
          } else if(this.Stage.type === 'bomb') {
            this.pacmanDies();
          }
          this.Stage.type = '';
          this.yPos += 1;
        }
        this.update();
      }
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
  const stage = new Stage( 12, 6);
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
  //Apple entities
  const apple = new Entity(stage, 5, 1, 'apple');
  const apple1 = new Entity(stage, 9, 2, 'apple');
  const apple2= new Entity(stage, 7, 4, 'apple');
  const apple3 = new Entity(stage, 7, 1, 'apple');
  const apple4 = new Entity(stage, 3, 4, 'apple');
  //bomb entities
  const bomb = new Entity(stage, 5, 5, 'bomb');
  const bomb1 = new Entity(stage, 2, 4, 'bomb');
  const bomb2 = new Entity(stage, 0, 5, 'bomb');

  
  stage.entities.push(wall, wall1, wall2, wall3, wall4, wall5, wall6, wallStreet, apple, apple1, apple2, apple3, apple4, bomb, bomb1, bomb2);
  
  const pacBoy = new Pacman(stage, 0, 0, 'mouth', 0, 0, 'Halil');
  pacBoy.mount(stageOne)
  pacBoy.move();

  wall.mount(stageOne);
  wall1.mount(stageOne);
  wall2.mount(stageOne);
  wall3.mount(stageOne);
  wall4.mount(stageOne);
  wall5.mount(stageOne);
  wall6.mount(stageOne);
  wallStreet.mount(stageOne);
  
  apple.mount(stageOne);
  apple1.mount(stageOne);
  apple2.mount(stageOne);
  apple3.mount(stageOne);
  apple4.mount(stageOne);

  bomb.mount(stageOne);
  bomb1.mount(stageOne);
  bomb2.mount(stageOne);
});
