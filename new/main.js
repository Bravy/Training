$(document).ready(function(){
  $('.menu').mouseover( function(){
    console.log('hover');
    $('.front-page').css({'padding-left':'50px'});
  }).mouseout(function(){
    $('.front-page').css({'padding-left':'0px'});
  });

    $('.menu').click( function(){
      $('.hidden-page').css({'margin-left':'0'});
    });
});
