// Asal sayılar
function findPrime(...numbers) {
    for (let i = 0; i < numbers.length; i++) {
        
        let isPrime = 0;

        for (let j =2; j < numbers[i]; j++) {
            if(numbers[i] % j == 0){
                isPrime++;    
            }
        }

        if (isPrime == 0) {
            console.log(numbers[i]+ " asaldır.") 
        }
        else{
            console.log(numbers[i]+ " asal değildir.")
        }
        
        
    }
}

findPrime(2,5,8,21, 13)
findPrime(3,5)

// Arkadaş sayılar

function findFriendNumbers(num1, num2) {
    let num1bolensTop = 0; 
    let num2bolensTop = 0; 
    for (let i = 1; i < num1; i++) {         
        if (num1%i == 0) {
            num1bolensTop +=i;
        }       
    }
   if(num1bolensTop == num2){
    for (let i = 1; i < num2; i++) {         
        if (num2%i == 0) {
            num2bolensTop +=i;
        }       
    }
    if (num2bolensTop == num1) {
       console.log("Girilen sayılar arkadaş sayılardır.") 
    }
   }
   else{
    console.log("Girilen sayılar arkadaş sayı değildir.") 
   }
   
}

findFriendNumbers(220,284)

//1000 e kadar olan mükemmel sayılar

let numbolensTop = 0; 

for (let i = 0; i < 1000; i++) {  
    for (let j = 1; j <= i; j++) {
        if (i%j == 0) {
            numbolensTop +=j;
        }
        if(i*2 == numbolensTop)  {
            console.log(i +" mükemmel sayıdır.")
            numbolensTop = 0;
        }       
    }
    numbolensTop = 0;
}

// 1000 e kadar olan asal sayılar

for (let i = 2; i < 1000; i++) { 
    let isPrime = 0;

    for (let j =2; j < i; j++) {
        if(i% j == 0){
            isPrime++;    
        }
    }

    if (isPrime == 0) {
        console.log(i+ " asal sayıdır.") 
    }
}