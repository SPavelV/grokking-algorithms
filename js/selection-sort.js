'use strict';

const searchMinNumIndex = arr => {
  let smallest = arr[0];
  let smallestIndex = 0;

  for(let i = 1, arrLength = arr.length; i < arrLength; i ++) {
    if (arr[i] < smallest) {
      smallest = arr[i];
      smallestIndex = i;
    }

  }
  // console.log('minNumIndex: ' + smallestIndex + ', number: ' + smallest);
  return smallestIndex;
};

let arrNum = [12, 25, 53, 100, 3];
searchMinNumIndex(arrNum);

const selectionSorting = arr => {
  let sortArr = arr.slice();
  let newArr = [];

  for(let i = 0, arrLength = arr.length; i < arrLength; i++) {
    // let smallest = Math.min(...arr);
    let smallest = searchMinNumIndex(arr);
    newArr.push(arr.splice(smallest, 1));
  }
  console.log('Source array: ' + sortArr + '\nSorting array: ' + newArr);
  return newArr;
};

selectionSorting(arrNum);
