function itemNumber(inputId, isIncrease) {
    const inputField = document.getElementById(inputId);
    const inputValueString = inputField.value;
    const previousInputValue = parseInt(inputValueString);
    let newInputValue = 0;
    if (isIncrease) newInputValue = previousInputValue + 1;
    else newInputValue = previousInputValue - 1;
    inputField.value = newInputValue;
    return newInputValue;
}

function itemPrice(priceId, price, newInputValue) {
    const priceElement = document.getElementById(priceId);
    const totalPrice = newInputValue * price;
    priceElement.innerText = totalPrice;
}

function getTextElementValueById(elementId) {
    const element = document.getElementById(elementId);
    const elementTextString = element.innerText;
    const elementTextNumber = parseInt(elementTextString);
    return elementTextNumber;
}

function setTextElementValueById(elementId, value) {
    const element = document.getElementById(elementId);
    element.innerText = value;
}

function subTotal() {
    const phoneTotalPrice = getTextElementValueById("phone-total");
    const caseTotalPrice = getTextElementValueById("case-total");
    const subTotalPrice = phoneTotalPrice + caseTotalPrice;
    setTextElementValueById("sub-total", subTotalPrice);
    return subTotalPrice;
}

function tax(subTotalPrice) {
    const totalTax = subTotalPrice * 0.15;
    const totalTaxFixedString = totalTax.toFixed(1);
    const totalTaxFixed = parseFloat(totalTaxFixedString);
    setTextElementValueById("tax", totalTaxFixed);
    return totalTaxFixed;
}

function total(subTotalPrice, totalTaxFixed) {
    const totalPrice = subTotalPrice + totalTaxFixed;
    setTextElementValueById("total", totalPrice);
}
