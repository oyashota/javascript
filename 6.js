//frequency counter
//実行時にnode打たないとダメなの忘れていた
//for of -> 配列操作　for in -> オブジェクトから要素を取得する
function sameFrequency(arr1,arr2){
    arr1 = arr1.toString();
    arr2 = arr2.toString();
    let frequencyCounter1 = {};
    let frequencyCounter2 = {};

    for(let val of arr1){
        frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1;
    }
    for(let val of arr2){
        frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1;
    }

    for(let key in frequencyCounter1){
        //if(!(frequencyCounter2(key))){
        if(!(key in frequencyCounter2)){
            return fale;
        }
        if(frequencyCounter1[key] !== frequencyCounter2[key]){
            return false;
        }
    }
    return true;
}

console.log(sameFrequency(123,321))

//frequentry counter
function sameFrequencyMod(arr1,arr2){
    arr1 = arr1.toString()
    arr2 = arr2.toString()

    frequencyCounter1 = {};
    frequencyCounter2 = {};

    for(let val of arr1){
        frequencyCounter1[val] = (frequencyCounter1[val] | 0) + 1;
    }

    for(let val of arr2){
        frequencyCounter2[val] = (frequencyCounter2[val] | 0) + 1;
    }

    //can i use of???
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

console.log(sameFrequencyMod(123,321))

//frequency counter
function areThereDuplicatesMod(){
    let collection = {};
    for(let val in arguments){
        //in で取得できるのはkeyとなるので、配列だと引数になる。(0,1,2)
        console.log(val)
        collection[arguments[val]] = (collection[arguments[val]] | 0) + 1;
        if(collection[arguments[val]] >1 ){
            return true;
        }
    }
    return false;
}

console.log(areThereDuplicatesMod(1,2,2));

//Multiple Pointers
function averagePair(arr,num){
    let start = 0;
    let end = arr.length;
    while(start < end){
        let ave = (arr[start]+ arr[end])/2;
        if(ave = num) return true;
        else if(ave < num) start++;
        else end--
    }
    return false
}

//sliding window
function maxSubarraySum(arr,num){
    let maxSubarray = 0;
    let tempSubarray = 0;
    if(arr.length < num) return null;
    for(let i = 0; i < num; i++){
        maxSubarray += arr[i]
    }

    tempSubarray= maxSubarray;
    for(let i = 0; i <= arr.length - num; i++){
        tempSubarray +=  -arr[i] + arr[i+num]
        if(maxSubarray < tempSubarray){
            maxSubarray = tempSubarray;
        }
    }
    return maxSubarray
}

console.log("start-------------")
console.log(maxSubarraySum([3,-2,7,-4,1,-1,4,-2,1],2))

//0 1  2  3 4  5 6  7 8
//3,-2,7,-4,1,-1,4,-2,1

function maxSubarraySumMod(arr, num){
    if (arr.length < num) return null;
 
    let total = 0;
    for (let i=0; i<num; i++){
       total += arr[i];
    }
    let currentTotal = total;
    for (let i = num; i < arr.length; i++) {
       currentTotal += arr[i] - arr[i-num];
       total = Math.max(total, currentTotal);
    }
    return total;
}

console.log(maxSubarraySumMod([3,-2,7,-4,1,-1,4,-2,1],2))

function minSubArrayLen(nums,sum){
    let total = 0;
    let start = 0;
    let end = 0;
    let minLength = Infinity;

    while(start < nums.length){
    //値が足りていない場合かつendがnumsの末端でなければ足していく
      //endカウントアップ
    if(total < sum && end < nums.length){
        total += nums[end];
        end++;
    } 
    //値がsum以上である場合
      //minLength記録
      //startの値をひき、startをカウントアップ
    else if(total >= sum){
        minLength = Math.min(minLength,end-start);
        total -= nums[start];
        start++;
    }
    //全て足してもsum未満
    else{
        break;
    }
    }
    return minLength === Infinity ? 0 : minLength
}

function minSubArrayLenMod(nums, sum) {
  let total = 0;
  let start = 0;
  let end = 0;
  let minLen = Infinity;
 
  while (start < nums.length) {
    // if current window doesn't add up to the given sum then 
	// move the window to right
    if(total < sum && end < nums.length){
        total += nums[end];
	    end++;
    }
    // if current window adds up to at least the sum given then
	// we can shrink the window 
    else if(total >= sum){
      minLen = Math.min(minLen, end-start);
			total -= nums[start];
			start++;
    } 
    // current total less than required total but we reach the end, need this or else we'll be in an infinite loop 
    else {
      break;
    }
  }
  return minLen === Infinity ? 0 : minLen;
}

function findLongestSubstring(strings){
    
}


