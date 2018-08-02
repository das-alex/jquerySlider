(function($) {
    $.fn.slider = function() {
        return this.each(function() {
            var sliderButton = $('.slider_button');
            var thumbsList = $('.list_of_thumbnails');
            var thmbPic = $('.thmb_pic');
            var bigPic = $('.big_pic');
            var settings = {
                currentPosition: 0,
                thumbnailWidth: 200,
                leftPosition: 0,
                rightPosition: -((thumbsList.find('li').length - 5) * 200)
            };
            var selected = {
                'box-shadow': '0 0 3px 2px #ccc'
            };
            var prevThumbnail;

            sliderButton.click((e) => {
                var elClass = e.currentTarget.classList;

                if($.inArray('sb_left', elClass) != -1) {
                    if(settings.currentPosition != settings.leftPosition) {
                        toDecide(1);
                    }
                } else if($.inArray('sb_right', elClass) != -1) {
                    if(settings.currentPosition != settings.rightPosition) {
                        toDecide(-1);
                    }
                } else {
                    console.log('Sorry, but you didn\'t assign \'sb_left\' or \'sb_right\' classes for navigation buttons');
                };
            });

            thmbPic.click((e) => {
                var curTarget = e.currentTarget;
                $(prevThumbnail).css('box-shadow', '');
                $(curTarget).css(selected);
                bigPic[0].src = curTarget.lastChild.src;
                prevThumbnail = curTarget;
            });

            function toDecide(side) {
                settings.currentPosition += settings.thumbnailWidth * side;
                thumbsList.animate({left: settings.currentPosition + 'px'}, 300);
            }

        });
    };
})(jQuery);

$('.slider').slider();
