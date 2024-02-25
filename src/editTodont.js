import { storedData } from ".";

export function editItem() {
    const index = parseInt(prompt("Which TODONT do you want to edit? (use index)"));
    const key = prompt("what do you want to edit? (use key)");
    const item = storedData[index];
// this feels messy, but it works soooooo
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