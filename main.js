  $(function(){
         $(".menu-open").hide();

         $('.toggle').on( "click", function() {
           $('.menu-open').show();
           $(".menu-open").css("width","500px");
           $(".menu-open").css("transition","width 1s ease");
           $('.toggle').hide();
           $('.main-text').hide();
           $(".slider").css("width","20%");
           $(".main").css("float","right");
         });
         $('.close').on( "click", function() {
           $('.menu-open').hide();
           $('.toggle').show();
           $('.main-text').show();
           $(".slider").css("width","50%");
           $(".main").css("float","left");
         });
  });
