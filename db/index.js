const users = require('./users.js');
const posts = require('./posts.js');

module.exports = {
	users: users(30),
	posts: posts(30)
}
