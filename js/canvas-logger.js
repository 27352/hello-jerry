var logger = {};

logger.log = function() {
    var canvas = document.getElementById('log');
    var output = [];

    for (var i = 0; i < arguments.length; i++) {
        if (typeof arguments[i] === 'object') {
            var str = '{ ';

            for (var key in arguments[i]) {
                str += key + ':' + arguments[i][key].toString() + ' '
            }

            str += '}';

            arguments[i] = str;
        }

        output[i] = arguments[i];
    }

    canvas.innerHTML += output.join(' ') + '<br/>';
};

vtg.tracking.Log.logger = logger;
