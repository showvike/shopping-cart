document.getElementById("phone-plus").addEventListener("click", function () {
    const newInputValue = itemNumber("phone-input-field", true);
    itemPrice("phone-total", 1219, newInputValue);
    const subTotalPrice = subTotal();
    const totalTaxFixed = tax(subTotalPrice);
    total(subTotalPrice, totalTaxFixed) 
});

document.getElementById("phone-minus").addEventListener("click", function () {
    const newInputValue = itemNumber("phone-input-field", false);
    itemPrice("phone-total", 1219, newInputValue);
    const subTotalPrice = subTotal();
    const totalTaxFixed = tax(subTotalPrice);
    total(subTotalPrice, totalTaxFixed)
});
