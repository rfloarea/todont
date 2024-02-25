import { addItemToLocalStorage } from "./addItem";
import { removeItem } from "./removeItem";
import { clearAllItems } from "./clearAllItems";
import { editItem } from "./editTodont";

// button elements
const removeBtn = document.createElement('button');
document.body.appendChild(removeBtn);
removeBtn.textContent = "Remove a TODONT";
removeBtn.addEventListener('click', removeItem);

const clearBtn = document.createElement('button');
document.body.appendChild(clearBtn);
clearBtn.textContent = "Clear all TODONTs";
clearBtn.addEventListener('click', clearAllItems);

const editBtn = document.createElement('button');
document.body.appendChild(editBtn);
editBtn.textContent = "Edit a TODONT";
editBtn.addEventListener('click', editItem);

// initialize and/or retrieve local storage
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

// item constructor (instance methods need some work)
class Todont {
    constructor (title, description, duration, importance) {
        this.title = title;
        this.description = description;
        this.duration = duration;
        this.importance = importance;
    }
    setTitle() {
        let newTitle = prompt("Edit title");
        return this.title = newTitle;
    }
    setDescription() {
        let newDesc = prompt("Edit description");
        return this.description = newDesc;
    }
    setDuration() {
        let newDur = prompt("Edit duration");
        return this.duration = newDur;
    }
    setImportant() {
        let newImp = prompt("Edit importance");
        return this.importance = newImp;
    }
};

// use prompts to instantiate our new objects
const newItem = (() => {
    let title = prompt("What don't you want to do?");
    let description = prompt("What is your reason?");
    let duration = prompt("For how long will you not do this?");
    let importance = prompt("How important is this?");
    const newItem = new Todont(title, description, duration, importance);
    console.table(newItem);
    return newItem;
})();

// this will have a nicer home some day <3
addItemToLocalStorage(newItem);
console.table(storedData);