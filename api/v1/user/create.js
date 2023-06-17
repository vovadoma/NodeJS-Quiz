({
  access: 'public',
  methods: ['POST'],
  method: async ({ userData }) => {
    const data = await db.crud('User').create(userData);
    return { data };
  },
});
