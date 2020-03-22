module.exports = function transform(arr) {
   
    let _arr = [];
    if (arr.constructor != Array) throw Error('Error');

    for(let i = 0; i< arr.length ;i++){
        if(arr[i] == '--discard-next' && i< arr.length -1) i++;
        else if(arr[i] == '--discard-prev' && i >0) _arr.pop();
        else if(arr[i] == '--double-next' && i < arr.length - 1) _arr.push(arr[i+1]);
        else if(arr[i] == '--double-prev' && i > 0) _arr.push(arr[i-1]); 
        else if(arr[i] != '--discard-next' && arr[i] != '--discard-prev' && arr[i] != '--double-next' && arr[i] != '--double-prev')_arr.push(arr[i]);
    }
    return _arr;
}
