import { todontArray } from ".";


function addToArray(obj) {
    todontArray.push(obj);
    console.table(todontArray);
    return;
}

export { addToArray };