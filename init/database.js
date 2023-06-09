const init = async () => {
  console.log('Connect to PG');
  console.log(config.database);
  const dbConfig = config.database;
  db.pool = new db.pg.Pool(dbConfig);
  domain.pool = new db.pg.Pool(dbConfig);
  db.crud = db.crud(new db.pg.Pool(dbConfig));
};

init();