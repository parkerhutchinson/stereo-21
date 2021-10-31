module.exports.description = 'Making required fields for title and description';

module.exports.up = (migration) => {
  const ctx = migration.editContentType('meta');
  ctx.editField('title', {
    type: 'Symbol',
    name: 'Title',
    required: true
  });

  ctx.editField('description', {
    type: 'Symbol',
    name: 'Description',
    required: true
  });
};

module.exports.down = (migration) => {
  const ctx = migration.editContentType('meta');
  ctx.editField('title', {
    type: 'Symbol',
    name: 'Title',
    required: false
  });

  ctx.editField('description', {
    type: 'Symbol',
    name: 'Description',
    required: false
  });
};
