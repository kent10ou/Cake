/*
You have an array of integers, and for each index you want to find the product of every integer except the integer at that index.
Write a function getProductsOfAllIntsExceptAtIndex() that takes an array of integers and returns an array of the products.
For example, given:
  [1, 7, 3, 4]
your function would return:
  [84, 12, 28, 21]
by calculating:
  [7*3*4, 1*3*4, 1*7*4, 1*7*3]
Do not use division in your solution.
*/
/*
//Brute force (incomplete)
var arr = [1,7,3,4];
function getProducts (input) {
  var productSoFar = 1
  for (var i = 0; i < input.length; i++) {
    for (var j = 0; j < input.length; j++) {
      if (input[i] === input[j]) {
        input[i] = productSoFar
        productSoFar *= input[j];
      }
    }
  }
  console.log(input);
  return input;
}
*/
// O(n) time O(n) space 
var example = [1,7,3,4]
function getProductsOfAllIntsExceptAtIndex(intArray) {

  var productsOfAllIntsExceptAtIndex = [];

  // for each integer, we find the product of all the integers
  // before it, storing the total product so far each time
  var productSoFar = 1;
  for (var i = 0; i < intArray.length; i++) {
      productsOfAllIntsExceptAtIndex[i] = productSoFar;
      productSoFar *= intArray[i];
  }

  // for each integer, we find the product of all the integers
  // after it. since each index in products already has the
  // product of all the integers before it, now we're storing
  // the total product of all other integers
  productSoFar = 1;
  for (var j = intArray.length - 1; j >= 0; j--) {
      productsOfAllIntsExceptAtIndex[j] *= productSoFar;
      productSoFar *= intArray[j];
  }

  return productsOfAllIntsExceptAtIndex;
}
console.log(getProductsOfAllIntsExceptAtIndex(example));
