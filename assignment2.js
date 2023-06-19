//Recreate methods using JavaScript functions without using any of the respective native JS methods.

//Create the forEach() method wihtout using the native array.prototype.forEach() method of JavaScript.

//The forEach() method cannot mutate the array on which it is called.
function myEach(array, callback) {
  for (let i = 0; i < array.length; i++) {
    callback(array[i], i, array);
  }
}

//Callback function can mutate the array.
function multiplyByFive(number, index, array) {
  array[index] = number * 5;
}

const test = [1, 2, 3, 4, 5];
console.log("Array: ", test);
myEach(test, multiplyByFive);
console.log("Array after multiplying by five: ", test, "\n");

//The map() method is a copying method so it does not alter the original array but create a new array.
function myMap(array, callback) {
  const result = [];
  for (let i = 0; i < array.length; i++) {
    callback(array[i], i, result);
  }
  return result;
}

function multiplyByTwo(number, index, array) {
  array[index] = number * 2;
}

const mapTest = [1, 2, 3, 4, 5];
console.log("Original Array: ", mapTest);
console.log("Array after multiplying by two: ", myMap(mapTest, multiplyByTwo));
console.log("Original Array after map function: ", mapTest, "\n");

//The filter() method returns a shallow copy of the array.

function myFilter(array, callback) {
  const result = array;
  let counter = 0;
  let wordCount = 0;
  for (let i = 0; i < array.length; i++) {
    if (!callback(array[i], i, result)) {
      result[i] = null;
    } else {
      counter++;
    }
  }
  for (let i = 0; i < result.length; i++) {
    if (result[i] == null) {
      continue;
    } else {
      result[wordCount++] = result[i];
    }
  }
  result.length = counter;
}

function containLetters(word, index, array) {
  let contain = "an";
  for (let i = 0; i < word.length; i++) {
    if (word[i] === contain[0] && word[i + 1] === contain[1]) {
      return true;
    }
  }
  return false;
}

const filterTest = ["apple", "banana", "cherry", "grapes"];
console.log("Array: ", filterTest);
myFilter(filterTest, containLetters);
console.log("Words containing the letters an: ", filterTest, "\n");

//The some() method returns true if at least one element in the array satisfies the callback function.

function mySome(array, callback) {
  for (let i = 0; i < array.length; i++) {
    if (callback(array[i], i, array)) {
      return true;
    }
  }
  return false;
}

function multipleOfFive(number, index, array) {
  if (number % 5 === 0) {
    return true;
  } else {
    return false;
  }
}

const someTest = [1, 2, 56, 4, 3, 45, 83, 29];
console.log("Array: ", someTest);
console.log(
  "Does the array contain a number that is a multiple of five: ",
  mySome(someTest, multipleOfFive),
  "\n"
);

//The every() method returns true if every element in the array satisfies the callback function.

function myEvery(array, callback) {
  for (let i = 0; i < array.length; i++) {
    if (!callback(array[i], i, array)) {
      return false;
    }
  }
  return true;
}

function multipleOfThree(number, index, array) {
  if (number % 3 === 0) {
    return true;
  } else {
    return false;
  }
}

const everyTest = [4, 5, 6, 7, 8, 9, 10];
console.log("Array: ", everyTest);
console.log(
  "Does the array contain only numbers that are a multiple of three: ",
  myEvery(everyTest, multipleOfThree),
  "\n"
);

//The reduce() method returns the result of the callback function on every element in the array in one result.

function myReduce(array, callback) {
  let result = 0;
  for (let i = 0; i < array.length; i++) {
    result = callback(result, array[i], i, array);
  }
  return result;
}

function sumReducer(accumulator, currentValue, index, array) {
  const result = accumulator + currentValue;
  return result;
}

const reduceTest = [15, 16, 17, 18, 19];
console.log("Array: ", reduceTest);
console.log(
  "Array after sum reducer: ",
  myReduce(reduceTest, sumReducer),
  "\n"
);

//The includes() method returns true if the array contains the specified element.

function myIncludes(array, callback) {
  for (let i = 0; i < array.length; i++) {
    if (callback(array[i], i, array)) {
      return true;
    }
  }
  return false;
}

function containsPumpkin(word, index, array) {
  if (word === "pumpkin") {
    return true;
  } else {
    return false;
  }
}

const includesTest = ["apple", "banana", "cherry", "grapes", "cat", "pumpkin"];
console.log("Array: ", includesTest);
console.log(
  "Does the array contain the word pumpkin: ",
  myIncludes(includesTest, containsPumpkin),
  "\n"
);

//The indexOf() method returns the index of the first occurrence of the specified element in the array otherwise returns -1.

function myIndexOf(array, callback) {
  for (let i = 0; i < array.length; i++) {
    if (callback(array[i], i, array)) {
      return i;
    }
  }
  return -1;
}

function theWord(word, index, array) {
  if (word === "benchpress") {
    return true;
  } else {
    return false;
  }
}

const indexOfTest = [
  "apple",
  "banana",
  "cherry",
  "benchpress",
  "grapes",
  "cat",
  "pumpkin",
];

console.log("Array: ", indexOfTest);
console.log(
  `The word benchpress is found at index ${myIndexOf(indexOfTest, theWord)}`
);

//The push() method adds the specified element to the end of the array.

function myPush(array, element) {
  array[array.length++] = element;
}

const pushTest = [1, 2, 3, 4, 5];
console.log("Array: ", pushTest);
myPush(pushTest, 6);
console.log("Array after pushing 6 to the end: ", pushTest, "\n");

//The lastIndexOf() method returns the index of the last occurrence of the specified element in the array otherwise returns -1

function myLastIndexOf(array, element) {
  let lastOccurence = -1;
  for (let i = 0; i < array.length; i++) {
    if (array[i] === element) {
      lastOccurence = i;
    }
  }
  return lastOccurence;
}

const lastIndexOfTest = [
  "apple",
  "banana",
  "cherry",
  "apple",
  "grapes",
  "apple",
  "cherry",
  "banana",
];

console.log("Array: ", lastIndexOfTest);
console.log(
  "The last occurence of apple: ",
  myLastIndexOf(lastIndexOfTest, "apple")
);
console.log(
  "The last occurence of gorilla: ",
  myLastIndexOf(lastIndexOfTest, "gorilla")
);

//The objects.keys() method is a method that will take in an object and return an array of the keys of the key:value pairs of that object.

function grabKeys(object) {
  let keys = [];
  let keyCounter = 0;
  for (let key in object) {
    keys[keyCounter++] = key;
  }
  return keys;
}

const grabKeysTest = {
  a: 1,
  b: 2,
  c: 3,
};

console.log("Custom Object: ", grabKeysTest);
console.log("Keys: ", grabKeys(grabKeysTest), "\n");

//The objects.values() method is a method that will take in an object and return an array of the values of the key:value pairs of that object.

function grabValues(object) {
  let values = [];
  let valueCounter = 0;
  for (let value in object) {
    values[valueCounter++] = object[value];
  }
  return values;
}

const grabValuesTest = {
  a: 1,
  b: 2,
  c: 3,
};

console.log("Custom Object: ", grabValuesTest);
console.log("Values: ", grabValues(grabValuesTest));

//Just in case, create a new object class with keys and values with static methods of grabKeys and grabValues.

const roomPlans = class {
  constructor(room, materials) {
    this.room = room;
    this.materials = materials;
  }
  grabKeysInstance() {
    let keys = [];
    let keyCounter = 0;
    for (let key in this) {
      keys[keyCounter++] = key;
    }
    console.log(keys);
  }
  grabValuesInstance() {
    let values = [];
    let valueCounter = 0;
    for (let value in this) {
      values[valueCounter++] = this[value];
    }
    console.log(values);
  }
};

let bathroom = new roomPlans("Bathroom", "tiles");

bathroom.grabKeysInstance();
bathroom.grabValuesInstance();
console.log();

//Given an array nums, write a function to move all 0's to the end of it while maintaining the relative order of the non-zero elements.

function moveZeros(nums) {
  let notZero = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] != 0) {
      nums[notZero++] = nums[i];
    }
  }

  while (notZero < nums.length) {
    nums[notZero++] = 0;
  }
}

let moveZerosTest = [0, 1, 0, 3, 12];
console.log("Array: ", moveZerosTest);
moveZeros(moveZerosTest);
console.log("Array after moving zeros to the end: ", moveZerosTest, "\n");

//The Sum of a range
//Create a range function that takes two arguments, start and end, and returns an array containing all the numbers from start up to and including end.
function myRange(start, end, steps) {
  let result = [];
  let index = 0;
  if (steps > 0) {
    for (let i = start; i <= end; i += steps) {
      result[index++] = i;
    }
  } else if (steps < 0) {
    for (let i = start; i >= end; i += steps) {
      result[index++] = i;
    }
  } else {
    for (let i = start; i <= end; i++) {
      result[index++] = i;
    }
  }
  return result;
}

console.log("An array from 1 to 10: ", myRange(1, 10));
console.log("An array from 1 to 10 with 2 steps: ", myRange(1, 10, 2));
console.log("An array from 5 to 2 with -1 steps: ", myRange(5, 2, -1), "\n");

//Create a sum function that takes an array of numbers and returns the sum of these numbers.

function mySum(array) {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    sum += array[i];
  }
  return sum;
}

console.log(
  "Sum of an array with a range of 1 to 10: ",
  mySum(myRange(1, 10)),
  "\n"
);

//Reversing an array

//Create a function to reverse an array and producing a new array.

function myReverse(array) {
  let result = [];
  let currentIndex = 0;
  for (let i = array.length - 1; i >= 0; i--) {
    result[currentIndex++] = array[i];
  }
  return result;
}

//Create a function to reverse an array in place.

function myReverseInPlace(array) {
  for (let i = 0; i < array.length / 2; i++) {
    let temp = array[i];
    array[i] = array[array.length - 1 - i];
    array[array.length - 1 - i] = temp;
  }
}

console.log(myReverse([1, 2, 3, 4, 5]));

let inPlace = ["JavaScript", "Learning", "Am", "I"];
console.log("Array: ", inPlace);
myReverseInPlace(inPlace);
console.log("Array after reversing: ", inPlace, "\n");

//Create a function called arrayToList that builds up a list structure from an array.

function arrayToList(array) {
  let arrLength = array.length;
  let list = {
    value: array[arrLength - 1],
    next: null,
  };
  for (let i = arrLength - 2; i >= 0; i--) {
    list = {
      value: array[i],
      next: list,
    };
  }
  return list;
}

console.log(
  "Array containing 10, 20, 30 to a List: ",
  arrayToList([10, 20, 30]),
  "\n"
);

//Create a function called listToArray that produces an array from a list.

function listToArray(list) {
  let arr = [];
  while (list) {
    arr.push(list.value);
    list = list.next;
  }
  return arr;
}

console.log(
  "List containing 10, 20, 30 to an Array: ",
  listToArray(arrayToList([10, 20, 30])),
  "\n"
);

//Create a prepend function that takes a list and creates a new list that adds the element to the front of the list.

function prepend(list, element) {
  let newList = {
    value: element,
    next: list,
  };
  list = newList;
  return list;
}

console.log(
  "Prepend to a list with only 1 object containing value of 20: ",
  prepend(prepend(null, 20), 10),
  "\n"
);

//Create a function where it takes a list and a number and returns the element at the given position in the list with zero referring to the first element in the list.

function myNth(list, position) {
  if (position < 0 || position > list.length) {
    return null;
  }
  let counter = 0;
  let current = list;
  while (counter < position) {
    current = current.next;
    counter++;
  }
  return current.value;
}

console.log(
  "Element at 2nd position: ",
  myNth(arrayToList([10, 20, 30]), 1),
  "\n"
);

function recursiveMyNth(list, position) {
  if (position < 0 || position > list.length) {
    return null;
  }
  if (position == 0) {
    return list.value;
  }
  return recursiveMyNth(list.next, position - 1);
}

console.log(
  "Element at 2nd position: ",
  recursiveMyNth(arrayToList([10, 20, 30]), 1),
  "\n"
);

//Create a function that takes two values and returns true only if they are the same values
//or are objects with the same properties where the values of the properties are equal when compared with a recursive

function myDeepEquals(a, b) {
  if (a === b) {
    return true;
  }
  if (a === null || b === null) {
    return false;
  }
  if (typeof a !== typeof b) {
    return false;
  }
  if (typeof a == "object" && a != null) {
    if (Object.keys(a).length != Object.keys(b).length) {
      return false;
    }
    for (let key in a) {
      if (!myDeepEquals(a[key], b[key])) {
        return false;
      }
    }
    for (let value in a) {
      if (!myDeepEquals(a[value], b[value])) {
        return false;
      }
    }
    return true;
  }
}

console.log("Comparing 1 to 1: ", myDeepEquals(1, 1));
let obj = { here: { is: "an" }, object: 2 };
console.log("Custom Object: ", obj);
console.log("Comparing the object to itself: ", myDeepEquals(obj, obj));
console.log(
  "Comparing the object to a different object: ",
  myDeepEquals(obj, { here: 1, object: 2 })
);

console.log(
  "The amount of properties in each object: ",
  `${Object.keys(obj).length} : ${
    Object.keys({ here: { is: "an" }, object: { what: "is" }, this: 0 }).length
  }`
);

console.log(
  "Result after comparing amount of properties in each object: ",
  myDeepEquals(obj, { here: { is: "an" }, object: { what: "is" }, this: 0 })
);

console.log(
  "The amount of properties in each object: ",
  `${Object.keys(obj).length} : ${
    Object.keys({ here: { is: "an" }, object: 2 }).length
  }`
);
console.log(
  "Result after comparing amount of properties in each object: ",
  myDeepEquals(obj, { here: { is: "an" }, object: 2 }),
  "\n"
);
