//Completed by Le Wen

//On image gallery click, add a class to display information
var className = "item-clicked";

$(".carousel-inner").click(
    function() {
        if($( this ).hasClass( className )){
            $( this ).removeClass( className );
        }
        else {
            $( this ).addClass( className )
        }
    }
  );

  $(".carousel-control-prev, .carousel-control-next").click(
    function() {
        $( ".carousel-inner" ).removeClass( className );
    }
  );