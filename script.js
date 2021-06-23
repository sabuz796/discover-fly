let firstIncreaseButton = document.querySelector('#first-increase-button');
let firstDecreaseButton = document.querySelector('#first-decrease-button');
let firstInputBox = document.querySelector('#first-input-box');

let economyIncreaseButton = document.querySelector('#economy-increase-button');
let economyDecreaseButton = document.querySelector('#economy-decrease-button');
let economyInputBox = document.querySelector('#economy-input-box');

let subTotal = document.querySelector('#subtotal');
let vat = document.querySelector('#vat');
let total = document.querySelector('#total');

let bookNow = document.querySelector('#book-now');


let firstTicketPrice;
let economyTicketPrice;

// set initial value of input boxes
firstInputBox.value = 0;
economyInputBox.value = 0;

// first class increase button handler
firstIncreaseButton.addEventListener('click', () => {
    increaseDecrease(firstInputBox, firstTicketPrice, true, 150);
    calculation(subTotal, firstInputBox, economyInputBox, vat, total);
})

// first class decrease button handler
firstDecreaseButton.addEventListener('click', () => {
    increaseDecrease(firstInputBox, firstTicketPrice, false, 150);
    calculation(subTotal, firstInputBox, economyInputBox, vat, total);
})

// economy increase button handler
economyIncreaseButton.addEventListener('click', () => {
    increaseDecrease(economyInputBox, economyTicketPrice, true, 100);
    calculation(subTotal, firstInputBox, economyInputBox, vat, total);
})

// economy decrease button handler
economyDecreaseButton.addEventListener('click', () => {
    increaseDecrease(economyInputBox, economyTicketPrice, false, 100);
    calculation(subTotal, firstInputBox, economyInputBox, vat, total);

})

// created function to avoid duplicate code
function increaseDecrease(inputBox, ticketPrice, isIncrease, value){
    if(isIncrease == true){
        inputBox.value = parseInt(inputBox.value) + 1;     
    }
    else{
        inputBox.value = parseInt(inputBox.value) - 1;
        if(inputBox.value < 0){
                swal({
                    title: "opps! Negative number doesn't be allowed here",
                    icon: "warning",
                  });
            
        }
    }  
    ticketPrice = inputBox.value * value;
}

function calculation(subTotal, firstInputBox, economyInputBox, vat, total){
    subTotal.innerText = parseFloat(firstInputBox.value * 150) + parseFloat(economyInputBox.value * 100);
    vat.innerText = parseInt(subTotal.innerText) * (10 / 100);
    total.innerText = parseInt(subTotal.innerText) + parseInt(vat.innerText);
}

bookNow.addEventListener('click',()=>{
    swal({
        icon: "success",
        title: "Discover fly!",
        text: "Your invoice is here",
      });
})