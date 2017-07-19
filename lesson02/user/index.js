// Специальня переменная exports
// global - для глобальных переменных
var x = 5;

var db = require('../db');
var log = require('./logger')(module)
function User(name){
	this.name = name;
}

User.prototype.hello = function (who){
	//...
	log(db.getPhrase("Hello") + ", " + who.name);
};
// ...

//console.log("user/index.js is required!");

module.exports = User;

// Вывод информации о модулях
//console.log(module);