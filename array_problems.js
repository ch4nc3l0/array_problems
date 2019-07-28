// Create function that prints an array backwards
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

// Create a function that returns true if all items are identical
function isUniform(array){
    let tracker = array[0]
    let answer = "true"
    array.forEach(item =>{
        if (answer === "true"){
            if (tracker === item){
                answer = "true"
            }
            else{ 
                answer = "false" 
            }
        }
    })
    console.log(answer)
}