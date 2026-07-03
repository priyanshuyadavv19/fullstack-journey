function findSecondLargest(arr) {
  let largest = -Infinity
  let secondLargest = -Infinity
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > largest) {
      secondLargest = largest
      largest = arr[i]
    } else if (arr[i] > secondLargest && arr[i] !== largest) {
      secondLargest = arr[i]
    }
  }
  if (secondLargest === -Infinity) {
    return "Second Largest doesn't exist"
  } else {
    return secondLargest
  }
}
const exArr = [3, 7, 2, 9, 4]
console.log(findSecondLargest(exArr))
console.log(findSecondLargest([5,5,5]))
console.log(findSecondLargest([5,5,3]))