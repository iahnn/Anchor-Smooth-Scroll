<script>
	/**
	 * Anchor Smooth Scroll
	 * Requires jQuery 1.8 or higher
	 * Transform traditional anchor scroll into a smooth scroll effect
	 *
	 * @author Bryan Lusica
	 * @http://yourwebtech.info
	 **/
	 
	;(function($) {
		var $body = $('html, body');

		$('a').on('click', function(e) {
			var $this = $(this),
				dataId = $this.data('target'),
				$target = $(dataId),
				$sectionPos = $target.offset();					

			if(typeof dataId !== "undefined" && $target.length > 0) {
				$body.animate({scrollTop: $sectionPos.top}, 'slow');
				e.preventDefault();
			}
		});
	})(jQuery);
</script>