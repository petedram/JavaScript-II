// Create a higher order function and invoke the callback function to test your work. You have been provided an example of a problem and a solution to see how this works with our items array.  Study both the problem and the solution to figure out the rest of the problems.

const items = ['Pencil', 'Notebook', 'yo-yo', 'Gum'];

/* 

  // GIVEN THIS PROBLEM:

  function firstItem(arr, cb) {
    // firstItem passes the first item of the given array to the callback function.
  }

  // SOLUTION:

  function firstItem(arr, cb) {
    return cb(arr[0]);
  }

  // NOTES ON THE SOLUTION:

  // firstItem is a higher order function.
  // It expects a callback (referred to as `cb`) as its second argument.
  // To test our solution, we can use the given `items` array and a variety of callbacks.
  // Note how callbacks can be declared separately, or inlined.

  // TEST 1 (inlined callback):

  const test1 = firstItem(items, item => `I love my ${item}!`);
  console.log(test1); // "I love my Pencil!"

  // TEST 2 (declaring callback before hand):

  function logExorbitantPrice(article) {
    return `this ${article} is worth a million dollars!`;
  };

  const test2 = firstItem(items, logExorbitantPrice);
  console.log(test2); // "this Pencil is worth a million dollars!"
*/


function getLength(arr, cb) {
  // getLength passes the length of the array into the callback.
  return cb(arr.length);
}

const test1 = getLength(items, item => `The length of the array is ${item}!`);
  console.log(test1); // return length of array


function last(arr, cb) {
  // last passes the last item of the array into the callback.
  return cb(arr[arr.length - 1]);
}

const test2 = last(items, item => `The last item in the array is ${item}!`);
  console.log(test2); 


function sumNums(x, y, cb) {
  // sumNums adds two numbers (x, y) and passes the result to the callback.
  return cb(x + y);
}

const test3 = sumNums(5,6, item => `The two numbers added together equal ${item}!`);
  console.log(test3);


function multiplyNums(x, y, cb) {
  // multiplyNums multiplies two numbers and passes the result to the callback.
  return cb(x * y);
}

const test4 = multiplyNums(5,6, item => `The two numbers multiplied equal ${item}!`);
  console.log(test4);


function contains(item, list, cb) {
  // contains checks if an item is present inside of the given array/list.
  // Pass true to the callback if it is, otherwise pass false.
  for (let i = 0; i < list.length; i++) {
    var x = 'not-found';
    if(list[i] === item) {
      return true;
      x = 'found';
    }
  }
  if (x != 'found') {
    return false;
  }
}

const test5 = contains('yo-yo', items);
  console.log(test5);


/* STRETCH PROBLEM */

const itemsWithDups = [1, 1, 2, 2, 3, 3, 4, 4, 5, 5];

function removeDuplicates(array, cb) {
  // removeDuplicates removes all duplicate values from the given array.
  // Pass the duplicate free array to the callback function.
  // Do not mutate the original array.
return array.filter((item,index) => array.indexOf(item) === index);
}

console.log(removeDuplicates(itemsWithDups));


