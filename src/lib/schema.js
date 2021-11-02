const COMPONENT_MAIN_REF_LIST = [
  'meta',
  'bio',
  'slides'
]

const updatePageComponentRef = (migration) => {
  migration.editField('components', {
    type: "Array",
    name: "Components",
    required: true,
    items: {
      type: "Link",
      linkType: "Entry",
      validations: [{
        linkContentType: COMPONENT_MAIN_REF_LIST
      }]
    }
  });
}


module.exports = {
  COMPONENT_MAIN_REF_LIST,
  updatePageComponentRef
}