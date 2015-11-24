$(document).ready(function(){
  var total = '';
  var a = '';
  var b = '';
  var toggle = 0;
  var operation = 0;

  //on load, show total as zero
  $(window).load(function() {
    // 0 is displayed upon screen load;
    $('#total-display').html(function() {
    return '<h2>'+0+'</h2>';
    })
  })

  //if button1 is pressed, 1 to var
  $('#button1').mousedown(function(){
    //if toggle is zero, value is assigned to var a
    if (toggle === 0) {
    a = a+"1";
    //if toggle is equal to 1, value is assigned to var b
    } else if (toggle === 1) {
      b = b+"1";
      // 0 is displayed upon screen load;
    $('#total-display').html(function() {
    return '<h2>'+b+'</h2>';
    })
    // if toggle is greater than 1, var a is equal to the total,
    //new value is assigned to var b
    } else if (toggle > 1) {
      a = total;
      b='';
      b=b+"1"
      toggle = 1;
    }
    console.log("a= " + a);
    console.log("b= "+ b);
    console.log("toggle= "+ toggle);
    console.log("total= "+total);
  })

  //if button2 is pressed, 2 to var
  $('#button2').mousedown(function() {
    //if toggle is zero, value is assigned to var a
    if (toggle === 0) {
    a = a+"2";
    //if toggle is equal to 1, value is assigned to var b
    } else if (toggle === 1) {
      b = b+"2";
    // if toggle is greater than 1, var a is equal to the total,
    //new value is assigned to var b
    } else if (toggle > 1) {
      a = total;
      b ='';
      b = b + "2";
      toggle = 1;
      console.log("a is now "+a);
    }
    console.log("a= " + a);
    console.log("b= "+ b);
    console.log("toggle= "+ toggle);
    console.log("total= "+total);
  })

  //if button3 is pressed, 3 to var
  $('#button3').mousedown(function() {
    //if toggle is zero, value is assigned to var a
    if (toggle === 0) {
    a = a+"3";
    //if toggle is equal to 1, value is assigned to var b
    } else if (toggle === 1) {
      b = b+"3";
    // if toggle is greater than 1, var a is equal to the total,
    //new value is assigned to var b
    } else if (toggle > 1) {
      a = total;
      b ='';
      b = b + "3";
      toggle = 1;
      console.log("a is now "+a);
    }
    console.log("a= " + a);
    console.log("b= "+ b);
    console.log("toggle= "+ toggle);
    console.log("total= "+total);
  })

  //if button4 is pressed, 4 to var
  $('#button4').mousedown(function() {
    //if toggle is zero, value is assigned to var a
    if (toggle === 0) {
    a = a+"4";
    //if toggle is equal to 1, value is assigned to var b
    } else if (toggle === 1) {
      b = b+"4";
    // if toggle is greater than 1, var a is equal to the total,
    //new value is assigned to var b
    } else if (toggle > 1) {
      a = total;
      b ='';
      b = b + "4";
      toggle = 1;
      console.log("a is now "+a);
    }
    console.log("a= " + a);
    console.log("b= "+ b);
    console.log("toggle= "+ toggle);
    console.log("total= "+total);
  })

  //if button5 is pressed, 5 to var
  $('#button5').mousedown(function() {
    //if toggle is zero, value is assigned to var a
    if (toggle === 0) {
    a = a+"5";
    //if toggle is equal to 1, value is assigned to var b
    } else if (toggle === 1) {
      b = b+"5";
    // if toggle is greater than 1, var a is equal to the total,
    //new value is assigned to var b
    } else if (toggle > 1) {
      a = total;
      b ='';
      b = b + "5";
      toggle = 1;
      console.log("a is now "+a);
    }
    console.log("a= " + a);
    console.log("b= "+ b);
    console.log("toggle= "+ toggle);
    console.log("total= "+total);
  })

  //if button6 is pressed, 6 to var
  $('#button6').mousedown(function() {
    //if toggle is zero, value is assigned to var a
    if (toggle === 0) {
    a = a+"6";
    //if toggle is equal to 1, value is assigned to var b
    } else if (toggle === 1) {
      b = b+"6";
    // if toggle is greater than 1, var a is equal to the total,
    //new value is assigned to var b
    } else if (toggle > 1) {
      a = total;
      b ='';
      b = b + "6";
      toggle = 1;
      console.log("a is now "+a);
    }
    console.log("a= " + a);
    console.log("b= "+ b);
    console.log("toggle= "+ toggle);
    console.log("total= "+total);
  })

  //if button7 is pressed, 7 to var
  $('#button7').mousedown(function() {
    //if toggle is zero, value is assigned to var a
    if (toggle === 0) {
    a = a+"7";
    //if toggle is equal to 1, value is assigned to var b
    } else if (toggle === 1) {
      b = b+"7";
    // if toggle is greater than 1, var a is equal to the total,
    //new value is assigned to var b
    } else if (toggle > 1) {
      a = total;
      b ='';
      b = b + "7";
      toggle = 1;
      console.log("a is now "+a);
    }
    console.log("a= " + a);
    console.log("b= "+ b);
    console.log("toggle= "+ toggle);
    console.log("total= "+total);
  })

  //if button8 is pressed, 8 to var
  $('#button8').mousedown(function() {
    //if toggle is zero, value is assigned to var a
    if (toggle === 0) {
    a = a+"8";
    //if toggle is equal to 1, value is assigned to var b
    } else if (toggle === 1) {
      b = b+"8";
    // if toggle is greater than 1, var a is equal to the total,
    //new value is assigned to var b
    } else if (toggle > 1) {
      a = total;
      b ='';
      b = b + "8";
      toggle = 1;
      console.log("a is now "+a);
    }
    console.log("a= " + a);
    console.log("b= "+ b);
    console.log("toggle= "+ toggle);
    console.log("total= "+total);
  })

  //if button9 is pressed, 9 to var
  $('#button9').mousedown(function() {
    //if toggle is zero, value is assigned to var a
    if (toggle === 0) {
    a = a+"9";
    //if toggle is equal to 1, value is assigned to var b
    } else if (toggle === 1) {
      b = b+"9";
    // if toggle is greater than 1, var a is equal to the total,
    //new value is assigned to var b
    } else if (toggle > 1) {
      a = total;
      b ='';
      b = b + "9";
      toggle = 1;
      console.log("a is now "+a);
    }
    console.log("a= " + a);
    console.log("b= "+ b);
    console.log("toggle= "+ toggle);
    console.log("total= "+total);
  })

  //if button0 is pressed, 0 to var
  $('#button0').mousedown(function() {
    //if toggle is zero, value is assigned to var a
    if (toggle === 0) {
    a = a+"0";
    //if toggle is equal to 1, value is assigned to var b
    } else if (toggle === 1) {
      b = b+"0";
    // if toggle is greater than 1, var a is equal to the total,
    //new value is assigned to var b
    } else if (toggle > 1) {
      a = total;
      b = '';
      b = b + "0";
      toggle = 1;
      console.log("a is now "+a);
    }
    console.log("a= " + a);
    console.log("b= "+ b);
    console.log("toggle= "+ toggle);
    console.log("total= "+total);
  })

  //if decimal is pressed, . to var
  $('#decimal').mousedown(function() {
    //if toggle is zero, value is assigned to var a
    if (toggle === 0) {
    a = a+".";
    //if toggle is equal to 1, value is assigned to var b
    } else if (toggle === 1) {
      b = b+".";
    // if toggle is greater than 1, var a is equal to the total,
    //new value is assigned to var b
    } else if (toggle > 1) {
      a = total;
      b = '';
      b = b + ".";
      toggle = 1;
      console.log("a is now "+a);
    }
    console.log("a= " + a);
    console.log("b= "+ b);
    console.log("toggle= "+ toggle);
    console.log("total= "+total);
  })

  //if plus sign button is pressed, 1 to equals function
  $('#add').mousedown(function() {
    toggle ++;
    operation = +1;
  })

  //if minus sign button is pressed, 2 to equals function
  $('#minus').mousedown(function() {
    toggle ++;
    operation = +2;
  })

  //if divide sign button is pressed, 3 to equals function
  $('#divide').mousedown(function() {
    toggle ++;
    operation = +3;
  })

  //if multiply button is pressed, 4 to equals function
  $('#multiply').mousedown(function() {
    toggle ++;
    operation = +4;
  })

  //if clear button is pressed, reset global variables
  $('#clear').mousedown(function() {
    a='';
    b='';
    total= 0;
    toggle = 0;
    operation = 0;
    $('#total-display').html(function() {
      return '<h2>'+total+'</h2>';
    })
    return total = 0;
  })

  //if equals sign is pressed, run selected operator
  $('#equals').mousedown(function() {
    var firstNum = parseFloat(a);
    var secondNum = parseFloat(b);
    toggle ++;

    if (operation === 1) {
     total = add(firstNum,secondNum);
    } else if ( operation === 2) {
     total = subtract(firstNum,secondNum);
    } else if (operation === 3) {
      total = divide(firstNum,secondNum);
    } else if ( operation === 4 ) {
      total = multiply(firstNum,secondNum);
    }
  })

  //operational functions

  //addition function
  function add(a,b) {
    var total = 0;
    var firstNum = parseFloat(a);
    var secondNum = parseFloat(b);
    total = firstNum + secondNum;
    toggle++;
    //Print total to screen
    $('#total-display').html(function(){
      return '<h2>'+total+'</h2>';
    });
    return total = firstNum + secondNum;
  }

  //subtraction function
  function subtract(a,b) {
    var total = 0;
    var firstNum = parseFloat(a);
    var secondNum = parseFloat(b);
    total = firstNum - secondNum;
    toggle++;
    //Print total to screen
    $('#total-display').html(function(){
      return '<h2>'+total+'</h2>';
    })
    return total = firstNum - secondNum;
  }

  //multiplication function
  function multiply(a,b) {
    var total = 0;
    var firstNum = parseFloat(a);
    var secondNum = parseFloat(b);
    total = firstNum * secondNum;
    toggle++;
    //Print total to screen
    $('#total-display').html(function(){
      return '<h2>'+total+'</h2>';
    })
    return total = firstNum * secondNum;
  }

  //division function
  function divide(a,b) {
    var total = 0;
    var firstNum = parseFloat(a);
    var secondNum = parseFloat(b);
    total = firstNum / secondNum;
    toggle++;
    //Print total to screen
    $('#total-display').html(function(){
      return '<h2>'+total+'</h2>';
    })
    return total = firstNum / secondNum;
  }
})
