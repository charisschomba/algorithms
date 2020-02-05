const binarySearch = (arr, element) => {
    var start = 0;
    var end = arr.length - 1;
    var middle = Math.floor((start + end)/ 2);
    if(arr.indexOf(element) === -1) return -1
    while(arr[middle] !== element){
        if(element < arr[middle]){
            end = middle - 1;
        } else{
            start = middle + 1;
        }
        middle = Math.floor((start + end)/ 2);
    };
    return middle;
    
};

console.log(binarySearch([1,4,6,8,9,13,16,18,31,40,65,67,80,97,333], 10))