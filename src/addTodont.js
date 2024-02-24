import { todontArray } from ".";
import { getNewTodont } from ".";


const addNewTodont = (function() {
    
    let newTodont = () => getNewTodont;

    const newArray = () => todontArray.push(newTodont);

    return {
        newArray
    }
})();



export { addNewTodont };