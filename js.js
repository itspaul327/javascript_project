/*Javascript Practice*/
$(document).ready(function(){
 var x = (".unit");
 var y = (".unit");
 for (var x=0; y<16;y++) {
    for (var y=0; x<16; x++){
     $("<div>").addClass("unit").appendTo("container");

    }
 }
});