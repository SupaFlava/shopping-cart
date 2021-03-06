// Dom Selection
const plusBtn = document.querySelectorAll(".btn-add");
const itemsNumberInput = document.querySelectorAll(".input-number");
let quanitiyTotal = document.querySelectorAll(".item-sum");
let unitPrices = document.querySelectorAll(".unit-price");
const minusBtn = document.querySelectorAll(".btn-minus");
const totalValue = document.querySelector(".cart-total");

// Calc Total Function

function calcTotal() {
  let sum = 0;
  for (let i = 0; i < quanitiyTotal.length; i++) {
    sum += parseInt(quanitiyTotal[i].innerText.replace("$", ""));
    totalValue.innerText = ` Total : $${sum}`;
  }
}

// remove Button
const deleteItems = document.querySelectorAll(".delete");

deleteItems.forEach((del) => {
  del.addEventListener("click", () => {
    del.parentElement.parentElement.remove();
  });
});

// Add Items
function addItemToList() {
  for (let i = 0; i < plusBtn.length; i++) {
    plusBtn[i].addEventListener("click", () => {
      itemsNumberInput[i].value++;
      let unitPrice = parseInt(unitPrices[i].innerText.replace("$", ""));

      quanitiyTotal[i].innerText = ` $ ${
        itemsNumberInput[i].value * unitPrice
      }`;
      calcTotal();
    });
  }
}
addItemToList();

// Remove Items

function removeItemFromList() {
  for (let i = 0; i < minusBtn.length; i++) {
    minusBtn[i].addEventListener("click", () => {
      if (itemsNumberInput[i].value < 1) {
        return;
      }

      itemsNumberInput[i].value--;
      let unitPrice = parseInt(unitPrices[i].innerText.replace("$", ""));

      quanitiyTotal[i].innerText = ` $ ${
        itemsNumberInput[i].value * unitPrice
      }`;
      calcTotal();
    });
  }
}
removeItemFromList();

// Like Button
const likes = document.querySelectorAll(".fa-heart");

likes.forEach((like) => {
  like.addEventListener("click", () => {
    like.classList.toggle("fas");
  });
});
