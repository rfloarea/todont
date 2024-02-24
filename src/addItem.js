import { storedData } from ".";

function addItemToLocalStorage(obj) {
    // add our new item to our array
    storedData.push(obj);    
    // console.table(itemArray);
    // then store stringified array
    localStorage.setItem('itemArray', JSON.stringify(storedData));
}

export { addItemToLocalStorage };