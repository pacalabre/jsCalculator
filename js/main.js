$(document).ready(function() {
  var total = '';
  var a = '';
  var b = '';
  var toggle = 0;
  var timesOperationButtonClicked = 0;
  var operation = 0;

  //on load, show total as zero
  $(window).load(function() {
    $('#total-display').html(function() {
    return '<h2>'+0+'</h2>';
    })
  })

// Button Assignments

  $('#button1').mousedown(function(){
    // if toggle is equal to 0, value is assigned to A
    if(toggle === 0) {
      clear();
      a = "1";
      b = '1';
      printA();
      toggle++;
      console.log("beAnz1");
      console.log("a="+a);
      console.log("b="+b);
      console.log("toggle="+toggle);
    // If toggle is equal to 2, value gets assigned to B
    } else if (toggle === 1) {
        // if after you press the equals button, you click another operator to run on the total,
        // if not toggle defaults to A and will start a new equation
        if(timesOperationButtonClicked === 1 ) {
            b = b+"1";
            printB();
            toggle = 2;
            console.log("beAnz2");
          } else {
        a = a+"1";
        printA();
        console.log("a="+a);
        console.log("b="+b);
        console.log("toggle="+toggle);
      }
    // If toggle is equal to 2, value gets assigned to B
    } else if (toggle === 2) {
      b='';
      b = b+"1";
      printB();
      toggle = 3;
      console.log("a="+a);
      console.log("b="+b);
      console.log("toggle="+toggle);
      console.log("timeopclick="+timesOperationButtonClicked);
    // If toggle is equal to 3, var A is equal to the total and the new value goes to B
    } else if (toggle ===3) {
      b=b+'1';
      printB();
      console.log("a="+a);
      console.log("b="+b);
      console.log("toggle="+toggle);
      console.log("timeopclick="+timesOperationButtonClicked);
    } else if(toggle === 4) {
      a = total;
      b = '';
      b = b+'1';
      printB();
      toggle++;
      console.log("a="+a);
      console.log("b="+b);
      console.log("toggle="+toggle);
      console.log("timeopclick="+timesOperationButtonClicked);
    }
     else if( toggle === 5) {
      b=b+"1";
      printB();
      console.log("a="+a);
      console.log("b="+b);
      console.log("toggle="+toggle);
    }
    else if (toggle === 6) {
      a = total;
      b = '';
      b = b+'1';
      printB();
      toggle = 5;
      console.log("a="+a);
      console.log("b="+b);
      console.log("toggle="+toggle);
    } else if (toggle > 6) {
      b = b+'1';
      printB();
      toggle = 5;
      console.log("a="+a);
      console.log("b="+b);
      console.log("toggle="+toggle);
    }
  })

  //Button 2
  $('#button2').mousedown(function(){
    // if toggle is equal to 0, value is assigned to A
    if(toggle === 0) {
      clear();
      a = "2";
      b = '2';
      printA();
      toggle++;
      console.log("beAnz1");
      console.log("a="+a);
      console.log("b="+b);
      console.log("toggle="+toggle);
    // If toggle is equal to 2, value gets assigned to B
    } else if (toggle === 1) {
        // if after you press the equals button, you click another operator to run on the total,
        // if not toggle defaults to A and will start a new equation
        if(timesOperationButtonClicked === 1 ) {
            b = b+"2";
            printB();
            toggle = 2;
            console.log("beAnz2");
          } else {
        a = a+"2";
        printA();
        console.log("a="+a);
        console.log("b="+b);
        console.log("toggle="+toggle);
      }
    // If toggle is equal to 2, value gets assigned to B
    } else if (toggle === 2) {
      b='';
      b = b+"2";
      printB();
      toggle = 3;
      console.log("a="+a);
      console.log("b="+b);
      console.log("toggle="+toggle);
      console.log("timeopclick="+timesOperationButtonClicked);
    // If toggle is equal to 3, var A is equal to the total and the new value goes to B
    } else if (toggle ===3) {
      b=b+'2';
      printB();
      console.log("a="+a);
      console.log("b="+b);
      console.log("toggle="+toggle);
      console.log("timeopclick="+timesOperationButtonClicked);
    } else if(toggle === 4) {
      a = total;
      b = '';
      b = b+'2';
      printB();
      toggle++;
      console.log("a="+a);
      console.log("b="+b);
      console.log("toggle="+toggle);
      console.log("timeopclick="+timesOperationButtonClicked);
    }
     else if( toggle === 5) {
      b=b+"2";
      printB();
      console.log("a="+a);
      console.log("b="+b);
      console.log("toggle="+toggle);
    }
    else if (toggle === 6) {
      a = total;
      b = '';
      b = b+'2';
      printB();
      toggle = 5;
      console.log("a="+a);
      console.log("b="+b);
      console.log("toggle="+toggle);
    } else if (toggle > 6) {
      b = b+'2';
      printB();
      toggle = 5;
      console.log("a="+a);
      console.log("b="+b);
      console.log("toggle="+toggle);
    }
  })

  //Button 3
  $('#button3').mousedown(function(){
    // if toggle is equal to 0, value is assigned to A
    if(toggle === 0) {
      clear();
      a = "3";
      b = '3';
      printA();
      toggle++;
      console.log("beAnz1");
      console.log("a="+a);
      console.log("b="+b);
      console.log("toggle="+toggle);
    // If toggle is equal to 2, value gets assigned to B
    } else if (toggle === 1) {
        // if after you press the equals button, you click another operator to run on the total,
        // if not toggle defaults to A and will start a new equation
        if(timesOperationButtonClicked === 1 ) {
            b = b+"3";
            printB();
            toggle = 2;
            console.log("beAnz2");
          } else {
        a = a+"3";
        printA();
        console.log("a="+a);
        console.log("b="+b);
        console.log("toggle="+toggle);
      }
    // If toggle is equal to 2, value gets assigned to B
    } else if (toggle === 2) {
      b='';
      b = b+"3";
      printB();
      toggle = 3;
      console.log("a="+a);
      console.log("b="+b);
      console.log("toggle="+toggle);
      console.log("timeopclick="+timesOperationButtonClicked);
    // If toggle is equal to 3, var A is equal to the total and the new value goes to B
    } else if (toggle ===3) {
      b=b+'3';
      printB();
      console.log("a="+a);
      console.log("b="+b);
      console.log("toggle="+toggle);
      console.log("timeopclick="+timesOperationButtonClicked);
    } else if(toggle === 4) {
      a = total;
      b = '';
      b = b+'3';
      printB();
      toggle++;
      console.log("a="+a);
      console.log("b="+b);
      console.log("toggle="+toggle);
      console.log("timeopclick="+timesOperationButtonClicked);
    }
     else if( toggle === 5) {
      b=b+"3";
      printB();
      console.log("a="+a);
      console.log("b="+b);
      console.log("toggle="+toggle);
    }
    else if (toggle === 6) {
      a = total;
      b = '';
      b = b+'3';
      printB();
      toggle = 5;
      console.log("a="+a);
      console.log("b="+b);
      console.log("toggle="+toggle);
    } else if (toggle > 6) {
      b = b+'3';
      printB();
      toggle = 5;
      console.log("a="+a);
      console.log("b="+b);
      console.log("toggle="+toggle);
    }
  })

  //Button 4
  $('#button4').mousedown(function(){
    // if toggle is equal to 0, value is assigned to A
    if(toggle === 0) {
      clear();
      a = "4";
      b = '4';
      printA();
      toggle++;
      console.log("beAnz1");
      console.log("a="+a);
      console.log("b="+b);
      console.log("toggle="+toggle);
    // If toggle is equal to 2, value gets assigned to B
    } else if (toggle === 1) {
        // if after you press the equals button, you click another operator to run on the total,
        // if not toggle defaults to A and will start a new equation
        if(timesOperationButtonClicked === 1 ) {
            b = b+"4";
            printB();
            toggle = 2;
            console.log("beAnz2");
          } else {
        a = a+"4";
        printA();
        console.log("a="+a);
        console.log("b="+b);
        console.log("toggle="+toggle);
      }
    // If toggle is equal to 2, value gets assigned to B
    } else if (toggle === 2) {
      b='';
      b = b+"4";
      printB();
      toggle = 3;
      console.log("a="+a);
      console.log("b="+b);
      console.log("toggle="+toggle);
      console.log("timeopclick="+timesOperationButtonClicked);
    // If toggle is equal to 3, var A is equal to the total and the new value goes to B
    } else if (toggle ===3) {
      b=b+'4';
      printB();
      console.log("a="+a);
      console.log("b="+b);
      console.log("toggle="+toggle);
      console.log("timeopclick="+timesOperationButtonClicked);
    } else if(toggle === 4) {
      a = total;
      b = '';
      b = b+'4';
      printB();
      toggle++;
      console.log("a="+a);
      console.log("b="+b);
      console.log("toggle="+toggle);
      console.log("timeopclick="+timesOperationButtonClicked);
    }
     else if( toggle === 5) {
      b=b+"4";
      printB();
      console.log("a="+a);
      console.log("b="+b);
      console.log("toggle="+toggle);
    }
    else if (toggle === 6) {
      a = total;
      b = '';
      b = b+'4';
      printB();
      toggle = 5;
      console.log("a="+a);
      console.log("b="+b);
      console.log("toggle="+toggle);
    } else if (toggle > 6) {
      b = b+'4';
      printB();
      toggle = 5;
      console.log("a="+a);
      console.log("b="+b);
      console.log("toggle="+toggle);
    }
  })

  //Button 5
  $('#button5').mousedown(function(){
    // if toggle is equal to 0, value is assigned to A
    if(toggle === 0) {
      clear();
      a = "5";
      b = '5';
      printA();
      toggle++;
      console.log("beAnz1");
      console.log("a="+a);
      console.log("b="+b);
      console.log("toggle="+toggle);
    // If toggle is equal to 2, value gets assigned to B
    } else if (toggle === 1) {
        // if after you press the equals button, you click another operator to run on the total,
        // if not toggle defaults to A and will start a new equation
        if(timesOperationButtonClicked === 1 ) {
            b = b+"5";
            printB();
            toggle = 2;
            console.log("beAnz2");
          } else {
        a = a+"5";
        printA();
        console.log("a="+a);
        console.log("b="+b);
        console.log("toggle="+toggle);
      }
    // If toggle is equal to 2, value gets assigned to B
    } else if (toggle === 2) {
      b='';
      b = b+"5";
      printB();
      toggle = 3;
      console.log("a="+a);
      console.log("b="+b);
      console.log("toggle="+toggle);
      console.log("timeopclick="+timesOperationButtonClicked);
    // If toggle is equal to 3, var A is equal to the total and the new value goes to B
    } else if (toggle ===3) {
      b=b+'5';
      printB();
      console.log("a="+a);
      console.log("b="+b);
      console.log("toggle="+toggle);
      console.log("timeopclick="+timesOperationButtonClicked);
    } else if(toggle === 4) {
      a = total;
      b = '';
      b = b+'5';
      printB();
      toggle++;
      console.log("a="+a);
      console.log("b="+b);
      console.log("toggle="+toggle);
      console.log("timeopclick="+timesOperationButtonClicked);
    }
     else if( toggle === 5) {
      b=b+"5";
      printB();
      console.log("a="+a);
      console.log("b="+b);
      console.log("toggle="+toggle);
    }
    else if (toggle === 6) {
      a = total;
      b = '';
      b = b+'5';
      printB();
      toggle = 5;
      console.log("a="+a);
      console.log("b="+b);
      console.log("toggle="+toggle);
    } else if (toggle > 6) {
      b = b+'5';
      printB();
      toggle = 5;
      console.log("a="+a);
      console.log("b="+b);
      console.log("toggle="+toggle);
    }
  })

  //Button 6
  $('#button6').mousedown(function(){
    // if toggle is equal to 0, value is assigned to A
    if(toggle === 0) {
      clear();
      a = "6";
      b = '6';
      printA();
      toggle++;
      console.log("beAnz1");
      console.log("a="+a);
      console.log("b="+b);
      console.log("toggle="+toggle);
    // If toggle is equal to 2, value gets assigned to B
    } else if (toggle === 1) {
        // if after you press the equals button, you click another operator to run on the total,
        // if not toggle defaults to A and will start a new equation
        if(timesOperationButtonClicked === 1 ) {
            b = b+"6";
            printB();
            toggle = 2;
            console.log("beAnz2");
          } else {
        a = a+"6";
        printA();
        console.log("a="+a);
        console.log("b="+b);
        console.log("toggle="+toggle);
      }
    // If toggle is equal to 2, value gets assigned to B
    } else if (toggle === 2) {
      b='';
      b = b+"6";
      printB();
      toggle = 3;
      console.log("a="+a);
      console.log("b="+b);
      console.log("toggle="+toggle);
      console.log("timeopclick="+timesOperationButtonClicked);
    // If toggle is equal to 3, var A is equal to the total and the new value goes to B
    } else if (toggle ===3) {
      b=b+'6';
      printB();
      console.log("a="+a);
      console.log("b="+b);
      console.log("toggle="+toggle);
      console.log("timeopclick="+timesOperationButtonClicked);
    } else if(toggle === 4) {
      a = total;
      b = '';
      b = b+'6';
      printB();
      toggle++;
      console.log("a="+a);
      console.log("b="+b);
      console.log("toggle="+toggle);
      console.log("timeopclick="+timesOperationButtonClicked);
    }
     else if( toggle === 5) {
      b=b+"6";
      printB();
      console.log("a="+a);
      console.log("b="+b);
      console.log("toggle="+toggle);
    }
    else if (toggle === 6) {
      a = total;
      b = '';
      b = b+'6';
      printB();
      toggle = 5;
      console.log("a="+a);
      console.log("b="+b);
      console.log("toggle="+toggle);
    } else if (toggle > 6) {
      b = b+'6';
      printB();
      toggle = 5;
      console.log("a="+a);
      console.log("b="+b);
      console.log("toggle="+toggle);
    }
  })

  //Button 7
  $('#button7').mousedown(function(){
    // if toggle is equal to 0, value is assigned to A
    if(toggle === 0) {
      clear();
      a = "7";
      b = '7';
      printA();
      toggle++;
      console.log("beAnz1");
      console.log("a="+a);
      console.log("b="+b);
      console.log("toggle="+toggle);
    // If toggle is equal to 2, value gets assigned to B
    } else if (toggle === 1) {
        // if after you press the equals button, you click another operator to run on the total,
        // if not toggle defaults to A and will start a new equation
        if(timesOperationButtonClicked === 1 ) {
            b = b+"7";
            printB();
            toggle = 2;
            console.log("beAnz2");
          } else {
        a = a+"7";
        printA();
        console.log("a="+a);
        console.log("b="+b);
        console.log("toggle="+toggle);
      }
    // If toggle is equal to 2, value gets assigned to B
    } else if (toggle === 2) {
      b='';
      b = b+"7";
      printB();
      toggle = 3;
      console.log("a="+a);
      console.log("b="+b);
      console.log("toggle="+toggle);
      console.log("timeopclick="+timesOperationButtonClicked);
    // If toggle is equal to 3, var A is equal to the total and the new value goes to B
    } else if (toggle ===3) {
      b=b+'7';
      printB();
      console.log("a="+a);
      console.log("b="+b);
      console.log("toggle="+toggle);
      console.log("timeopclick="+timesOperationButtonClicked);
    } else if(toggle === 4) {
      a = total;
      b = '';
      b = b+'7';
      printB();
      toggle++;
      console.log("a="+a);
      console.log("b="+b);
      console.log("toggle="+toggle);
      console.log("timeopclick="+timesOperationButtonClicked);
    }
     else if( toggle === 5) {
      b=b+"7";
      printB();
      console.log("a="+a);
      console.log("b="+b);
      console.log("toggle="+toggle);
    }
    else if (toggle === 6) {
      a = total;
      b = '';
      b = b+'7';
      printB();
      toggle = 5;
      console.log("a="+a);
      console.log("b="+b);
      console.log("toggle="+toggle);
    } else if (toggle > 6) {
      b = b+'7';
      printB();
      toggle = 5;
      console.log("a="+a);
      console.log("b="+b);
      console.log("toggle="+toggle);
    }
  })

  //Button 8
  $('#button8').mousedown(function(){
    // if toggle is equal to 0, value is assigned to A
    if(toggle === 0) {
      clear();
      a = "8";
      b = '8';
      printA();
      toggle++;
      console.log("beAnz1");
      console.log("a="+a);
      console.log("b="+b);
      console.log("toggle="+toggle);
    // If toggle is equal to 2, value gets assigned to B
    } else if (toggle === 1) {
        // if after you press the equals button, you click another operator to run on the total,
        // if not toggle defaults to A and will start a new equation
        if(timesOperationButtonClicked === 1 ) {
            b = b+"8";
            printB();
            toggle = 2;
            console.log("beAnz2");
          } else {
        a = a+"8";
        printA();
        console.log("a="+a);
        console.log("b="+b);
        console.log("toggle="+toggle);
      }
    // If toggle is equal to 2, value gets assigned to B
    } else if (toggle === 2) {
      b='';
      b = b+"8";
      printB();
      toggle = 3;
      console.log("a="+a);
      console.log("b="+b);
      console.log("toggle="+toggle);
      console.log("timeopclick="+timesOperationButtonClicked);
    // If toggle is equal to 3, var A is equal to the total and the new value goes to B
    } else if (toggle ===3) {
      b=b+'8';
      printB();
      console.log("a="+a);
      console.log("b="+b);
      console.log("toggle="+toggle);
      console.log("timeopclick="+timesOperationButtonClicked);
    } else if(toggle === 4) {
      a = total;
      b = '';
      b = b+'8';
      printB();
      toggle++;
      console.log("a="+a);
      console.log("b="+b);
      console.log("toggle="+toggle);
      console.log("timeopclick="+timesOperationButtonClicked);
    }
     else if( toggle === 5) {
      b=b+"8";
      printB();
      console.log("a="+a);
      console.log("b="+b);
      console.log("toggle="+toggle);
    }
    else if (toggle === 6) {
      a = total;
      b = '';
      b = b+'8';
      printB();
      toggle = 5;
      console.log("a="+a);
      console.log("b="+b);
      console.log("toggle="+toggle);
    } else if (toggle > 6) {
      b = b+'8';
      printB();
      toggle = 5;
      console.log("a="+a);
      console.log("b="+b);
      console.log("toggle="+toggle);
    }
  })

  //Button 9
  $('#button9').mousedown(function(){
    // if toggle is equal to 0, value is assigned to A
    if(toggle === 0) {
      clear();
      a = "9";
      b = '9';
      printA();
      toggle++;
      console.log("beAnz1");
      console.log("a="+a);
      console.log("b="+b);
      console.log("toggle="+toggle);
    // If toggle is equal to 2, value gets assigned to B
    } else if (toggle === 1) {
        // if after you press the equals button, you click another operator to run on the total,
        // if not toggle defaults to A and will start a new equation
        if(timesOperationButtonClicked === 1 ) {
            b = b+"9";
            printB();
            toggle = 2;
            console.log("beAnz2");
          } else {
        a = a+"9";
        printA();
        console.log("a="+a);
        console.log("b="+b);
        console.log("toggle="+toggle);
      }
    // If toggle is equal to 2, value gets assigned to B
    } else if (toggle === 2) {
      b='';
      b = b+"9";
      printB();
      toggle = 3;
      console.log("a="+a);
      console.log("b="+b);
      console.log("toggle="+toggle);
      console.log("timeopclick="+timesOperationButtonClicked);
    // If toggle is equal to 3, var A is equal to the total and the new value goes to B
    } else if (toggle ===3) {
      b=b+'9';
      printB();
      console.log("a="+a);
      console.log("b="+b);
      console.log("toggle="+toggle);
      console.log("timeopclick="+timesOperationButtonClicked);
    } else if(toggle === 4) {
      a = total;
      b = '';
      b = b+'9';
      printB();
      toggle++;
      console.log("a="+a);
      console.log("b="+b);
      console.log("toggle="+toggle);
      console.log("timeopclick="+timesOperationButtonClicked);
    }
     else if( toggle === 5) {
      b=b+"9";
      printB();
      console.log("a="+a);
      console.log("b="+b);
      console.log("toggle="+toggle);
    }
    else if (toggle === 6) {
      a = total;
      b = '';
      b = b+'9';
      printB();
      toggle = 5;
      console.log("a="+a);
      console.log("b="+b);
      console.log("toggle="+toggle);
    } else if (toggle > 6) {
      b = b+'9';
      printB();
      toggle = 5;
      console.log("a="+a);
      console.log("b="+b);
      console.log("toggle="+toggle);
    }
  })

  //Button0
  $('#button0').mousedown(function(){
    // if toggle is equal to 0, value is assigned to A
    if(toggle === 0) {
      clear();
      a = "0";
      b = '0';
      printA();
      toggle++;
      console.log("beAnz1");
      console.log("a="+a);
      console.log("b="+b);
      console.log("toggle="+toggle);
    // If toggle is equal to 2, value gets assigned to B
    } else if (toggle === 1) {
        // if after you press the equals button, you click another operator to run on the total,
        // if not toggle defaults to A and will start a new equation
        if(timesOperationButtonClicked === 1 ) {
            b = b+"0";
            printB();
            toggle = 2;
            console.log("beAnz2");
          } else {
        a = a+"0";
        printA();
        console.log("a="+a);
        console.log("b="+b);
        console.log("toggle="+toggle);
      }
    // If toggle is equal to 2, value gets assigned to B
    } else if (toggle === 2) {
      b='';
      b = b+"0";
      printB();
      toggle = 3;
      console.log("a="+a);
      console.log("b="+b);
      console.log("toggle="+toggle);
      console.log("timeopclick="+timesOperationButtonClicked);
    // If toggle is equal to 3, var A is equal to the total and the new value goes to B
    } else if (toggle ===3) {
      b=b+'0';
      printB();
      console.log("a="+a);
      console.log("b="+b);
      console.log("toggle="+toggle);
      console.log("timeopclick="+timesOperationButtonClicked);
    } else if(toggle === 4) {
      a = total;
      b = '';
      b = b+'0';
      printB();
      toggle++;
      console.log("a="+a);
      console.log("b="+b);
      console.log("toggle="+toggle);
      console.log("timeopclick="+timesOperationButtonClicked);
    }
     else if( toggle === 5) {
      b=b+"0";
      printB();
      console.log("a="+a);
      console.log("b="+b);
      console.log("toggle="+toggle);
    }
    else if (toggle === 6) {
      a = total;
      b = '';
      b = b+'0';
      printB();
      toggle = 5;
      console.log("a="+a);
      console.log("b="+b);
      console.log("toggle="+toggle);
    } else if (toggle > 6) {
      b = b+'0';
      printB();
      toggle = 5;
      console.log("a="+a);
      console.log("b="+b);
      console.log("toggle="+toggle);
    }
  })

  //if plus sign button is pressed, 1 to equals function
  $('#add').mousedown(function() {
    equals();
    toggle ++;
    timesOperationButtonClicked ++;
    operation = +1;
  })

  //if minus sign button is pressed, 1 to equals function
  $('#minus').mousedown(function() {
    equals();
    toggle ++;
    timesOperationButtonClicked ++;
    operation = +2;
  })

  //if division sign button is pressed, 1 to equals function
  $('#divide').mousedown(function() {
    equals();
    toggle ++;
    timesOperationButtonClicked ++;
    operation = +3;
  })

  //if multiply sign button is pressed, 1 to equals function
  $('#multiply').mousedown(function() {
    equals();
    toggle ++;
    timesOperationButtonClicked ++;
    operation = +4;
  })


  //if clear button is pressed, reset global variables
  $('#clear').mousedown(function() {
    clear();
    //Print total to screen
    $('#total-display').html(function() {
      return '<h2>'+total+'</h2>';
    })
    return total = 0;
  })

  //if equals sign is pressed, run selected operator
  $('#equals').mousedown(function() {

    console.log("a= " + a);
    console.log('total='+total)
    equals();
    console.log("timesOperationButtonClicked = "+timesOperationButtonClicked);
    console.log("a= " + a);
-   console.log("b= "+ b);
-   console.log("toggle= "+ toggle);
-   console.log("total= "+total);
    a = total;
    b= 0;
    timesOperationButtonClicked = 0;
    toggle = 0;
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

  function equals() {
    console.log("a is equal to"+a);
    var firstNum = parseFloat(a);
    var secondNum = parseFloat(b);

    if (operation === 1) {
     total = add(firstNum,secondNum);
     a=total;
     b= 0;
    } else if (operation === 2) {
     total = subtract(firstNum,secondNum);
     a=total;
     b=0;
    } else if (operation === 3) {
      total = divide(firstNum,secondNum);
      a=total;
      b=0;
    } else if (operation === 4) {
      total = multiply(firstNum,secondNum);
      a=total;
      b=0;
    }
    console.log("a= " + a);
-   console.log("b= "+ b);
-   console.log("toggle= "+ toggle);
-   console.log("total= "+total);
  }

  function clear() {
    a='';
    b='';
    total= '0';
    toggle = 0;
    operation = 0;
    timesOperationButtonClicked = 0;
  }

  //operational functions

  function add(a,b) {
    var firstNum = a;
    var secondNum = b;
    total = firstNum + secondNum;

    //Print total to screen
    $('#total-display').html(function() {
    return '<h2>'+total+'</h2>';
    })
    return total = firstNum + secondNum;
  }

  function subtract(a,b) {
      var firstNum = a;
      var secondNum = b;
      total = firstNum - secondNum;

      //Print total to screen
      $('#total-display').html(function(){
        return '<h2>'+total+'</h2>';
      })
      return total = firstNum - secondNum;
    }

    function multiply(a,b) {
      var firstNum = a;
      var secondNum = b;
      total = firstNum * secondNum;

      //Print total to screen
      $('#total-display').html(function(){
        return '<h2>'+total+'</h2>';
      })
      return total = firstNum * secondNum;
    }

    function divide(a,b) {
      var firstNum = a;
      var secondNum = b;
      total = firstNum / secondNum;

      //Print total to screen
      $('#total-display').html(function(){
        return '<h2>'+total+'</h2>';
      })
      return total = firstNum / secondNum;
    }
})
