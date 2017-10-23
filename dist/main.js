"use strict";

var _window = window,
    a = _window.alert;

var say = function say(text) {
  a(text);
};

// say('hello world!')

var addAll = function addAll(num) {
  var sum = 0;
  for (var i = 0; i < num + 1; i++) {
    sum += i;
  }
  return sum;
};
say(addAll(10));

// let { hobby, age, name } = person
// console.log(hobby)
// console.log(age)
// console.log(name)

// function fun ([a, b, c], d) {
//   return a + b + d
// }
// let res = fun([1, 2, 4], 5)

// console.log(res)

// function fun () {
//   return ['hello', 'world', '!']
// }
// let [a, b, c] = fun()

// console.log(a)
// console.log(b)
// console.log(c)

// function fun1 () {
//   return {
//     name: 'xiaoqiang',
//     age: 24
//   }
// }
// let { name: n, age } = fun1()
// console.log(n)
// console.log(age)