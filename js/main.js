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
      a = a+"1";
      printA();
      toggle++;
      console.log("beAnz1");
      console.log("a="+a);
      console.log("b="+b);
      console.log("toggle="+toggle);
    // If toggle is equal to 2, value gets assigned to B
    } else if (toggle === 1) {
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
      b = b+"1";
      printB();
      console.log("a="+a);
      console.log("b="+b);
      console.log("toggle="+toggle);
      console.log("timeopclick="+timesOperationButtonClicked);
    // If toggle is equal to 3, var A is equal to the total and the new value goes to B
    } else if(toggle === 3){
      equals();
      a = total;
      b = '';
      b = b+1;
      printB();
      toggle++;
      console.log("a="+a);
      console.log("b="+b);
      console.log("toggle="+toggle);
      console.log("timeopclick="+timesOperationButtonClicked);

    }
     else if( toggle === 4) {
      b=b+"1";
      printB();
      console.log("a="+a);
      console.log("b="+b);
      console.log("toggle="+toggle);
    }
    else if (toggle === 5) {
      equals();
      a = total;
      b = '';
      b = b+1;
      printB();
      toggle = 4;
      console.log("a="+a);
      console.log("b="+b);
      console.log("toggle="+toggle);
    } else if (toggle > 5) {
      b = b+1;
      printB();
      toggle = 4;
      console.log("a="+a);
      console.log("b="+b);
      console.log("toggle="+toggle);
    }
  })

  //if plus sign button is pressed, 1 to equals function
  $('#add').mousedown(function() {
    toggle ++;
    timesOperationButtonClicked ++;
    operation = +1;
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
    equals();
    console.log("timesOperationButtonClicked = "+timesOperationButtonClicked);
    console.log("a= " + a);
-   console.log("b= "+ b);
-   console.log("toggle= "+ toggle);
-   console.log("total= "+total);
    a = total;
    b='';
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
    var firstNum = parseFloat(a);
    var secondNum = parseFloat(b);

    if (operation === 1) {
     total = add(firstNum,secondNum);
    } else if (operation === 2) {
     total = subtract(firstNum,secondNum);
    } else if (operation === 3) {
      total = divide(firstNum,secondNum);
    } else if (operation === 4) {
      total = multiply(firstNum,secondNum);
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
    var total = 0;
    var firstNum = a;
    var secondNum = b;
    total = firstNum + secondNum;

    //Print total to screen
    $('#total-display').html(function() {
    return '<h2>'+total+'</h2>';
    })
    return total = firstNum + secondNum;
  }
})
