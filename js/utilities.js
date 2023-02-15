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

function getElementById(elementId) {
    const element = document.getElementById(elementId);
    const elementTextString = element.innerText;
    const elementTextNumber = parseInt(elementTextString);
    return elementTextNumber;
}

function subTotal(phonePrice, casePrice) {

}
