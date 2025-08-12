document.addEventListener('DOMContentLoaded', () => {
    const sliderWrapper = document.querySelector('.slider-wrapper');
    const prevBtn = document.querySelector('.prev');
    const nextBtn = document.querySelector('.next');
    const slides = document.querySelectorAll('.slider-wrapper img');
    const slideWidth = slides[0].clientWidth; 

    let currentIndex = 0;

    function updateSlider() {
        sliderWrapper.style.transform = `translateX(${-currentIndex * slideWidth}px)`;
    }

    prevBtn.addEventListener('click', () => {
        if (currentIndex > 0) {
            currentIndex--;
        } 
        updateSlider();
    });

    nextBtn.addEventListener('click', () => {
        if (currentIndex < slides.length - 1) {
            currentIndex++;
        } 
        updateSlider();
    });

    window.addEventListener('resize', () => {
        const newSlideWidth = document.querySelector('.slider-wrapper img').clientWidth;
        sliderWrapper.style.transform = `translateX(${-currentIndex * newSlideWidth}px)`;
    });
});

window.addEventListener('scroll', function () {
      const img = document.querySelector('.main-img img');
      const scrolled = window.scrollY;
      img.style.transform = `translateY(${scrolled * 0.2}px)`;
    }
    );
    const sliderImgs = document.querySelectorAll('.slider-wrapper img');
const modal = document.getElementById('slider-modal');
const modalImg = document.querySelector('.slider-modal-img');
const modalClose = document.querySelector('.slider-modal-close');
const modalPrev = document.querySelector('.slider-modal-btn.prev');
const modalNext = document.querySelector('.slider-modal-btn.next');

let modalIndex = 0;
const imgSrcs = Array.from(sliderImgs).map(img => img.src);

function openModal(idx) {
  modalIndex = idx;
  modalImg.src = imgSrcs[modalIndex];
  modal.classList.add('open');
}

function closeModal() {
  modal.classList.remove('open');
}

function showModalSlide(idx) {
  modalIndex = (idx + imgSrcs.length) % imgSrcs.length;
  modalImg.src = imgSrcs[modalIndex];
}

sliderImgs.forEach((img, idx) => {
  img.style.cursor = 'pointer';
  img.addEventListener('click', () => openModal(idx));
});

modalClose.onclick = closeModal;
modalPrev.onclick = () => showModalSlide(modalIndex - 1);
modalNext.onclick = () => showModalSlide(modalIndex + 1);


modal.addEventListener('click', (e) => {
  if (e.target === modal) closeModal();
});


document.addEventListener('keydown', (e) => {
  if (modal.classList.contains('open')) {
    if (e.key === 'Escape') closeModal();
    if (e.key === 'ArrowLeft') showModalSlide(modalIndex - 1);
    if (e.key === 'ArrowRight') showModalSlide(modalIndex + 1);
  }
});
