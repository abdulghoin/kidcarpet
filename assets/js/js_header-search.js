$(document).ready(function(){
    $("#search-btn").focus(function(){
      $("header .menu li").css(
        "visibility", "hidden"
      );
      $(this).animate({
        width: "300px"
      }, "slow");
      $(this).css({
        "border-radius": "4px",
        "position": "absolute",
        "right": "0"
      });

    });
    $("#search-btn").blur(function(){
      $(this).animate({width: "44px"}, "slow", function(){
        $(this).css(
          "border-radius", "50%"
        );
        $("form.search").css(
          "width", "44px"
        );
        $("header .menu li").css("visibility", "visible");
      });
    });
});
