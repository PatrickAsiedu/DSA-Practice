class MyHashMap<K, V> {
  private buckets: Array<Array<[K, V]>>;
  private size: number;

  //[[k,v],[t,y], [[a,b],[c,f]]]

  constructor() {
    //capacity
    this.buckets = new Array(16);

    //no of items in it
    this.size = 0;
  }

  //returns an index used to determine where to place k,v pair
  hash(key) {
    let hash = 0;
    const strKey = String(key);
    for (let i = 0; i < strKey.length; i++) {
      //find the ascii code of each character and add
      hash += strKey.charCodeAt(i);
    }

    // fit the index into range of bucket length 0-15
    return hash % this.buckets.length;
  }

  set(key, value) {
    //initialize undef to []
    //if key exists , update value - check if key exist - loop through buckets and find key ,
    //if it doesn't exist push k,v
    const index = this.hash(key);

    if (!this.buckets[index]) {
      this.buckets[index] = [];
    }

    const theBucket = this.buckets[index];

    //we looop here rather than direct access cos collisions may occur and spot in the bucket can contain multiple [k,v] pairs
    for (let i = 0; i < theBucket.length; i++) {
      if (theBucket[i][0] === key) {
        theBucket[i][1] = value;
        return;
      }
    }

    //
    theBucket.push([key, value]);
    this.size += 1;
  }

  get(key: K) {
    //use has, to locate possible index , loop through bucket to find where index[0] is the key , return
    //second index , if i doesn't exist, return undefined
    const index = this.hash(key);
    const theBucket = this.buckets[index];

    for (let i = 0; i < theBucket.length; i++) {
      if (theBucket[i][0] === key) {
        return theBucket[i][1];
      } else return undefined;
    }
  }

  has(key: K) {
    const index = this.hash(key);
    const theBucket = this.buckets[index];
    if (!theBucket) return false;
  }

  delete(key: K) {
    const index = this.hash(key);
    const theBucket = this.buckets[index];

    for (let i = 0; i < theBucket.length; i++) {
      if (theBucket[i][0] === key) {
        theBucket.splice(i, 1);
        return true;
      } else return false;
    }
  }
}

const myMap = new MyHashMap();
myMap.set("cat", 1000);
myMap.set("fb", 3000);
myMap.delete("cat")
console.log(myMap);
