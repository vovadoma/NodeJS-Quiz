({
  title: 'User',
  type: 'object',
  properties: {
    id: { 'type': 'integer' },
    name: { 'type': 'string' },
    email: { 'type': 'email' },
  },
  'required': ['id', 'name', 'email']
});
