//main mobo javascript
var screenHeight = 0;
var screenHeightRatio = 0.6763;
var screenWidthRatio =  0.6992;
var phoneHeightRatio = 1.83797;

$(document).ready(function(){
    CenterVertical(".vertical-center ",".vertical-center ", screenHeight);
    stalkedScreen();
     CarouselScale();

});

function stalkedScreen() {

    var h = $(".stacked-screens .screen").height();
    $(".stacked-screens").height(h +100);

}
function SetPageHeight(){
    screenHeight =  $(window).height();
    $(".full-screen-height").height(screenHeight);
}
function CenterVertical( obj, sprite, screenH){
    var objHeight =  $(sprite).height();
    var top = (screenH - objHeight)/2;

    var transformYValue = "translateY(" + top +"px )";
    var objAttr = $(obj).attr("attr");

    $(obj).attr("style", "transform:"+transformYValue);
    return transformYValue;

}

function CarouselScale(){

    var phoneWidth = $(".carousel-phone ").width();
    var phoneHeight = phoneWidth * phoneHeightRatio;


    $(".carousel-phone ").height(phoneHeight );

    var screenHeight = parseInt(screenHeightRatio * phoneHeight);
    $(".carousel-phone .phone-screen").height(screenHeight);

    var screenWidth= parseInt(screenWidthRatio * phoneWidth);
    $(".carousel-phone .phone-screen").width(screenWidth);

    var index = 0;

     $(".phone-screen li").each(function( ){  
        $(this).attr("style", "transform:"+ "translate("+ -screenWidth * index+"px , " + -screenHeight * index +"px )" );
         index++;
    });
    var temp = $('.screen-list').offset();
    temp =  parseInt(temp.left - 20);
    var y = CenterVertical(  $('.carousel-hint'),  $('.carousel-hint'), $(".carousel-phone ").height());

    $('.carousel-hint').attr("style" ,  "right : calc(100% - "+  temp +"px); transform: "+ y );



}
