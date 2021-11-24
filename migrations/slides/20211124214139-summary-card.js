const {updatePageComponentRef} = require('../../src/lib/schema');


module.exports.description = 'Adds the summary block found just below the title';

module.exports.up = (migration) => {
  const ctx = migration.createContentType('summary', {
    name: 'Summary',
    displayField: 'title'
  });

  ctx.createField('title', {
    name: 'Summary Title',
    type: 'Symbol',
    required: true
  });

  ctx.createField('year', {
    type: 'Symbol',
    name: 'Year Worked On',
    required: true
  });

  ctx.createField('technology', {
    name: 'Technology Stack',
    type: 'Array',
    items: {
      type: 'Symbol'
    }
  });

  ctx.createField('supporting_image', {
    name: 'Supporting Image',
    type: 'Link',
    linkType: 'Asset',
    required: true
  });

  const slideCtx = migration.editContentType('slide');

  slideCtx.createField('summaryRef', {
    type: 'Link',
    name: 'Summary',
    linkType: 'Entry',
    required: true,
    validations: [
      { linkContentType: [ 'summary' ] }
    ]
  });

  slideCtx.moveField('summaryRef').afterField('logo');
};

module.exports.down = (migration) => {
  migration.deleteContentType('summary');
  const slideCtx = migration.editContentType('slide');
  slideCtx.deleteField('summaryRef');
};
