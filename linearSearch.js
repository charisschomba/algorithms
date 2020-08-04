const linearSearch = (arr, value) => {
    for(let i = 0; i < arr.length; i++){
       if(arr[i] === value) return i;
    }
    return -1
  }
  
  linearSearch([1,2,3,5,6,9,6], 6)