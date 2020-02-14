/**
 * This method returns a random number between 0 and the length of a given list of values
 * @param {Array} valueList the list with the values
 */
function getRamdonIndex(valueList) {
    return Math.floor(Math.random() * valueList.length);
};

/**
 * This method gets the value for a given index of a given list of values
 * @param {Array} valueList the list of values
 * @param {Integer} index the index value of the element
 */
function getValue(valueList, index) {
    return valueList[index];
};

function assignValueToScope(list, listType) {
    if (list.length > 0 ) {
        // Get the index of the element
        var listIndex = getRamdonIndex(list);
        // Get the value of the element
        const result = getValue(list, listIndex);
        // Delete the element from the list
        list.splice(listIndex, 1);
        // Set the value of the element
        return result;
    } else {
        if (listType === 'director') {
            alert('No quedan directores por asignar');
            return '¡BUENA SUERTE A TODOS!';
        } else {
            alert('No quedan fechas por asignar');
            return '¡BUENA SUERTE A TODOS!';
        }


    }
}
