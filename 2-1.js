const performance = require('perf_hooks').performance;

function addUpToAll(n){
    let total = 0;
    for(let i = 1; i <= n; i++){
        total += i;
    }
    return total
}

function addUpToMath(n){
    return n*(n+1)/2;
}
let t1 = performance.now();
addUpToAll(100);
let t2 = performance.now();
console.log((t2-t1)/1000);

//console.log(addUpToMath(3))

let t3 = performance.now();
addUpToMath(100);
let t4 = performance.now();
console.log((t4-t3)/1000);


//space Complexity
function double(arr){
    let newArr = [];
    for (let i = 0; i<arr.length;i++){
        newArr.push(2*arr[i])
    }
    return newArr
}

console.log(double([1,2]));


a
a
a
a
