var http = require('http');
var AWS = require('aws-sdk');
AWS.config.update({region:'us-west-2'});
// Export these env variables for connection to work
// AMAZON_ACCESS_KEY_ID, AMAZON_SECRET_ACCESS_KEY
var db = new AWS.DynamoDB();
// create user dao
var userDao = new UserDAO(db);
var userId = 'userId1'
//userDao.save();
userDao.userId = userId;
userDao.load(new function(err, resp) {
  if(err) {
    console.log(err);
  } else {
    console.log(resp);
  }
});
//http.createServer(function(request, response) {
//  response.write('ShaConn web app\n');
//  response.write('Stay tuned');
//  response.end();
//}).listen(8888);
