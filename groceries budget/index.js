let n = 1;
let pricelist = [];
let budget = 5000;

function Total(total, num) {
   return total + num;
}

document.querySelector(".add").addEventListener("click", () => {
   let price = Number(document.querySelector("#price").value);
   if (price === 0) {
      console.log(null);
   }
   else {
      let space = document.querySelector(".items");
      space.innerHTML += `<div class="item">ITEM ${n}: ${price} $ </div>`;
      n++;

      space += price;

      pricelist.push(price);

      document.querySelector("input").value = "";
      let total = document.querySelector(".total");
      let arrtotal = pricelist.reduce(Total);
      total.innerHTML = `Total :${arrtotal}`;
   }

});

document.querySelector(".refresh").addEventListener("click", () => {
   document.querySelector(".items").innerHTML = "";
   document.querySelector(".total").innerHTML = location.reload();
})

document.querySelector(".check").addEventListener("click", () => {
   let arrtotal = pricelist.reduce(Total)
   if (arrtotal < budget) {

      document.querySelector(".show").innerHTML = "under budget";
      document.querySelector(".show").style.color = "#047857"
      document.querySelector(".remains").innerHTML = `remains value : ${budget - arrtotal}`;
      document.querySelector(".remains").style.color="rgb(253, 245, 245)";

   }
   else if (arrtotal === budget) {
      document.querySelector(".show").innerHTML = 'Exact budget';
      document.querySelector(".remains").innerHTML = 'remains value : 0'
      document.querySelector(".show").style.color = "green"
   }
   else {
      document.querySelector(".show").innerHTML = "over budget"
      document.querySelector(".show").style.color = "red";
   }
})