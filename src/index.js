import { addToArray } from "./addTodont";

export const todontArray = [];



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

// what if we wrapped this in an IIFE? 
// why? 
// so we can more cleanly export the newTodont
// why?
// so we can export an object, not a function

const newTodont = (() => {
    let title = prompt("What don't you want to do?");
    let description = prompt("What is your reason?");
    let duration = prompt("For how long will you not do this?");
    let importance = prompt("How important is this?");
    const newTodont = new Todont(title, description, duration, importance);
    console.table(newTodont);
    return newTodont;
})();

addToArray(newTodont);