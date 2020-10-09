
exports.seed = function (knex) {
  return knex('tasks').truncate()
    .then(function () {
      return knex('tasks').insert([
        { id: 1, project_id: 1, description: 'learn', completed: false, notes: 'look' },
        { id: 2, project_id: 1, description: 'watch', completed: false, notes: 'pay attention!' },
        { id: 3, project_id: 2, description: 'listen', completed: false, notes: 'hear' },
        { id: 4, project_id: 2, description: 'study', completed: false, notes: 'try' },
      ]);
    });
};