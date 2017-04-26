/*Javascript Practice*/
var dimensions = 16;

$(document).ready(function(){
   function createBlocks(){
       for (var i = 0; i < dimensions; i++)
       {
           for (var j=0; j < dimensions; j++)
           {
               $('grid').append("<div class='unit'></div>");
           }
       }
   }
   createBlocks();
   
   $('#reset').click(function(){
       $('.unit').css('background-color','yellow');
       
       dimensions = prompt("Enter a number 1-64","");
       
       if (isNAN(dimensions))
            alert("Not a number");
        else if (dimensions < 1)
            dimensions = 1;
        else (dimensions > 64)
            dimensions = 64;
            
    var size = 512 / dimensions;
    
    function reset() {
        $('.unit').remove();
        createBlocks();
    }
        reset();
        
        $('.unit').css({'width':size+'px', 'height':size+'px'});
        
        $('unit').hover(function() {
            $(this).css('background-color', '#000');
    });
});

    $('.unit').hover(function() {
        $(this).css('background-color', '#000');
    });
    
});

