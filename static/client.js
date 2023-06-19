'use strict';

const transport = {};

let callId = 1;

transport.http = (url, version = '') => (structure) => {
  const api = {};
  const services = Object.keys(structure);
  for (const name of services) {
    api[name] = {};
    const service = structure[name];
    const methods = Object.keys(service);
    for (const methodName of methods) {
      api[name][methodName] = (args) =>
        new Promise((resolve, reject) => {
          const id = callId++;
          const method = (version ? (version + '/') : '') + name + '/' + methodName;
          const packet = { type: 'call', id, method, args };
          fetch(url + '/api', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(packet),
          }).then((res) => {
            if (res.status === 200) resolve(res.json());
            else reject(new Error(`Status Code: ${res.status}`));
          });
        });
    }
  }
  return Promise.resolve(api);
};

const scaffold = (url, version = '') => {
  const protocol = url.startsWith('ws:') ? 'ws' : 'http';
  return transport[protocol](url, version);
};

(async () => {
  const api = await scaffold('http://localhost:8001', 'v1')({
    user: {
      read: ['id'],
    },
  });
  console.log(api);
  const data = await api.user.read({ id: 2 });
  console.dir({ data });
})();
