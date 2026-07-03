function findLargest(arr) {
  let currTar = arr[0]
  for (let i = 1; i < arr.length; i++) {
    if (currTar < arr[i]) {
      currTar = arr[i]
    }
  }
  return currTar
}
const exArr = [3, 7, 2, 9, 4]
console.log(findLargest(exArr))