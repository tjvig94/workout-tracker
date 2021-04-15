const router = require('express').Router();
const { Workout, Exercise } = require('../../models');

// Get all workouts
router.get('/', (req, res) => {    
    Workout.find({}, (err, workouts) => {
        try {
            res.json(workouts)
        } catch (err) {
            res.json({ error: err })
        }
    });  
});

// Get one workout
router.get('/:id', (req, res) => {
    Workout.findOne({})
})

module.exports = router;
