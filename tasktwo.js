var arrayTrue = [false, true, true, false, true, true]

function posetiveNumbers(){
  var sum = 0;
  for (var i=0; i < arrayTrue.length; i++){
    
if (arrayTrue[i] === true){

   sum += arrayTrue[i];

}
  }
  return sum
}
console.log(posetiveNumbers(arrayTrue));