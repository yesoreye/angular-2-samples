window.oodha = function(namespaceString, parentObj, delimiter) {
    var d, f, e;
    parentObj = parentObj || oodha || this;
    namespaceString = namespaceString.split(delimiter || ".");
    d = 0;
    for (f = namespaceString.length; d < f; d++)
    { 
        delimiter = namespaceString[d],
        parentObj = parentObj[delimiter] = parentObj[delimiter] || {},
        "object" === typeof parentObj && (e = parentObj);
    }
    "function" === typeof parentObj && e && (parentObj = parentObj.bind(e));
    return parentObj;
};

oodha("config");
oodha("log");
oodha("cookies");

oodha.log = console.log

oodha.cookies.create = function(name, value, days) {
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        var expires = "; expires=" + date.toGMTString();
    }
    else {
        var expires = "";
    }
    document.cookie = name + "=" + value + expires + "; path=/";
}
oodha.cookies.read = function(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1, c.length);
        }
        if (c.indexOf(nameEQ) == 0) {
            return c.substring(nameEQ.length, c.length);
        }
    }
    return null;
}
oodha.cookies.erase= function(name) {
    createCookie(name, "", -1);
}