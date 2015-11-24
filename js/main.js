$(document).ready(function() {
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
    // if var a = 1, 1 is displayed on the screen
    printA();
    //if toggle is equal to 1, value is assigned to var b
    } else if (toggle === 1) {
      b = b+"1";
    // if var b = 1, 1 is displayed on the screen
    printB();
    // if toggle is greater than 1, var a is equal to the total,
    //new value is assigned to var b
    } else if (toggle > 1) {
      a = total;
      b='';
      b=b+"1";
    // if var b = 1, 1 is displayed on the screen
      printB();
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
    // if var a = 2, 2 is displayed on the screen
    printA();
    //if toggle is equal to 1, value is assigned to var b
    } else if (toggle === 1) {
      b = b+"2";
    // if var b = 2, 2 is displayed on the screen
    printB();
    // if toggle is greater than 1, var a is equal to the total,
    //new value is assigned to var b
    } else if (toggle > 1) {
      a = total;
      b ='';
      b = b + "2";
    // if var b = 2, 2 is displayed on the screen
      printB();
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
    // if var a = 3, 3 is displayed on the screen
    printA();
    //if toggle is equal to 1, value is assigned to var b
    } else if (toggle === 1) {
      b = b+"3";
    // if var b = 3, 3 is displayed on the screen
    printB();
    // if toggle is greater than 1, var a is equal to the total,
    //new value is assigned to var b
    } else if (toggle > 1) {
      a = total;
      b ='';
      b = b + "3";
    // if var b = 3, 3 is displayed on the screen
      printB();
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
    // if var a = 4, 4 is displayed on the screen
    printA();
    //if toggle is equal to 1, value is assigned to var b
    } else if (toggle === 1) {
      b = b+"4";
    // if var b = 4, 4 is displayed on the screen
    printB();
    // if toggle is greater than 1, var a is equal to the total,
    //new value is assigned to var b
    } else if (toggle > 1) {
      a = total;
      b ='';
      b = b + "4";
    // if var b = 4, 4 is displayed on the screen
      printB();
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
    // if var a = 5, 5 is displayed on the screen
    printA();
    //if toggle is equal to 1, value is assigned to var b
    } else if (toggle === 1) {
      b = b+"5";
    // if var b = 5, 5 is displayed on the screen
    printB();
    // if toggle is greater than 1, var a is equal to the total,
    //new value is assigned to var b
    } else if (toggle > 1) {
      a = total;
      b ='';
      b = b + "5";
    // if var b = 5, 5 is displayed on the screen
      printB();
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
    // if var a = 6, 6 is displayed on the screen
    printA();
    //if toggle is equal to 1, value is assigned to var b
    } else if (toggle === 1) {
      b = b+"6";
    // if var b = 6, 6 is displayed on the screen
    printB();
    // if toggle is greater than 1, var a is equal to the total,
    //new value is assigned to var b
    } else if (toggle > 1) {
      a = total;
      b ='';
      b = b + "6";
    // if var b = 6, 6 is displayed on the screen
      printB();
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
    // if var a = 7, 7 is displayed on the screen
    printA();
    //if toggle is equal to 1, value is assigned to var b
    } else if (toggle === 1) {
      b = b+"7";
    // if var b = 7, 7 is displayed on the screen
    printB();
    // if toggle is greater than 1, var a is equal to the total,
    //new value is assigned to var b
    } else if (toggle > 1) {
      a = total;
      b ='';
      b = b + "7";
    // if var b = 7, 7 is displayed on the screen
      printB();
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
    // if var a = 8, 8 is displayed on the screen
    printA();
    //if toggle is equal to 1, value is assigned to var b
    } else if (toggle === 1) {
      b = b+"8";
    // if var b = 8, 8 is displayed on the screen
      printB();
    // if toggle is greater than 1, var a is equal to the total,
    //new value is assigned to var b
    } else if (toggle > 1) {
      a = total;
      b ='';
      b = b + "8";
    // if var b = 8, 8 is displayed on the screen
      printB();
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
    // if var a = 9, 9 is displayed on the screen
    a = a+"9";
    printA();
    //if toggle is equal to 1, value is assigned to var b
    } else if (toggle === 1) {
      b = b+"9";
    // if var b = 9, 9 is displayed on the screen
    printB();
    // if toggle is greater than 1, var a is equal to the total,
    //new value is assigned to var b
    } else if (toggle > 1) {
      a = total;
      b ='';
      b = b + "9";
    // if var b = 9, 9 is displayed on the screen
      printB();
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
    printA();
    //if toggle is equal to 1, value is assigned to var b
    } else if (toggle === 1) {
      b = b+"0";
      // if var b = 0, 0 is displayed on the screen
      printB();
    // if toggle is greater than 1, var a is equal to the total,
    //new value is assigned to var b
    } else if (toggle > 1) {
      a = total;
      b = '';
      b = b + "0";
      // if var b = 0, 0 is displayed on the screen
      printB();
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
    // if var a = ., . is displayed on the screen
    printA();
    //if toggle is equal to 1, value is assigned to var b
    } else if (toggle === 1) {
      b = b+".";
      // if var b = ., . is displayed on the screen
      printB();
    // if toggle is greater than 1, var a is equal to the total,
    //new value is assigned to var b
    } else if (toggle > 1) {
      a = total;
      b = '';
      b = b + ".";
      // if var b = ., . is displayed on the screen
      printB();
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

    //Print total to screen
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

//Functions

  //print to screen functions

  //print var a to screen
  function printA() {
    $('#total-display').html(function() {
    return '<h2>'+a+'</h2>';
    })
  }

  //print var b to screen
  function printB() {
    $('#total-display').html(function() {
    return '<h2>'+b+'</h2>';
    })
  }

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
