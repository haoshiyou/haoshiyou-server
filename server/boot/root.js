'use strict';

console.assert(process.env.MONGODB_URL && process.env.MONGODB_DB, `Both MONGODB_URL and MONGODB_DB must be set`);

module.exports = function(server) {
  var MongoClient = require('mongodb').MongoClient;
  // TODO: this is very hacky but let's just refactor later
  new Promise(async (resolve, reject) => {
    let client = await MongoClient.connect(process.env.MONGODB_URL);
    var db = client.db(process.env.MONGODB_DB);

    // Install a `/` route that returns server status
    var router = server.loopback.Router();
    router.get('/', server.loopback.status());

    router.get('/ping', function(req, res) {
      res.send('pong');
    });


    router.get('/GetStickyListings', async function(req, res) {
      let result = await db.collection('StickyListing').find({expired_at: {$gte: new Date() /* not expired uyet */}}).toArray();
      res.send(result);
    });
    router.get('/GetTopScores', async function(req, res) {
      res.send('not implemented');
    });


    server.use(router);
  }).then(() => {
    console.log(`done `);
  }).catch((e)=> {
    console.error(e);
  });

};
