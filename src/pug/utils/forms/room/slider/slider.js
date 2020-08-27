let slideIndex = 1;
showSlides(slideIndex);

document.addEventListener('click', (e) => {
  if (e.target.classList.contains('slider__prev')) {
    showSlides(slideIndex -= 1);
  } else if (e.target.classList.contains('slider__next')) {
    showSlides(slideIndex += 1);
  } else if (e.target.classList.contains('slider__dots-item')) {
    showSlides(slideIndex = parseInt(e.target.dataset.index));
  } else {
    return;
  }
});

function showSlides(n) {
    const slides = document.getElementsByClassName("slider__item");
    const dots = document.getElementsByClassName("slider__dots-item");

    if (n > slides.length) {
      slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (let i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" slider__dots-item--active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " slider__dots-item--active";
}