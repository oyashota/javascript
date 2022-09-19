function charCount(str){
    //make object to return at end
    var result = {};
    //loop over string, for each character...
    for(var i = 0; i < str.length; i++){
        var char = str[i].toLowerCase()
        //if the char is a number/letter AND is a key in object, add one to count
        if(result[char] >= 1){
            result[char]++;
        }else{
        //if the char is a number/letter AND is a key in object, add it to object and set value to 1
            result[char] = 1;
        }
    }
        //if character is something else (space, period, etc.) don't do anything
    //return object at end
    return result
}

function charCountMod(str){
    var obj = {};
    for (var char of str){
        char = char.toLowerCase()
        if(/[a-z0-9]/.test(char)){
            obj[char] = ++obj[char] || 1;
        }
    }
    return obj
}




var str = 'hello HELLO'
console.log(charCountMod(str))

