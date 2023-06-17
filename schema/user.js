({
  title: 'User',
  type: 'object',
  properties: {
    id: { 'type': 'integer' },
    name: { 'type': 'string' },
    email: { 'type': 'string' },
  },
  'required': ['id', 'name', 'email']
});
