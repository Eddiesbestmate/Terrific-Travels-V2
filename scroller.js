const images = document.querySelectorAll('.carousel-images img');
const dotsContainer = document.querySelector('.dots');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');
let current = 0;
let interval = setInterval(nextImage, 5000);

images.forEach((_, index) => {
  const dot = document.createElement('span');
  dot.classList.add('dot');
  if (index === 0) dot.classList.add('active');
  dot.addEventListener('click', () => {
    current = index;
    showImage(current);
    resetInterval();
  });
  dotsContainer.appendChild(dot);
});

const dots = document.querySelectorAll('.dot');

function showImage(index) {
  images.forEach((img, i) => {
    img.classList.toggle('active', i === index);
    dots[i].classList.toggle('active', i === index);
  });
}

function nextImage() {
  current = (current + 1) % images.length;
  showImage(current);
}

function prevImage() {
  current = (current - 1 + images.length) % images.length;
  showImage(current);
}

nextBtn.addEventListener('click', () => {
  nextImage();
  resetInterval();
});

prevBtn.addEventListener('click', () => {
  prevImage();
  resetInterval();
});

function resetInterval() {
  clearInterval(interval);
  interval = setInterval(nextImage, 5000);
}
