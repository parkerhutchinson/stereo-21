module.exports.description = 'Creates the meta information found on every page';
const {COMPONENT_MAIN_REF_LIST} = require('../../src/lib/schema');

module.exports.up = (migration) => {
  const ctx = migration.createContentType('meta', {
    name: 'Meta',
    displayField: 'title'
  });

  ctx.createField('title', {
    name: 'Title',
    type: 'Symbol',
  });

  ctx.createField('description', {
    name: 'Description',
    type: 'Symbol'
  });

  ctx.createField('keywords', {
    name: 'keywords',
    type: 'Array',
    items: {
      type: 'Symbol'
    }
  });

  ctx.createField('image', {
    name: 'OG Image',
    type: 'Link',
    linkType: "Asset"
  });

  const page = migration.editContentType('page');

  page.createField('meta', {
    name: 'Page Meta Information',
    type: 'Link',
    linkType: 'Entry',
    required: true,
    validations: [
      {linkContentType: ['meta']},
    ]
  })

  page.moveField('meta').toTheTop();
};

module.exports.down = (migration) => {
  const page = migration.editContentType('page');

  page.deleteField('meta');

  migration.deleteContentType('meta');
};
