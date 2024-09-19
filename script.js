$(document).ready(function(){
    // $(".top-header").toggle(6000);

    $(".pop-up-wrapper").hide();

    $(".column1").click(function(){
        $(".column2").fadeOut(3000)
    })

    // $(".random-btn").click(function(){
    //     $("li").css("color", "red").fadeOut(5000);
    // })

    $(".random-btn").click(function(){
        $(".pop-up-wrapper").show();
    })

    $(".close-btn").click(function(){
        $(".pop-up-wrapper").hide();
    })
})