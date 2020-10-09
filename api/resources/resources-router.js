const router = require('express').Router();

const Resources = require('./resource-model')

router.get('/', (req, res) => {
    Resources.get()
        .then(resources => {
            res.status(200).json(resources)
        })
        .catch(err => {
            res.status(500).json({ message: 'Failed to get resources' });
        })
})

router.get('/:id', (req, res) => {
    const { id } = req.params;
    Resources.getById(id)
        .then(resource => {
            if (resource) {
                res.status(200).json(resource)
            } else {
                res.status(404).json({ message: 'Could not find resource with given id' })
            }

        })
        .catch(err => res.status(500).json(err))
})

router.post('/', (req, res) => {
    Resources.add(req.body)
        .then(resource => {
            res.status(201).json(resource);
        })
        .catch(err => {
            res.status(500).json({ message: 'Failed to create new resource ' });
        })
})

module.exports = router;