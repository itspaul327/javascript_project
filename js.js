/*Javascript Practice*/
var rows = 8;
var columns = 8;
var $row = $("<div>", {class: 'row'});
var $unit = $("<div>", {class: 'unit'});

$(document).ready(function(){
    for(var i = 0; i < rows; i++){      
            $("#container").append($row);
    }

    for(var i = 0; i < columns; i++){
            $(".row").append($unit);
    }
});
