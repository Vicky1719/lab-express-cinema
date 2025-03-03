const express = require("express");
const Movie = require("../models/Movie.model");
const router = express.Router();

/* GET home page */
router.get("/", (req, res, next) => res.render("index"));

router.get("/movies", (req, res, next) => {
  Movie.find()
    .then((response) => {
      res.render("movies.hbs", {
        moviesList: response,
      });
    })
    .catch((err) => {
      next(err);
    });
});

router.get("/movies/:movieId", (req, res, next) => {
  const { movieId } = req.params;

  Movie.findById(movieId)
    .then((response) => {
      res.render("movies-info.hbs", {
        info: response,
      });
    })
    .catch((err) => {
      next(err);
    });
});

module.exports = router;
