function checkArraySorted(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] > arr[i+1]) {
      return false
    }
  }
  return true
}
if (checkArraySorted([3,2,4])) {
  console.log("Array is sorted")
} else {
  console.log("Array is not sorted")
}