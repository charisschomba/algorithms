const swap = (arr, index1, index2) => [arr[index1], arr[index2]] = [arr[index2], arr[index1]]
arr = [1,2,3,4,5,9,43,56,1,5,67,54,22,66,99]

function bubbleSort(arr) {
    let noSwap = true
  for(var i = arr.length; i > 0; i-- ) {
    for(var j = 0; j < i-1; j++)
    if(arr[j] > arr[j+1]){
      swap(arr, j, j+1 )
      noSwap = false
    }
    if(noSwap) break
  }
  return arr
}
bubbleSort(arr)