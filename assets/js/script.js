var cfd = cfd || {};

cfd.menubar = (function() {
  'use strict';

  function redirect() {
    $("#postslist").on('click', function(){
      $('#posts').removeClass('cfd-hidden');
      $('#panel').addClass('cfd-hidden');
    });

    $("#createpost").on('click', function(){
      $('#panel').removeClass('cfd-hidden');
      $('#posts').addClass('cfd-hidden');
    });
  }

  function init() {
    redirect();
  }

  return {
    init: init
  };

}(jQuery));


cfd.menubar.init();
