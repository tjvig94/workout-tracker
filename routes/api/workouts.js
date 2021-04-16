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

// Add one workout
router.post('/', async (req, res) => {
    try {
        console.log(req.body);
    } catch (err) {
        res.status(500).json({ error: err });
    }
});

// Update workout
router.put('/:id', async (req, res) => {
    try {
        const workout = await Workout.updateOne(
            {
                _id: req.params.id,
                updated_exercise: req.body
            },
            {
                $push: { exercises: updated_exercise }
            }
        );
        res.status(200).json(workout);
    } catch (err) {
        res.status(500).json({ error: err });
    }   
});

router.get('/range', async (req, res) => {
    try {
        const range = await Workout.find({});
        res.status(200).json(range);
    } catch (err) {
        res.status(500).json({ error: err })
    }
});

module.exports = router;
