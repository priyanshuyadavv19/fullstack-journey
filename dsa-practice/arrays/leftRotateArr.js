// rotating array left by one position
function leftRotateArray(arr) {
  if (arr.length === 0) return arr
  const temp = arr[0]
  for (let i=0; i<arr.length - 1; i++) {
    arr[i] = arr[i+1]
  }
  arr[arr.length - 1] = temp
  return arr
}
console.log(leftRotateArray([1,2,3,4,5]))
console.log(leftRotateArray([1]))
console.log(leftRotateArray([]))