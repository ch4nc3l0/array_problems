function printReverse(array){
    reversedArray = array.reverse();
    reversedArray.forEach(item => {
        console.log(item);
    });
}

// Without using reverse
function prReverse(array){
    let reversedArray = [];
    array.forEach(item =>{
        reversedArray.unshift(item);
    });
    console.log(reversedArray);
}