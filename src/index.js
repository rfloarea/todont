import { addItemToLocalStorage } from "./addItem";

// export const todontArray = [];



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

addItemToLocalStorage(newItem); // it works!

// how do we have the user add multiple items?