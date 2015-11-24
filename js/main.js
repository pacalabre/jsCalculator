$(document).ready(function() {
  var total = '';
  var a = '';
  var b = '';
  var toggle = 0;
  var operation = 0;

  //on load, show total as zero
  $(window).load(function() {
    $('#total-display').html(function() {
    return '<h2>'+0+'</h2>';
    })
  })

// Button Assignments

  /* All of the button assignments will follow the logic of button1.
  I have overcommented button1 for future reference */

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
  })

  //if button2 is pressed, 2 to var
  $('#button2').mousedown(function() {
    if (toggle === 0) {
    a = a+"2";
    printA();
    } else if (toggle === 1) {
      b = b+"2";
    printB();
    } else if (toggle > 1) {
      a = total;
      b ='';
      b = b + "2";
      printB();
      toggle = 1;
    }
  })

  //if button3 is pressed, 3 to var
  $('#button3').mousedown(function() {
    if (toggle === 0) {
    a = a+"3";
    printA();
    } else if (toggle === 1) {
      b = b+"3";
    printB();
    } else if (toggle > 1) {
      a = total;
      b ='';
      b = b + "3";
      printB();
      toggle = 1;
    }
  })

  //if button4 is pressed, 4 to var
  $('#button4').mousedown(function() {
    if (toggle === 0) {
    a = a+"4";
    printA();
    } else if (toggle === 1) {
      b = b+"4";
    printB();
    } else if (toggle > 1) {
      a = total;
      b ='';
      b = b + "4";
      printB();
      toggle = 1;
    }
  })

  //if button5 is pressed, 5 to var
  $('#button5').mousedown(function() {
    if (toggle === 0) {
    a = a+"5";
    printA();
    } else if (toggle === 1) {
      b = b+"5";
    printB();
    } else if (toggle > 1) {
      a = total;
      b ='';
      b = b + "5";
      printB();
      toggle = 1;
    }
  })

  //if button6 is pressed, 6 to var
  $('#button6').mousedown(function() {
    if (toggle === 0) {
    a = a+"6";
    printA();
    } else if (toggle === 1) {
      b = b+"6";
    printB();
    } else if (toggle > 1) {
      a = total;
      b ='';
      b = b + "6";
      printB();
      toggle = 1;
    }
  })

  //if button7 is pressed, 7 to var
  $('#button7').mousedown(function() {
    if (toggle === 0) {
    a = a+"7";
    printA();
    } else if (toggle === 1) {
      b = b+"7";
    printB();
    } else if (toggle > 1) {
      a = total;
      b ='';
      b = b + "7";
      printB();
      toggle = 1;
    }
  })

  //if button8 is pressed, 8 to var
  $('#button8').mousedown(function() {
    if (toggle === 0) {
    a = a+"8";
    printA();
    } else if (toggle === 1) {
      b = b+"8";
      printB();
    } else if (toggle > 1) {
      a = total;
      b ='';
      b = b + "8";
      printB();
      toggle = 1;
    }
  })

  //if button9 is pressed, 9 to var
  $('#button9').mousedown(function() {
    if (toggle === 0) {
    a = a+"9";
    printA();
    } else if (toggle === 1) {
      b = b+"9";
    printB();
    } else if (toggle > 1) {
      a = total;
      b ='';
      b = b + "9";
      printB();
      toggle = 1;
    }
  })

  //if button0 is pressed, 0 to var
  $('#button0').mousedown(function() {
    if (toggle === 0) {
    a = a+"0";
    printA();
    } else if (toggle === 1) {
      b = b+"0";
      printB();
    } else if (toggle > 1) {
      a = total;
      b = '';
      b = b + "0";
      printB();
      toggle = 1;
    }
  })

  //if decimal is pressed, . to var
  $('#decimal').mousedown(function() {
    if (toggle === 0) {
    a = a+".";
    printA();
    } else if (toggle === 1) {
      b = b+".";
      printB();
    } else if (toggle > 1) {
      a = total;
      b = '';
      b = b + ".";
      printB();
      toggle = 1;
    }
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

  //print variables to screen functions

  function printA() {
    $('#total-display').html(function() {
    return '<h2>'+a+'</h2>';
    })
  }

  function printB() {
    $('#total-display').html(function() {
    return '<h2>'+b+'</h2>';
    })
  }

  //operational functions

  function add(a,b) {
    var total = 0;
    var firstNum = parseFloat(a);
    var secondNum = parseFloat(b);
    total = firstNum + secondNum;
    toggle++;

    //Print total to screen
    $('#total-display').html(function() {
    return '<h2>'+total+'</h2>';
    })
    return total = firstNum + secondNum;
  }

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
