//This function starts from the index 1 and checks if the number at position one is greater than it if YES then it moved to index one. The value of i would check if the number behind it is greater than it and then swap to that position if it is greater else it that loop ends and the index moves to the next index on the array.

//Insertion Sort [3, 12, 4, 2, 7, 1, 0]
function insertion(nums) {
  for (let i = 1; i < nums.length; i++) {
    var numberToSort = nums[i];
    var j;
    for (j = i - 1;  nums[j] > numberToSort && j>=0; j--) {
      nums[j+1] = nums[j]
    }
    nums[j+1] = numberToSort
  }
   return nums
}

var testArray = insertion([32,3,12,4,2,7,1,0])
console.log(testArray)


//this starts from index 0 and checks through the rest of the array to the end if it is greater than each element to the end, if it is then move it till it is checked against the last element of the array. This should happen repeatedly if there was a swapp to make sure that each element is in their right positon in the array. 

//Bubble Sort
function bubbleSort(nums) {
  var swapped = false;
  do {
    swapped = false;
    for (let i = 0; i < nums.length; i++) {
      let temp = nums[i]
      if (nums[i] > nums[i+1] ) {
        nums[i] = nums[i+1]
        nums[i+1] = temp
        swapped = true
      }
    }
  }while (swapped)
   return nums
}

let bubbleValues = bubbleSort([0,3,12,4,2,7,1,0])
console.log(bubbleValues)


//recursion

//First of all identify the base case which is what will make the code break
//Then write the logic to call the function inside itself to run on all conditions.

function nestedArray(array) {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    var current = array[i]
    if (Array.isArray(current)){
      sum += nestedArray(current)
    }else {
      sum += current
    }
  }
  return sum
}

let recursion = nestedArray([1, [2], 3])
console.log(recursion)

