import { todontArray } from ".";
export { addTodont };

function addTodont(newObj) {
    todontArray.push(newObj);
    console.table(todontArray);
};