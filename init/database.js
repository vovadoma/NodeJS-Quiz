(async () => {
  console.log('Connect to PG');
  const dbConfig = config.database;
  db.pool = new db.pg.Pool(dbConfig);
  //domain.pool = new db.pg.Pool(dbConfig);
  db.crud = db.crud(new db.pg.Pool(dbConfig));
  // 1
})();
