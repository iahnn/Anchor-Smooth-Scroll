/**
 * Anchor Smooth Scroll
 * Requires jQuery Library
 * Transform traditional anchor scroll into a smooth scroll effect
 *
 * @author Bryan Lusica
 * @http://yourwebtech.info
 **/

;(function($) {
    $.fn.smoothScroll = function(options) {
        var opt = $.extend({
            ease: "slow",
            target: "target"
        }, options);

        var $body = $('html, body'),
            $this = $(this);

        $this.on('click', function(e) {
            var dataId = $(this).data(opt.target),
                $target = $(dataId),
                $sectionPos = $target.offset();

            if(typeof dataId !== "undefined" && $target.length > 0) {
                $body.animate({scrollTop: $sectionPos.top}, opt.ease);
                e.preventDefault();
            }
        });

        return $this;
    };
})(jQuery);
