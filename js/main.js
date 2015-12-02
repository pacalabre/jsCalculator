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

  $('#button1').mousedown(function(){
    if(toggle === 0){
      a = a+"1";
      printA();
      /* After an operator button is pressed (which increases toggle by 1), if 1 is pressed again
      it goes to var b. */
    } else if(toggle === 1) {
      b = b+"1";
      printB();
      /* If toggle is 2, which would happen after pressing the equals button, if 1 is pressed again
      the variable assignment goes to var a. */
    } else if(toggle === 2){
      a ='';
      a = a+"1";
      b='';
      toggle = 0;
      printA();
      /* If toggle is 3, which would happen if after pressing the equals sign, you press another
      operation button, variable a would take on the total and the new var assignent would go
      to var b*/
    } else if( toggle === 3) {
      a = total;
      b = "1";
      printB();
    }
  })

  $('#button2').mousedown(function(){
    if(toggle === 0){
      a = a+"2";
      printA();
      console.log("a= " + a);
-     console.log("b= "+ b);
-     console.log("toggle= "+ toggle);
-     console.log("total= "+total);
    } else if(toggle === 1) {
      b = b+"2";
      printB();
      console.log("a= " + a);
-     console.log("b= "+ b);
-     console.log("toggle= "+ toggle);
-     console.log("total= "+total);
    } else if(toggle === 2){
      a ='';
      a = a+"2";
      b='';
      toggle = 0;
      printA();
      console.log("a= " + a);
-     console.log("b= "+ b);
-     console.log("toggle= "+ toggle);
-     console.log("total= "+total);
    } else if( toggle === 3) {
      a = total;
      b = "2";
      printB();
      console.log("a= " + a);
-     console.log("b= "+ b);
-     console.log("toggle= "+ toggle);
-     console.log("total= "+total);
    }
  })

  $('#button3').mousedown(function(){
    if(toggle === 0){
      a = a+"3";
      printA();
      console.log("a= " + a);
-     console.log("b= "+ b);
-     console.log("toggle= "+ toggle);
-     console.log("total= "+total);
    } else if(toggle === 1) {
      b = b+"3";
      printB();
      console.log("a= " + a);
-     console.log("b= "+ b);
-     console.log("toggle= "+ toggle);
-     console.log("total= "+total);
    } else if(toggle === 2){
      a ='';
      a = a+"3";
      b='';
      toggle = 0;
      printA();
      console.log("a= " + a);
-     console.log("b= "+ b);
-     console.log("toggle= "+ toggle);
-     console.log("total= "+total);
    } else if( toggle === 3) {
      a = total;
      b = "3";
      printB();
      console.log("a= " + a);
-     console.log("b= "+ b);
-     console.log("toggle= "+ toggle);
-     console.log("total= "+total);
    }
  })

  $('#button4').mousedown(function(){
    if(toggle === 0){
      a = a+"4";
      printA();
      console.log("a= " + a);
-     console.log("b= "+ b);
-     console.log("toggle= "+ toggle);
-     console.log("total= "+total);
    } else if(toggle === 1) {
      b = b+"4";
      printB();
      console.log("a= " + a);
-     console.log("b= "+ b);
-     console.log("toggle= "+ toggle);
-     console.log("total= "+total);
    } else if(toggle === 2){
      a ='';
      a = a+"4";
      b='';
      toggle = 0;
      printA();
      console.log("a= " + a);
-     console.log("b= "+ b);
-     console.log("toggle= "+ toggle);
-     console.log("total= "+total);
    } else if( toggle === 3) {
      a = total;
      b = "4";
      printB();
      console.log("a= " + a);
-     console.log("b= "+ b);
-     console.log("toggle= "+ toggle);
-     console.log("total= "+total);
    }
  })

  $('#button5').mousedown(function(){
    if(toggle === 0){
      a = a+"5";
      printA();
      console.log("a= " + a);
-     console.log("b= "+ b);
-     console.log("toggle= "+ toggle);
-     console.log("total= "+total);
    } else if(toggle === 1) {
      b = b+"5";
      printB();
      console.log("a= " + a);
-     console.log("b= "+ b);
-     console.log("toggle= "+ toggle);
-     console.log("total= "+total);
    } else if(toggle === 2){
      a ='';
      a = a+"5";
      b='';
      toggle = 0;
      printA();
      console.log("a= " + a);
-     console.log("b= "+ b);
-     console.log("toggle= "+ toggle);
-     console.log("total= "+total);
    } else if( toggle === 3) {
      a = total;
      b = "5";
      printB();
      console.log("a= " + a);
-     console.log("b= "+ b);
-     console.log("toggle= "+ toggle);
-     console.log("total= "+total);
    }
  })

  $('#button6').mousedown(function(){
    if(toggle === 0){
      a = a+"6";
      printA();
      console.log("a= " + a);
-     console.log("b= "+ b);
-     console.log("toggle= "+ toggle);
-     console.log("total= "+total);
    } else if(toggle === 1) {
      b = b+"6";
      printB();
      console.log("a= " + a);
-     console.log("b= "+ b);
-     console.log("toggle= "+ toggle);
-     console.log("total= "+total);
    } else if(toggle === 2){
      a ='';
      a = a+"6";
      b='';
      toggle = 0;
      printA();
      console.log("a= " + a);
-     console.log("b= "+ b);
-     console.log("toggle= "+ toggle);
-     console.log("total= "+total);
    } else if( toggle === 3) {
      a = total;
      b = "6";
      printB();
      console.log("a= " + a);
-     console.log("b= "+ b);
-     console.log("toggle= "+ toggle);
-     console.log("total= "+total);
    }
  })

  $('#button7').mousedown(function(){
      if(toggle === 0){
        a = a+"7";
        printA();
        console.log("a= " + a);
  -     console.log("b= "+ b);
  -     console.log("toggle= "+ toggle);
  -     console.log("total= "+total);
      } else if(toggle === 1) {
        b = b+"7";
        printB();
        console.log("a= " + a);
  -     console.log("b= "+ b);
  -     console.log("toggle= "+ toggle);
  -     console.log("total= "+total);
      } else if(toggle === 2){
        a ='';
        a = a+"7";
        b='';
        toggle = 0;
        printA();
        console.log("a= " + a);
  -     console.log("b= "+ b);
  -     console.log("toggle= "+ toggle);
  -     console.log("total= "+total);
      } else if( toggle === 3) {
        a = total;
        b = "7";
        printB();
        console.log("a= " + a);
  -     console.log("b= "+ b);
  -     console.log("toggle= "+ toggle);
  -     console.log("total= "+total);
      }
    })

    $('#button8').mousedown(function(){
    if(toggle === 0){
      a = a+"8";
      printA();
      console.log("a= " + a);
-     console.log("b= "+ b);
-     console.log("toggle= "+ toggle);
-     console.log("total= "+total);
    } else if(toggle === 1) {
      b = b+"8";
      printB();
      console.log("a= " + a);
-     console.log("b= "+ b);
-     console.log("toggle= "+ toggle);
-     console.log("total= "+total);
    } else if(toggle === 2){
      a ='';
      a = a+"8";
      b='';
      toggle = 0;
      printA();
      console.log("a= " + a);
-     console.log("b= "+ b);
-     console.log("toggle= "+ toggle);
-     console.log("total= "+total);
    } else if( toggle === 3) {
      a = total;
      b = "8";
      printB();
      console.log("a= " + a);
-     console.log("b= "+ b);
-     console.log("toggle= "+ toggle);
-     console.log("total= "+total);
    }
  })
    $('#button9').mousedown(function(){
    if(toggle === 0){
      a = a+"9";
      printA();
      console.log("a= " + a);
-     console.log("b= "+ b);
-     console.log("toggle= "+ toggle);
-     console.log("total= "+total);
    } else if(toggle === 1) {
      b = b+"9";
      printB();
      console.log("a= " + a);
-     console.log("b= "+ b);
-     console.log("toggle= "+ toggle);
-     console.log("total= "+total);
    } else if(toggle === 2){
      a ='';
      a = a+"9";
      b='';
      toggle = 0;
      printA();
      console.log("a= " + a);
-     console.log("b= "+ b);
-     console.log("toggle= "+ toggle);
-     console.log("total= "+total);
    } else if( toggle === 3) {
      a = total;
      b = "9";
      printB();
      console.log("a= " + a);
-     console.log("b= "+ b);
-     console.log("toggle= "+ toggle);
-     console.log("total= "+total);
    }
  })
    $('#button0').mousedown(function(){
    if(toggle === 0){
      a = a+"0";
      printA();
      console.log("a= " + a);
-     console.log("b= "+ b);
-     console.log("toggle= "+ toggle);
-     console.log("total= "+total);
    } else if(toggle === 1) {
      b = b+"0";
      printB();
      console.log("a= " + a);
-     console.log("b= "+ b);
-     console.log("toggle= "+ toggle);
-     console.log("total= "+total);
    } else if(toggle === 2){
      a ='';
      a = a+"0";
      b='';
      toggle = 0;
      printA();
      console.log("a= " + a);
-     console.log("b= "+ b);
-     console.log("toggle= "+ toggle);
-     console.log("total= "+total);
    } else if( toggle === 3) {
      a = total;
      b = "0";
      printB();
      console.log("a= " + a);
-     console.log("b= "+ b);
-     console.log("toggle= "+ toggle);
-     console.log("total= "+total);
    }
  })


  //if plus sign button is pressed, 1 to equals function
  $('#add').mousedown(function() {
    toggle ++;
    operation = +1;
    console.log("a ="+a);
    console.log("b ="+b);
    console.log("toggle ="+ toggle);
    console.log("total =" + total);
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
    toggle =+1;

    if (operation === 1) {
     total = add(firstNum,secondNum);
    } else if ( operation === 2) {
     total = subtract(firstNum,secondNum);
    } else if (operation === 3) {
      total = divide(firstNum,secondNum);
    } else if ( operation === 4 ) {
      total = multiply(firstNum,secondNum);
    }
    console.log("a= " + a);
-   console.log("b= "+ b);
-   console.log("toggle= "+ toggle);
-   console.log("total= "+total);
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
    var firstNum = a;
    var secondNum = b;
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
