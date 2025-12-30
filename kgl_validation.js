
// Part A: Variable Declaration and Type Checking

// 1. Declaring variables with const and let

// using const because the variable won't change
const companyName = "Karibu Groceries LTD";

// using const because this is a minimum requirement
const minTonnage = 1000;

// using const because the operation status is 
const isOperational = true;

// using let because the variable can be assigned later
let  managerName;

// using let because the varibale can change over time
let closedBranches = null;

// 2. checking data types

console.log("data types:")
console.log(typeof companyName);
console.log(typeof minTonnage);
console.log(typeof isOperational);
console.log(typeof managerName);
console.log(typeof closedBranches);

// Part B: String Manipulation and Validation

let dealerNameInput = " james BOND ";

// Remove spaces and convert to title case
let trimmedName = dealerNameInput.trim();

let cleanDealerName = trimmedName
  .toLowerCase()
  .split(" ")
  .map(word => word.charAt(0).toUpperCase() + word.slice(1))
  .join(" ");

//   log using template literal
console.log(`Cleaned Dealer Name: ${cleanDealerName}`);

// check if the length is atleast 2 
if (cleanDealerName.length >= 2 && cleanDealerName !== "") {
    console.log("Valid dealer name");
} else {
    console.log("Invalid dealer name");
}

// Part C: Conditional Logic and Business Rules

let userRole = 'Eddy';
let procurementTonnage = 1500;
let produceType = 'beans';
let costInUgx = '50000';

// if user is sales agent, they are not allowed
if (userRole === 'sales Agent') {
    console.log("ERROR: sales agents cannot record produce entries!");
} else {
    if (procurementTonnage >= 1000){
    console.log("Tonnage requirement met")
    }
    else {
        console.log("Tonnage too low, minimu tonnage is 1000 Kgs")
    }
}
// check if cost is atleat 5 digits
let costNumber = Number(costInUgx);
if (costNumber >= 10000) {
    console.log("Cost requirement met");
} else {
    console.log("Cost too low, must be at leat 10000 Ugx");
}

// Check if both Tonnage and cost are valid using AND operator

if (costNumber >= 10000 && procurementTonnage >= 1000) {
    console.log("Procurement record valid")
} else {
    console.log("Procurement record invalid")
}

// Part D: Arrays and Produce Management

let kglProduce = ['Beans', 'Grain maize', 'Cow peas', 'G-nuts', 'Soybeans']

// add green peas at the end of the array
kglProduce.push("green peas");
// remove first item
kglProduce.shift("");
// check if G-nuts exists in the array
let hasGnuts = kglProduce.includes("G-nuts"); 
console.log("Has G-Nuts:", hasGnuts);

// log the final produce
console.log("final Produce array:", kglProduce);
console.log("Array length:", kglProduce.length)

// Merge two arrays 

let branch2Produce = ['Maize', 'Beans']
let allProduce = kglProduce .concat(branch2Produce);

console.log("All produce from both branches:",allProduce)