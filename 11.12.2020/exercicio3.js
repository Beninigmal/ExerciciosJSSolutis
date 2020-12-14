// const login = new Promise((resolve, reject) => {
//   let condition = true;
//   setTimeout(() => {
//     if (condition) {
//       resolve("Estou pronto");
//     } else {
//       reject("Erro!");
//     }
//   }, 2000);
// });


function login(){
    return new Promise((resolve, reject) => {
        let condition = false;
        setTimeout(() => {
            if (condition) {
                resolve("Estou pronto")
            }else{
                reject(Error("Erro!Não mexe ai rapa"))
            }
        },2000)
    })
}
login()
.then(console.log);