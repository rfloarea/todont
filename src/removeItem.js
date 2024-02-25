import { storedData } from ".";

export function removeItem() {
    let index = parseInt(prompt("Which TODONT do you want to remove (use the index from the table)"));
    storedData.splice(index, 1);
    localStorage.setItem('itemArray', JSON.stringify(storedData));
    console.table(storedData);
};  