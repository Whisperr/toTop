/*! totop - v0.1.0 - 2015-05-25
* Copyright (c) 2015 George Roumelis; Licensed MIT */
(function ($) {
    $.toTop = function (options) {
        // Override default options with passed-in options.
        this.options = $.extend({
            //default options
            distance: 120,
            scrollerSelector: 'body',
            animationSpeed: 500,
            easing: 'linear'
        }, options);
        var scroller = $(this.options.scrollerSelector),
            button = $('<button role="button" class="toTop" style="display: none"><i class="icon"></i></button>'),
            distance = this.options.distance,
            speed = this.options.animationSpeed,
            easing = this.options.easing,
            timeoutKey = -1,
            moveToTop = function () {
                button.addClass('scrolling');
                scroller.stop().animate({
                    scrollTop: 0
                }, speed, easing, function() {
                    button.removeClass('scrolling');
                });
                return false;
            },
            init = function init() {
                if(distance) {
                    scroller.append(button)
                        .on('click', button, function () {
                            moveToTop();
                        })
                        .on('scroll', function () {
                            if (timeoutKey) {
                                window.clearTimeout(timeoutKey);
                            }
                            timeoutKey = window.setTimeout(function () {
                                if (scroller.scrollTop() > distance) {
                                    button.fadeIn();
                                }
                                else {
                                    button.fadeOut();
                                }
                            }, 50);
                        });
                }
                else {
                    button.show();
                }
            };

        return init();
    };




}(jQuery));
