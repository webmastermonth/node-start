require('./user.js');

var vasya = new User("Вася");
var petya = new User("Петя");

vasya.hello(petya);