$(function () {
    $('.burger').on('click', function () {
        var _self = $(this);

        if (_self.hasClass('-folded')) {
            _self.removeClass('-folded').addClass('-active');
        } else if (_self.hasClass('-active')) {
            _self.removeClass('-active').addClass('-folded');
        } else {
            _self.addClass('-active');
        }
    });
});

$(function () {
});
$(function () {
    var mainSliderConf = {
        arrows: false,
        autoplay: true,
        autoplaySpeed: 3000,
        fade: true,
    };

    $('.slider.-main').slick(mainSliderConf);
});