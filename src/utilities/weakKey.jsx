const map = new WeakMap();
let index = 0;

export const weakKey = obj => {
  let key = map.get(obj);
  if(!key) {
    key = 'weak-key-' + index++;
    map.set(obj, key);  
  }
  return key;
};
