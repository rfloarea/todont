import { addItemToLocalStorage } from "./addItem";
import { removeItem } from "./removeTodont";

const removeBtn = document.createElement('button');
document.body.appendChild(removeBtn);
removeBtn.textContent = "Remove a TODONT";
removeBtn.addEventListener('click', removeItem);

export const storedData = (() => {
    let userData = localStorage.getItem('itemArray')

    if (userData) {   
        let itemString = JSON.parse(userData)
        let itemArray = [...itemString];
        console.table(itemArray);
        return itemArray;
    } else {
        return [];
    }
})();


class Todont {
    constructor (title, description, duration, importance) {
        this.title = title;
        this.description = description;
        this.duration = duration;
        this.importance = importance;
    }
    getTitle() {
        return this.title;
    }
    setTitle(newTitle) {
        return this.title = newTitle;
    }
};

const newItem = (() => {
    let title = prompt("What don't you want to do?");
    let description = prompt("What is your reason?");
    let duration = prompt("For how long will you not do this?");
    let importance = prompt("How important is this?");
    const newItem = new Todont(title, description, duration, importance);
    console.table(newItem);
    return newItem;
})();

addItemToLocalStorage(newItem);
console.table(storedData);