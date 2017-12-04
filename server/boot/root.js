'use strict';

module.exports = function(server) {
  console.log('Started haoshiyou-server in NODE_ENV=' + process.env.NODE_ENV);
  // Install a `/` route that returns server status
  var router = server.loopback.Router();
  router.get('/', server.loopback.status());
  server.use(router);

};
