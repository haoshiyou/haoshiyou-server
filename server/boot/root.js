'use strict';

console.assert(process.env.MONGODB_URL && process.env.MONGODB_DB, `Both MONGODB_URL and MONGODB_DB must be set`);
module.exports = function(server) {
  // Install a `/` route that returns server status
  var router = server.loopback.Router();
  router.get('/', server.loopback.status());

  router.get('/ping', function(req, res) {
    res.send('pong');
  });
  router.get('/GetStickyListings', function(req, res) {
    var MongoClient = require('mongodb').MongoClient;
    // TODO: this is very hacky but let's just refactor later
    MongoClient.connect(process.env.MONGODB_URL , function (err, client) {
      if (err) throw err;

      var db = client.db(process.env.MONGODB_DB);

      db.collection('StickyListing').find({expired_at: {$gte: new Date() /* not expired uyet */}}).toArray(function (err, result) {
        if (err) throw err;

        console.log(result);
        res.send(result);
      })
    });
  });


  server.use(router);

};
