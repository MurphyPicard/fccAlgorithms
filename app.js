function sym(input) {

  var answer = [];
  var longArray = [];

  for(var i = 0; i < input.length - 1; i++){
    var arg0 = [].slice.call(arguments[i]);
    var arg1 = [].slice.call(arguments[i+1]);

    for(var j = 0; j < arg0.length; j++){

      if( !arg1.includes( arg0[j] ) ){
        answer.push( arg0[j] );
      }//if
    }//for j

    for(var j = 0; j < arg1.length; j++){
      if( !arg0.includes( arg1[j] ) ){
        answer.push( arg1[j] );
      }//if
    }//for j

  }//for i

  console.log("arguments.length: "+args);
  return answer;
}

sym([1, 2, 3], [5, 2, 1, 4]);

// [1, 2, 3].includes(2);








// passes 5/9 tests but not duplicate numbers in same array 
//
// function sym(args) {
//   var answer = [];
//   var longArray = [];
//
//   for(var i = 0; i < arguments.length; i++){
//     if(i == 0){
//       longArray = longArray.concat(arguments[i]).sort();
//     }
//     if(i == 1){
//         longArray = longArray.concat(arguments[i]).sort();
//         console.log("This is longArray: " + longArray);
//         if(longArray[0] != longArray[1]){
//             answer.push(longArray[0]);
//         }//if
//         console.log("This is Answer1: " + answer);
//
//         for(var j = 1; j < longArray.length - 1; j++){
//
//           if( (longArray[j] != longArray[j-1]) && (longArray[j] != longArray[j+1]) ){
//
//               answer.push(longArray[j]);
//
//           }//if
//         }// for j
//         console.log("This is Answer2: "+ answer);
//
//         if(longArray[longArray.length-1] != longArray[longArray.length-2]){
//           answer.push(longArray[longArray.length-1]);
//         }
//         console.log("This is Answer3: "+ answer);
//     }//if
//     if(i > 1){
//         longArray = answer.concat(arguments[i]).sort();
//         answer = [];
//         if(longArray[0] != longArray[1]){
//             answer.push(longArray[0]);
//         }//if
//         console.log("This is Answer1: " + answer);
//
//         for(var j = 1; j < longArray.length - 1; j++){
//
//           if(longArray[j] != longArray[j-1]){
//             if(longArray[j] != longArray[j+1]){
//               answer.push(longArray[j]);
//             }
//           }
//         }// for j
//         console.log("This is Answer2: "+ answer);
//
//         if(longArray[longArray.length-1] != longArray[longArray.length-2]){
//           answer.push(longArray[longArray.length-1]);
//         }
//         console.log("This is Answer3: "+ answer);
//     }//if
//
//   }//for i
//   console.log("adsfasdf"+arguments.length);
//   return answer;
// }
//
// sym([1, 1, 2, 5], [2, 2, 3, 5], [3, 4, 5, 5]);
