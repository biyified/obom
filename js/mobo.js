//main mobo javascript
var screenHeight = 0;
$(document).ready(function(){
   // SetPageHeight();
    //CenterVertical(".stacked-screens",".stacked-screens .screen", screenHeight);
    CenterVertical(".vertical-center ",".vertical-center ", screenHeight);
    stalkedScreen();
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

    var transformValue = "translateY(" + top +"px )";
    var objAttr =   $(obj).attr("style");
    $(obj).attr("style", "transform:"+transformValue);
}