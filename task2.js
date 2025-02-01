// 2) convert a windspeed to  a description using The Beaufort Wind Scale.

function calculateWindSpeed (scale){
    // v = 0.836 B^3/2
    let velocity = (0.838)*(scale^(3/2));
    return velocity;
}

console.log(calculateWindSpeed(9.5))