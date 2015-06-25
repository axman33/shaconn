var USER_TABLE = 'Users';
var db;

// Attributes of the table
var userId; // primary Hash key

var userName;
var userLocation;

function UserDAO(db) {
  this.db = db;
}

UserDAO.prototype.save = function() {

};
UserDAO.prototype.load = function(callback) {
// get userId from class variables
var params = {'Key':{'userId':{'S':userId}},'TableName':USER_TABLE};
request = db.getItem(params, new function(err, resp) {
  callback(err, resp);
});
};
module.exports = UserDAO;
