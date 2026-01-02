
// Part A: Function Implementation

// 1. calculateProcurementCost
function calculateProcurementCost(tonnageInKg, priceInUgx){
    if (typeof tonnageInKg !== 'number' || typeof priceInUgx !== 'number'){
        return"Invalid Input";
    }
    if (typeof tonnageInKg < 0 || typeof priceInUgx < 0){
        return "Invalid Input";
    }
// calculate and return total cost
let totalCost = tonnageInKg * priceInUgx;
return totalCost
}

// Test the fucntion
console.log("Cost for 1500kg at 50 per kg:", calculateProcurementCost(1500, 50));
console.log("Invalid test:", calculateProcurementCost(-100, 50));

// 2. Arrow function to validate buyer name
const validateBuyerName = (buyerName) => {
    // Check if name is at least 2 characters and not empty
    if (buyerName.length >= 2 && buyerName !== "") {
        return true;
    } else {
        return false;
    }
};
// Test the fucntion 
console.log("Is 'John' valid?", validateBuyerName("John"));
console.log("Is 'A' valid?", validateBuyerName("A"));

// 3. Function to check user autorization

function userAutorization (role){
    switch (role){
        case 'Manager':
            return "Procuremets_and_Sales";
        case 'Sales_Agent':
            return "Sales_Only";
        case 'Director':
            return "View_aggregations"; 
        default :
            return "Unauthorized";
    }
}
 
// Part B: Object Creation and Manipulation

function createSalesRecord(produceName, tonnage, buyerName, amountPaid){
    // Generate random ID between 1000-9999
    let randomId = Math.floor(Math.random() * 9000) + 1000;
    
    // Create and return the object
    return {
        id: randomId,
        produceName: produceName,
        tonnageInKgs: tonnage,
        buyerName: buyerName,
        amountPaid: amountPaid,
        saleDate: new Date(),
        isCreditSale: false
    };
}

// Create a sales record

let mySalesRecord = createSalesRecord ("Beans", 800, "Jack Ma", 50000);
// Object manipulation
mySalesRecord.branch = "Maganjo";
mySalesRecord.isCreditSale = true;
mySalesRecord["dueDate"] = new Date ("2026-01-02");

console.log(Object.keys(mySalesRecord))

// for ... in loop

for (let property in mySalesRecord){
    console.log(`property: ${property}, value :${mySalesRecord[property]}`);

}

// Part C: Loop Implementation and Data Processing

// calculate weekly tonnage

let weeklyTonnage = [1200, 1500, 980, 2000, 1100, 1800, 1300];

let totalTonnage = 0;

for (let i = 0; i < weeklyTonnage.length; i++) {
    totalTonnage = totalTonnage + weeklyTonnage[i];
}
let averageTonnage = totalTonnage / weeklyTonnage.length;

// Test the fucntion
console.log("\nWeekly Tonnage Results:");
console.log("Total tonnage for the week:", totalTonnage);
console.log("Average daily tonnage:", averageTonnage);

// Count credit sales using for...of loop

let allSalesRecords = [
    createSalesRecord("Beans", 1200, "John Doe", 60000),
    createSalesRecord("Maize", 1500, "Jane Smith", 72000),
    createSalesRecord("G-nuts", 800, "Bob Johnson", 57600),
    createSalesRecord("Soybeans", 1000, "Alice Brown", 58000),
    createSalesRecord("Cow peas", 1100, "Charlie Davis", 66000)
];

// Manually set some as credit sales
allSalesRecords[1].isCreditSale = true;
allSalesRecords[2].isCreditSale = true;
allSalesRecords[3].isCreditSale = true;


// Count credit sales
let creditSalesCount = 0;
for (let sale of allSalesRecords) {
    // Skip if not a credit sale
    if (sale.isCreditSale === false) {
        continue;
    }
    // If we reach here, it's a credit sale
    creditSalesCount++;
}

console.log(`Total credit sales: ${creditSalesCount}`);

//  Find out of stock items using break

let inventory = [
    {name: 'Beans', tonnage: 500},
    {name: 'Maize', tonnage: 0},
    {name: 'G-nuts', tonnage: 300}
];

// Search for first item with 0 tonnage
for (let i = 0; i < inventory.length; i++) {
    if (inventory[i].tonnage === 0) {
        console.log(`Manager Alert: ${inventory[i].name} is out of stock`);
        break; // Exit loop immediately when found
    }
}

