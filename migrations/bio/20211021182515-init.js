module.exports.description = "Creating init migration for biography";

module.exports.up = (migration) => {
  const ctx = migration.createContentType("bio", {
    name: "Bio"
  });

  ctx.createField("name", {
    name: "Name",
    type: "Symbol",
    required: true
  });

  ctx.createField('body', {
    name: "Body",
    type: "RichText",
    required: true
  });

};

module.exports.down = (migration) => {
  migration.deleteContentType('bio');
};
