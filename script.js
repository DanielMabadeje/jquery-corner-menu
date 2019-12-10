$(document).ready(function() {

  var active1 = false;
  var active2 = false;
  var active3 = false;
  var active4 = false;

    $('.container').on('mousedown touchstart', function() {
    
    if (!active1) $(this).find('.first').css({'background-color': '#ff3131', 'transform': 'translate(0px,125px)'});
    else $(this).find('.first').css({'background-color': 'gray', 'transform': 'none'}); 
     if (!active2) $(this).find('.second').css({'background-color': '#ff3131', 'transform': 'translate(60px,105px)'});
    else $(this).find('.second').css({'background-color': 'gray', 'transform': 'none'});
      if (!active3) $(this).find('.third').css({'background-color': '#ff3131', 'transform': 'translate(105px,60px)'});
    else $(this).find('.third').css({'background-color': 'gray', 'transform': 'none'});
      if (!active4) $(this).find('.fourth').css({'background-color': '#ff3131', 'transform': 'translate(125px,0px)'});
    else $(this).find('.fourth').css({'background-color': 'gray', 'transform': 'none'});
    active1 = !active1;
    active2 = !active2;
    active3 = !active3;
    active4 = !active4;
      
    });
});