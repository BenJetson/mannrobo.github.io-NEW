var initFunctions = {
    desktopUnCollapse: function() {
        $(document).ready(function(){
            if ($(window).width() >= 1024) {
                $('.panel-collapse:not(.navbar-collapse)').collapse("show");
            }
        });
    }
}