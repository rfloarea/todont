
export { getNewTodont };
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

function getNewTodont() {
    let title = prompt("What don't you want to do?");
    let description = prompt("What is your reason?");
    let duration = prompt("For how long will you not do this?");
    let importance = prompt("How important is this?");
    const newTodont = new Todont(title, description, duration, importance);
    console.table(newTodont); // it works!!
    return newTodont;
}

getNewTodont();


// export const todont1 = new Todont('no more twitter', 'you need to focus on coding', '8 hours', 'high');
// console.table(todont1); // it works!!
// console.log(todont1 instanceof Todont); // logs "true"
// console.log(todont1.getTitle()) // logs "no more twitter"
// console.log(todont1.setTitle('no more whatsapp')) // logs "no more whatsapp"
// console.table(todont1); // it works!!