/**
 * Created by benyip-zt on 9/30/2016.
 */

(function ($) {

    var config = {
        speed: 400
        , collapsedClass: 'collapsed'
    };

    /**
     *  auto trigger collapsing actions
     */
    $('.sidebar').each(function () {
        var isAccordion = $(this).data('action') === 'accordion';
        var $uls = $(this).find('ul');

        $(this).find('a').click(function () {

            var $ul = $(this).siblings('ul');
            $ul.stop();

            if ($ul.hasClass(config.collapsedClass)) {

                if (isAccordion) {
                    $uls.each(function () {
                        $(this).slideUp(config.speed, function () {
                            $(this).addClass(config.collapsedClass);
                        });
                    });
                }

                $ul.slideDown(config.speed, function () {
                    $(this).removeClass(config.collapsedClass);
                });

            } else {
                $ul.slideUp(config.speed, function () {
                    $(this).addClass(config.collapsedClass);
                });
            }
        })
    });


    /**
     * may leave a interface to invoke by user?
     */
    $.fn.sidebar = function (option) {
    };

})(jQuery);