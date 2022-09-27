const fibonacciNumbers = [1, 1, 2, 3, 5, 8, 13];

fibonacciNumbers.unshift(0)
fibonacciNumbers.push(21)
fibonacciNumbers.push(34)
console.log(fibonacciNumbers)

i = 0 

while(i < fibonacciNumbers.length){
  console.log(fibonacciNumbers[i]);
  i++
}