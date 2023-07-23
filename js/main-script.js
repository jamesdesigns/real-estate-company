(function($) {
"use strict";

// mobile nav hide / show
if($('.mobile-menu').length){

  var mobileMenuContent = $('#top-navigation .navigation').html();

  $('.mobile-menu .navigation').append(mobileMenuContent);

  $('.sticky-header .navigation').append(mobileMenuContent);

  $('.mobile-menu .close-btn').on('click', function(){
    $('body').removeClass('mobile-menu-visible');
  });

}

})(jQuery);