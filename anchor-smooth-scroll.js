/**
 * Anchor Smooth Scroll
 * Requires jQuery Library
 * Transform traditional anchor scroll into a smooth scroll effect
 *
 * @author Bryan Lusica
 * https://github.com/iahnn/Anchor-Smooth-Scroll
 **/

;(function($) {
    $.fn.smoothScroll = function(options) {
        var opt = $.extend({
            speed: "slow",
            ease: "swing"
        }, options);

        var $body = $('html, body'),
            $this = $(this);

        $this.on('click', function(e) {
            var dataId = $(this).data("target"),
                $target = $(dataId),
                $sectionPos = $target.offset();

            if(typeof dataId !== "undefined" && $target.length > 0) {
                $body.animate({scrollTop: $sectionPos.top}, opt.speed, opt.ease);
                e.preventDefault();
            }

            return $(this);
        });

        return $this;
    };
})(jQuery);
