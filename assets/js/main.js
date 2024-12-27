$(function () {
    $('.import-btn').click(() => {
        $('.import-btn').addClass("active");        $('.first-episode').addClass("active");
        $('.export-btn').removeClass("active");     $('.second-episode').removeClass("active");
        $('.email-btn').removeClass("active");      $('.third-episode').removeClass("active");
        $('.webapp-btn').removeClass("active");     $('.forth-episode').removeClass("active");
    })
    
    $('.export-btn').click(() => {
        $('.import-btn').removeClass("active");     $('.first-episode').removeClass("active");
        $('.export-btn').addClass("active");        $('.second-episode').addClass("active");
        $('.email-btn').removeClass("active");      $('.third-episode').removeClass("active");
        $('.webapp-btn').removeClass("active");     $('.forth-episode').removeClass("active");
    })

    $('.email-btn').click(() => {
        $('.import-btn').removeClass("active");     $('.first-episode').removeClass("active");
        $('.export-btn').removeClass("active");     $('.second-episode').removeClass("active");
        $('.email-btn').addClass("active");         $('.third-episode').addClass("active");
        $('.webapp-btn').removeClass("active");     $('.forth-episode').removeClass("active");
    })

    $('.webapp-btn').click(() => {
        $('.import-btn').removeClass("active");     $('.first-episode').removeClass("active");
        $('.export-btn').removeClass("active");     $('.second-episode').removeClass("active");
        $('.email-btn').removeClass("active");      $('.third-episode').removeClass("active");
        $('.webapp-btn').addClass("active");        $('.forth-episode').addClass("active");
    })
});