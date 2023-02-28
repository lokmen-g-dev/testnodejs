import Client from "../models/client";


export function signup(req, res) {
  Client.create({
    firstname: req.body.firstname,
    lastname: req.body.lastname,
    password: req.body.password,
    image: `${req.protocol}://${req.get("host")}/img/${req.file.filename}`,
  })
    .then((newClient) => {
      res.status(200).json({
        firstname: newClient.firstname,
        lastname: newClient.lastname,
        password: newClient.password,
        image: newClient.avatar,
      });
    })
    .catch((err) => {
      res.status(500).json({ error: err });
    });
}

/////

export function putOnce(req, res) {
  let newUser = {};
  if(req.file == undefined) {
    newUser = {
      username: req.body.username,
      password: req.body.password,
      wallet: req.body.wallet
    }
  }
  else {
    newUser = {
      username: req.body.username,
      password: req.body.password,
      wallet: req.body.wallet,
      avatar: `${req.protocol}://${req.get("host")}/img/${req.file.filename}`
    }
  }
  User.findByIdAndUpdate(req.params.id, newUser)
    .then((doc1) => {
      User.findById(req.params.id)
        .then((doc2) => {
          res.status(200).json(doc2);
        })
        .catch((err) => {
          res.status(500).json({ error: err });
        });
    })
    .catch((err) => {
      res.status(500).json({ error: err });
    });
}