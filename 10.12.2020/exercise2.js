let list1 = [2, 7, 9, 5, 3, 4, 1, 0, 4, 3];
let list2 = [3.2, 2, 3, 3, 3, 2, 5, 8, 3, 6];
let product = [];

// for (let index = 0; index < 10; index++) {

//     product[index] = parseInt(list1[index] * list2[index]);

// }

for (let index = 0; index < 10; index++) {
  let tmp1 = [];
  let tmp2 = [];

  list1.forEach((element) => {
    // tmp1 = element;
    tmp1.push(element)
    
  });
  list2.forEach((element) => {
    // tmp2 = element;
    tmp2.push(element)

  });
  product.push(tmp1[index] * tmp2[index]);
}

console.log(product)

// console.log(product);
