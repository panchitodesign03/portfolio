/*global $, window*/

$(function () {
    
    "use strict";
    
    var $window = $(window);
    
    $(".page-content > div").css({
        
        minHeight: $window.height(),
        width: $window.width() - $(".menu").width()
        
    });
    
    $window.on("resize", function () {
        $(".page-content > div").css({
            
            minHeight: $window.height(),
            width: $window.width() - $(".menu").width()
            
        });
    });
    
    // Smooth Scroll
    $(".menu li a").on("click", function (e) {
        
        e.preventDefault();
        
        $("html, body").animate({
            
            scrollTop: $($(this).attr("href")).offset().top
            
        }, 600);
        
    });
    
    // Add Class Active to Menu Links on Scrolling
    $window.on('scroll', function () {
        
        var cur_pos = $(this).scrollTop();
        
        $(".page-content .section").each(function () {
            
            var top     = $(this).offset().top - 50,
                bottom  = top + $(this).outerHeight();
            
            if (cur_pos >= top && cur_pos <= bottom) {
                
                $('.menu li a[href="#' + $(this).attr('id') + '"]').addClass("active").parent("li").siblings("li").children("a").removeClass("active");
                
            }
            
        });
        
    });
    
    /*========== Nice Scroll ==========*/
    $("html").niceScroll({
        cursorcolor: "#f7971c",
        cursorwidth: "5px",
        cursorborderradius: 0,
        cursorborder: 0,
        zindex: 5000
    });
    
});