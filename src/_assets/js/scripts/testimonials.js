$(document).ready(function() {
 
    // determine the number of slides
    const slideNum = $('.testimonial-slide').length;
    // add the correct number of dots
    let $dot = $('<div href="javascript:void(0);" class="nav-dot"></div>');
    for(i = 1; i <= slideNum; i++) {
      if(i == 1) {     
         $('.dots').append($dot.clone().addClass('active-dot').addClass('dot' + i));
       }
      else if(slideNum != i) {
        $('.dots').append($dot.clone().addClass('dot' + i));
      }
      else {
        $('.dots').append($dot.clone().addClass('dot' + i));
      }
    }
    // set the width of the reel
    $('.slide-reel').css('width', slideNum * 100 +'%');
    // fade 'er in
    $('.testimonial-stage').fadeIn('slow');
    
    
    function nextSlide() {
      
     // determine what the position of the last slide is
      let frameWidth = parseInt($('.testimonial-frame').css('width'));
      let lastSlidePos = (frameWidth * (slideNum - 1) * -1);
      // get the current slide position
      let slidePosition = parseInt($('.slide-reel').css('left'));
      
      // console.log(lastSlidePos, slidePosition);
      
      if(lastSlidePos != slidePosition) {
        // advance to the next slide - add the width of the frame to the current position)
        $('.slide-reel').css('left', ((frameWidth + Math.abs(slidePosition)) * -1) + 'px');
      }
      else {
       $('.slide-reel').css('left',  0 + 'px');
      } 
      
    }
    
    function prevSlide() {
      
     // determine what the position of the last slide is
      let frameWidth = parseInt($('.testimonial-frame').css('width'));
      let lastSlidePos = (frameWidth * (slideNum - 1) * -1);
      // get the current slide position
      let slidePosition = parseInt($('.slide-reel').css('left'));
      
      // console.log(lastSlidePos, slidePosition);
      
      if(slidePosition !== 0) {
        // advance to the next slide - add the width of the frame to the current position
        $('.slide-reel').css('left', slidePosition + Math.abs(frameWidth) + 'px'); 
      }
      else {
       $('.slide-reel').css('left', lastSlidePos + 'px');
      }
      
    }
    
    function nextDot() {
      // deactivate the current dot
      let currentDot = $('.active-dot');
      
      if(currentDot.hasClass('dot' + slideNum) === false) {
        currentDot.removeClass('active-dot');
        // assign to next dot
        currentDot.next().addClass('active-dot'); 
      }
      else {
        currentDot.removeClass('active-dot');
        $('.nav-dot:first-child').addClass('active-dot');
      }
    }
    
    function prevDot() {
      // deactivate the current dot
      let currentDot = $('.active-dot');
      
      if(currentDot.hasClass('dot1') === false) {
        currentDot.removeClass('active-dot');
        // assign to next dot
        currentDot.prev().addClass('active-dot');
      }
      else {
        currentDot.removeClass('active-dot');
        $('.nav-dot:last-child').addClass('active-dot');
      }
    }
    
    function stopButtons() {
      $('.next-button').css('opacity','0.5');
        $('.next-button').off('click', nextThings);
        $('.prev-button').off('click', prevThings);
      setTimeout(function() {
        $('.next-button').css('opacity','1');
        $('.next-button').on('click',nextThings);
        $('.prev-button').on('click', prevThings);
      }, 1000);
    }
    
    function nextThings() {
      stopButtons();
      nextSlide();
      nextDot();
    }
    
     function prevThings() {
       stopButtons();
      prevSlide();
      prevDot(); 
     }
    
    // click handlers
     $('.next-button').on('click',nextThings);
     $('.prev-button').on('click', prevThings);
       
  });