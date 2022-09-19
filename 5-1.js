const { secureHeapUsed } = require("crypto");
const { lookup } = require("dns");
const { serialize } = require("v8");

function same(arr1,arr2){
    if(arr1.length !== arr2.length){
        return false;
    }
    for(let i = 0; i < arr1.length; i++){
        //indexOf is iteration overthe entire array 
        //or potentially iteration over the entire array
        //we should avoid nested loops whenever possible
        let correctIndex = arr2.indexOf(arr1[i]**2)
        if(correctIndex === -1){
            return false;
        }
        console.log(arr2)
        arr2.splice(correctIndex,1)
    }
    return true;
}

console.log(same([1,2,3],[9,4,1]))
console.log("-----------------------------")

//Time Complexity -O(n) , using Frequenty Counter
//Two loops is vastly better than two nested loops
//Using object is the key 
function same2(arr1,arr2){
    if(arr1.length !== arr2.length){
        return false;
    }
    let frequencyCounter1 = {}
    let frequencyCounter2 = {}
    for(let val of arr1){
        frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1
    }
    for(let val of arr2){
        frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1
    }
    for(let key in frequencyCounter1){
        //it's very easy and quick to access the object
        if(!(key**2 in frequencyCounter2)){
            return false
        }
        if(frequencyCounter2[key**2] !== frequencyCounter1[key]){
            return false
        }
    }
    return true
}

console.log(same2([1,2,3],[9,4,1]))
console.log("-----------------------------")

function validAnagram(arr1,arr2){
    // add whatever parameters you deem necessary - good luck!
    let frequencyCounter1 = {};
    let frequencyCounter2 = {};
    
    if(arr1.length !== arr2.length){
        return false;
    }
    for(let val of arr1){
        frequencyCounter1[val] =(frequencyCounter1[val] || 0)+1;
    }
    for(let val of arr2){
        frequencyCounter2[val] = (frequencyCounter2[val] ||0)+1;
    }
    
    for(let key in frequencyCounter1){
        if(!(key in frequencyCounter2)){
            return false;
        }
        if(frequencyCounter1[key] !== frequencyCounter2[key]){
            return false;
        }
    }
    return true;
  }

console.log(validAnagram('aaz','zza'))
console.log("-----------------------------")

function validAnagramMod(first,second){
    if(first.length !== second.length){
        return false
    }

    const lookup = {}

    for(let i = 0; i < first.length; i++){
        let letter = first[i]
        lookup[letter] ? lookup[letter] += 1 : lookup[letter] =1;
    }

    for(let i = 0; i < second.length; i++){
        let letter = second[i]
        if(!(lookup[letter])){
            return false
        }else{
            lookup[letter] -= 1;
        }
    }

    return true
}

console.log(validAnagramMod('anagram','margana'))
console.log("-----------For Plactice ------------------")
function validAnagram2(arr1,arr2){
    frequencyCounter1 = {}
    frequencyCounter2 = {}
    if(arr1.length !== arr2.length){
        return false
    }
    for(let val of arr1){
        frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1;
    }
    for(let val of arr2){
        frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1;
    }
    for(let key in frequencyCounter1){
        if(!(key in frequencyCounter2)){
            return false
        }
        if(frequencyCounter1[key] !== frequencyCounter2[key]){
                return false
        }
        }
    return true
    }

console.log(validAnagram2('anagram','margana'))
console.log("-----------For Plactice ------------------")

function validAnagramMod2(first,second){
    if(first.length !== second.length ){
        return false
    }
    
    //Reassingment is not possible but object can be added ???
    const lookup = {}
    
    for(let i = 0; i < first.length; i++){
        let letter = first[i]
        lookup[letter]? lookup[letter] +=1 : lookup[letter] = 1;
    }

    for(let i = 0; i < second.length; i++){
        let letter = second[i]
        if(!(letter in lookup)){
            return false
        }else{
            lookup[letter] -= 1;
        }
    }

    return true
}
console.log(validAnagramMod2('anagram','margana'))
console.log("-----------------------------")
//MULTIPLE POINTERS
function sumZero(arr){
    let left = 0;
    let right = arr.length -1;
    while(left < right){
        let sum = arr[left] + arr[right]
        if (sum == 0){
            return [arr[left],arr[right]]
        }else if(sum > 0){
            right--;
        }else{
            left++;
        }
    }
}

console.log(sumZero([-1,-2,1,3,4,5]))
console.log("-----------------------------")
//MULTIPLE POINTERS
function countUniqueValues(arr){
    let i = 0;
    let j = 1;
    if(arr.length == 0){
        return 0
    }
    while(j < arr.length){
        if(arr[i] == arr[j]){
            j++;
        }else{
            i++;
            arr[i] = arr[j]
        }
    }
    
    return i+1;
}

console.log(countUniqueValues([]))
console.log("-----------------------------")
//Sliding Window Pattern
function maxSubarraySum(arr, num){
    let maxSum = 0;
    let tempSum = 0;
    if(arr.length < num) return null;
    for(let i = 0; i < num ; i++){
        maxSum += arr[i]; 
    }
    tempSum = maxSum;
    for(let i = num; i < arr.length; i++){
        tempSum = maxSum - arr[i-num] + arr[i]
        maxSum = Math.max(maxSum,tempSum)
    }
    return maxSum
}

//Divide and Conquer
//binary serch
function search(array,val){
    let min = 0;
    let max = array.length -1

    while(min <= max){
        let middle = Math.floor((min+max)/2);
        let currentElement = array[middle]

        if(array[middle] < val){
            min = middle + 1;
        }else if (array[middle] > val ){
            max = middle - 1;
        }else{
            return middle
        }
    }
}
console.log(search([1,2,3,4,5,6],6))
console.log("-----------------------------")

//FREQUENCY COUNTER
function sameFrequency(arr1,arr2){
    arr1 = arr1.toString();
    arr2 = arr2.toString();
    let frequencyCounter1 = {};
    let frequencyCounter2 = {};

    for(let  val of arr1){
        frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1;
    }
    
    for(let  val of arr2){
        frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1;
    }

    for(let val in frequencyCounter1){
        if(!(val in frequencyCounter2)){
            return false;
        }
        if(frequencyCounter1[val] !== frequencyCounter2[val]){
            return false;
        }
    }
    return true;
}
console.log(sameFrequency(123,321))
console.log("-----------------------------")
//MULTIPLE POINTERS
function areThereDuplicates(a,b,c,d){
    let collection = {}
    for(let val in arguments){
        collection[arguments[val]] = (collection[arguments[val]] || 0) +1;
    }
    for(let key in collection){
        if(collection[key] > 1) return true
    }

    return false
}

//MULTIPLE POINTERS
function areThereDuplicates2(){
    let collection = {}
    for(let val in arguments){
        collection[arguments[val]] = (collection[arguments[val]] || 0) + 1;
    }

    for(let key in collection){
        if(collection[key] > 1) return true
    }
    return false
}

//















