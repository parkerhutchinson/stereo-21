module.exports.description = '<Put your description here>';

module.exports.up = (migration) => {
  const ctx = migration.editContentType('slide');
  ctx.createField('mesh_fallback_asset', {
    type: 'Link',
    name: '3D Scene Static Image',
    required: true,
    linkType: 'Asset'
  });
  ctx.moveField('mesh_fallback_asset').afterField('meshScene');

};

module.exports.down = (migration) => {
  const ctx = migration.editContentType('slide');
  ctx.deleteField('mesh_fallback_asset');
};
