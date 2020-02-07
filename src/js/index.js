document.addEventListener('DOMContentLoaded', () => {
  console.log('it works');
});


//all the variables go here*********************************
// const pacman = document.querySelector('.entity--pac');
// let xpos = 0;

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
    document.addEventListener('keydown', (e) => {
      if (e.keyCode === 39) {
        this.element.style.backgroundPositionY = '0px';
        this.mouth = this.element.classList.toggle('entity--pac--mouthClosed')
        this.pacDirection = 'right';
        this.xPos += 1;
        this.update();
      } else if(e.keyCode === 37) {
        this.element.style.backgroundPositionY = '-85px';
        this.mouth = this.element.classList.toggle('entity--pac--mouthClosed')
        this.pacDirection = 'left';
        this.xPos -= 1;
        this.update();
      } else if(e.keyCode === 38) {
        this.element.style.backgroundPositionY = '-255px';
        this.mouth = this.element.classList.toggle('entity--pac--mouthClosed')
        this.pacDirection = 'up';
        this.yPos -= 1;
        this.update();
      } else if(e.keyCode === 40) {
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

  const pacBoy = new Pacman(stage, 0, 0, 'mouth');
  pacBoy.mount(stageOne)
  
  pacBoy.move();
});



// Create a class called Pacman which will hold the x position and mouth closed/opened state. For the closed/opened state use a variable called mouth.
// Create a method moveRight() inside your class that will move the pacman to the right.
// Create an update() function that will update the pacman's position on the screen.