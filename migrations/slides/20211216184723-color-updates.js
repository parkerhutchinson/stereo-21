module.exports.description = '<Put your description here>';

module.exports.up = (migration) => {
  const ctx = migration.editContentType('slide');

  ctx.createField('colorSchemeSlideStopOne', {
    type: 'Symbol',
    name: 'Scheme - Slide Stop 1',
    required: true
  });

  ctx.createField('colorSchemeSlideStopTwo', {
    type: 'Symbol',
    name: 'Scheme - Slide Stop 2',
    required: true
  });

  ctx.createField('colorSchemeEyeBrowStopOne', {
    type: 'Symbol',
    name: 'Scheme - Eyebrow Stop 1',
    required: true
  });

  ctx.createField('colorSchemeEyeBrowStopTwo', {
    type: 'Symbol',
    name: 'Scheme - Eyebrow Stop 2',
    required: true
  });
};

module.exports.down = (migration) => {
  const ctx = migration.editContentType('slide');
  ctx.deleteField('colorSchemeSlideStopOne');
  ctx.deleteField('colorSchemeSlideStopTwo');
  ctx.deleteField('colorSchemeEyeBrowStopOne');
  ctx.deleteField('colorSchemeEyeBrowStopTwo');
};