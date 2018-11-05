'use strict';

var loopback = require('loopback');
var boot = require('loopback-boot');
var path = require('path');
var app = module.exports = loopback();
var checkEnv = function() {
  if (!process.env.HSY_SERVER_MYSQL_URL) {
    console.error('$HSY_SERVER_MYSQL_URL is not set, '
      + 'set it by "export HSY_SERVER_MYSQL_URL=mysql://<user>:<pw>@<hostname>:<port>?reconnect=true"');
    process.exit();
  }
  console.log('$HSY_SERVER_MYSQL_URL is set, now starting haoshiyou-server in NODE_ENV=' + process.env.NODE_ENV);

};
app.use(loopback.static(path.resolve(__dirname, '../static')));
app.start = function() {
  // start the web server
  return app.listen(function() {
    app.emit('started');
    var baseUrl = app.get('url').replace(/\/$/, '');
    console.log('Web server listening at: %s', baseUrl);
    if (app.get('loopback-component-explorer')) {
      var explorerPath = app.get('loopback-component-explorer').mountPath;
      console.log('Browse your REST API at %s%s', baseUrl, explorerPath);
    }
  });
};

// Bootstrap the application, configure models, datasources and middleware.
// Sub-apps like REST API are mounted via boot scripts.
boot(app, __dirname, function(err) {
  if (err) throw err;

  // start the server if `$ node server.js`
  if (require.main === module) {
    checkEnv();
    app.start();
  }
});
