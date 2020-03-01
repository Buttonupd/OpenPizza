
$(document).ready(function(){
    $("#container").mouseover(function(){
        $("#home").show();
    }).mouseout(function(){
        $("#home").hide();
    });
});

$(document).ready(function(){
    $("#bob").mouseover(function(){
        $("#hover").show();
    }).mouseout(function(){
        $("#hover").hide();
    });
});

$(document).ready(function(){
    $("#row").click(function(){
        $("#ten").show();
    }).click(function(){
        $("#ten").hide();
    });
});

$(document).ready(function(){
    $("#row").mouseover(function(){
        $("#11").show();
    }).mouseout(function(){
        $("#11").hide();
    });
});

function Order(name, total){
    this.totalPrice = total;
    this.orderPizzas = [];
    this.delivereyAddress;
    this.delivery;
};
function Pizza(size, toppings, price, Crust){
    this.pizzaSize = size;
    this.pizzaToppings = toppings;
    this.pizzaPrice = price;
    this.pizzaCrust = Crust;
};
function Address(street, city, state){
    this.addressStreet = street;
    this.addressCity = city;
    this.addressState = state;
}
