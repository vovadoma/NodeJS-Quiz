({
  access: 'public',
  method: async (args) => {
    const { id } = args;
    console.log(args);
    console.log(id);
    const data = ((await db.crud('User').read(id))?.rows || [])[0];
    const valid = npm.ajv.validate(schema.get('user'), data);
    if (!valid) {
      throw Error(npm.ajv.errors[0].message);
    }
    return { data };
  }
});
