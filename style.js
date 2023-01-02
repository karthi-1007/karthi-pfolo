const addEventOnElements = function (elements, eventType, callback) {
    for (let i = 0, len = elements.length; i < len; i++) {
      elements[i].addEventListener(eventType, callback);
    }
  }
  
  
  
  /**
   * PRELOADER
   */
  
  const preloader = document.querySelector("[data-preloader]");
  
  window.addEventListener("DOMContentLoaded", function () {
    preloader.classList.add("loaded");
    document.body.classList.add("loaded");
  });
  
  
  
  /**
   * NAVBAR
   * navbar toggle for mobile
   */
  
  const navTogglers = document.querySelectorAll("[data-nav-toggler]");
  const navToggleBtn = document.querySelector("[data-nav-toggle-btn]");
  const navbar = document.querySelector("[data-navbar]");
  const overlay = document.querySelector("[data-overlay]");
  
  const toggleNavbar = function () {
    navbar.classList.toggle("active");
    navToggleBtn.classList.toggle("active");
    overlay.classList.toggle("active");
    document.body.classList.toggle("nav-active");
  }
  
  addEventOnElements(navTogglers, "click", toggleNavbar);
  
  
  
  /**
   * HEADER
   * header active when window scroll down to 100px
   */
  
  const header = document.querySelector("[data-header]");
  
  window.addEventListener("scroll", function () {
    if (window.scrollY >= 100) {
      header.classList.add("active");
    } else {
      header.classList.remove("active");
    }
  });

  document.addEventListener("DOMContentLoaded", function() {

    var texts = [
           "HTML5", "JavaScript", "CSS3", "Python 3", "Java","Bootstrap", "WordPress",  "GitHub", "C", "jQuery","figma","adobe XD","photography","photoshop","lightroom","UI/UX","UI/UX responsibe"
       ];
       var tc = TagCloud('#technologies-sphere', texts ,{
         radius: 300

       });
 });


 	

// $(function () {
		
// 	var filterList = {
	
// 		init: function () {
		
// 			// MixItUp plugin
// 			// http://mixitup.io
// 			$('#portfoliolist').mixItUp({
// 				selectors: {
//   			  target: '.portfolio',
//   			  filter: '.filter'	
//   		  },
//   		  load: {
//     		  filter: 'all' // show app tab on first load
//     		}     
// 			});								
		
// 		}

// 	};




    
			
"use strict";
      const arrowBtnLeft = document.querySelector(".btn-arrow-left");
      const arrowBtnRight = document.querySelector(".btn-arrow-right");

      const slides = document.querySelectorAll(".slide");
      const dotsContainer = document.querySelector(".dots");

      let curSlide = 0;

      // functions
      const goToSlide = (slide) => {
        slides.forEach((s, i) => {
          s.style.transform = `translateX(${100 * (i - slide)}%)`;
        });
      };

      const nextSlide = function () {
        curSlide === slides.length - 1 ? (curSlide = 0) : curSlide++;
        goToSlide(curSlide);
        activateDot(curSlide);
      };

      const prevSlide = function () {
        curSlide === 0 ? (curSlide = slides.length - 1) : curSlide--;
        goToSlide(curSlide);
        activateDot(curSlide);
      };

      const createDots = () => {
        slides.forEach((_, i) =>
          dotsContainer.insertAdjacentHTML(
            "beforeend",
            `<button class='dot' data-slide='${i}'></button>`
          )
        );
      };

      const activateDot = (slide) => {
        document
          .querySelectorAll(".dot")
          .forEach((dot) => dot.classList.remove("dot--active"));
        document
          .querySelectorAll(`.dot[data-slide="${slide}"]`)
          .forEach((dot) => dot.classList.add("dot--active"));
      };

      // inital
      const init = () => {
        goToSlide(0);
        createDots();
        activateDot(0);
      };
      init();

      // event listeners
      arrowBtnLeft.addEventListener("click", prevSlide);
      arrowBtnRight.addEventListener("click", nextSlide);

      dotsContainer.addEventListener("click", function (e) {
        // if needed to work only on dots and not on dot container
        if (e.target.classList.contains("dot")) {
          const { slide } = e.target.dataset;
          goToSlide(slide);
          activateDot(slide);
        }
      });
  
 for (let i = 0, len = sliders.length; i < len; i++) { initSlider(sliders[i]); }