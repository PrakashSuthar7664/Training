function A(x) {
    function B(y) {
      function C(z) {
        console.log(x + y + z);
      }
      C(3);
    }
    B(2);
  }
  A(1); //6


  function abcd(){
    let a = 4 ;
    return function efg(){
        console.log(a);
    }

  }
 abcd()() ; //4
  

//  rest para

 function multiply(multiplier, ...theArgs) {
    return theArgs.map((x) => multiplier * x);
  }
  
  const arr = multiply(2, 1, 2, 3);
  console.log(arr); //[2,4,6]
  
  
  