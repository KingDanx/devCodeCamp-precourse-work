//Dan Prudhomme
//Functions Task

function addTwoNumbers(num1, num2){
    
    let result = num1 + num2;
    return result;
}

function subtractTwoNumbers(num1, num2){
        
    let result;
    if (num1 > num2){     //added conditional to avoid a negative number
        result = num1 - num2;
    }
    else if (num1 < num2){
        result = num2 - num1;
    }
    return result;
}

function mathAttack(num1, num2, num3){
    
    let result = num1 * num2 /num3;
    return result;
}

function runCalculations(){
    console.log(addTwoNumbers(100, 200));
    console.log(subtractTwoNumbers(100, 200));
    console.log(mathAttack(100, 10, 2));
}

runCalculations();