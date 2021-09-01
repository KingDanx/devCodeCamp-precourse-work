//Dan Prudhomme
//PayCalculator v2
let totalPay;
let hoursWorked = prompt("Hours worked?");
//let hoursWorked = 35;
let payRate = prompt("Hourly Rate?");
//let payRate = 7.25;
let overTimeWorked = hoursWorked - 40;
let overTimeRate = payRate * 1.5; 
let overTimePay = overTimeWorked * overTimeRate;

if (hoursWorked > 40){ //Overtime calculation
    
    hoursWorked = 40;
    totalPay = hoursWorked * payRate + overTimePay;
    console.log("Normal hours: " + hoursWorked);
    console.log("Normal rate: $" + payRate);
    console.log("OT hours: " + overTimeWorked);
    console.log("OT rate: $" + overTimeRate);
    console.log("Total pay: $" + totalPay);
    
}

else{

    overTimeWorked = 0;
    totalPay = hoursWorked * payRate;
    console.log("Normal hours: " + hoursWorked);
    console.log("Normal rate: $" + payRate);
    console.log("OT hours: " + overTimeWorked);
    console.log("OT rate: $" + overTimeRate);
    console.log("Total pay: $" + totalPay);
        
}



//console.log(totalPay);