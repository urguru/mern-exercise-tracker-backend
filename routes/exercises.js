const router = require("express").Router();
const Exercise = require("../models/exercise.model");

router.get("/", async (req, res) => {
  try {
    const exercises = await Exercise.find();
    res.send(exercises);
  } catch (error) {
    res.status(400).send(error);
  }
});

router.post("/add", async (req, res) => {
  try {
    const { owner, desc, duration, date,username } = req.body;
    const newExercise = new Exercise({ owner, date, duration, desc,username });
    await newExercise.save();
    res.send({ res: "Successfully added" });
  } catch (error) {
    res.status(404).send(error);
  }
});
router.get("/:id", async (req, res) => {
  try {
    const exercise = await Exercise.findById(req.params.id);
    if (!exercise) {
      return res.status(400).send();
    }
    res.send(exercise);
  } catch (e) {
    res.status(400).send(e);
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const exercise = await Exercise.findById(req.params.id);
    if (!exercise) {
      return res.status(400).send();
    }
    exercise.delete();
    res.send(exercise);
  } catch (e) {
    res.status(400).send(e);
  }
});

router.patch("/:id", async (req, res) => {
  try {
    const exercise = await Exercise.findById(req.params.id);
    if (!exercise) {
      return res
        .status(400)
        .send({ error: "No exercise with the given id was found" });
    }
    const { desc, duration, date } = req.body;
    exercise.desc = desc || exercise.desc;
    exercise.duration = duration || exercise.duration;
    exercise.date = date || exercise.date;
    console.log(exercise);
    await exercise.save();
    res.send(exercise);
  } catch (e) {
    res.status(400).send(e);
  }
});

module.exports = router;
