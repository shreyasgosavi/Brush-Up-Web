let a = "Some String checkTHIS";

let b = `This string : ${a}`;

console.log(`This is a template literals : ${3 + 3}`);

console.log("Length of string is " + a.length);

// We can use index to get the value at given position of an array.
// IN js -1 position doesn't work
console.log(a[-1]); //  --  Error 👎
console.log(a[a.length - 1]); // -- Works 👍

let c = "checkThis";
console.log("Is 'c' present in a : " + a.includes(c));
console.log("Does a starts with c: " + a.startsWith(c));
console.log("Does a ends with c: " + a.endsWith(c));
c.replace("checkThis", "checkTHIS");
console.log(
  "Ohhu this is case sensitive !! lets see after changing c " + a.endsWith(c)
);

console.log(
  "replace or any other method doesnot change the ooriginal variable so we need to reassign it"
);
c = c.replace("checkThis", "checkTHIS");
console.log("Now for the last time lets check it c " + a.endsWith(c));

let occurenceDemo =
  "This is random and string and we will be finding the index of occurence of a number and its position and this is typed without looking at it so there can be type.";

let occurIndex = 0;
let position = 0;
let positions = [];

// console.log("Occurence of 'of'" + occurenceDemo.indexOf("of", position));

while (position < occurenceDemo.length) {
  position = occurenceDemo.indexOf("is", position);
  if (position == -1) {
    break;
  }
  //   console.log(position);
  positions.push(position);
  position++;
  occurIndex++;
}
console.log("Positions : " + positions);
console.log("Number of occurence Occurence : " + occurIndex);

console.log("Slicing text");
console.log(occurenceDemo.slice(20));

let stringS = "MAN675847583748sjt567654;Manchester Piccadilly";

let finalStationString = stringS.slice(0, 3);
finalStationString += " " + stringS.slice(stringS.indexOf(";") + 1);
console.log(finalStationString);
