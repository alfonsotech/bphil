const db = require("../models");

// Defining methods for the pathController
module.exports = {
  findAll: function(req, res) {
    
    db.Path
      .find({})
      .exec( (err, docs) => {
        console.log('docs', docs);
        res.json(docs)
      })
  },
  findById: function(req, res) {
    db.Path
      .findById(req.params.id)
      .then(dbPath => res.json(dbPath))
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    console.log('req.body', req.body);
    const path = {
      title: req.body.title,
      author:req.body.author,
      description: req.body.description,
      upvotes: req.body.upvotes,
      notes: req.body.notes,
      media: req.body.media,
      categories: req.body.categories,
      path: req.body.path,
      position: req.body.position
    };
    console.log('path from controller: ', path);
    db.Path
      .create(path)
      .then(dbPath => res.json(dbPath))
      .catch(err => res.status(422).json(err));
  },
  update: function(req, res) {
    db.Path
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbPath => res.json(dbPath))
      .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
    db.Path
      .findById({ _id: req.params.id })
      .then(dbPath => dbPath.remove())
      .then(dbPath => res.json(dbPath))
      .catch(err => res.status(422).json(err));
  }
};
