/*/ Write a program to calculate the **volume** of a cylinder. Start with a variable that contains the **diameter** of the end of the circle, and another variable that references the **height** in meters.

let radius = 1

let height = 2

let volume = Math.PI*radius**2*height

console.log(`the volume of a cylinder with the radius ${radius} and the height ${height} is ${volume}`);
/*/

function cylinderVol (radius, height){
    let volCylinder = Math.PI*radius**2*height;
    return volCylinder;
}
console.log(cylinderVol(76, 45));
console.log(cylinderVol(56, 67));
console.log(cylinderVol(24, 33));