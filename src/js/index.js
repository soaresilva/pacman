document.addEventListener('DOMContentLoaded', () => {
  console.log('it works');
});

let xpos = 0;


document.addEventListener('keydown', (e) => {
  if (e.keyCode === 39) {
    console.log('right key pressed!')
    const pacmanClick = document.querySelector('.entity--pac');
    pacmanClick.classList.toggle('entity--pac--pacChange');
    xpos += 85;
    pacmanClick.style.left = xpos + 'px';
  }
})



// Create a class called Pacman which will hold the x position and mouth closed/opened state. For the closed/opened state use a variable called mouth.
// Create a method moveRight() inside your class that will move the pacman to the right.
// Create an update() function that will update the pacman's position on the screen.