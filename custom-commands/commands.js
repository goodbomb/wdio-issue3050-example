function myFunction(message) {

    function doSomething() {
        console.log(message);
    }

    return doSomething(message);
}

module.exports = (function() {
    browser.addCommand('myCommand', function(message) {

        return this.execute(myFunction, message);
    });
})();