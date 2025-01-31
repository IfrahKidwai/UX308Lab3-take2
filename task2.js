/*/ Take a variable with a **numericgrade** and output the corresponding **lettergrade**

let numericgrade = 60

let lettergrade = "f" 

if (numericgrade >=90){
    lettergrade="A+"
} else if (numericgrade >=80){
    lettergrade= "A"
}else if (numericgrade >=70){
    lettergrade= "B"
}else if (numericgrade >=60){
    lettergrade= "c"
}else if (numericgrade >=50){
    lettergrade= "D"
}
console.log(`${numericgrade} numericgrade is ${lettergrade} lettergrade`)
/*/

function nGrade (numericgrade){
    if (numericgrade >=90){
        return("A+");
    } else if (numericgrade >=80){
        return("A");
    }else if (numericgrade >=70){
        return("B");
    }else if (numericgrade >=60){
        return("C");
    }else if (numericgrade >=50){
        return("D");
    }else if (numericgrade <50){
        return("F");
    }
}
console.log(nGrade(68));
console.log(nGrade(98));
console.log(nGrade(30));