// Специальня переменная exports
// global - для глобальных переменных
var x = 5;

function User(name) {
	this.name = name;
}

User.prototype.hello = function (who){
	//...
	console.log("Hello, " + who.name);
};
// ...

console.log("user.js is required!");

exports.User = User;
global.User = User;