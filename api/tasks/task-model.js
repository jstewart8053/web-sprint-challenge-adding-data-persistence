const db = require('../../data/db-config');

module.exports = {
    get,
    getById,
    add,
}

function get() {
    return db('tasks')
        .join('projects', 'projects.id', 'tasks.project_id')
    //.select('tasks', 'project.name AS ProjectName', 'projects.description AS ProjectDescription')
}

function getById(id) {
    return db('tasks')
        .where({ id }).first();
}

function add(task) {
    return db('tasks')
        .insert(task);
}