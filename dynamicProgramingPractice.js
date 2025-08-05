//using memoization
function fibonacci(n, memo = {}) {
  if (n === 0) return 0;
  if (n === 1) return 1;

  if (memo[n] !== undefined) {
    return memo[n]; // Return cached result
  }

  memo[n] = fibonacci(n - 1, memo) + fibonacci(n - 2, memo); // Store result
  return memo[n];
}

console.log(fibonacci(6)); // Fast

//using bottom-up (intuitive looping)

function bfibonacci(n) {
  if (n === 0) {
    return 0;
  }

  let a = 0;
  let b = 1;

  //a becomes b , b becomes a+ b
  for (let i = 1; i < n; i++) {
    [a, b] = [b, a + b];
  }

  return b;
}


console.log(bfibonacci(6))