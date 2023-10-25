const shoppingList = ["latte", "pane", "biscotti", "formaggio", "yogurt"];
console.log(shoppingList);
const shoppingListUl = document.getElementById("shoppinglist");
console.log(shoppingListUl);

let i = 0;
let shoppingListString = "";
while (i < shoppingList.length) {
    const shoppingElem = shoppingList[i];
    console.log(shoppingElem);

    shoppingListString += `<li>${shoppingElem}</li>`;
    console.log(shoppingListString);
    i++;
}

shoppingListUl.innerHTML = shoppingListString;
