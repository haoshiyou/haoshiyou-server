'use strict';

module.exports = function(server) {
  if (!process.env.HSY_SERVER_MYSQL_URL) {
    console.error('$HSY_SERVER_MYSQL_URL is not set, '
      + 'set it by "export HSY_SERVER_MYSQL_URL=mysql://<user>:<pw>@<hostname>:<port>?reconnect=true"');
    process.exit();
  }
  console.log('$HSY_SERVER_MYSQL_URL is set, now starting haoshiyou-server in NODE_ENV=' + process.env.NODE_ENV);
  // Install a `/` route that returns server status
  var router = server.loopback.Router();
  router.get('/', server.loopback.status());
  server.use(router);

};
