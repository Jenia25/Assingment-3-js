// (while loop)
function sumUpTo(n) {
  let i = 1;
  let sum = 0;
  while (i <= n) {
    sum += i; 
    i++;
  }
  return sum;
}
console.log("Sum up to 5:", sumUpTo(5)); 



// 2. (decrement)
function printReverse(n) {
  let i = n;
  while (i >= 1) {
    console.log("Reverse:", i);
    i--; 
  }
}
printReverse(10);



// 3. (do…while loop)
function factorial(n) {
  let i = 1;
  let fact = 1;
  do {
    fact *= i;
    i++;
  } while (i <= n);
  return fact;
}
console.log("Factorial of 5:", factorial(5)); b 



// 4.(while loop)
function getEvens(arr) {
  let i = 0;
  let evens = [];
  while (i < arr.length) {
    if (arr[i] % 2 === 0) evens.push(arr[i]);
    i++;
  }
  return evens;
}
console.log("Even numbers:", getEvens([1,2,3,4,6,9,10]));




// 5. (do…while loop)
function fibonacci(n) {
  let a = 0, b = 1, i = 0;
  do {
    console.log("Fibo:", a);
    let temp = a + b;
    a = b;
    b = temp;
    i++;
  } while (i < n);
}
fibonacci(7);




// 6. Object loop)
function printObject(obj) {
  let keys = Object.keys(obj);
  let i = 0;
  while (i < keys.length) {
    let key = keys[i];
    console.log(key + ": " + obj[key]);
    i++;
  }
}
printObject({name:"Smriti", age:20, city:"Dhaka"});





// 7. Increment / Decrement 
function Counter() {
  this.count = 0;
  this.increment = function() {
    this.count++;
    console.log("Count after increment:", this.count);
  };
  this.decrement = function() {
    this.count--;
    console.log("Count after decrement:", this.count);
  };
}
let c = new Counter();
c.increment();
c.increment();
c.decrement();




// 8. (while loop)
function reverseString(str) {
  let rev = "";
  let i = str.length - 1;
  while (i >= 0) {
    rev += str[i];
    i--;
  }
  return rev;
}
console.log("Reverse string:", reverseString("hello"));



// 9.] (while loop)
function primesUpTo(n) {
  let i = 2;
  let primes = [];
  while (i <= n) {
    let prime = true;
    for (let j = 2; j <= Math.sqrt(i); j++) {
      if (i % j === 0) { prime = false; break; }
    }
    if (prime) primes.push(i);
    i++;
  }
  return primes;
}
console.log("Primes up to 20:", primesUpTo(20));




// 10. do…while 
function sumDigits(num) {
  let sum = 0;
  do {
    sum += num % 10;
    num = Math.floor(num / 10);
  } while (num > 0);
  return sum;
}
console.log("Sum of digits of 1234:", sumDigits(1234)); // 10




// 11. Array (while loop)
function maxInArray(arr) {
  let i = 0;
  let max = arr[0];
  while (i < arr.length) {
    if (arr[i] > max) max = arr[i];
    i++;
  }
  return max;
}
console.log("Max in array:", maxInArray([3,7,1,9,2]));



// 12. do…while 
function countdown(n) {
  do {
    console.log("Countdown:", n);
    n--;
  } while (n >= 0);
}
countdown(5);
