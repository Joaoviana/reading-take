# Reading take

Overview on the take method provided by the lodash library

### Index
* [docs](#docs)
* [input analysis](#input-analysis)
* [part-task](#part-task)
* [recap](#recap)
* [helpful links](#helpful-links)

___

## [Docs](https://lodash.com/docs/4.17.10#endsWith)

> _.take(array, [n=1])

_Behaviour_
Creates a slice of array with n elements taken from the beginning.

_Arguments_
```
array (Array): The array to query.
[n=1] (number): The number of elements to take.
```

_Returns_
```
(Array): Returns the slice of array.
```

_Example_
```js
_.take([1, 2, 3]);
// => [1]
 
_.take([1, 2, 3], 2);
// => [1, 2]
 
_.take([1, 2, 3], 5);
// => [1, 2, 3]
 
_.take([1, 2, 3], 0);
// => []
```


___

## Input Analysis

| array: to_check | number: elements to take |
|---|---|
| escaped characters |empty string|
| wrong type |string number  |
| empty array |decimal|
| |negative integer |
| |negative decimal  |
| |bigger than array |
| |shorter than array |
| |equal to array|

___

## Part-Task

What language features & tricks are used in this function?

Describe them here, and include any helpful exercises in the /exercises folder.

___

## Recap

Summarise what you've learned and struggled with studying this function.

___

## Helpful Links

* [module.exports](https://github.com/elewa-academy/module-dot-exports/tree/master)
* [testing 101](https://github.com/elewa-academy/testing-101) 
  * [Tressa: code coverage](https://medium.com/@WebReflection/js-vanilla-test-code-coverage-7b7ba3740776)  
  * [Tressa: tressa](https://medium.com/@WebReflection/vanilla-js-testing-part-ii-63b9d736121)
* [pure functions, easy testing](https://medium.com/@WebReflection/vanilla-js-testing-part-ii-63b9d736121)


___
___
### <a href="http://elewa.education/blog" target="_blank"><img src="https://user-images.githubusercontent.com/18554853/34921062-506450ae-f97d-11e7-875f-6feeb26ad72d.png" width="100" height="40"/></a>
