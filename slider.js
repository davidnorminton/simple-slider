!(function(doc) {
	// amount of time to display side before slide(ms)
	const pauseSlide = 5000;
	const sliderWrap = doc.querySelector('.slider_wrapper');
	const slides = doc.getElementsByClassName('slide');
	const numbSlides = slides.length;
	var currentSlideNumber = 0;
	// use image height to set height of container
	var image = slides[currentSlideNumber].querySelector('img');
	var height = image.height;
	// set wrapper height in order to display slider
	sliderWrap.style.height = `${height}px`;


	var timer = setInterval(function(){
		let image = slides[currentSlideNumber].querySelector('img');
		let height = image.height;
		sliderWrap.style.height =`${height}px`;

		let currentElem = slides[currentSlideNumber];
		let currentSlide = currentSlideNumber;
		let nextSlide, prevSlide;

		if(currentSlideNumber === (numbSlides - 1)) {
			nextSlide = 0;
			prevSlide = currentSlide - 1;

		} else {
			if(currentSlide === 0) {
				prevSlide = numbSlides - 1;
				nextSlide = 1;
			} else {
				prevSlide = currentSlide - 1;
				nextSlide = currentSlide + 1;	
			}
			
		}
		setStyles(currentSlide, prevSlide, nextSlide);
		currentSlideNumber = nextSlide;


	}, pauseSlide);

	// prev, next actions
	var nextButton = doc.querySelector('.nextButton');
	var prevButton = doc.querySelector('.prevButton');

	nextButton.addEventListener('click', function() {
		//setStyles(current, prev, next);
		clearInterval(timer);
	});

	prevButton.addEventListener('click', function() {
		//setStyles(current, prev, next);
		clearInterval(timer);
	});

	function setStyles(current, prev, next) {
		slides[current].classList.remove('active');
		slides[prev].classList.remove('moveOut');
		slides[current].classList.remove('moveIn');
		slides[current].classList.add('moveOut');
		slides[next].classList.add('moveIn');
	}
})(document);
