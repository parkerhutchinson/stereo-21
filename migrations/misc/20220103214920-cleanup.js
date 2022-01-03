module.exports.description = 'cleanup migration for some content types';

module.exports.up = (migration) => {
  // give page a display field to use
  const pageCtx = migration.editContentType('page', {
    displayField: 'title'
  });

  pageCtx.createField('title', {
    name: 'Title',
    required: true,
    type: 'Symbol'
  });

  pageCtx.moveField('title').toTheTop();

  // give bio a display field to use
  migration.editContentType('bio', {
    displayField: 'name'
  });

};

module.exports.down = (migration) => {

};
