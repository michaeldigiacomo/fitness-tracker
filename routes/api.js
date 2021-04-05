const router = require("express").Router();
const workout = require("../models/workout");

router.post("/api/workouts", ({ body }, res) => {
  workout
    .create({})
    .then((dbWorkout) => {
      res.json(dbWorkout);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
});

router.put("/api/workouts/:id", (req, res) => {
    workout
      .findByIdAndUpdate(
          req.params.id, 
          {$push:{exercises: req.body}}
      )
      .then((dbWorkout) => {
        res.json(dbWorkout);
      })
      .catch((err) => {
        res.status(400).json(err);
      });
  });

router.get("/api/workouts/range", (req, res) => {
    workout
      .aggregate([
          {
              $addFields: {
                  totalDuration: {
                      $sum: "$exercises.duration"
                  }
              }
          }
      ])
      .then((dbWorkout) => {
        res.json(dbWorkout);
      })
      .catch((err) => {
        res.status(400).json(err);
      });
  });

router.delete("/api/workouts", ({ body }, res) => {
  workout
    .findIdAndDelete(body.id)
    .then(() => {
      return res.json(true);
    })
    .catch((err) => {
      res.json(400).json(err);
    });
});

module.exports = router;