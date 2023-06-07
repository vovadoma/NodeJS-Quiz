({
  access: 'public',
  method: async ({ id }) => {
    const data = db.pg.query('User', { id });
    return { status: 'ok', data };
  },
});
