$(document).ready(function(){
    $("[data-fancybox]").fancybox({
		// Options will go here
	});
    /*Galery*/
     function ImageTabs(){
      var WrapGalary = $(".galary_wrap");
       var MenuGalary = WrapGalary.find(".galary_menu>li");
    var ContentGalary = WrapGalary.find(".galary_content>div");
        ContentGalary.not(":first").hide();
        MenuGalary.each(function(i){
            $(this).attr("data-type","tab" + i);
        });
         ContentGalary.each(function(i){
            $(this).attr("data-type","tab" + i);
        });
        MenuGalary.click(function(){
            var getWrapGalary= $(this).closest(".galary_wrap");
            var dataTab = $(this).attr("data-type");
             getWrapGalary.find(".galary_menu>li").removeClass("active");
            $(this).find("li").addClass("active");
            
            getWrapGalary.find(ContentGalary).hide();
            getWrapGalary.find(ContentGalary).filter("[data-type="+ dataTab +"]").show();
            
        });
    }
    ImageTabs();
    /*button scroll*/
$('.butt_scrol').click(function () {
        $('body,html').animate({
            scrollTop:0
        }, 3000);
    });
    /*Initial wow.js*/
    new WOW().init();
/*Animation block*/
    $("#start_inimate").waypoint(function(){
       $("svg polyline").addClass("svg_polyline");
       });
      /*Owl*/ 
    $('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    items:1
});
    
});
  