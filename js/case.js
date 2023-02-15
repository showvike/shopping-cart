document.getElementById("case-plus").addEventListener("click", function () {
    const newInputValue = itemNumber("case-input-field", true);
    itemPrice("case-price", 59, newInputValue);
});

document.getElementById("case-minus").addEventListener("click", function () {
    const newInputValue = itemNumber("case-input-field", false);
    itemPrice("case-price", 59, newInputValue);
});
