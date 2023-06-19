({
  access: 'public',
  method: async (args) => {
    const { id } = args;
    const data = ((await db.crud('User').read(id))?.rows || [])[0];
    const valid = npm.ajv.validate(schema.get('user'), data);
    if (!valid) {
      throw Error(npm.ajv.errors[0].message);
    }
    return { data };
  }
});
