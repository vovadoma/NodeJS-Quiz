({
  access: 'public',
  method: async ({ id }) => {
    const data = (await db.crud('User').read(id))?.rows || [];
    return { status: 'ok', data };
  },
});
