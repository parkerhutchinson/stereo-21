const {updatePageComponentRef} = require('../../src/lib/schema');
module.exports.description = 'Initializes the slides component';

module.exports.up = (migration) => {
  const slideCtx = migration.createContentType('slide', {
    name: 'Slide',
    displayField: 'brand'
  });

  slideCtx.createField('brand', {
    type: 'Symbol',
    name: 'Brand',
    required: true,
  });

  slideCtx.createField('logo', {
    name: 'Logo',
    type: 'Link',
    linkType: 'Asset',
    required: true
  });

  slideCtx.createField('meshScene', {
    type: 'Link',
    name: '3D Scene',
    required: true,
    linkType: 'Asset'
  });
  
  slideCtx.createField('caseStudyCopy', {
    name: "Case Study Copy",
    type: "RichText",
    required: true
  });

  slideCtx.createField('colorSchemeSeed', {
    type: 'Symbol',
    name: 'Scheme - Primary Color',
    required: true
  });

  slideCtx.createField('colorSchemeHighlight', {
    type: 'Symbol', 
    name: 'Scheme - Highlight',
    required: true
  });

  slideCtx.createField('colorSchemeBioBG', {
    type: 'Symbol',
    name: 'Scheme - Bio Background Color',
    required: true
  });

  slideCtx.createField('colorSchemeBioText', {
    type: 'Symbol', 
    name: 'Scheme - Bio Text Color',
    required: true
  });

  const ctx = migration.createContentType('slides', {
    name: 'Slides',
    displayField: 'slidesTitle'
  });

  ctx.createField('slidesTitle', {
    type: 'Symbol',
    name: 'Slides Title',
    required: true
  });

  ctx.createField('slideRef', {
    name: 'Slide Entries',
    type: 'Array',
    required: true,
    items: {
      type: "Link",
      linkType: "Entry",
      validations: [{
        linkContentType: ['slide']
      }]
    }
  });
  
  const pageCtx = migration.editContentType('page');
  updatePageComponentRef(pageCtx);
};

module.exports.down = (migration) => {
  migration.deleteContentType('slides');
  migration.deleteContentType('slide');
};
