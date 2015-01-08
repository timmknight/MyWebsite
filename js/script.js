$(function() {

  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });

});

// $(function(){
//   var boxes = $('[data-scroll-speed]'),
//   $window = $(window);
//   $window.on('scroll', function(){
//     var scrollTop = $window.scrollTop();
//     boxes.each(function(){
//       var $this = $(this),
//       scrollspeed = parseInt($this.data('scroll-speed')),
//       val = - scrollTop / scrollspeed;
//       $this.css('transform', 'translateY(' + val + 'px)');
//     });
//   });
// })
