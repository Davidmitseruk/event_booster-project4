const stars = document.querySelectorAll('.star');

function getRandom(min, max) {
  return Math.random() * (max - min) + min;
}

stars.forEach((star, index) => {
  star.style.left = `${getRandom(0, 100)}%`;
  star.style.top = `${getRandom(0, 100)}%`;

  const size = getRandom(2, 4);
  star.style.width = `${size}px`;
  star.style.height = `${size}px`;

  star.style.animationDelay = `${index * 0.5}s`;
});
