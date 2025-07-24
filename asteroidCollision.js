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
var asteroidCollision = function(asteroids) {
    const mystack = [];
    
    for (let asteroid of asteroids) {
        let canCollide = true;
        
        while (canCollide) {
            // If stack is empty, push asteroid
            if (!mystack.length) {
                mystack.push(asteroid);
                canCollide = false;
                continue;
            }
            
            let last = mystack[mystack.length - 1];
            
            // Same direction or both moving left, no collision
            if (Math.sign(last) === Math.sign(asteroid) || (last < 0 && asteroid < 0)) {
                mystack.push(asteroid);
                canCollide = false;
            }
            // Opposite directions (last moving right, current moving left)
            else if (last > 0 && asteroid < 0) {
                if (Math.abs(last) < Math.abs(asteroid)) {
                    mystack.pop(); // Remove smaller last asteroid
                    // Continue to check if new asteroid collides with next in stack
                    continue;
                } else if (Math.abs(last) > Math.abs(asteroid)) {
                    canCollide = false; // Skip current asteroid
                } else {
                    mystack.pop(); // Both equal, remove last
                    canCollide = false; // Don't push current
                }
            }
            // No other case needs collision check (e.g., last < 0, asteroid > 0 won't collide)
            else {
                mystack.push(asteroid);
                canCollide = false;
            }
        }
    }
    
    return mystack;
};
  
  console.log(asteroidCollision([10,2,-5]));
  