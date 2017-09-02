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
