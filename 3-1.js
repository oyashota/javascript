const performance = require('perf_hooks').performance;

 let instructor = {
     firstname:"kelly",
     isInstructor: true,
     favoriteNumvers: [1,2,3,4]
 }

 let obj = {
     a: 1,
     b: 2
 }

 //console.log(Object.keys(instructor))
 //console.log(Object.values(instructor))
 //console.log(Object.entries(instructor))
 //console.log(instructor.hasOwnProperty("firstname"))

 obj['a']++
 obj['a']++
console.log(obj['a'])



  