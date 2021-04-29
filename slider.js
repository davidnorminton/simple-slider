!(function(doc) {
	var sliderWrap = doc.querySelector('.slider_wrapper');
	var slides = doc.getElementsByClassName('slide');
	var numbSlides = slides.length;
	var currentSlideNumber = 0;
	var image = slides[currentSlideNumber].querySelector('img');
	var height = image.height;
	sliderWrap.style.height = `${height}px`;

	setInterval(function(){
		let image = slides[currentSlideNumber].querySelector('img');
		let height = image.height;
		sliderWrap.style.height =`${height}px`;

		let currentElem = slides[currentSlideNumber];
		let currentSlide = currentSlideNumber;
		let nextSlide;
		let prevSlide;

		if(currentSlideNumber === (numbSlides - 1)) {
			nextSlide = 0;
			prevSlide = currentSlideNumber - 1;

		} else {
			if(currentSlideNumber === 0) {
				prevSlide = numbSlides - 1;
				nextSlide = 1;
			} else {
				prevSlide = currentSlideNumber - 1;
				nextSlide = currentSlideNumber + 1;	
			}
			
		}

		currentSlideNumber = nextSlide;
		slides[currentSlide].classList.remove('active');
		slides[prevSlide].classList.remove('moveOut');
		slides[currentSlide].classList.remove('moveIn');
		slides[currentSlide].classList.add('moveOut');
		slides[nextSlide].classList.add('moveIn');

	}, 5000);

	
})(document);
