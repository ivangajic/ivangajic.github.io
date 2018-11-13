var pwd = "/portfolio";

function processCommand(command){
    switch(command){
        case "whoami":
            return "ivan gajic"+ "<br>";
        case "ls":
            return "<b style='color: #12d812'>php &nbsp;&nbsp;&nbsp; mysql &nbsp;&nbsp;&nbsp; javascript &nbsp;&nbsp;&nbsp; linux </b>"+ "<br>";
    }    
}

function addCommand(command){
    let result = processCommand(command);
    $("#results").append($("#temp").text() + "<br>" + result);
    $("#command").html("");
    $("#input").val("");
}

$(function(){
    $("#input").keyup(function(e){
        let command = $(this).val();  
        $("#command").html(command);
        if(e.originalEvent.keyCode == 13){
            addCommand(command);
        }
    })
})