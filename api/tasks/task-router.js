const router = require('express').Router();

const Tasks = require('./task-model')

router.get('/', (req, res) => {
    Tasks.get()
        .then(tasks => {
            res.status(200).json(tasks)
        })
        .catch(err => {
            res.status(500).json({ message: 'Failed to get tasks' });
        })
})

router.get('/:id', (req, res) => {
    const { id } = req.params;
    Tasks.getById(id)
        .then(task => {
            if (task) {
                res.status(200).json(task)
            } else {
                res.status(404).json({ message: 'Could not find task with given id' })
            }

        })
        .catch(err => res.status(500).json(err))
})

router.post('/', (req, res) => {
    Tasks.add(req.body)
        .then(task => {
            res.status(201).json(task);
        })
        .catch(err => {
            res.status(500).json({ message: 'Failed to create new task ' });
        })
})


module.exports = router;