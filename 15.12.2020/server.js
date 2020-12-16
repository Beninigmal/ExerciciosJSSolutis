const express = require("express");
const app = express();
const bodyparser = require("body-parser");
const ObjectID = require('mongodb').ObjectId
const MongoClient = require('mongodb').MongoClient;
const { ObjectId } = require("mongodb");
const uri = "mongodb+srv://usuario1:18102010@cluster0.h5vg0.mongodb.net/cursoMongoDB?retryWrites=true&w=majority"

MongoClient.connect(uri, (err, client) => {
    if(err) return console.log(err)
    db = client.db('cursoMongoDB')
})


app.listen(3005, () => {
    console.log("servidor na porta 3005");
});

app.use(bodyparser.urlencoded({ extended: true }))

app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("home");
});

app.get('/show', (req, res) => {
    db.collection('data').find().toArray(
        (err, results) => {
            if(err) return console.log(err)
            console.log(results)
            res.render('show', {data: results})
        }
    )
})

app.post("/show", (req, res) => {
  db.collection('data').save(req.body, (err, result) =>{
    if(err) return console.log(err)
    console.log('Salvo no Banco')
    res.redirect('/show')
  })
});

app.route('/edit/:id').get((req, res) => {
    let id = req.params.id
    db.collection('data').find(ObjectId(id)).toArray((err, result) =>{
        if(err) return console.log(err)
        res.render('edit', {data: result})

    })
})
.post((req, res) => {
    let id = req.params.id
    let nome = req.body.nome
    let sobrenome = req.body.sobrenome
    db.collection('data').updateOne(
        {
            _id: ObjectId(id)
        },
        {
            $set: {
                nome: nome,
                sobrenome: sobrenome
            }
        }, (err, result)=>{
            if(err) return console.log(err)
            res.redirect('/show')
            console.log('Banco atualizado')
        }
    )
})

app.route('/delete/:id')
.get((req, res) => {
    let id = req.params.id
    db.collection('data').deleteOne(
        {_id: ObjectId(id)}
    ),
    (err, result) => {
        if(err) return console.log(err)
        console.log('Valor deletado')
        res.redirect('/show')
    }
})