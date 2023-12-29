function linearSearch (arr, target) {
  
return arr.indexOf(target)
};

function binarySearch(arr, target) {

  let low = 0;
  let high = arr.length -1;
  while( high >= low){
    const mid = Math.floor((high + low)/2);

    if (arr[mid] === target) return mid;

    if(arr[mid] > target) high = mid -1;

    if(arr[mid] < target) low = mid + 1;
  }
  return -1

}


module.exports = [linearSearch, binarySearch]