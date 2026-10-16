// rotate array to left by k positions
function leftRotateArrByK(arr, k) {
  const n = arr.length
  const firstKEle = []
  const restEle = []
  if (n === 0) return
  k = k % n
  for (let i=0; i<k; i++) {
    firstKEle.push(arr[i])
  }
  for (let i=k; i<n; i++) {
    restEle.push(arr[i])
  }
  return restEle.concat(firstKEle)
}
const exArr = [10, 20, 30, 40, 50]
console.log(leftRotateArrByK(exArr,2))
console.log(leftRotateArrByK(exArr,5))
console.log(leftRotateArrByK(exArr,7))
console.log(leftRotateArrByK([],3))