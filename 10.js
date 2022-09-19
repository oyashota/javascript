function linearSearch(arr,num){
    for(let i = 0;i<=arr.length-1;i++){
        // console.log(arr[i])
        if(arr[i]===num) return i;
    }
    return -1;
}

console.log(linearSearch([100], 100))

function binarySearch(arr,num){
    let first = 0;
    let last = arr.length-1;
    let middle = 0;
    //middle = Math.floor((first+last)/2)
    //first<=lastとしないと最後の項目が計算されない
    while(/*arr[middle] !== num &&*/ first <= last){
        middle = parseInt((first+last)/2)
       
        if(arr[middle] === num){
            return middle;
        }else if(arr[middle] < num){
            //+1の動作を入れないと最後に['o','o','o']の状態の時に永久にループしてしまう
            first = middle+1;
        }else{
            last = middle+1;
        }
    }
    return -1;
}

console.log(binarySearch([
    5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 
    40, 44, 64, 79, 84, 86, 95, 96, 98, 99
  ], 11111 ))

  console.log(binarySearch([1,2,3,4,5],5) )

  function binarySearchMod(arr,num){
    let start = 0;
    let end = arr.length-1;
    let middle = parseInt((start+end)/2);
    while(arr[middle] !==num && start <= end){
        if(arr[middle]<num){
            start = middle+1;
        }else{
            end = middle -1;
        }
        middle = parseInt((start+end)/2)
    }
    if(arr[middle] === num) return middle;
    return -1;
  }

function binarySearchMod2(arr,num){
    let start = 0;
    let end = arr.length-1;
    let middle = parseInt((start +end)/2)
    while(arr[middle] !== num && start <= end){
        if(arr[middle] < num) start = middle+1;
        else end = middle-1;
        middle = parseInt((start+end)/2);
    }
    return arr[middle] === num ? middle : -1;
}

function binarySearch(arr, elem) {
    var start = 0;
    var end = arr.length - 1;
    var middle = Math.floor((start + end) / 2);
    while(arr[middle] !== elem && start <= end) {
        if(elem < arr[middle]) end = middle - 1;
        else start = middle + 1;
        middle = Math.floor((start + end) / 2);
    }
    return arr[middle] === elem ? middle : -1;
}

//native serch
function naiveSearch(long,short){
    let count = 0;
    for(let i= 0;i<long.length;i++){
        for(let j=0;j<short.length;j++){
            if (long[i+j] !== short[j]) break;
            if (j === short.length -1) count++;
        }
    }
    return count;
}

console.log(naiveSearch("lolie loled", "lol"))


// function bubbleSort(arr){
//     let res = []
//     for(let i=arr.length-1;i>0;i++){
//         for(let j=0;j<=i-1;j++){
//             if(arr[j]>arr[j+1]){
//                 let temp = arr[j+1]
//                 arr[j+1] = arr[j]
//                 arr[j] = temp
//             }
//         }
//     }
//     return arr
// }

function bubbleSort(arr){
    var noSwaps;
    for(var i = arr.length-1; i > 0; i--){
      noSwaps = true;
      for(var j = 0; j <= i - 1; j++){
        if(arr[j] > arr[j+1]){
          var temp = arr[j];
          arr[j] = arr[j+1];
          arr[j+1] = temp;
          noSwaps = false;         
        }
      }
      if(noSwaps) break;
    }
    return arr;
  }


console.log(bubbleSort([1,4,3,2]))


function bubbleSortMod(arr){
    let noSwaps;
     for(let i=arr.length-1;i>0;i--){
        noSwaps = true
        for(let j=0;j<=i-1;j++){
            if(arr[j]>arr[j+1]){
                let temp = arr[j+1]
                arr[j+1] = arr[j]
                arr[j] = temp
                noSwaps = false
            }
        }
        if(noSwaps) break;
     }
     return arr;
}

console.log(bubbleSortMod([1,4,3,2]))