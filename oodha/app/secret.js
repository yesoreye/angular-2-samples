var uuid        = require('node-uuid');
var events      = require('events');

var eventEmitter = new events.EventEmitter();

var secret_queue = ["welcome","oodha.com"];

var get_secret = function(){
    return secret_queue[1];
}
var update_secret = function(){    
    secret_queue.shift();
    var new_secret = uuid.v4();
    secret_queue.push(new_secret);
    console.log("secret queue updated",secret_queue);
    eventEmitter.emit('update_secret',new_secret);
}
var validate_secret = function(secret){
    return secret_queue.indexOf(secret) > -1;
}

update_secret();
setInterval(function(){
    update_secret();
}, 1*60*1000);

module.exports = {
    get_secret : get_secret,
    update_secret :update_secret,
    validate_secret: validate_secret,
    events : eventEmitter
}