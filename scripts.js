/*
Good morning! Here's your coding interview problem for today.

This problem was asked by Facebook.

You are given an array of non-negative integers that represents a two-dimensional elevation map where each element is unit-width wall and the integer is the height. Suppose it will rain and all spots between two walls get filled up.

Compute how many units of water remain trapped on the map in O(N) time and O(1) space.

For example, given the input [2, 1, 2], we can hold 1 unit of water in the middle.

Given the input [3, 0, 1, 3, 0, 5], we can hold 3 units in the first index, 2 in the second, and 3 in the fourth index (we cannot hold 5 since it would run off to the left), so we can trap 8 units of water.
*/

/*

*/

const findWell = (yourArray) => {
  let left = yourArray[0];
  let center = yourArray[1];
  let right = yourArray[2];
  if ((left > center) && (center < right)) {
    if (left >= right) {return left-center}
    else {return right-center}
  }
  return 0;
}

const findLake = (yourArray) => {
  let answer = 0;
  for (i=0; i<yourArray.length; i++) {
    let subArray = [yourArray[i-1], yourArray[i], yourArray[i+1]]
    answer = answer + findWell(subArray);
    }
  return answer;
}

let test1 = [2,0,2]
let test2 = [3, 0, 1, 3, 0, 5]
console.log(findLake(test1))
console.log(findLake(test2))

$(document).ready(function() {

  $('#form1').submit(function(event) {
  event.preventDefault();
  let input1 = $('#input1').val();

  console.log(input1)

  $('#output-section-1').text(findLake(input1));
  })

});
