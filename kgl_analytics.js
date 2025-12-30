
// PART A: Higher Order Functions - Data Transformation

// 1. Create array of 6 procurement records
let procurementRecords = [
    {
        id: 1001,
        dealerName: "Linda Cikuru",
        produceType: "Beans",
        tonnageInKgs: 1500,
        costInUgx: 82500,
        procurementDate: new Date("2025-12-15")
    },
    {
        id: 1002,
        dealerName: "Moses Amani",
        produceType: "Grain Maize",
        tonnageInKgs: 2000,
        costInUgx: 96000,
        procurementDate: new Date("2025-12-16")
    },
    {
        id: 1003,
        dealerName: "James Aganze",
        produceType: "G-nuts",
        tonnageInKgs: 800,
        costInUgx: 57600,
        procurementDate: new Date("2025-12-17")
    },
    {
        id: 1004,
        dealerName: "Adella Mukassa",
        produceType: "Soybeans",
        tonnageInKgs: 1200,
        costInUgx: 69600,
        procurementDate: new Date("2025-12-18")
    },
    {
        id: 1005,
        dealerName: "Mary Atim",
        produceType: "Cow peas",
        tonnageInKgs: 1800,
        costInUgx: 108000,
        procurementDate: new Date("2025-12-19")
    },
    {
        id: 1006,
        dealerName: "John Peter",
        produceType: "Beans",
        tonnageInKgs: 1000,
        costInUgx: 55000,
        procurementDate: new Date("2025-12-20")
    }
];

//  2. Use .map() to add costPerKg to each record
let recordsWithCostPerKg = procurementRecords.map(function(record) {
    // Calculate cost per kg
    let costPerKg = record.costInUgx / record.tonnageInKgs;
    
    // Return new object with all old properties plus costPerKg
    return {
        id: record.id,
        dealerName: record.dealerName,
        produceType: record.produceType,
        tonnageInKgs: record.tonnageInKgs,
        costInUgx: record.costInUgx,
        procurementDate: record.procurementDate,
        costPerKg: costPerKg
    };
});

console.log("Records with cost per kg:", recordsWithCostPerKg);

//  3. Use .filter() to get only records with tonnage >= 1000
let validTonnageRecords = procurementRecords.filter(function(record) {
    return record.tonnageInKgs >= 1000;
});

console.log("\nRecords meeting minimum tonnage:");
console.log(validTonnageRecords);
console.log("Number of valid records:", validTonnageRecords.length);

//  4. Use .reduce() to calculate totals

let totalTonnage = procurementRecords.reduce(function(total, record) {
    return total + record.tonnageInKgs;
}, 0);

// Calculate total cost
let totalCost = procurementRecords.reduce(function(total, record) {
    return total + record.costInUgx;
}, 0);

console.log("\nTotals:");
console.log(`Total tonnage procured: ${totalTonnage} kgs`);
console.log(`Total cost: ${totalCost} UGX`);

// PART B: Sets for Unique Data Management

// 5. Function to get unique dealers using Set
function getUniqueDealers(records) {
    // Create a Set to store unique names
    let uniqueNames = new Set();
    
    // Add each dealer name to the Set
    for (let i = 0; i < records.length; i++) {
        uniqueNames.add(records[i].dealerName);
    }
    
    // Convert Set back to array and return
    let uniqueArray = Array.from(uniqueNames);
    return uniqueArray;
}

// Call the function and log result
let uniqueDealers = getUniqueDealers(procurementRecords);
console.log("\nUnique dealers:", uniqueDealers);

// 6. Create Set of authorized roles
let authorizedRoles = new Set();
authorizedRoles.add('Manager');
authorizedRoles.add('Director');

// Function to check if role is authorized
function isAuthorizedForProcurement(userRole) {
    // Check if role exists in the Set
    return authorizedRoles.has(userRole);
}

// Test with different roles
console.log("\nAuthorization Tests:");
console.log("Is Manager authorized?", isAuthorizedForProcurement('Manager'));
console.log("Is Director authorized?", isAuthorizedForProcurement('Director'));
console.log("Is Sales Agent authorized?", isAuthorizedForProcurement('Sales Agent'));
console.log("Is Accountant authorized?", isAuthorizedForProcurement('Accountant'));

// PART C: Maps for Price Management

// 7. Create Map with price list
let kglPriceList = new Map();
kglPriceList.set('Beans', 5500);
kglPriceList.set('Grain Maize', 4800);
kglPriceList.set('Cow peas', 6000);
kglPriceList.set('G-nuts', 7200);
kglPriceList.set('Soybeans', 5800);

// 8.  Calculate total cost sale total

function calculateSaleTotal(produceName, tonnageInKgs) {
    // Try to get price from Map
    let pricePerKg = kglPriceList.get(produceName);
    
    // Check if produce exists in Map
    if (pricePerKg === undefined) {
        return "Price not found";
    }
    
    // Calculate and return total
    let totalAmount = pricePerKg * tonnageInKgs;
    return totalAmount;
}

// Test with different produce types
console.log("\nSale Calculations:");
console.log("Beans (1000kg):", calculateSaleTotal('Beans', 1000));
console.log("Maize (1500kg):", calculateSaleTotal('Grain Maize', 1500));
console.log("Millet (500kg):", calculateSaleTotal('Millet', 500));

// 9. Loop through price list and find highest price
console.log("\nPrice List:");

// Loop through Map entries
for (let [produceName, price] of kglPriceList) {
    console.log(`Produce: ${produceName}, Price per Kg: ${price} UgX`);
}

// Get all prices as array and find highest
let allPrices = Array.from(kglPriceList.values());
let highestPrice = allPrices.reduce(function(max, currentPrice) {
    if (currentPrice > max) {
        return currentPrice;
    } else {
        return max;
    }
}, 0);

console.log(`\nHighest price in the map: ${highestPrice} UgX`);
