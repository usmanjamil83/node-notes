const events = require('events');
const util = require('util');

var Person = function(name) {
    this.name = name;
};

util.inherits(Person, events.EventEmitter);

var james = new Person('james');
var may = new Person('may');
var june = new Person('june');
var people = [james, may, june];

people.forEach(function(person) {
    person.on('speak', function(msg) {
        console.log(person.name + ' said: ' + msg);
    });
});

james.emit('speak', 'whats up');
may.emit('speak', 'hay james');