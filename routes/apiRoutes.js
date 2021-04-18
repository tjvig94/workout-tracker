const router = require('express').Router();
const { Workout } = require('../models');

// Get all workouts
router.get('/api/workouts',(req, res) => { 
    Workout.find({})
    .then(data => res.json(data))
    .catch(err => res.json({ error: err }))        
});

router.get('/api/workouts/range', (req, res) => {
    Workout.find({})
    .then(data => res.json(data))
    .catch(err => res.status(500).json(err))  
});

// Add one workout
router.post('/api/workouts/', (req, res) => {
    Workout.create(req.body)
    .then((newWorkout) => {
        res.json(newWorkout);
    })
    .catch((err) => {
        res.status(400).json(err);
    });
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
