var socket = io();

socket.on('MSG', function (msg) {
    oodha.log(msg)
});

socket.on("SECRET", function (msg) {
    oodha.config.secret = msg;
    oodha.cookies.create("oodha_secret", msg, 1);
    oodha.log("Secret updated : ",msg);
})