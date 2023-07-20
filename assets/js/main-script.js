(function($) {
"use strict";

// mobile nav hide / show
if($('.mobile-memu').length) {

  var mobileMemnuContent = $('#top-navigation .navigation').html();

  $('.mobile-menu .navigation').append(mobileMemnuContent);

  $('.sticky-header .navigation').append(mobileMemnuContent);

  $('.mobile-menu .close-btn').on('click', function(){
    $('body').removeClass('mobile-menu-visible');
  });

}

})(jQuery);