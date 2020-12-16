const express = require("express");
const app = express();

const bodyParser = require("body-parser");
const ObjectId = require("mongodb").ObjectID;

const MongoClient = require("mongodb").MongoClient;
const { ObjectID } = require("mongodb");
const uri = "mongodb+srv://usuario1:18102010@cluster0.h5vg0.mongodb.net/cursoMongoDB?retryWrites=true&w=majority";
  MongoClient.connect(uri, { useUnifiedTopology: true, useNewUrlParser: true }, (err, client) =>  {
  if (err) console.log(err);
  db = client.db("cursoMongoDB");
});

app.listen(3009, () => {
  console.log("Server started");
});

app.use(bodyParser.urlencoded({ extended: true }));

app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("index.ejs");
});

app.get("/", (req, res) => {
  const cursor = db.collection("data").find();
});

app.get("/shows", (req, res) => {
  db.collection("data")
    .find()
    .toArray((err, result) => {
      if (err) return console.log(err);

      res.render("shows.ejs", { data: result });
    });
});

app.post("/show", (req, res) => {
  db.collection("data").save(req.body, (err, result) => {
    if (err) return console.log(err);

    console.log("Salvo no Banco de dados");
    res.redirect("/shows.ejs");
  })

  app
    .route('/edit.ejs/:id')
    .get((req, res) => {
      var id = req.params.id
     
      db.collection('data')
        .find(ObjectId(id))
        .toArray((err, result) => {
          if (err) return console.log(err)
          res.render('edit.ejs', { data: result })
        })
    })
    .post((req, res) => {
      let id = req.params.id;
      let name = req.body.name;
      let surname = req.body.surname;

      db.collection("data").updateOne(
        { _id: ObjectID(id) },
        {
          $set: {
            name: name,
            surname: surname
          },
        },
        (err, result) => {
          if (err) return console.log(err)
          res.redirect("/shows.ejs")
          console.log("Atualizado no banco de dados");
        }
      );
    });
});
