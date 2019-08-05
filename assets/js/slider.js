function loadSlider(){
  const slider = document.querySelector('#slider-categories');
  const prevButton = slider.querySelector('.prev');
  const nextButton = slider.querySelector('.next');
  const slideList = slider.querySelectorAll('.slide');
  const lastSlide = slideList.length - 1;
  const firstSlide = 0;
  let currentSlide = 0;

  prevButton.addEventListener('click', function() {
    if (currentSlide === firstSlide) return;
    --currentSlide;
    slideList.forEach(function(slide) {
      slide.style.transform = `translateX(-${currentSlide * 100}%)`;
    });
  });

  nextButton.addEventListener('click', function() {
    if (currentSlide === lastSlide) return;
    ++currentSlide;
    slideList.forEach(function(slide) {
      slide.setAttribute('style', `transform: translateX(-${currentSlide * 100}%)`);
    });
  });
};