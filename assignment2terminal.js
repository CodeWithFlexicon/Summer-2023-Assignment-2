const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let selection = "";

let recursiveQuestion = function () {
  console.log(
    "Welcome to Felix's Custom JavaScript Functions! (for better understanding of methods)" +
      "\n 1. forEach()" +
      "\n 2. map()" +
      "\n 3. filter()" +
      "\n 4. some()" +
      "\n 5. every()" +
      "\n 6. reduce()" +
      "\n 7. includes()" +
      "\n 8. indexOf()" +
      "\n 9. push()" +
      "\n 10. lastIndexOf()" +
      "\n 11. Object.keys()" +
      "\n 12. Object.values()" +
      "\n 13. Static Method Object.keys()" +
      "\n 14. Instance Method Object.values()" +
      "\n 15. moveZeros()" +
      "\n 16. Sum of a Range" +
      "\n 17. Reverse an array" +
      "\n 18. Reverse an array in place" +
      "\n 19. Array to List" +
      "\n 20. List to Array" +
      "\n 21. Prepend to list" +
      "\n 22. Nth element in a list" +
      "\n 23. Recursive Nth element in a list" +
      "\n 24. Deep Comparison"
  );
  rl.question(
    "Which custom function would you like to check? 0 to exit.\nSelection: ",
    (answer) => {
      selection = answer;
      switch (selection) {
        case "0":
          console.log("Goodbye!\n");
          process.exit();
          break;
        case "1":
          checkMyEach();
          break;
        case "2":
          checkMyMap();
          break;
        case "3":
          checkMyFilter();
          break;
        case "4":
          checkMySome();
          break;
        case "5":
          checkMyEvery();
          break;
        case "6":
          checkMyReduce();
          break;
        case "7":
          checkMyIncludes();
          break;
        case "8":
          checkMyIndexOf();
          break;
        case "9":
          checkMyPush();
          break;
        case "10":
          checkMyLastIndexOf();
          break;
        case "11":
          checkMyGrabKeys();
          break;
        case "12":
          checkMyGrabValues();
          break;
        case "13":
          checkGrabStatic();
          break;
        case "14":
          checkGrabInstance();
          break;
        case "15":
          checkMoveZeros();
          break;
        case "16":
          checkMySumRange();
          break;
        case "17":
          checkMyReverseArray();
          break;
        case "18":
          checkMyReverseArrayInPlace();
          break;
        case "19":
          checkMyArrayToList();
          break;
        case "20":
          checkMyListToArray();
          break;
        case "21":
          checkMyPrepend();
          break;
        case "22":
          checkMyNthElement();
          break;
        case "23":
          checkMyRecursiveNthElement();
          break;
        case "24":
          checkMyDeepComparison();
          break;
        default:
          console.log("Invalid selection\n");
      }
      recursiveQuestion();
    }
  );
};

recursiveQuestion();

//==================================================================================

function checkMyEach() {
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
  console.log("Original Array: ", test);
  myEach(test, multiplyByFive);
  console.log("Array after multiplyByFive: ", test, "\n");
}

//==================================================================================

function checkMyMap() {
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
  console.log(
    "Modified Copy of the Array after multiplyByTwo: ",
    myMap(mapTest, multiplyByTwo)
  );
  console.log("The Original Array after the map function: ", mapTest, "\n");
}

//==================================================================================

function checkMyFilter() {
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
    let contain = "ap";
    for (let i = 0; i < word.length; i++) {
      if (word[i] === contain[0] && word[i + 1] === contain[1]) {
        return true;
      }
    }
    return false;
  }

  const filterTest = ["apple", "banana", "cherry", "grapes"];
  console.log("Original Array: ", filterTest);
  myFilter(filterTest, containLetters);
  console.log("Filtering words that contain ap: ", filterTest, "\n");
}

//==================================================================================

function checkMySome() {
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
    "Does the Array contain a multiple of Five: ",
    mySome(someTest, multipleOfFive),
    "\n"
  );
}

//==================================================================================

function checkMyEvery() {
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
    "Does the array contain only numbers that are multiples of three: ",
    myEvery(everyTest, multipleOfThree),
    "\n"
  );

  const everyTest2 = [3, 6, 9, 12, 15, 18, 21];
  console.log("Array: ", everyTest2);
  console.log(
    "Does the array contain only numbers that are multiples of three: ",
    myEvery(everyTest2, multipleOfThree),
    "\n"
  );
}

//==================================================================================

function checkMyReduce() {
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
    "Array after running sum reducer: ",
    myReduce(reduceTest, sumReducer),
    "\n"
  );
}

//==================================================================================

function checkMyIncludes() {
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

  const includesTest = [
    "apple",
    "banana",
    "cherry",
    "grapes",
    "cat",
    "pumpkin",
  ];
  console.log("Array: ", includesTest);
  console.log(
    "Does the Array contain the word pumpkin?: ",
    myIncludes(includesTest, containsPumpkin),
    "\n"
  );
}

//==================================================================================

function checkMyIndexOf() {
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
    "The word benchpress is at the index: ",
    myIndexOf(indexOfTest, theWord),
    "\n"
  );
}

//==================================================================================

function checkMyPush() {
  function myPush(array, element) {
    array[array.length++] = element;
  }

  const pushTest = [1, 2, 3, 4, 5];
  console.log("Array: ", pushTest);
  myPush(pushTest, 6);
  console.log("Array after pushing number 6: ", pushTest, "\n");
}

//==================================================================================

function checkMyLastIndexOf() {
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
    "Last occurance of apple: ",
    myLastIndexOf(lastIndexOfTest, "apple"),
    "\n"
  );
  console.log(
    "Last occurance of gorilla: ",
    myLastIndexOf(lastIndexOfTest, "gorilla"),
    "\n"
  );
}

//==================================================================================

function checkMyGrabKeys() {
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

  console.log("Object: ", grabKeysTest);
  console.log("Array of Keys: ", grabKeys(grabKeysTest), "\n");
}

//==================================================================================

function checkMyGrabValues() {
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

  console.log("Object: ", grabValuesTest);
  console.log("Array of Values: ", grabValues(grabValuesTest), "\n");
}

//==================================================================================

function checkGrabStatic() {
  const roomPlans = class {
    constructor(room, materials) {
      this.room = room;
      this.materials = materials;
    }
    static grabKeysStatic(object) {
      let keys = [];
      let keyCounter = 0;
      for (let key in object) {
        keys[keyCounter++] = key;
      }
      return keys;
    }
    static grabValuesStatic(object) {
      let values = [];
      let valueCounter = 0;
      for (let value in object) {
        values[valueCounter++] = object[value];
      }
      return values;
    }
  };

  let bathroom = new roomPlans("Bathroom", "tiles");

  console.log("Custom Object with Keys & Values: ", bathroom);
  console.log(
    "Since they are static class methods, we must run the object class with the static method and pass in the object of that object class",
    "so we would run roomPlans.grabKeysStatic(bathroom)"
  );
  console.log("Keys: ", roomPlans.grabKeysStatic(bathroom));
  console.log("Values: ", roomPlans.grabValuesStatic(bathroom), "\n");
}

//==================================================================================

function checkGrabInstance() {
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

  console.log("Custom Object with Keys & Values: ", bathroom);
  console.log(
    "Since this is an instance method, we can create the custom object and call the class method, bathroom.grabKeysInstance()"
  );
  bathroom.grabKeysInstance();
  bathroom.grabValuesInstance();
  console.log();
}

//==================================================================================

function checkMoveZeros() {
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
  console.log("Array after moving all zeros to the end: ", moveZerosTest, "\n");
}

//==================================================================================

function checkMySumRange() {
  console.log(
    "The range function takes 2 arguments with one optional argument where the first argument is the start, the second argument is the end, and the optional third is how many steps from each element"
  );
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

  function mySum(array) {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
      sum += array[i];
    }
    return sum;
  }

  console.log(
    "Let's have an array with a range of 20 to 55: ",
    myRange(20, 55),
    "\n"
  );
  console.log(
    "An array with range 1 to 10 with 2 steps: ",
    myRange(1, 10, 2),
    "\n"
  );
  console.log(
    "An array with range 5 to 2 with -1 steps: ",
    myRange(5, 2, -1),
    "\n"
  );

  console.log(
    "Sum of the array with a range of 1 to 10: ",
    mySum(myRange(1, 10)),
    "\n"
  );
}

//==================================================================================

function checkMyReverseArray() {
  function myReverse(array) {
    let result = [];
    let currentIndex = 0;
    for (let i = array.length - 1; i >= 0; i--) {
      result[currentIndex++] = array[i];
    }
    return result;
  }

  let myReverseTest = [1, 2, 3, 4, 5];
  console.log("Array: ", myReverseTest);
  console.log("Array after reversing: ", myReverse(myReverseTest), "\n");
}

function checkMyReverseArrayInPlace() {
  //Create a function to reverse an array in place.

  function myReverseInPlace(array) {
    for (let i = 0; i < array.length / 2; i++) {
      let temp = array[i];
      array[i] = array[array.length - 1 - i];
      array[array.length - 1 - i] = temp;
    }
  }

  let inPlace = ["JavaScript", "Learning", "Am", "I"];
  console.log("Array: ", inPlace);
  myReverseInPlace(inPlace);
  console.log("Array after reversing in place: ", inPlace, "\n");
}

//==================================================================================

function checkMyArrayToList() {
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

  let arrayToListTest = [10, 20, 30];
  console.log("Array: ", arrayToListTest);
  console.log("Array to List: ", arrayToList(arrayToListTest), "\n");
}

//==================================================================================

function checkMyListToArray() {
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

  function listToArray(list) {
    let arr = [];
    while (list) {
      arr.push(list.value);
      list = list.next;
    }
    return arr;
  }

  let listToArrayTest = arrayToList([10, 20, 30]);
  console.log("Array: ", listToArrayTest);
  console.log("List to Array: ", listToArray(listToArrayTest), "\n");
}

//==================================================================================

function checkMyPrepend() {
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

  function prepend(list, element) {
    let newList = {
      value: element,
      next: list,
    };
    list = newList;
    return list;
  }

  let prependTest = arrayToList([20, 30]);
  console.log("List: ", prependTest);
  console.log("List after prepend: ", prepend(prependTest, 10), "\n");
}

//==================================================================================

function checkMyNthElement() {
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

  let theNthTest = arrayToList([10, 20, 30]);
  console.log("List: ", theNthTest);
  console.log(
    "The value in the second position in the list: ",
    myNth(theNthTest, 1),
    "\n"
  );
}

//==================================================================================

function checkMyRecursiveNthElement() {
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

  function recursiveMyNth(list, position) {
    if (position < 0 || position > list.length) {
      return null;
    }
    if (position == 0) {
      return list.value;
    }
    return recursiveMyNth(list.next, position - 1);
  }

  let theRecursiveNthTest = arrayToList([10, 20, 30]);
  console.log("List: ", theRecursiveNthTest);
  console.log(
    "The value in the second position in the list: ",
    recursiveMyNth(theRecursiveNthTest, 1),
    "\n"
  );
}

//==================================================================================

function checkMyDeepComparison() {
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
      Object.keys({ here: { is: "an" }, object: { what: "is" }, this: 0 })
        .length
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
}
