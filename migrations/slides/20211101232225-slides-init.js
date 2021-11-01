module.exports.description = 'Initializes the slides component';

module.exports.up = (migration) => {
  const ctx = migration.createContentType('slides', {
    name: 'Slides',
  });

  ctx.createField('brand', {
    type: 'Symbol',
    name: 'Brand',
    required: true,
  })
  ctx.createField('logo', {
    name: 'Logo',
    type: 'Link',
    linkType: 'Asset',
    required: true
  })
};

module.exports.down = (migration) => {
  migration.deleteContentType('slides');
};
