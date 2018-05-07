const express = require('express');
const app = express();
const router = express.Router();

const Comment = require('../models/Comment');

router
  .route('/add')
  .post(function (req, res) {
    const comment = new Comment(req.body);
    comment
      .save()
      .then(comment => {
        res
          .status(200)
          .json({'comment': 'Comment added successfully'});
      })
      .catch(err => {
        res
          .status(400)
          .send("unable to save the comment into database");
      });
  });

router
  .route('/')
  .get(function (req, res) {
    Comment
      .find(function (err,) {
        if (err) {
          console.log(err);
        } else {
          res.json();
        }
      });
  });

router
  .route('/update/:id')
  .post(function (req, res) {
    Comment
      .findById(req.params.id, function (err, comment) {
        if (!comment) 
          return next(new Error('Could not load Document'));
        else {
          comment.comment_name = req.body.comment_name;
          comment.comment_price = req.body.comment_price;

          comment
            .save()
            .then(comment => {
              res.json('Successfully Updated');
            })
            .catch(err => {
              res
                .status(400)
                .send("unable to update the database");
            });
        }
      });
  });

router
  .route('/delete/:id')
  .get(function (req, res) {
    Comment
      .findByIdAndRemove({
        _id: req.params.id
      }, function (err, comment) {
        if (err) 
          res.json(err);
        else 
          res.json('Successfully removed');
        }
      );
  });

module.exports = router;