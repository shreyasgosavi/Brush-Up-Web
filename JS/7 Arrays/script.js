a = 45;

// Arrays
const arr = [2, 5, 23, 4];
arr.push(6);
console.log(arr);

//We can store multiple data-type in single array
const multipleDataTypeArray = [1, "SHR", false, { id: 2 }];
console.log(multipleDataTypeArray);

console.log("Accessing 2nd element of an array " + arr[1]);
arr[1] = 3;
console.log(
  "Changed array value " +
    arr[1] +
    ", 5 is no more present if we try to get the index of it we will get '-1' lets try : " +
    arr.indexOf(5)
);

//Adding new element ar the end of an array
let newLength = arr.push("New Element");
console.log("New Length is " + newLength);

//Adding element to the beginniing of an array
console.log(arr.unshift("First Element"));
console.log("Adding using unshift : " + arr);

//Removing last element from an array :
arr.pop();

//Removing element from the beginning
arr.shift();

console.log("After removing elements " + arr);

console.log("Printing using for..of loop");
for (let i of arr) {
  console.log(i);
}

//Using Map function to perform same operation to all elements of an array
const newArray = arr.map((number) => {
  return number * 2;
});

arr[2] = 10;
console.log(arr);
console.log("$$$$$$$$$$%$%$%$%$%$%$%");
console.log(newArray);

console.log("Filtering Elements");

//Filtering values from array
const filteredArray = arr.filter((number) => number > 5);
arr[2] = 3;
console.log(arr[2]);

//Splitting string into list using split method
const states = "MH, RJ, DL, AH";
const stateList = states.split(",");

//Joining arrays to get a string
const resultString = stateList.join(",");
console.log(resultString);
