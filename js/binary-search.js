function binarySearch(arr, searchNum) {
  let low = 0;
  let high = arr.length - 1;

  while (low <= high) {
    let mid = Math.round((low + high) / 2);
    let guess = arr[mid];
    if (guess === searchNum) return 'number: ' + searchNum +', index number: ' + guess;
    if (guess > searchNum) high = mid - 1;
    else low = mid + 1;
  }
  return 'number: ' + searchNum + ' not found';
}

let myList = [1, 3, 5, 7, 9];

console.log(binarySearch(myList, 3));
console.log(binarySearch(myList, -1));
console.log(binarySearch(myList, 7));
console.log(binarySearch(myList, 5));
