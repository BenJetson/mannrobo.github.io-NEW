---
---
var dependencies = {
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

var requests = new Array();

$(document).ready(function() {
    $("meta[depend][feature]").each(function() {
        requests.push($(this).attr("feature"));
    });
    for (var i=0; i < requests.length; i++) {
        if (dependencies[requests[i]]) {
            dependencies[requests[i]]();
        } else {
            console.warn("Warn: Page depends on \"" + requests[i] + "\", but server has no config!\n" + 
                         "Nag the developer to fix this by opening a ticket.")
        }
    }
});
