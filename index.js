$().ready(function () {
    $(".menu-toggler").on("click",function(){
        $(this).toggleClass("open");
        $(".top-nav").toggleClass("open");
    })

    $("#up").on("click", function(){
        $("html,body").animate({scrollTop: 0}, "slow");
    })

    $(".nav-list").on("click","a",function(){
        $(".top-nav").toggleClass("open");
        $(".menu-toggler").toggleClass("open");
    })
});