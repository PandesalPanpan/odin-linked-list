import LinkedList from "./linkedlist.js";

export default class HashMap {
    loadFactor = 0.8;
    buckets = new Array(128);

    hash = (key) => {
        let hashCode = 0;

        const mod = Number.MAX_SAFE_INTEGER;
        const primeNumber = 31;
        for (let i = 0; i < key.length; i++) {
            hashCode = (primeNumber * hashCode + key.charCodeAt(i)) % mod;
        }

        return hashCode % this.buckets.length;
    }


    /* 
        set(key, value)
        place the bucket key:value or replace
        returns true if succesful
        
    */
    set = (key, value) => {
        const index = this.hash(key);
        if (index < 0 || index >= this.buckets.length) throw new Error("Trying to access index out of bounds");        
    
        const bucket = this.buckets[index];
        if (bucket != undefined ) {
            // Check if one of the key exist in the nodes
            let node = bucket.findNodeByKey(key);
            if (node == undefined) return false;
            
            // update the node value
            node.value = value;
            return true;
            
        }

        // if its empty generate a linked list
        const bucketLinkedList = new LinkedList();
        bucketLinkedList.append(key, value);

        this.buckets[index] = bucketLinkedList;
        return true;
    }

    /* 
        get(key)
        returns the value if the key is found
        returns null if not
    */
    get = (key) => {
        const index = this.hash(key);
        if (index < 0 || index >= this.buckets.length) throw new Error("Trying to access index out of bounds");

        const bucket = this.buckets[index]; 
        if (!bucket) return null;

        const node = bucket.findNodeByKey(key);
        if (!node) return null;

        return node.value;

    }

    /* 
        has(key)
        returns true if the key is in the hashmap
        returns false
    */
    has = (key) => {
        const get = this.get(key);
        if (!get) return false;
        return true;
    }
}

const hashmap = new HashMap();

console.log(hashmap.hash('Sara'));
console.log(hashmap.hash('raSa'));;
hashmap.set('Sara', 'Geronimo');
hashmap.set('Sara', 'Lagero');
hashmap.get('Sara');
console.log(hashmap.has('Sara'));
console.log(hashmap.has('Nosara'));
