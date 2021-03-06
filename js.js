
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

function getTotal() {
  var text1 = "<h3>You Order is as follows:</h3>";
  var text2 = "";
  var sizeTotal = 0;
  var runningTotal = 0;
  var i = 0;
  var sizeArray = document.getElementsByClassName("sizes");
  for (i = 0; i < sizeArray.length; i++) {
     if (sizeArray[i].checked) {
        var selectedSize = sizeArray[i].value;
        text2 = text2+selectedSize+":<br>";
     }
  }
  if (selectedSize === "Personal Pizza") {
     sizeTotal = 600;
   text2 = text2+"ksh"+sizeTotal+".00<br>";
  } else if (selectedSize === "Medium Pizza") {
     sizeTotal = 1000;
   text2 = text2+"ksh"+sizeTotal+".00<br>";
  } else if (selectedSize === "Large Pizza") {
     sizeTotal = 1400;
   text2 = text2+"ksh"+sizeTotal+".00<br>";
  } else if (selectedSize === "Extra Large Pizza") {
     sizeTotal = 1600;
   text2 = text2+"ksh"+sizeTotal+".00<br>";
  }
  runningTotal = sizeTotal;
  getSauce(runningTotal, text1, text2);
}

function getSauce(runningTotal, text1, text2) {
  var sauceTotal = 0;
  var sauceArray = document.getElementsByClassName("sauces");
  var i = 0;
  for (i = 0; i < sauceArray.length; i++) {
     if (sauceArray[i].checked) {
        var selectedSauce = sauceArray[i].value;
        text2 = text2+selectedSauce+":<br>";
     }
  }
  if (selectedSauce === "Marinara Sauce") {
     sauceTotal = 20;
   text2 = text2+"ksh"+sauceTotal+".00<br>";
  } else if (selectedSauce === "White Sauce") {
     sauceTotal = 20;
   text2 = text2+"ksh"+sauceTotal+".00<br>";
  } else if (selectedSauce === "Barbeque Sauce") {
     sauceTotal = 20;
   text2 = text2+"ksh"+sauceTotal+".00<br>";
  } else if (selectedSauce === "No Sauce") {
     sauceTotal = .00;
   text2 = text2+"ksh"+sauceTotal+".00<br>";
  }
  runningTotal = (runningTotal + sauceTotal);
  getCheese(runningTotal, text1, text2);
}

function getCheese(runningTotal, text1, text2) {
  var cheeseTotal = 0;
  var cheeseArray = document.getElementsByClassName("cheeses");
  var i = 0;
  for (i = 0; i < cheeseArray.length; i++) {
     if (cheeseArray[i].checked) {
        var selectedCheese = cheeseArray[i].value;
        text2 = text2+selectedCheese+":<br>";
     }
  }
  if (selectedCheese === "Regular Cheese") {
     cheeseTotal = 100;
     text2 = text2+"ksh"+cheeseTotal+".00<br>";
  } else if (selectedCheese === "No Cheese") {
     cheeseTotal = 0;
     text2 = text2+"ksh"+cheeseTotal+".00<br>";
  } else if (selectedCheese === "Extra Cheese") {
     cheeseTotal = 300;
     text2 = text2+"ksh"+cheeseTotal+".00<br>";
  }
  runningTotal = (runningTotal + cheeseTotal);
  getCrust(runningTotal, text1, text2);
}

function getCrust(runningTotal, text1, text2) {
  var crustTotal = 0;
  var crustArray = document.getElementsByClassName("crusts");
  var i = 0;
  for (i = 0; i < crustArray.length; i++) {
     if (crustArray[i].checked) {
        var selectedCrust = crustArray[i].value;
        text2 = text2+selectedCrust+":<br>";
     }
  }
  if (selectedCrust === "Plain Crust") {
     crustTotal = 100;
   text2 = text2+"ksh"+crustTotal+".00<br>";
  } else if (selectedCrust === "Garlic Butter Crust") {
     crustTotal = 150;
   text2 = text2+"ksh"+crustTotal+".00<br>";
  } else if (selectedCrust === "Cheese Stuffed Crust") {
     crustTotal = 300;
   text2 = text2+"ksh"+crustTotal+".00<br>";
  } else if (selectedCrust === "Spicy Crust") {
     crustTotal = 450;
   text2 = text2+"ksh"+crustTotal+".00<br>";
  } else if (selectedCrust === "House Special Crust") {
     crustTotal = 500;
   text2 = text2+"ksh"+crustTotal+".00<br>";
  }
  runningTotal = (runningTotal + crustTotal);
  getMeat(runningTotal, text1, text2);
}

function getMeat(runningTotal, text1, text2) {
  var meatTotal = 0;
  var selectedMeat = [];
  var meatArray = document.getElementsByClassName("meats");
  var i = 0;
  for (i = 0; i < meatArray.length; i++) {
     if (meatArray[i].checked) {
        selectedMeat.push(meatArray[i].value);
        text2 = text2+meatArray[i].value+":<br>";
     }
  }
  var meatCount = selectedMeat.length;
  if (meatCount >= 1) {
     meatTotal = (meatCount - 1);
   text2 = text2+"ksh"+meatTotal+".00<br>";
  } else {
     meatTotal = 0;
   text2 = text2+"Vegetarian:<br>ksh"+meatTotal+".00<br>";
  }
  runningTotal = (runningTotal + meatTotal);
  getVeggy(runningTotal, text1, text2);
}

function getVeggy(runningTotal, text1, text2) {
  var vegTotal = 0;
  var selectedVeg = [];
  var vegArray = document.getElementsByClassName("veggy");
  var i = 0;
  for (i = 0; i < vegArray.length; i++) {
     if (vegArray[i].checked) {
        selectedVeg.push(vegArray[i].value);
        text2 = text2+vegArray[i].value+":<br>";
     }
  }
  var vegCount = selectedVeg.length;
  if (vegCount >= 1) {
     vegTotal = (vegCount - 1);
   text2 = text2+"ksh"+vegTotal+".00<br>";
  } else {
     vegTotal = 0;
   text2 = text2+"No Vegetables:<br>ksh"+vegTotal+".00<br>";
  }
  runningTotal = (runningTotal + vegTotal);
  document.getElementById("orderpopup").style.opacity=1;
  document.getElementById("text1").innerHTML=text1;
  document.getElementById("text2").innerHTML="<p>"+text2+"</p>";
  document.getElementById("runningtotal").innerHTML="<h3>Total: <strong>ksh"+runningTotal+".00"+"</strong></h3>";
}

function getReset() {
 document.getElementById("frmTotal").reset();
 document.getElementById("orderpopup").style.opacity=0;
}