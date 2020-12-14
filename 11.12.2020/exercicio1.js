function fazRequisicao(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Promessa resolvida')
            reject('Promessa rejeitada')
        }, 2000)
    })
}

fazRequisicao()
.then(console.log)
.catch(console.log)
.finally(console.log('Acabou!'))

