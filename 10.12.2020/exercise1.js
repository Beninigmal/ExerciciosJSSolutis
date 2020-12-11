const list = [3, 35, 10, 0, 50, 13, 18, 7, 9, 20];
let lessThenTen = [];
let moreThenTen = [];

list.forEach((element) => {
  if (element <= 10) {
    lessThenTen.push(element);
  } else if (element > 10 && element >= 20) {
    moreThenTen.push(element);
  }
});

function exercise1() {
  console.log(
    `Os valores ${lessThenTen} estão fora do intervalo de 10 a 15 números`
  );
  console.log(
    `Os valores ${moreThenTen} estão no intervalo de 10 a 15 números`
  );
}

exercise1();