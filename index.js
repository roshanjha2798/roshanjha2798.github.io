// ​$(function(){  // $(document).ready shorthand
//     $('.monster').fadeIn('slow');
//   });
  
  $(function() {
      
      /* Every time the window is scrolled ... */
      $(document).on("scroll",function(){
      
          /* Check the location of each desired element */
          $('.hideme').each( function(i){
              
              let bottom_of_object = $(this).position().top + $(this).outerHeight();
              let bottom_of_window = $(window).scrollTop() + $(window).height();
              
              /* If the object is completely visible in the window, fade it it */
              if( bottom_of_window > bottom_of_object ){
                  
                  $(this).animate({'opacity':'1'},450);
                      
              }
              
          }); 
      
      });
      
  });
