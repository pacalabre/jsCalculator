$(document).ready(function(){
  var a = '';
  var b = '';
  var toggle = 0;
  var button1 = "1";
  var button2 = "2";
  var button3 = "3";
  var button4 = "4";
  var button5 = "5";
  var button6 = "6";
  var button7 = "7";
  var button8 = "8";
  var button9 = "9";
  var button0 = "0";

  //if button1 is pressed, 1 is assigned to var a
  $('#button1').mousedown(function(){
    //if toggle is even, value is assigned to a
    if (toggle % 2 == 0) {
    a = a+button1;
    //if toggle is odd, value is assigned to b
  } else {
    b = b+button1;
  }
    parseInt(a);
    parseInt(b);
    console.log("a="+a);
    console.log("b="+b);
    console.log(toggle);
  })

  $('#button2').mousedown(function(){
    a = a+button2;
    parseInt(a);
    console.log(a);
  })

  $('#button3').mousedown(function(){
    a = a+button3;
    parseInt(a);
    console.log(a);
  })

  $('#button4').mousedown(function(){
    a = a+button4;
    parseInt(a);
    console.log(a);
  })

  $('#button5').mousedown(function(){
    a = a+button5;
    parseInt(a);
    console.log(a);
  })

  $('#button6').mousedown(function(){
    a = a+button6;
    parseInt(a);
    console.log(a);
  })

  $('#button7').mousedown(function(){
    a = a+button7;
    parseInt(a);
    console.log(a);
  })

  $('#button8').mousedown(function(){
    a = a+button8;
    parseInt(a);
    console.log(a);
  })

  $('#button9').mousedown(function(){
    a = a+button9;
    parseInt(a);
    console.log(a);
  })

  $('#button0').mousedown(function(){
    a = a+button0;
    parseInt(a);
    console.log(a);
  })

  $('#decimal').mousedown(function(){
    //if toggle is even, value is assigned to a
    if (toggle % 2 == 0) {
    a = a+".";
    //if toggle is odd, value is assigned to b
  } else {
    b = b+".";
  }
    parseInt(a);
    parseInt(b);
  })

  $('#add').mousedown(function(){
    add();
  })

  //operational functions

  function add(a,b) {
  var total = a + b;
  toggle++;
  return total;
  }

  function subtract(a,b) {
    var total = a - b;
    return total;
  }

  function multiply(a,b) {
    var total =  a * b;
    return total;
  }

  function divide(a,b) {
    var total =  a / b;
    return total;
  }

})
