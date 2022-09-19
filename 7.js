function factorial(num){
    if(num === 1) return 1;
    return num * factorial(num-1);
}

console.log(factorial(3))

//helper method recuresion
function collectOddValues(arr){
    let result = []

    function helper(helperInput){
        if(helperInput.length === 0) return;
        if(helperInput[0] & 2 !== 0){
            result.push(helperInput[0])
        }  
        helper(helperInput.slice(1))
    }

    helper(arr)
    return result;
}

console.log(collectOddValues([1,2,3,4,5]))

function power(num,pw){
    if(pw === 0) return 1 ;
    return num * power(num,pw -1)
}

console.log(power(3,2))

function factorialMod(num){
    if(num < 1 ) return 0;
    if(num <= 1) return 1;
    return num * factorialMod(num -1);
}

console.log(factorialMod(0))

//sliceはメソッドなので、()で指定する。[]で指定してはまった。
function productOfArray(arr){
    if(arr.length === 0) {return 1;}
    return arr[0] * productOfArray(arr.slice(1));
}

console.log(productOfArray([1,2,3]))

function recursiveRange(num){
    if(num === 0) return 0;
    return num + recursiveRange(num-1)
}

function fib(num){
    if(num <= 2) return 1;
    return fib(num -1) + fib(num-2)
}

function reverse(arr){
    let result = [];

    function helper(helperInput){
        if(helperInput.length === 0) return;
        result.push(helperInput[helperInput.length -1])
        helper(helperInput.slice(0,-1))
    }

    helper(arr);

    return result.join('');
}

console.log(reverse('awesome'))

function reverseMod(str){
    if(str.length <= 1) return str;
    return reverseMod(str.slice(1)) + str[0];    
}

console.log(reverseMod('awesome'))

function isPalindrome(str){
    if(str.length === 1) return true;
    if(str.length === 2) str[0] === str[1];
    if(str[0] === str.slice(-1)) return isPalindrome(str.slice(1,-1));
    return false;
}

//check
let str = '12345'
console.log(str.slice(-1))   //5
console.log(str.slice(1,-1)) //234

console.log(isPalindrome('tacocat'))

//arrow function Name = variable => Process
//if no variable requared , using ()
const isOdd = val => val % 2 !== 0;

function someRecursive(arr,callback){
    if(arr.length === 0) return false;
    if(callback(arr[0])) return true;
    return someRecursive(arr.slice(1),callback)
}

//let arr = [4,5]
//arr = arr.concat([1,2,3])
//console.log(arr)

function flatten(oldArr){
    let newArr = [];
    for(var i = 0; i < oldArr.length; i++){
        if(Array.isArray(oldArr[i])){
            newArr = newArr.concat(flatten(oldArr[i]))
        }else{
            //pushするときはnewArrに再代入はしない
            newArr.push(oldArr[i])
        }
    }
    return newArr;
}



//console.log(capitalizeFirst(['car','taco','banana']))
/* let arr = []
console.log(arr.push([1]))
console.log(arr.push([2]))
console.log(arr) */

function capitalizeFirst(arr){
    
    if(arr.length === 1) return [arr[0](0).toUpperCase()];
    let res = capitalizeFirst(arr.slice(0,-1))
    res.push(arr.slice(arr.length-1)[0](0).toUpperCase())
    return res;
}

function capitalizeWords (array) {
    if (array.length === 1) {
      return [array[0].toUpperCase()];
    }
    let res = capitalizeWords(array.slice(0, -1));
    res.push(array.slice(array.length-1)[0].toUpperCase());
    return res;
   
  }


//optional Parameters function demo(a,b=0)
//                                    ^^^

function nestedEvenSum(obj,sum=0){
    for(let key in obj){
        if(typeof obj[key] === 'object'){
            sum += nestedEvenSum(obj[key])
        }else if(typeof obj[key] === 'number' && obj[key] %2 === 0){
            sum += obj[key]
        }
    }
    return sum;
}

function capitalizeWords(arr){
    if(arr.length === 1) return [arr[0][0].toUpperCase() + arr[0].substr(1)]
    let res = capitalizeWords(arr.slice(0,-1))
    const string = arr[arr.length-1][0].toUpperCase()+arr[arr.length-1].substr(1)
    //const string = arr.slice(arr.length -1)[0][0].toUpperCase()+arr.slice(arr.length-1)[0].substr(1)
    res.push(string)
    return res
}

function capitalizeFirst(array) {
    if (array.length === 1) {
      return [array[0][0].toUpperCase() + array[0].substr(1)];
    }
    const res = capitalizeFirst(array.slice(0, -1));
    const string = array.slice(array.length - 1)[0][0].toUpperCase() + array.slice(array.length-1)[0].substr(1);
    res.push(string);
    return res;
  }

console.log(capitalizeFirst(['lele','roro']))
console.log(capitalizeWords(['lele','roro']))

arr = ['lele','roro']
console.log(arr.slice(arr.length-1))
console.log(arr[arr.length-1][0].toUpperCase()+arr[arr.length-1].substr(1))

function stringifyNumbers(obj){
    let newObj = {}
    for(let key in obj){
        if(typeof obj[key] === 'number'){
            newObj[key] = obj[key].toString()
        }else if(typeof obj[key] === 'object' && !Array.isArray(obj[key])){
            newObj[key] = stringifyNumbers(obj[key])
        }else{
            newObj[key] = obj[key]
        }
    }
    return newObj

}

console.log(!Array.isArray({foo: 123}))

function collectstring(obj){
    let stringArr = []
    for(let key in obj){
        if(typeof obj[key] === "string"){
            stringArr.push(obj[key])
        }
        else if(typeof obj[key] === 'object'){
            stringArr = stringArr.concat(collectstring(obj[key]))
        }
    }
    return stringArr
}

function collectStrings(obj) {
    var stringsArr = [];
    for(var key in obj) {
        if(typeof obj[key] === 'string') {
            stringsArr.push(obj[key]);
        }
        else if(typeof obj[key] === 'object') {
            stringsArr = stringsArr.concat(collectStrings(obj[key]));
        }
    }
 
    return stringsArr;
}

console.log(arr.concat(['dog']))