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
    // if toggle is greater than 1, var a is equal to the total,
    //new value is assigned to var b
    } else if (toggle > 1) {
      a = total;
      console.log("a is now "+a);
    }
    console.log("a= " + a);
    console.log("b= "+ b);
    console.log("toggle= "+ toggle);
    console.log("total= "+total);
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
