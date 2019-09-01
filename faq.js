$( document ).ready(function() {
    $(".question").each(function(){$(this).css({ opacity : 0 })})
    $(".answer").each(function(){$(this).css({ opacity : 0 })}); 
    $('html,body').scrollTop($('html,body').scrollTop() + 1);

});

$.fn.isInViewport = function() {
    var elementTop = $(this).offset().top;
    var elementBottom = elementTop + $(this).outerHeight();
    var viewportTop = $(window).scrollTop();
    var viewportBottom = viewportTop + $(window).height();
    return elementBottom > viewportTop && elementTop < viewportBottom;
    };

$(window).on('resize scroll', function() {
    $('.animation-element').each(function(){
        if($(this).isInViewport()){
            animation_selector($(this));
            $(this).removeClass('animation-element');
        }
        });
});


function animation_selector(anim_elem){

    if(anim_elem.hasClass("question") || anim_elem.hasClass("answer")){
        anim_elem.transition({opacity : 1 }, 2500);
        return 0;
    }
}