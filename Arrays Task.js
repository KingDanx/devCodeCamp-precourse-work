//Dan Prudhomme
//Arrays Task
let grandTotal =0; 
let testArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

function array(arrayOfNumbers = []){      
    for(i = 0; i < arrayOfNumbers.length; i++){
        let oddCheck = arrayOfNumbers[i];
        oddCheck %= 2;
        if(oddCheck != 0){
            console.log(arrayOfNumbers[i]);
            grandTotal += arrayOfNumbers[i];
        }     
    }
    return grandTotal;
   
}

array(testArray);
console.log(grandTotal);

