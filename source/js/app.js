$(function(){
    $('.today-navigation a').click(function(){
        $(this).parents('.today-tabs').find('.today-wrap').addClass('hide');
        $(this).parent().siblings().removeClass('active');
        var id = $(this).attr('href');
        $(id).removeClass('hide');
        $(this).parent().addClass('active');
        return false
    });
});