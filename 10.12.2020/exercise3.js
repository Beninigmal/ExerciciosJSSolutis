let list1 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
let list2 = [10, 11, 12, 13, 14, 15, 16, 17, 18, 19];
let result = [];
let num1 = 0;
let num2 = 0;

// for (let index = 0; index < 20; index += 2) {
//   result[index] = list1[num];
//   num++;
// }
// num = 0;
// for (let index = 1; index < 20; index += 2) {
//   result[index] = list2[num];
//   num++;
// }

for (let index = 0; index < 20; index++) {
  if (index % 2 == 0) {
    result[index] = list1[num2];
    // num1++;
  } else {
    result[index] = list2[num2];
    num2++
  }
}

console.log(result);
