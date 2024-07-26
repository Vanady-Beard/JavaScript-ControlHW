let isLoggedIn = true;

if (isLoggedIn) {
    console.log("You are successfully logged in, wonderful!");
} else {
    console.log("Please login first");
}

const availableProducts = ["Banana", "Grapes", "Oranges"];
let cart = [];

const addProducts = prompt("Do you want to view or add products? 1. Add 2. View"); 

if (addProducts === '1') {
    let productToAdd = prompt("What product do you want to add?");
    if (availableProducts.includes(productToAdd)) {
        cart.push(productToAdd);
        console.log(`${productToAdd} has been added to your cart.`);
    } else {
        console.log(`${productToAdd} is not available.`);
    }
} else if (addProducts === '2') {
    console.log("Available products:");
    for (let product of availableProducts) {
        console.log(product);
    }

    console.log("Your cart:");
    for (let product of cart) {
        console.log(product);
    }
} else {
    console.log("Please enter 1 or 2");
}

let totalCost = 0;
const price = {
    "Banana": 1.0, 
    "Grapes": 3.0, 
    "Oranges": 0.5
};

for (let product of cart) {
    totalCost += price[product];
}

console.log(`The total cost is $${totalCost.toFixed(2)}`);



let balance = 0;

function deposit(amount) {
    if (amount > 0) {
        balance += amount;
        console.log(`$${amount} has been deposited 😊. $${balance}.`);
    } else {
        console.log("Deposit amount not positive.");
    }
}

function withdraw(amount) {
    if (amount > 0) {
        if (amount <= balance) {
            balance -= amount;
            console.log(`$${amount} was withdrawn. Your current balance is $${balance}.`);
        } else {
            console.log("Insufficient balance for this withdrawal.");
        }
    } else {
        console.log("Withdrawal amount must be positive.");
    }
}

function checkBalance() {
    console.log(`Your balance is $${balance}.`);
}

deposit(835); 
withdraw(35); 
checkBalance(); 

