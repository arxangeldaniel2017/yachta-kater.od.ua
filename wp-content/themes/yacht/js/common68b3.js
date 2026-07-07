$(document).ready(function() {
    $('#Carousel').carousel({
        interval: 5000
    })
});
$(document).ready(function() {
'use strict';
	$(document).ready(function(){
    $(".show_form").on("click",function(){show_form_in_site($(this)); return false;});
    $(".big_box_close, .a_close_box").on("click",function(){hide_form_in_site($(this)); return false;});
	});
	function show_form_in_site(X){
    let needBoxToShow=$(".black[rel='"+X.attr("rel")+"']");
    needBoxToShow.fadeIn(500);
    let heightWind=parseInt($(window).height());
    let heightBox=parseInt(needBoxToShow.find(".form_box").outerHeight());
    let heighRaz=heightWind-heightBox;
    if(heighRaz>0){
      needBoxToShow.find(".form_box").css("top",parseInt(heighRaz/2)+"px");
    }
    return false;
	}
	function hide_form_in_site(X){
    X.closest(".black").fadeOut(500);
  return false;
	}
});