({
  access: 'public',
  method: async (args) => {
    const { id } = args;
    console.log(args);
    console.log(id);
    const data = (await db.crud('User').read())?.rows || [];
    data.forEach((item) => {
      const valid = npm.ajv.validate(schema.get('user'), item);
      if (!valid) {
        throw Error(npm.ajv.errors[0].message);
      }
    });

    return { data };
  }
});
