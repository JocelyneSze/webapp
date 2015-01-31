
//Gets the Users name and Says Hello!
//var greeting = "Hello ";
//var name = prompt("?");
//var greeting_message = greeting + name;

//alert(greeting_message);

jQuery("#greeting-form").on("submit",function(event_details){
    var greeting="Hello ";
    var name=this.fullName.value;
    var greeting_message = greeting + "" + name;
    jQuery ("#greeting-form").hide();
    var formId = "#greeting";
    $(formId).append("<p>" + greeting_message +"</p>").hide().fadeIn(1000);
    event_details.preventDefault();

});