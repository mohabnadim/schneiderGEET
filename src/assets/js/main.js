//Sidebar Left
$(document).ready(function(){

        // toggle left side menu on click
        $("#menu-toggle").click(function(e){

          e.preventDefault();
          $("#wrapper").toggleClass("menuDisplayed");
          
        });

        // close left side menu on mouse leave
        $('#sidebar-wrapper').mouseleave(function(e)  {

          $('#wrapper').toggleClass('menuDisplayed', false);
          $('#menu-toggle').removeClass('opened').addClass('closed');
          e.stopPropagation();

        });

        // menu icon animation Opened
        $(document).on('click','.js-menu_toggle.closed',function(e){

          $(this).removeClass('closed').addClass('opened');

        });
    
            // menu icon animation Closed

        $(document).on('click','.js-menu_toggle.opened',function(e){

          $(this).removeClass('opened').addClass('closed');

        });
        $(document).on('click','#main-content',function(e){
            
            $('#wrapper').toggleClass('menuDisplayed', false);
            $('#menu-toggle').removeClass('opened').addClass('closed');
            e.stopPropagation();
        });

});


//Tooltip toggling
$(document).ready(function() {
  $("body").tooltip({ selector: '[data-toggle=tooltip]' });
});

//switching navbar to fixed on scroll
$(window).scroll(function() {
  if( $(this).scrollTop() > 0 ) {
   $(".navbar").addClass("fixed-top");
 } else {
   $(".navbar").removeClass("fixed-top");
 }
});

//sidebar right Table on click
$(document).ready(function() {

   // open rightside tab on click 
    $("#menu-toggle-table").click(function(e) {

        e.preventDefault(); 
        $("#wrapper").toggleClass("menuDisplayed-table", true); 
        
        $("#sidebar-wrapper-table").toggleClass("menuDisplayed-table", true); 
        $("#table-icon").toggleClass("menuDisplayed", true); 
        
    });

    
   
    
   // Close rightside tab on click
    
    $('#close-table').click(function(e)  {
      $('#wrapper').toggleClass('menuDisplayed-table', false);
      
        $('#sidebar-wrapper-table').toggleClass('menuDisplayed-table', false);
        $("#table-icon").toggleClass("menuDisplayed", false); 
        e.stopPropagation();

    });
    

});

