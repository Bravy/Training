$(document).ready(function(){

});
$(document).keydown(function(event) {
  var p = $( ".fighter" );

  var position = p.position();
  var left = position.left;
  var right = position.right = 0;
  var e = event.keyCode;
  console.log(e);
  if(e == 37){
    if(left >=50){
      p.css('left',left-50)
    }
  }
  if( e == 39){
    if(left <=1010){
      p.css('left',left+50)
    }
  }
  if(e ==32){
    $(".bullet").css('top','-10px');
    $(".bullet").css('transition','all 1s ease');
  }else{
      $(".bullet").css('top','500px');
      $(".bullet").css('transition','none');
  }

});
