let counter = 0;

function inception() {
  if (counter > 3) {
    return "done";
  }
  counter++;
  return inception();
}

console.log(inception());

// 5! === 5 * 4 * 3 * 2 * 1 =120
function factorial(number) {
  if (number === 1) {
    return 1;
  } else {
    return number * factorial(number - 1);
  }
}

console.log(factorial(5));

//top-down approach
function sum(array) {
  // Base case: only one element in the array
  if (array.length === 1) {
    return array[0];
  }
  // Recursive case: first element + sum of rest
  return array[0] + sum(array.slice(1));
}

console.log(sum([1, 2, 3, 4, 5]));

//The Fibonacci sequence is a series where each number is the sum of the two preceding ones, starting typically with 0 and 1:
//find the nth number in sequence
//0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55…
function fibonacci(n) {
  if (n === 0 || n == 1) {
    return n;
  }

  // add the two previous numbers ,  so if n = 10, add fib of 8th and 9th
  return fibonacci(n - 2) + fibonacci(n - 1);
}

console.log(fibonacci(10))


