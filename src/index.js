console.log('it works!!');

// let's start by initializing our empty list of items (also known as "todonts")
const todontArray = [];
console.log(todontArray); // it works!!

// now what do we do? 
// now we need to tell the computer how to build Todont objects
// using user inputs (this can come later)

// first, let's use a class declaration

class Todont {
    // initialize our Todont objects
    constructor (title, description, duration, importance) {
        this.title = title;
        this.description = description;
        this.duration = duration;
        this.importance = importance;
    }
    // we'll need some instance methods too
    getTitle() {
        return this.title;
    }
    setTitle(newTitle) {
        // code to create or update our Todont title
        return this.title = newTitle;
    }
};

const todont1 = new Todont('no more twitter', 'you need to focus on coding', '8 hours', 'high');
console.table(todont1); // it works!!