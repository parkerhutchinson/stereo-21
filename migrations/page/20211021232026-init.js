const {COMPONENT_MAIN_REF_LIST} = require('../../src/lib/schema');
module.exports.description = '<Put your description here>';

module.exports.up = (migration) => {
  const ctx = migration.createContentType('page', {
    name: 'Page',
  });

  ctx.createField('components', {
    type: "Array",
    name: "Components",
    required: true,
    items: {
      type: "Link",
      linkType: "Entry",
      validation: [{
        in: COMPONENT_MAIN_REF_LIST
      }]
    }
  })
};

module.exports.down = (migration) => {
  // Add your DOWN migration script here. See examples here:
  // https://github.com/contentful/migration-cli/tree/master/examples
};
