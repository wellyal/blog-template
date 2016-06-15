var cfd = cfd || {};

cfd.main = (function() {
  'use strict';

	$(document).ready(function(){
		var _paq = _paq || [];
		_paq.push(['trackPageView']);
		_paq.push(['enableLinkTracking']);

		(function() {
			var u="http://cluster-piwik.locaweb.com.br/";
			_paq.push(['setTrackerUrl', u+'piwik.php']);
			_paq.push(['setSiteId', 7506]);
			var d=document, g=d.createElement('script'), s=d.getElementsByTagName('script')[0];
			g.type='text/javascript'; g.async=true; g.defer=true; g.src=u+'piwik.js'; s.parentNode.insertBefore(g,s);
		})();
	});

	function redirect () {
		$( "#postslist" ).on( 'click', function() {
			$( "#posts" ).removeClass( 'cfd-hidden' );
			$( "#panel" ).addClass( 'cfd-hidden' );
		});

		$( "#createpost" ).on( 'click', function() {
			$( "#panel" ).removeClass( 'cfd-hidden' );
			$( "#posts" ).addClass( 'cfd-hidden' );
		});
	}

	function overGithubIcon () {
		$( '.cfd-header-disclaimer' ).on({
			mouseover:function () {
				$( "#githubicon" ).removeClass( 'cfd-hidden' );
			},

			mouseleave:function() {
				$( "#githubicon" ).addClass( 'cfd-hidden' );
			}
		});
	}

	function goTo () {
		$( '.cfd-post-item' ).on( 'click', function(){
			window.location="templates/article.html";
		});
	}

	function init () {
		redirect();
		overGithubIcon();
		goTo();
	}

  return {
    init: init
  };

}(jQuery));

cfd.main.init();
