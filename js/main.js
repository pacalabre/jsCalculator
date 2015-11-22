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
  })

  $('#button2').mousedown(function(){
    //if toggle is even, value is assigned to a
    if (toggle % 2 == 0) {
    a = a+button2;
    //if toggle is odd, value is assigned to b
  } else {
    b = b+button2;
  }
    parseInt(a);
    parseInt(b);
  })

  $('#button3').mousedown(function(){
    //if toggle is even, value is assigned to a
    if (toggle % 2 == 0) {
    a = a+button3;
    //if toggle is odd, value is assigned to b
  } else {
    b = b+button3;
  }
    parseInt(a);
    parseInt(b);
  })

  $('#button4').mousedown(function(){
    //if toggle is even, value is assigned to a
    if (toggle % 2 == 0) {
    a = a+button4;
    //if toggle is odd, value is assigned to b
  } else {
    b = b+button4;
  }
    parseInt(a);
    parseInt(b);
    console.log("a="+a);
    console.log("b="+b);
  })

  $('#button5').mousedown(function(){
    //if toggle is even, value is assigned to a
    if (toggle % 2 == 0) {
    a = a+button5;
    //if toggle is odd, value is assigned to b
  } else {
    b = b+button5;
  }
    parseInt(a);
    parseInt(b);
    console.log("a="+a);
    console.log("b="+b);
  })

  $('#button6').mousedown(function(){
    //if toggle is even, value is assigned to a
    if (toggle % 2 == 0) {
    a = a+button6;
    //if toggle is odd, value is assigned to b
  } else {
    b = b+button6;
  }
    parseInt(a);
    parseInt(b);
    console.log("a="+a);
    console.log("b="+b);
  })

  $('#button7').mousedown(function(){
    //if toggle is even, value is assigned to a
    if (toggle % 2 == 0) {
    a = a+button7;
    //if toggle is odd, value is assigned to b
  } else {
    b = b+button7;
  }
    parseInt(a);
    parseInt(b);
    console.log("a="+a);
    console.log("b="+b);
  })

  $('#button8').mousedown(function(){
    //if toggle is even, value is assigned to a
    if (toggle % 2 == 0) {
    a = a+button8;
    //if toggle is odd, value is assigned to b
  } else {
    b = b+button8;
  }
    parseInt(a);
    parseInt(b);
    console.log("a="+a);
    console.log("b="+b);
  })

  $('#button9').mousedown(function(){
    //if toggle is even, value is assigned to a
    if (toggle % 2 == 0) {
    a = a+button9;
    //if toggle is odd, value is assigned to b
  } else {
    b = b+button9;
  }
    parseInt(a);
    parseInt(b);
    console.log("a="+a);
    console.log("b="+b);
  })

  $('#button0').mousedown(function(){
    //if toggle is even, value is assigned to a
    if (toggle % 2 == 0) {
    a = a+button0;
    //if toggle is odd, value is assigned to b
  } else {
    b = b+button0;
  }
    parseInt(a);
    parseInt(b);
    console.log("a="+a);
    console.log("b="+b);
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
    add(a,b);
  })

  $('#minus').mousedown(function(){
    subtract(a,b);
  })

  $('#divide').mousedown(function(){
    divide(a,b);
  })

  $('#multiply').mousedown(function(){
    multiply(a,b);
  })

  $('#clear').mousedown(function(){
    a='';
    b='';
    total=0;
    console.log("a= "+ a);
    console.log("b="+ b);
    console.log(total);
  })

  //operational functions

  function add(a,b) {
  var total = parseInt(a) + parseInt(b);
  toggle++;
  a = total;
  b = 0;
  console.log("b is now =" + b)
  console.log("total=" + total);
  return total;
  }

  function subtract(a,b) {
    var total = parseInt(a) - parseInt(b);
    toggle++;
    console.log("a= "+a);
    console.log("b= "+b);
    console.log("total=" + total);
    return total;
  }

  function multiply(a,b) {
    var total =  parseInt(a) * parseInt(b);
    toggle++;
    console.log("a= "+a);
    console.log("b= "+b);
    console.log("total=" + total);
    return total;
  }

  function divide(a,b) {
    var total =  parseInt(a) / parseInt(b);
    toggle++;
    console.log("a= "+a);
    console.log("b= "+b);
    console.log("total=" + total);
    return total;
  }

})
