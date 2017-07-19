var User = require('./user');

function run(){
var vasya = new User("Вася");
var petya = new User("Петя");

vasya.hello(petya);
}

// Если файл был потключён другим скриптом, то экспортируем функцию run
if (module.parent){
	exports.run = run;
} else{
	run();
}