/**We are given an array asteroids of integers representing asteroids in a row. The indices of the asteriod in the array represent their relative position in space.

For each asteroid, the absolute value represents its size, and the sign represents its direction (positive meaning right, negative meaning left). Each asteroid moves at the same speed.

Find out the state of the asteroids after all collisions. If two asteroids meet, the smaller one will explode. If both are the same size, both will explode. Two asteroids moving in the same direction will never meet.

 

Example 1:

Input: asteroids = [5,10,-5]
Output: [5,10]
Explanation: The 10 and -5 collide resulting in 10. The 5 and 10 never collide.
Example 2:

Input: asteroids = [8,-8]
Output: []
Explanation: The 8 and -8 collide exploding each other.
Example 3:

Input: asteroids = [10,-5,-2]
Output: [10]
Explanation: The 2 and -5 collide resulting in -5. The 10 and -5 collide resulting in 10.
 

Constraints:

2 <= asteroids.length <= 104
-1000 <= asteroids[i] <= 1000
asteroids[i] != 0 */

/**
 * @param {number[]} asteroids
 * @return {number[]}
 */
var asteroidCollision = function (asteroids) {
  //loop through input , push item to stack , on each iteration check if the last item was is same direction and ignore, if opposite direction skip current or pop the smaller size
  //if the same size remove both , use while loop

  const mystack = [];
  let last = mystack[mystack.length-1];

  for (let asteroid of asteroids) {
   while (mystack.length > 0 && Math.sign(last) !== Math.sign(asteroid));
    {
      if (Math.sign(last) === Math.sign(asteroid)) {
        mystack.push(asteroid);
        // continue;
      } else if (Math.sign(last) !== Math.sign(asteroid)) {
        if (Math.abs(last) > Math.abs(asteroid)) {
          continue;
        } else if (Math.abs(last) < Math.abs(asteroid)) {
          mystack.pop();
          mystack.push(asteroid);
          break;
        }
      }
    }
  }

  return mystack;
};

console.log(asteroidCollision([5, 10, -5]));
