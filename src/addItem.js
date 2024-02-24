// import { todontArray } from ".";

// TODO: refactor to use localStorage

function addItemToLocalStorage(obj) {
    // save our item to a nice variable
    // const newItem = obj;
    // then stringify
    localStorage.setItem('title', JSON.stringify(obj))
    // todontArray.push(obj);
    // console.table(todontArray);
    // return;
}

export { addItemToLocalStorage };