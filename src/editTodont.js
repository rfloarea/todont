import { storedData } from ".";

// how do we implement this?
// we grab our array and find the item we want
// we run the proper instance method
// and then nicely return our item back home

export function editItem() {
    let index = parseInt(prompt("Which TODONT do you want to edit? (use index)"));
    console.log(typeof index); // number
    let key = prompt("what do you want to edit? (use key)");
  
    const item = storedData[index];
    console.table(item);
    if (key == "title") {
        item.title = prompt("Edit title");
        console.table(item);
    } else if (key == "description") {
        item.description = prompt("Edit description");
        console.table(item);
    } else if (key == "duration") {
        item.duration = prompt("Edit duration");
        console.table(item);
    } else if (key == "importance") {
        item.importance = prompt("Edit importance");
        console.table(item);
    }
    console.table(storedData);

};