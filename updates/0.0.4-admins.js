/**
 * This script automatically creates a default Admin user when an
 * empty database is used for the first time. You can use this
 * technique to insert data into any List you have defined.
 */
var keystone = require('keystone'),
    Ys = keystone.list('ys');

Ys.model.find()
    .limit(100)
    .exec()
    .then(function (y) { //first promise fulfilled
        //return another async promise
    }, function (err) { //first promise rejected
        y.remove();
    }).then(function (result) { //second promise fulfilled
        //do something with final results
    }, function (err) { //something happened
        //catch the error, it can be thrown by any promise in the chain
        console.log(err);
    });
exports.create = {
	Y: [
		{ 'name.first': 'Admin', 'name.last': 'User', email: 'admin@myfirstkeystone.com', password: 'admin', isAdmin: true }
	]
};

/**
 * The following is the older version of this update script, it is
 * left here for reference as an example of how more complex updates
 * can be structured.
 */
/*
var keystone = require('keystone'),
	async = require('async'),
	User = keystone.list('User');

var admins = [
	{ email: 'user@keystonejs.com', password: 'admin', name: { first: 'Admin', last: 'User' } }
];

function createAdmin(admin, done) {

	var newAdmin = new User.model(admin);

	newAdmin.isAdmin = true;
	newAdmin.save(function(err) {
		if (err) {
			console.error("Error adding admin " + admin.email + " to the database:");
			console.error(err);
		} else {
			console.log("Added admin " + admin.email + " to the database.");
		}
		done(err);
	});

}

exports = module.exports = function(done) {
	async.forEach(admins, createAdmin, done);
};
*/
