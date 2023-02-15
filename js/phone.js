document.getElementById("phone-plus").addEventListener("click", function () {
    const newInputValue = itemNumber("phone-input-field", true);
    itemPrice("phone-price", 1219, newInputValue);
});

document.getElementById("phone-minus").addEventListener("click", function () {
    const newInputValue = itemNumber("phone-input-field", false);
    itemPrice("phone-price", 1219, newInputValue);
});
