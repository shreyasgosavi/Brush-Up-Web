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
