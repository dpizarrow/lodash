const _ = {
    clamp(num, lower, upper) {
      let lowerClampedValue = Math.max(num, lower);
      let clampedValue = Math.min(lowerClampedValue, upper);
      return clampedValue;
    },
    inRange(num, start, end) {
      if(end === undefined) {
        end = start;
        start = 0;
      }
      if(start > end) {
        let temp = end;
        end = start;
        start = temp;
      }
      let isInRange = start <= num && num < end
      return isInRange; 
    },
    words(string) {
      let words = string.split(' ');
      return words;
    },
    pad(string, target) {
      if(target <= string.length) {
        return string
      }
      let padding = Math.floor((target - string.length) / 2)
      let endPad = target - string.length - padding;
      let paddedString = ' '.repeat(padding) + string + ' '.repeat(endPad);
      return paddedString;
    },
    has(object, key) {
      if(object[key] != undefined) {
        return true;
      }
      return false;
    },
    invert(object) {
      let inv = {};
      for(let key in object) {
        let originalValue = object[key];
        inv[originalValue] = key;
      }
      return inv;
    },
    findKey(object, fun) {
      for(let key in object) {
        let val = object[key]
        if(fun(val)) {
          return key;
        }
      }
      return undefined;
    },
    drop(arr, num) {
      if(num === undefined) {
        num = 1;
      }
      let copy = arr.slice(num, arr.length);
      return copy;
    },
    dropWhile(arr, fun) {
      const cb = (element, index) => {
        return !fun(element, index, arr);
      }
      let dropIdx = arr.findIndex(cb);
      let droppedArr = this.drop(arr, dropIdx);
      return droppedArr;
    },
    chunk(arr, size) {
      if(size === undefined) {
        size = 1;
      }
      let chunks = [];
      for(let i = 0; i < arr.length; i+=size) {
        let arrayChunk = arr.slice(i, i+size);
        chunks.push(arrayChunk);
      }
      return chunks;
    }
  };
  
  // Do not write or modify code below this line.
  module.exports = _ ;
  