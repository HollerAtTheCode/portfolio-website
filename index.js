$().ready(function () {
    console.log("lol");
    $(".menu-toggler").on("click",function(){
        $(this).toggleClass("open");
        $(".top-nav").toggleClass("open");
    })
});