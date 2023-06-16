({
  access: 'public',
  method: async ({ id }) => {
    const data = (await db.crud('User').read(id))?.rows || [];
    return { data };
  },
  validate: (data) => {
    // validate
    // how send errors
  }
});
