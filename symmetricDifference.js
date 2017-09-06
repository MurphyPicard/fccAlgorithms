function sym(args) {

  // found this unique function online to eliminate duplicate numbers in each argument
  var uniq = function(a){
    return Array.from(new Set(a));
  };
  var answer = [];
  var longArray = [];

  // the main for loop through unknown number of arguments
  for(var i = 0; i < arguments.length; i++){
    if(i == 0){
      longArray = longArray.concat(uniq(arguments[i])).sort();
    }// if 0
    if(i == 1){
        longArray = longArray.concat(uniq(arguments[i])).sort();
        if(longArray[0] != longArray[1]){
            answer.push(longArray[0]);
        }//if
        for(var j = 1; j < longArray.length - 1; j++){
          if( (longArray[j] != longArray[j-1]) && (longArray[j] != longArray[j+1]) ){
              answer.push(longArray[j]);
          }//if
        }// for j
        if(longArray[longArray.length-1] != longArray[longArray.length-2]){
          answer.push(longArray[longArray.length-1]);
        }
    }//if 1
    if(i > 1){
        longArray = answer.concat(uniq(arguments[i])).sort();
        answer = [];
        if(longArray[0] != longArray[1]){
            answer.push(longArray[0]);
        }//if
        for(var j = 1; j < longArray.length - 1; j++){
          if(longArray[j] != longArray[j-1]){
            if(longArray[j] != longArray[j+1]){
              answer.push(longArray[j]);
            }
          }
        }// for j
        if(longArray[longArray.length-1] != longArray[longArray.length-2]){
          answer.push(longArray[longArray.length-1]);
        }
    }//if > 1
  }//main for loop i
  return answer;
}

sym([1, 1, 2, 5], [2, 2, 3, 5], [3, 4, 5, 5]);








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
