var MyHashMap = /** @class */ (function () {
//   [
//     undefined, // index 0
//     undefined, // index 1
//     [
//       ["name", "Alice"],
//       ["city", "Boston"],
//     ], // index 2 (nested array with two key-value pairs)
//     undefined, // index 4
//     ["age", 25],
//   ];

  function MyHashMap() {
    //capacity
    this.buckets = new Array(16);
    //no of items in it
    this.size = 0;
  }
  //returns an index used to determine where to place k,v pair
  MyHashMap.prototype.hash = function (key) {
    var hash = 0;
    var strKey = String(key);
    for (var i = 0; i < strKey.length; i++) {
      //find the ascii code of each character and add
      hash += strKey.charCodeAt(i);
    }
    // fit the index into range of bucket length 0-15
    return hash % this.buckets.length;
  };
  MyHashMap.prototype.set = function (key, value) {
    //initialize undef to []
    //if key exists , update value - check if key exist - loop through buckets and find key ,
    //if it doesn't exist push k,v
    var index = this.hash(key);
    if (!this.buckets[index]) {
      this.buckets[index] = [];
    }
    var theBucket = this.buckets[index];
    //we looop here rather than direct access cos collisions may occur and spot in the bucket can contain multiple [k,v] pairs
    for (var i = 0; i < theBucket.length; i++) {
      if (theBucket[i][0] === key) {
        theBucket[i][1] = value;
        return;
      }
    }
    //
    theBucket.push([key, value]);
    this.size += 1;
  };
  MyHashMap.prototype.get = function (key) {
    //use has, to locate possible index , loop through bucket to find where index[0] is the key , return
    //second index , if i doesn't exist, return undefined
    var index = this.hash(key);
    var theBucket = this.buckets[index];
    for (var i = 0; i < theBucket.length; i++) {
      if (theBucket[i][0] === key) {
        return theBucket[i][1];
      } else return undefined;
    }
  };
  MyHashMap.prototype.has = function (key) {
    var index = this.hash(key);
    var theBucket = this.buckets[index];
    if (!theBucket) return false;
  };
  MyHashMap.prototype.delete = function (key) {
    var index = this.hash(key);
    var theBucket = this.buckets[index];
    for (var i = 0; i < theBucket.length; i++) {
      if (theBucket[i][0] === key) {
        theBucket.splice(i, 1);
        return true;
      } else return false;
    }
  };
  return MyHashMap;
})();
var myMap = new MyHashMap();
myMap.set("cat", 1000);
myMap.set("fb", 3000);
myMap.delete("cat");
console.log(myMap);
