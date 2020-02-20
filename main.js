
$(document).ready(function () {

    // Add scrollspy to <body>
    $('body').scrollspy({ target: ".navbar", offset: 50 });

    // Add smooth scrolling on all links inside the navbar

    var pageScroll = function (o, callback) {
        $('html, body').stop().animate({ scrollTop: o['scrollTop'] || 0 }, o['speed'] || 222, o['easing'] || 'swing', function () {
            if (typeof callback !== 'undefined')
                callback();
        });
    };

    var cssClass = function (o, callback) {
        var ID = $(o['ID']), k = o['delay'], type = o['type'], cls;
        if (ID.length > 0) {
            if (type == 'add') {
                cls = o['cls'] || ['popup-ready', 'popup-animate'];
                ID.addClass(cls[0]).delay(k).queue('fx', function () { $(this).dequeue().addClass(cls[1]); if (typeof callback !== 'undefined') callback(); });
            } else {
                cls = o['cls'] || ['popup-animate', 'popup-ready'];
                ID.removeClass(cls[0]).delay(k).queue('fx', function () { $(this).dequeue().removeClass(cls[1]); if (typeof callback !== 'undefined') callback(); });
            }
        }
    };


    $("#navbarTogglerDemo01 a").on('click', function (event) {
        if (this.hash !== "") {
            event.preventDefault();
            var hash = this.hash;
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function () {
                window.location.hash = hash;
            });
        }
    });


    /*
    $(".navbar-nav  a").on('click', function (event) {
        event.preventDefault();
        var ths = $(this),
            target = $(ths.attr('href') || '');

        if (target.length > 0)
            pageScroll({ scrollTop: target.offset().top - 65 });
    });
    */


    $(".slider-down-icon").on('click', function (event) {
        event.preventDefault();
        pageScroll({ scrollTop: $('section').offset().top });
    });

    /* popup */
    var targetPopup = $('.custom-popup');
    $('[data-target]')
        .bind('click', function () {
            var ths = $(this),
                target = $('.popup-content ' + (ths.attr('data-target') || ''));
            if (target.length > 0) {
                targetPopup.find('.body').html(target.html() || '');
                cssClass({ 'ID': 'body', 'delay': 100, 'type': 'add' });
            }
        });

    targetPopup
        .find('.btn-close')
        .add($('.custom-popup-overlay'))
        .bind('click', function () {
            cssClass({ 'ID': 'body', 'delay': 444, 'type': 'remove' });
        });

    $('#nav-icon3').click(function () {
        $(this).toggleClass('open');
    });

    $('#english').click(function () {
        window.location.href = 'eng.html';
    });

    $('#turkish').click(function () {
        window.location.href = 'index.html';
    });

    var btn = $('#backToTopButton');

    $(window).scroll(function () {
        if ($(window).scrollTop() > 300) {
            btn.addClass('show');
        } else {
            btn.removeClass('show');
        }
    });

    btn.on('click', function (e) {
        e.preventDefault();
        $('html, body').animate({ scrollTop: 0 }, '300');
    });



    /* 
        events
    */
    var win = $(window),
        bdy = $('body'),
        adjust = function () {
            var wst = parseFloat(win.scrollTop()) || 0;
            if (wst >= 300)
                bdy.addClass('logo-ready');
            else
                bdy.removeClass('logo-ready');
        };

    win.bind('scroll resize', adjust);
});