module.exports.description = 'update slide to have small white logo for case study';

module.exports.up = (migration) => {
  const ctx = migration.editContentType('slide');
  ctx.createField('logo_small', {
    name: 'Logo Small',
    type: 'Link',
    linkType: 'Asset',
    required: true
  });

  ctx.moveField('logo_small').afterField('logo');

};

module.exports.down = (migration) => {
  const ctx = migration.editContentType('slide');
  ctx.deleteField('logo_small');
};
