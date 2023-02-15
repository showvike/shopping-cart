document.getElementById("case-plus").addEventListener("click", function () {
    const newInputValue = itemNumber("case-input-field", true);
    itemPrice("case-total", 59, newInputValue);
    const subTotalPrice = subTotal();
    const totalTaxFixed = tax(subTotalPrice);
    total(subTotalPrice, totalTaxFixed)
});

document.getElementById("case-minus").addEventListener("click", function () {
    const newInputValue = itemNumber("case-input-field", false);
    itemPrice("case-total", 59, newInputValue);
    const subTotalPrice = subTotal();
    const totalTaxFixed = tax(subTotalPrice);
    total(subTotalPrice, totalTaxFixed)
});
