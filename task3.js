//3) calculate the volume of an equilateral triangle prism from the length of one side of the triangle and the length of the flat edge

function equilateralTrianglePrismVolume(sideLength, prismLength) {
    if (sideLength <= 0 || prismLength <= 0) {
        
    }

    const triangleArea = (Math.sqrt(3) / 4) * Math.pow(sideLength, 2);
    const volume = triangleArea * prismLength;

    return volume;
}

const sideLength = 5;
const prismLength = 10;
const volume = equilateralTrianglePrismVolume(sideLength, prismLength);
console.log(`The volume of the equilateral triangle prism is ${volume.toFixed(2)} cubic units.`);
