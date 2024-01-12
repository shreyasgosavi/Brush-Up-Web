for (let i = 0; i < 4; i++) {
  console.log("Iteration number " + i);
}

let sampleCollection = [1, 2, 3, 4, 5];
console.log("looping through a sample-collection");

for (let i of sampleCollection) {
  console.log(i);
}

//Using maps to manipulate the collection
let manipulatedObject = sampleCollection.map((element) => {
  element * 2;
});
console.log("Manipulated Object is " + manipulatedObject);
