exports.seed = function (knex) {
  return knex('resources').truncate()
    .then(function () {
      return knex('resources').insert([
        { id: 1, name: 'Lambda', description: 'education' },
        { id: 2, name: 'YouTube', description: 'instructional videos' },
        { id: 3, name: 'MDN', description: 'documentation' },
      ]);
    });
};
