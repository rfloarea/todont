import { storedData } from ".";

function addItemToLocalStorage(obj) {
    storedData.push(obj);    
    localStorage.setItem('itemArray', JSON.stringify(storedData));
}

export { addItemToLocalStorage };