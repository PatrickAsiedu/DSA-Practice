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

console.log(factorial(5))

function sum(array) {

  // Base case: only one element in the array
  if (array.length === 1) {
    return array[0];
  }
  // Recursive case: first element + sum of rest
  return array[0] + sum(array.slice(1));
}

console.log(sum([1,2,3,4,5]))