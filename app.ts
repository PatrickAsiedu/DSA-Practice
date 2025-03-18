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
  hash(key: string) {
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


    if(!this.buckets[index]){
      this.buckets[index]=[]
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

  get() {}
}

const myMap = new MyHashMap();
// console.log(myMap.hash("grapes"))
myMap.set("grapes", 1000);
myMap.set("grapes", 3000);
console.log(myMap);
