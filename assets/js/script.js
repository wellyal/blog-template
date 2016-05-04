var cfd = cfd || {};

cfd.menubar = (function() {
  'use strict';

  function initMarkdownEditor() {
    var simplemde = new SimpleMDE();
  }

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

  function init() {
    initMarkdownEditor();
    redirect();
    overGithubIcon();
  }

  return {
    init: init
  };

}(jQuery));


cfd.menubar.init();
