var cfd = cfd || {};

cfd.article = (function() {
  'use strict';

	function initPrettyPrint() {
		$('pre').addClass('prettyprint');
	}

	function init () {
		initPrettyPrint();
	}

  return {
    init: init
  };

}(jQuery));

cfd.article.init();
