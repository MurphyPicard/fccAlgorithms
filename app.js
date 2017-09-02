function sym(args) {
  var answer = [];
  var longArray = [];

  for(var i = 0; i < arguments.length; i++){
    if(i == 0){
      longArray = longArray.concat(arguments[i]).sort();
    }
    if(i == 1){
        longArray = longArray.concat(arguments[i]).sort();
        console.log("This is longArray: " + longArray);
        if(longArray[0] != longArray[1]){
            answer.push(longArray[0]);
        }//if
        console.log("This is Answer1: " + answer);

        for(var j = 1; j < longArray.length - 1; j++){

          if( (longArray[j] != longArray[j-1]) && (longArray[j] != longArray[j+1]) ){

              answer.push(longArray[j]);

          }//if
        }// for j
        console.log("This is Answer2: "+ answer);

        if(longArray[longArray.length-1] != longArray[longArray.length-2]){
          answer.push(longArray[longArray.length-1]);
        }
        console.log("This is Answer3: "+ answer);
    }//if
    if(i > 1){
        longArray = answer.concat(arguments[i]).sort();

        if(longArray[0] != longArray[1]){
            answer.push(longArray[0]);
        }//if
        console.log("This is Answer1: " + answer);

        for(var j = 1; j < len - 1; j++){

          if(longArray[j] != longArray[j-1]){
            if(longArray[j] != longArray[j+1]){
              answer.push(longArray[j]);
            }
          }
        }// for j
        console.log("This is Answer2: "+ answer);

        if(longArray[len-1] != longArray[len-2]){
          answer.push(longArray[len-1]);
        }
        console.log("This is Answer3: "+ answer);
    }//if

  }//for i
  console.log("adsfasdf"+arguments.length);
  return answer;
}

sym([1, 2, 3], [5, 2, 1, 4]);
