$(document).ready(function(){
    $("#name .p").click(function(){
        $(this).hide();
    });
})

$(document).ready(function(){
    $("#container").mouseover(function(){
        $("#home").show();
    }).mouseout(function(){
        $("#home").hide();
    });
});