//Concat() - combine two arrays into one - doe not mutate the original array
const primaryColorsArr=['red', 'blue', 'yellow']
const secondaryColorsArr=['purple', 'green', 'orange'];
const colorsArr = primaryColorsArr.concat(secodaryColorsArr);

//Sort() - alphabetically sort - mutates the original array
const colorsArr = ['red', 'blue', 'yellow']
colorsArr.sort();

//reverse() - reverse the order of items
colorsArr.reverse();


//slice() - copy a part and place it into a new array
Array.slice(beginIndex, endIndex)
let slicedArr = testArr.slice(2,5);

const birds = ['crow', 'hawk', 'owl', 'goose']
let newBirds = birds.slice(1, 3);
console.log(newBirds)

//Splice() to Insert
Array.splice(atIndex, 0, item)
testArr.splice(2,0,'x');

//Splice() to Remove
Array.splice(atIndex, numItemsToRemove)
const removed = testArr.splice(1.3);

//Splice() to Replace
Array.splice(atIndex, numItemsToReplace, items)