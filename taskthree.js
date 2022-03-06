var arrayNumbers = [5, 17, 9, -49, -2, 39 -20, 53];

  
function posetiveNumbers(){
  var sum = 0;
  for (var i=0; i < arrayNumbers.length; i++){
    
if (arrayNumbers[i] >= 0){

   sum += arrayNumbers[i];

}
  }
  return sum
}
console.log(posetiveNumbers(arrayNumbers));
