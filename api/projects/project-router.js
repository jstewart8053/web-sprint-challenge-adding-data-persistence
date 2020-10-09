const express = require('express');

const Projects = require('./projects-model');

const router = express.Router();

router.get('/', (req, res) => {
    Projects.find()
        .then((project) => {
            res.json(project);
        })
        .catch((err) => {
            res.status(500).json({ message: 'Errorn no projects' });
        });
});

router.get('/:id', (req, res) => {
    const { id } = req.params;

    Projects.findById(id)
        .then((project) => {
            if (project) {
                res.json(project);
            } else {
                res
                    .status(404)
                    .json({ message: 'Project with ID not found' });
            }
        })
        .catch((err) => {
            res.status(500).json({ message: 'Failed Project' });
        });
});

router.post('/', (req, res) => {
    const projectData = req.body;

    Projects.add(projectData)
        .then((project) => {
            res.status(201).json(project);
        })
        .catch((err) => {
            res.status(500).json({ message: 'Project failed' });
        });
});

router.get('/:id/tasks', (req, res) => {
    const { id } = req.params;

    Projects.findTask(id)
        .then((task) => {
            if (task.length) {
                res.json(task);
            } else {
                res
                    .status(404)
                    .json({ message: 'Task not found' });
            }
        })
        .catch((err) => {
            res.status(500).json({ message: 'Failed' });
        });
});

router.post('/:id/tasks', (req, res) => {
    const taskData = req.body;
    const { id } = req.params;

    Projects.findById(id)
        .then((project) => {
            if (project) {
                Projects.addTask(taskData, id).then((task) => {
                    res.status(201).json(taskData);
                });
            } else {
                res
                    .status(404)
                    .json({ message: 'Project not found' });
            }
        })
        .catch((err) => {
            res.status(500).json({ message: 'Failed to create new task' });
        });
});

module.exports = router;