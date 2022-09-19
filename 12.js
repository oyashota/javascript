function selectionSort(arr){
    for(let i=0;i<arr.length-1;i++){
        let temp = i;
        for(let j=i;j<arr.length-1;j++){
            //let temp = i;
            if(arr[temp] > arr[j+1]){
                temp = j+1
            }
        }
        console.log(arr)
        console.log(i)
        console.log(temp)
        if(i !== temp)[arr[i],arr[temp]] = [arr[temp],arr[i]]
        
    }
    return arr
}

console.log(selectionSort([1,4,3,2]))

//  i
// [1, 4, 3, 2]
//        j  j+1

function selectionSortMod(arr){
    for(let i=0;i<arr.length;i++){
        let lowest = i;
        for(let j=i+1;j<arr.length;j++){
            if(arr[lowest] > arr[j]) lowest = j;
        }
        [arr[lowest],arr[i]] = [arr[i],arr[lowest]] 
    }
    return arr
}


console.log(selectionSortMod([1,4,3,2]))

function insertionSort(arr){
	var currentVal;
    for(var i = 1; i < arr.length; i++){
        //ここでj定義しないとおかしいよな。なぜ動いているのか不明。
        currentVal = arr[i];
        let j = i-1;
        
        while(j >= 0 && arr[j] > currentVal) {
            arr[j+1] = arr[j]
            j--;
        }
        console.log(j+1)
        arr[j+1] = currentVal;
        console.log('------------------')
        console.log(j+1)
        console.log(arr[j+1])
    }
    return arr;
}

console.log(insertionSort([2,1,9,76,4]))

function insertionSortMod(arr){
    let currentVal;
    for(let i=1;i<arr.length;i++){
        let j = i-1;
        let currentVal = arr[i];
        while(j>=0 && arr[j]>currentVal){
            arr[j+1]=arr[j]
            j--;
        }
        arr[j+1]=currentVal;
    }
    return arr;

}

console.log(insertionSortMod([5,3,4,2,1]))

