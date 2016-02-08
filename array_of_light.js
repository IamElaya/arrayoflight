

function arrayOfLight(x) {
  var emptyArray = [];
  for (i = 0; i < (x+1); i++){
    emptyArray.push(i);
  };
  return emptyArray;

}

console.log(arrayOfLight(5));