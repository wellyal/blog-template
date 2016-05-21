var cfd = cfd || {};

cfd.menubar = (function() {
  'use strict';

  function redirect() {
    $( "#postslist" ).on( 'click', function() {
      $( "#posts" ).removeClass( 'cfd-hidden' );
      $( "#panel" ).addClass( 'cfd-hidden' );
    });

    $( "#createpost" ).on( 'click', function() {
      $( "#panel" ).removeClass( 'cfd-hidden' );
      $( "#posts" ).addClass( 'cfd-hidden' );
    });
  }

  function overGithubIcon() {
    $( '.cfd-header-disclaimer' ).on({
      mouseover:function () {
       $( "#githubicon" ).removeClass( 'cfd-hidden' );
      },
      mouseleave:function() {
       $( "#githubicon" ).addClass( 'cfd-hidden' );
      }
    });
  }

  function goTo() {
    $( '.cfd-post-item' ).on( 'click', function(){
      window.location="templates/article.html";
    });
  }

  function init() {
    redirect();
    overGithubIcon();
    goTo();
  }

  return {
    init: init
  };

}(jQuery));

cfd.menubar.init();
