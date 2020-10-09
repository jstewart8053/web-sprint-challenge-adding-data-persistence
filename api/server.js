const express = require('express');

const server = express();
const ProjectsRouter = require('./projects/project-router');
const TasksRouter = require('./tasks/task-router');
const ResourcesRouter = require('./resources/resource-router');

server.use(express.json());

server.use('/api/projects', ProjectsRouter);
server.use('/api/tasks', TasksRouter);
server.use('/api/resources', ResourcesRouter);

server.get('/', (req, res) => {
    res.status(200).json({ server: 'running' })
});

module.exports = server;