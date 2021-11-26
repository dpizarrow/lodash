# lodash

- Basic implementations of a few lodash.js methods. These are:

  - `.clamp()`: This method Clamps a number within a lower and upper bound.
  - `.inRange()`: checks to see if the provided number falls within the range specified by the start and end values.
  - `.words()`: splits a string into an array of words.
  - `.pad()`: evenly spaces a string to make it reach a desired length.
  - `.has()`: checks to see if the provided object contains a value at the specified key.
  - `.invert()`: iterates through each key-value pair in the provided object and swaps the key and value.
  - `.findKey()`: returns the first key that has a value that returns a truthy value from the predicate function. The predicate function returns a boolean value.
  - `.drop()`: returns a new array which contains the elements from the original array, excluding the specified number of elements from the beginning of the array.
  - `.dropWhile()`: creates a new copy of the supplied array, dropping elements from the beginning of the array until an element causes the predicate function to return a falsy value.
  - `.chunk()`: breaks up the supplied array into arrays of the specified size and returns an array containing all of the previously-created array chunks in the order of the original array.

- The `_.js` file contains the object that implements all the specified methods, and the `test` folder contains tests for the different methods.
