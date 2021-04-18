const router = require('express').Router();
const { Workout } = require('../models');

// Get all workouts
router.get('/api/workouts', async (req, res) => { 
    try {   
        const workouts = await Workout.find({});
        res.json(workouts);
    } catch (err) {
            res.json({ error: err })
    }     
});

router.get('api/workouts/range', async (req, res) => {
    try {
        const range = await Workout.find({});
        res.status(200).json(range);
    } catch (err) {
        res.status(500).json({ error: err })
    }
});

// Add one workout
router.post('/api/workouts/', async (req, res) => {
    try {
        console.log(req.body)
        Workout.create(req.body)
        .then((newWorkout) => {
            res.json(newWorkout);
        })
        .catch((err) => {
            res.status(400).json(err);
        });
    } catch (err) {
        res.status(500).json({ error: err });
    }
});

// Update workout
router.put("/api/workouts/:id", (req, res) => {
    exerciseId = req.params.id;
    exerciseInfo = req.body;

    Workout.findByIdAndUpdate(
        exerciseId,
        { $push: { exercises: exerciseInfo } },
        { new: true }
    )
        .then((chosenWorkout) => {
            res.json(chosenWorkout);
        })
        .catch((err) => {
            res.status(400).json(err);
        });
});

module.exports = router;
