/*
  1.1
    Constant
  1.2
    Linear
  2
    Constant - The function takes in one value and determines if the mod
    is equal to 0 or not. No matter the size of the value, it will always
    run once.
  3
    Polynomial(quadratic) - The nested for-loop goes through the data twice,
    making it polynomial.
  4
    Linear - As the data set grows, the number of times the for-loop runs
    increases at the same rate as the data set.
  5
    Linear - As the data set grows, the potential that the for-loop runs
    more increases at the same rate as the data set. It might not run more,
    but the worst-case scenario increases at a linear rate.
  6
    Polynomial - The for-loops are nested, so as the data set increases,
    the run-time increases substantially more for each addition.
  7
    This algorithm returns the Fibonacci sequence up to the number used
    as an input. The runtime complexity is linear, as the number of steps
    increases at a rate of 5 to each time the input increases by 1.
  8
    Logarithmic - An increase in the data set will slightly change the run
    time of the algorithm, but at a slower rate than the increase to the
    data set.
  9
    Constant - No matter how large the data set is, this algorithm will run
    once.
  10
    This algorithm is checking if the number used as an input is a prime number.
    It is linear.

*/

function hanoi(disks, start, aux, destination) {
  if(disks > 0){
    hanoi(disks - 1, start, destination, aux)
    console.log('moved disk '+disks+' from '+start+' to '+destination)
    hanoi(disks - 1, aux, start, destination)
  }
}

/*
  With 5 disks, after 7 recursive calls, disks 1, 2, and 3 are at the destination
  and disks 4 and 5 are still at the start.

  3 disks: 7 steps
  4 disks: 15 steps
  5 disks: 31 steps

  The runtime of the algorithm is polynomial
*/

function countingSheep(num) {
  for(let i = 0; i <= num; i++) {
    console.log(i+': Another sheep jumps over the fence');
  }
  console.log('All sheep jumped over the fence');
}

function powerCalculator(num, pow) {
  let sum = num;
  for(let i = 1; i < pow; i++ ) {
    sum = sum * num;
  }
  return sum;
}

function reverseString(string) {
  let newString = '';
  for(let i = 0; i < string.length; i++) {
    newString = string[i] + newString;
  }
  console.log(newString);
}

function triangularNum(num) {
  let sum = 1;
  for(let i = 2; i <= num; i++) {
    sum = sum + i;
  }
  return sum;
}

function stringSplitter(string, split) {
  let newString = '';
  for(let i = 0; i < string.length; i++) {
    if(string[i] === split) {
      newString = newString + ' ';
    } else {
      newString = newString + string[i];
    }
  }
  console.log(newString);
}

function fibonacci(num) {
  let totalArray = [1, 1];
  for(let i = 2; i < num; i++) {
    totalArray[i] = totalArray[i-1] + totalArray[i-2];
  }
  return totalArray[num-1];
}

function factorial(num) {
  let sum = 1;
  for(let i=1; i<=num; i++) {
    sum = i * sum;
  }
  return sum;
}

/*
  13. Big O for recursive problems:
    1. linear
    2. linear
    3. linear
    4. linear
    5. linear
    6. linear
    7. logarithmic

  14. Big O for iterative problems:
    1. linear
    2. linear
    3. linear
    4. linear
    5. linear
    6. linear
    7. linear
*/