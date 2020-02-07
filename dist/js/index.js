document.addEventListener('DOMContentLoaded', () => {
  console.log('it works');
});

document.addEventListener('click', () => {
  const pacmanClick = document.querySelector('.entity--pac');
  // pacmanClick.style.backgroundPositionX = 'right';
  pacmanClick.classList.toggle('entity--pac--pacChange');
});
