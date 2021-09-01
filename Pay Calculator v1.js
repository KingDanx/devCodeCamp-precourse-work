//Dan Prudhomme
//PayCalculator v1

let hoursWorked = prompt("Hours worked?");
//let hoursWorked = 35;
let payRate = prompt("Hourly Rate?");
//let payRate = 7.25;

let overTimeWorked = hoursWorked - 40;
let overTimeRate = payRate * 1.5;

if (hoursWorked > 40){ //Overtime calculation
 
    totalPay = hoursWorked * payRate + (overTimeWorked * overTimeRate);
    
}

else{
    let totalPay = hoursWorked * payRate;
}



console.log(totalPay);