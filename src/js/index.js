document.addEventListener('DOMContentLoaded', () => {
  console.log('it works');
});


//all the variables go here*********************************
const pacman = document.querySelector('.entity--pac');
let xpos = 0;

class Pacman {
  constructor(xPos, yPos, mouth, pacDirection) {
    this.xPos = xPos;
    this.yPos = yPos;
    this.mouth = mouth;
    this.pacDirection = pacDirection;
  }

  move() {
    document.addEventListener('keydown', (e) => {

      if (e.keyCode === 39) {
        pacman.style.backgroundPositionY = '0px';
        this.mouth = pacman.classList.toggle('entity--pac--mouthClosed')
        this.pacDirection = 'right';
        console.log(this.pacDirection);
        this.update();
      } else if(e.keyCode === 37) {
        pacman.style.backgroundPositionY = '-85px';
        this.mouth = pacman.classList.toggle('entity--pac--mouthClosed')
        this.pacDirection = 'left';
        this.update();
      } else if(e.keyCode === 38) {
        pacman.style.backgroundPositionY = '-255px';
        this.mouth = pacman.classList.toggle('entity--pac--mouthClosed')
        this.pacDirection = 'up';
        this.update();
      } else if(e.keyCode === 40) {
        pacman.style.backgroundPositionY = '-170px';
        this.mouth = pacman.classList.toggle('entity--pac--mouthClosed')
        this.pacDirection = 'down';
        this.update();
      }
    })
  };

  update() {
    if(this.pacDirection === 'right') {
      this.xPos += 85;
      pacman.style.left = this.xPos + 'px';
      console.log(this.xPos)

    } else if(this.pacDirection === 'left') {
      this.xPos -= 85;
      pacman.style.left = this.xPos + 'px';
      console.log(this.xPos)

    } else if(this.pacDirection === 'up') {
      this.yPos -= 85;
      pacman.style.top = this.yPos + 'px';
      console.log(this.yPos)

    } else if(this.pacDirection === 'down') {
      this.yPos += 85;
      pacman.style.top = this.yPos + 'px';
      console.log(this.yPos)
    }
    
  }
}


const pacBoy = new Pacman(0, 0, 'mouth');
pacBoy.move();


// Create a class called Pacman which will hold the x position and mouth closed/opened state. For the closed/opened state use a variable called mouth.
// Create a method moveRight() inside your class that will move the pacman to the right.
// Create an update() function that will update the pacman's position on the screen.