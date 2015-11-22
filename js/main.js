$(document).ready(function(){
  var total = '';
  var a = '';
  var b = '';
  var toggle = 0;
  var operation = '';

  //on load, show total as zero
  $(window).load(function() {
    total = 0;
    $('#total-display').html(function() {
    return '<h2>'+total+'</h2>';
    })
  })

  //if button1 is pressed, 1 to var
  $('#button1').mousedown(function(){
    //if toggle is even, value is assigned to var a
    if (toggle % 2 == 0) {
    a = a+"1";
    //if toggle is odd, value is assigned to var b
    } else {
      b = b+"1";
    }
    console.log("a= " + a);
    console.log("b= "+ b);
  })

  $('#button2').mousedown(function() {
    //if toggle is even, value is assigned to a
    if (toggle % 2 == 0) {
    a = a+"2";
    //if toggle is odd, value is assigned to b
    } else {
      b = b+"2";
    }
    console.log("a= " + a);
    console.log("b= "+ b);
    console.log(toggle);
  })

  $('#button3').mousedown(function() {
    //if toggle is even, value is assigned to a
    if (toggle % 2 == 0) {
    a = a+"3";
    //if toggle is odd, value is assigned to b
    } else {
      b = b+"3";
    }
  })

  $('#button4').mousedown(function() {
    //if toggle is even, value is assigned to a
    if (toggle % 2 == 0) {
    a = a+"4";
    //if toggle is odd, value is assigned to b
    } else {
      b = b+"4";
    }
    console.log("a="+a);
    console.log("b="+b);
  })

  $('#button5').mousedown(function() {
    //if toggle is even, value is assigned to a
    if (toggle % 2 == 0) {
    a = a+"5";
    //if toggle is odd, value is assigned to b
    } else {
      b = b+"5";
    }
    console.log("a="+a);
    console.log("b="+b);
  })

  $('#button6').mousedown(function() {
    //if toggle is even, value is assigned to a
    if (toggle % 2 == 0) {
    a = a+"6";
    //if toggle is odd, value is assigned to b
    } else {
      b = b+"6";
    }
    console.log("a="+a);
    console.log("b="+b);
  })

  $('#button7').mousedown(function() {
    //if toggle is even, value is assigned to a
    if (toggle % 2 == 0) {
    a = a+"7";
    //if toggle is odd, value is assigned to b
    } else {
      b = b+"7";
    }
    console.log("a="+a);
    console.log("b="+b);
  })

  $('#button8').mousedown(function() {
    //if toggle is even, value is assigned to a
    if (toggle % 2 == 0) {
    a = a+"8";
    //if toggle is odd, value is assigned to b
    } else {
      b = b+"8";
    }
    console.log("a="+a);
    console.log("b="+b);
  })

  $('#button9').mousedown(function() {
    //if toggle is even, value is assigned to a
    if (toggle % 2 == 0) {
    a = a+"9";
    //if toggle is odd, value is assigned to b
    } else {
      b = b+"9";
    }
    console.log("a="+a);
    console.log("b="+b);
  })

  $('#button0').mousedown(function() {
    //if toggle is even, value is assigned to a
    if (toggle % 2 == 0) {
    a = a+"0";
    //if toggle is odd, value is assigned to b
    } else {
      b = b+"0";
    }
    console.log("a="+a);
    console.log("b="+b);
  })

  $('#decimal').mousedown(function() {
    //if toggle is even, value is assigned to a
    if (toggle % 2 == 0) {
    a = a+".";
    //if toggle is odd, value is assigned to b
    } else {
      b = b+".";
    }
  })

  $('#add').mousedown(function() {
    toggle ++;
    operation = +1;
  })

  $('#minus').mousedown(function() {
    toggle ++;
    operation = +2;
  })

  $('#divide').mousedown(function() {
    toggle ++;
    operation = +3;
  })

  $('#multiply').mousedown(function() {
    toggle ++;
    operation = +4;
  })

  $('#clear').mousedown(function() {
    a='';
    b='';
    total=0;
    $('#total-display').html(function() {
      return '<h2>'+total+'</h2>';
    })
  })

  $('#equals').mousedown(function() {
    var firstNum = parseFloat(a);
    var secondNum = parseFloat(b);

    if (operation === 1) {
      add(firstNum,secondNum);
    } else if ( operation === 2) {
      subtract(firstNum,secondNum);
    } else if (operation === 3) {
      divide(firstNum,secondNum);
    } else if ( operation === 4 ) {
      multiply(firstNum,secondNum);
    }
    console.log("total= "+total);
  })

  //operational functions

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

    console.log("b is now =" + b)
    console.log("total=" + total);
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

    console.log("a= "+a);
    console.log("b= "+b);
    console.log("total=" + total);
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

    console.log("a= "+a);
    console.log("b= "+b);
    console.log("total=" + total);
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

    console.log("a= "+a);
    console.log("b= "+b);
    console.log("total=" + total);
  }
})
