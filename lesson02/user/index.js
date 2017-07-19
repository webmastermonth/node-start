// Специальня переменная exports
// global - для глобальных переменных
var x = 5;

var phrases = require('./ru');

function User(name) {
	this.name = name;
}

User.prototype.hello = function (who){
	//...
	console.log(phrases.Hello + ", " + who.name);
};
// ...

console.log("user/index.js is required!");

module.exports.User = User;
global.User = User;

// Вывод информации о модулях
//console.log(module);