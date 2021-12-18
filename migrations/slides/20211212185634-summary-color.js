module.exports.description = 'separate summary color from slide';

module.exports.up = (migration) => {
  const summaryCtx = migration.editContentType('summary');
  summaryCtx.createField('summary_color',{
    name: 'Scheme - Summary Background Color',
    type: 'Symbol',
    required: true
  });
  summaryCtx.moveField('summary_color').afterField('technology');

};

module.exports.down = (migration) => {
  const summaryCtx = migration.editContentType('summary');
  summaryCtx.deleteField('summary_color');
};
