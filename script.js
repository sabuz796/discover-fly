let firstIncreaseButton = document.querySelector('#first-increase-button');
let firstDecreaseButton = document.querySelector('#first-decrease-button');
let firstInputBox = document.querySelector('#first-input-box');

let economyIncreaseButton = document.querySelector('#economy-increase-button');
let economyDecreaseButton = document.querySelector('#economy-decrease-button');
let economyInputBox = document.querySelector('#economy-input-box');

let subTotal = document.querySelector('#subtotal');
let vat = document.querySelector('#vat');
let total = document.querySelector('#total');

let firstTicketPrice;
let economyTicketPrice;


// set initial value of input boxes
firstInputBox.value = 0;
economyInputBox.value = 0;


function increaseDecrease(inputBox, ticketPrice, isIncrease){
    if(isIncrease == true){
        inputBox.value = parseInt(inputBox.value) + 1;
    }
    else{
        inputBox.value = parseInt(inputBox.value) - 1;
    }  
    ticketPrice = inputBox.value * 150;
}

// first class increase button handler
firstIncreaseButton.addEventListener('click', () => {
    // firstInputBox.value = parseInt(firstInputBox.value) + 1;
    // firstTicketPrice = firstInputBox.value * 150;
    increaseDecrease(firstInputBox, firstTicketPrice, true);
    // calculate(firstInputBox, firstTicketPrice);
    // subTotal.innerText = parseFloat(firstTicketPrice) + parseFloat(economyTicketPrice);
    subTotal.innerText = parseFloat(firstInputBox.value * 150) + parseFloat(economyInputBox.value * 100);
    vat.innerText = parseInt(subTotal.innerText) * (10 / 100)
    total.innerText = parseInt(subTotal.innerText) + parseInt(vat.innerText);
})




// first class decrease button handler
firstDecreaseButton.addEventListener('click', () => {
    // firstInputBox.value = parseInt(firstInputBox.value) - 1;
    // firstTicketPrice = firstInputBox.value * 150;

    increaseDecrease(firstInputBox, firstTicketPrice, false)
    // subTotal.innerText = parseFloat(firstTicketPrice) + parseFloat(economyTicketPrice);
    subTotal.innerText = parseFloat(firstInputBox.value * 150) + parseFloat(economyInputBox.value * 100);
    vat.innerText = parseInt(subTotal.innerText) * (10 / 100)
    total.innerText = parseInt(subTotal.innerText) + parseInt(vat.innerText);



    console.log(firstTicketPrice);
})

// economy increase button handler
economyIncreaseButton.addEventListener('click', () => {
    economyInputBox.value = parseInt(economyInputBox.value) + 1;
    economyTicketPrice = economyInputBox.value * 100;
    // subTotal.innerText = parseFloat(firstTicketPrice) + parseFloat(economyTicketPrice);
    subTotal.innerText = parseFloat(firstInputBox.value * 150) + parseFloat(economyInputBox.value * 100);
    vat.innerText = parseInt(subTotal.innerText) * (10 / 100)
    total.innerText = parseInt(subTotal.innerText) + parseInt(vat.innerText);


    console.log(economyTicketPrice);
})

// economy decrease button handler
economyDecreaseButton.addEventListener('click', () => {
    economyInputBox.value = parseInt(economyInputBox.value) - 1;
    economyTicketPrice = economyInputBox.value * 100;
    // subTotal.innerText = parseFloat(firstTicketPrice) + parseFloat(economyTicketPrice);
    subTotal.innerText = parseFloat(firstInputBox.value * 150) + parseFloat(economyInputBox.value * 100);
    vat.innerText = parseInt(subTotal.innerText) * (10 / 100)
    total.innerText = parseInt(subTotal.innerText) + parseInt(vat.innerText);



    console.log(economyTicketPrice);
})

// created function to avoid duplicate code

