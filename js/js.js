
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
Pizza.prototype.calculatesSizePrice = function(){
    if (this.pizzaSize === "small"){
        this.pizzaPrice = 800;
    } else if(this.pizzaSize === "medium"){
        this.pizzaPrice = 1600;
    } else{
        this.pizzaPrice = 3200;
    }
}
izza.prototype.addToppings = function () {
    if (this.pizzaSize === "Small") {
      for (i=0; i<this.pizzaToppings.length; i++) {
        this.pizzaPrice += 150;
      }
    } else if (this.pizzaSize === "Medium") {
      for (i=0; i<this.pizzaToppings.length; i++) {
        this.pizzaPrice += 175;
      }
    } else {
      for (i=0; i<this.pizzaToppings.length; i++) {
        this.pizzaPrice += 225;
      }
    }
  }
  izza.prototype.addCrust = function () {
    if (this.pizzaSize === "Small") {
      for (i=0; i<this.pizzaCrust.length; i++) {
        this.pizzaPrice += 100;
      }
    } else if (this.pizzaSize === "Medium") {
      for (i=0; i<this.pizzaCrust.length; i++) {
        this.pizzaPrice += 200;
      }
    } else {
      for (i=0; i<this.pizzaCrust.length; i++) {
        this.pizzaPrice += 400;
      }
    }
  }