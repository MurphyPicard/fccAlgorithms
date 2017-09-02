function sym(args) {
  var answer = [];
  var a0 = sym.arguments[0];
  var a1 = sym.arguments[1];
  var longArray = a0.concat(a1).sort();
  var len = longArray.length;

  if(longArray[0] != longArray[1]){
    answer.push(longArray[0])
  }

  for(var i = 1; i < len - 1; i++){
    if(longArray[i-1] != longArray[i]){
      if(longArray[i] != longArray[i+1]){
        answer.push(longArray[i]);
      }
    }
  }

  if(longArray[len-1] != longArray[len-2]){
    answer.push(longArray[len-1])
  }
  console.log(answer);
  return answer;
}

sym([1, 2, 3], [5, 2, 1, 4]);
