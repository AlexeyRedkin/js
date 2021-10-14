var tall = [5, 10, 15, 20, 25, 30, 35, 40, 45, 50, , 'nls', null, NaN,];


function liste(arr) {
  var sumOdd = 0;
  var sumPar = 0;
  var sumNull = 0;

  for (var i = 0; i < arr.length; i++) {
    //   console.log(arr[i]); 
      var val = (arr[i]);
      if (val == undefined){
          sumNull++; 
      } else {
      let newVal = +val;
    //   console.log(newVal);
      if (isNaN(newVal)) {
        console.log(val + ' не число');
    } else {
        // console.log("num");
        if (newVal % 2) {
                        sumOdd++;
        } else {
                        sumPar++
        }
    }
}
    // if (arr[i] % 2 === 0) {
    //   sumPar++;
    // } else {
    //   sumOdd++;
    // }
  }
  
  
  console.log("Odd : " + sumOdd);
  console.log("Par : " + sumPar);
  console.log("null : " + sumNull);
}
liste(tall);