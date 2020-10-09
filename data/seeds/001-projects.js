exports.seed = function (knex) {
  return knex('projects').truncate()
    .then(function () {
      return knex('projects').insert([
        { id: 1, name: 'Twitter Clone', description: 'Clone of Twitter functionality', completed: false },
        { id: 2, name: 'Discord Clone', description: 'Clone of Discord functionality', completed: false },
      ]);
    });
};
