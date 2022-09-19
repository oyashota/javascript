//Problem Solving Patterns

//①Frequency Counter Pattern(2022/9/18)
//   Write a function called same, which accepts two arrays.
//   The function should return true if every value in the array has it's corresponding value 
//   in the second array. The frequency of values must be the same.

function same(arr1,arr2){
    if(arr1.length !== arr2.length) return false;
    let frequencyCounter1 = {}
    let frequencyCounter2 = {}
    for(let val of arr1){
        frequencyCounter1[val] = (frequencyCounter1[val] || 0) +1;
    }
    for(let val of arr2){
        frequencyCounter2[val] = (frequencyCounter2[val] || 0) +1; 
    }
    for(let key in frequencyCounter1){
        if(frequencyCounter1[key] !== frequencyCounter2[key]) return false;
    }
    return true;
}

console.log(same([1,2,2,3,3,3,],[3,3,3,2,2,1]))

//Anagrams(2022/9/19)
//Given two strings,write a function to determine if the second string is anageram of the first.
//An anagram is a word, phrase, or name formed by rearranging the letters of another,
//such as cineme, formed from iceman

function validAnagram(arr1,arr2){
    if(arr1.length !== arr2.length) return false;
    let frequencyCounter1 = {}
    let frequencyCounter2 = {}
    for(let val of arr1){
        frequencyCounter1[val] = (frequencyCounter1[val] || 0) +1;
    }
    for(let val of arr2){
        frequencyCounter2[val] = (frequencyCounter2[val] || 0) +1;
    }
    for(let key in frequencyCounter1){
        if(frequencyCounter1[key] !== frequencyCounter2[key]) return false;
    }
    return true;
}

console.log(validAnagram('ciname','iceman'))

//Anagrams different version(2022/9/19)
function validAnagramMod(arr1,arr2){
    if(arr1.length !== arr2.length) return false;
    let lookup = {}
    for(let i=0;i<arr1.length;i++){
        let letter = arr1[i]
        lookup[letter] ? lookup[letter] += 1 : lookup[letter] =1;
    }
    for(let i=0;i<arr2.length;i++){
        let letter = arr2[i]
        if(!lookup[letter]){
            return false;
        }else{
            lookup[letter] -= 1;
        }
    }
    return true
}

console.log(validAnagramMod('abbccdddeeee','eeeedddccbba'))

//②Multiple pointers(2022/9/19)
//Write a function called sumZero which accept sorted array of integers.
//The function should find the first pair which the sum is zero.
//Return an array that include both values that sum to zero or undefined if a pair does not exist.
//although simply you can use two nested loop ,its more efficient to use multiple pointers.(oya)

function sumZero(arr){
    let left = 0;
    let right = arr.length -1;
    while(left < right){
        let sum = arr[left] + arr[right];
        if(sum === 0){
            return [arr[left],arr[right]];
        }else if(sum >0){
            right--;
        }else{
            left++;
        }
    }
    return undefined
}

console.log(sumZero([-3,-1,0,2,1,4]))

//countUniqueValues (2022/09/19)
//Impulement a function called countUniqueValues which accept a sorted array,
//and counts the unique values in the array.
//There can be negative numbers in the array,but it will always be sorted.

function countUniqueValues(arr){
    if(arr.length === 0) return 0;
    let i = 0;
    let j = 1;
    while(j<arr.length){
        if(arr[i] === arr[j]){
            j++;
        }else{
            i++;
            arr[i] = arr[j]
        }
    }
    return i+1;
}

console.log(countUniqueValues([1,2,2,3,3,3,4,4,4,4,5,5,5,5,5,6]))

//③Sliding window(2022/09/19)
//Write a function called maxSubarraySum which accepts an array of integers and a number called n.
//The function should calculate the maximum sum of n consecutive elements in the array.

function maxSubarraySum(arr,num){
    if(arr.length < num) return null;
    let max = -Infinity
    for(let i=0; i < arr.length -num +1;i++){
        let temp = 0;
        for(let j=0;j<num;j++){
            temp += arr[i+j]
        }
        if(temp > max) max = temp;
    }
    return max;
}

console.log(maxSubarraySum([1,2,3,4,5,6],4))

//④Divide and Conquer (eg. Search algorism)
//taking a larger or a larger set of data and divideing it into smaller subsets
//and ignoring other one

//Practice 
//

