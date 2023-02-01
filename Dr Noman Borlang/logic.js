const isEven = (x) => {
  // If the remainder after dividing by two is 0, return true
  if (x % 2 === 0) {
    return true;
  }
  // If the number is odd, return false
  return false;
};

// Test the number
isEven(12);
console.log(isEven);

const myArray = [
  [001, "Micheal", "Misc-Items", 500],
  [(002, "Mic", "MiscDItems", 450)],
  [(003, "Mich", "MiscDSItems", 600)],
  [(004, "Miheal", "MiscSDSDItems", 250)],
  [(005, "Michel", "MiscDSItems", 523)],
  [(006, "Michl", "Misc DGDItems", 123)],
  [(007, "heal", "Misc_Items", 3565)],
  [(008, "eal", "MiscFDF Items", 3940)],
];
console.log(myArray);
console.log(myArray[2]);
console.log(myArray.length);
let newVar = myArray.pop();
console.log(newVar);
myArray.shift(["hello World", 25, "Soeery"]);
console.log(myArray[0]);

const anotherVar = [
  ["Roll No", "Name", "Item"],
  ["newRoll", "Good Name", "Glasses"],
];

console.log(anotherVar);
anotherVar.unshift(["Hello", "world", 9409]);
console.log(anotherVar);
let listShop = anotherVar[0];
console.log(listShop);

const myCart = [listShop];

console.log(myCart);
// Shopping Cart Experiance

const catalogueArray = [
  ["Mens_Wear", 500],
  ["T_Shirt", 300],
  ["Shirt", 233],
  ["Machine", 3443],
  ["2PCs Jewwllary", 300],
];
console.log(catalogueArray);
const shoppedItems = [catalogueArray[0], [3], [4]];
console.log(shoppedItems);
const finalCart = [shoppedItems];
console.log(finalCart);

const randomVar = [[12, "dds", 500], [(13, "dds", 501)], [(14, "dds", 502)]];
let aNum = randomVar[(0)[2]];
console.log(aNum);

const myCartd = [
  [55, 23, 900],
  [52, 233, 900],
  [54, 2332, 390],
];
let arrSum = myCartd[1][2] + myCartd[1][1];
console.log(arrSum);
let discount;

function customerDiscount() {
  if (arrSum > 1000) {
    discount = arrSum - (arrSum * 15) / 100;
  } else {
    arrSum == arrSum;
  }
}
console.log(customerDiscount);
function displayArr() {
  console.log(arrSum);
}
console.log(arrSum);
console.log(displayArr);
//
const catalogue = [[120, "Rompers", 500][(121, "Towel", 300)]];
catalogue.push([123, "kitchen-hand-towel", 300]);
console.log(catalogue);
const cartVariable = catalogue.unshift[0(2)];
console.log(cartVariable);
function shopped() {
  shoppingcart.push();
}
const shoppingcart = [];
const finalpaymnet = [];

const names = [
  "Hole-in-one!",
  "Eagle",
  "Birdie",
  "Par",
  "Bogey",
  "Double Bogey",
  "Go Home!",
];

function golfScore(par, strokes) {
  // Only change code below this line
  if (strokes == 1) {
    return names[0];
  } else if (strokes <= par - 2) {
    return names[1];
  } else if ((strokes = par - 1)) {
    return names[2];
  } else if ((strokes = par)) {
    return names[3];
  } else if ((strokes = par + 1)) {
    return names[4];
  } else if ((strokes = par + 2)) {
    return names[5];
  } else if (strokes >= par + 3) {
    return names[6];
  }
  // Only change code above this line
}

golfScore(5, 1);
console.log(golfScore(5, 1));
document.querySelector("#div-id").style.backgroundColor = rgb(255, 13, 23);
function sumFunction(red, green, blue) {
  document.querySelector("#div-id").style.backgroundColor = rgb(
    red,
    green,
    blue
  );
}
