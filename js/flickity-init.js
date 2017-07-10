// 1. The easiest way to initialize flickity is by passing the data-flickity attribute a valid JSON with valid parameters in your html. But this is just TOO EASY for a beginner because it doesn't use any JS at all 
// data-flickity='{ "cellAlign": "left", "contain": true, "initialIndex": "0", "freeScroll": "false" }'

// 2. Here we have the jquery init script from the flickity website wrapped in a $(document).ready{}); this works good and it's easy to pass in parameters as options.
//  $(document).ready(function() {
  // options
  // $('.main-carousel').flickity({
  //   cellAlign: 'center',
  //   contain: true,
  //   initialIndex: 0,
  //   freeScroll: false,
  //   prevNextButtons: false,
  //   lazyLoad: false,
  //   setGallerySize: true
  // });
// });

// 3. here we reverse engineered option 1 by creating a custom data-attribute called [data-flickity-for-school] and passed it's options to the flickity obect
//  var $carousel = $('[data-flickity-for-school]');
// $carousel.flickity($carousel.data('flickityForSchool') || {"cellAlign": "left", "contain": true, "initialIndex": "0", "freeScroll": "false"});

// 4. here we used a combination of option 2. and 3. to pass in options to the flickity carousel
var carousel;
$(function(){
  var $carousel = $('[data-flickity-for-school]');
  if ($carousel.length) {
    var options = !$carousel.data('flickityForSchool') ? $carousel.data('flickityForSchool') : {
      "cellAlign": "left", 
      "contain": true,
      "initialIndex": "0", 
      "freeScroll": false, 
      "wrapAround": true,
      "autoplay": true
    }
    carousel = new Flickity($carousel[0], options);
    console.log(carousel, options);
  }
});