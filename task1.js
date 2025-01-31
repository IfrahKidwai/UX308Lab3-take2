/*/ Take a variable with distance in **kilometres** as input and output the same distance *converted* to **miles**

let kilometers = 15

let miles = kilometers/1.609

console.log(`${kilometers} kilometers is ${miles} miles`);
/*/


function kilometerstomiles (kiloinput){
    let miles = kiloinput * 0.621371;
    return miles;
}

console.log(kilometerstomiles(6));
console.log(kilometerstomiles(2));
console.log(kilometerstomiles(8));