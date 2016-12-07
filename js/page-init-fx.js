var initFunctions = {
    desktopUnCollapse: function() {
        if ($(window).width() >= 1024) {
            $('.panel-collapse:not(.navbar-collapse)').collapse("show");
        }
    },
    waves: function() {
        Waves.init();
    },
    collapse: function() {
        $('.collapse').collapse("hide");
    },
    dotdotdot: function() {
        $(".ellipsis").dotdotdot();
    }
}
