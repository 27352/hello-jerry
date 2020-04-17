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

    canvas.appendChild(
        document.createTextNode( output.join(' ') )
    );

    canvas.appendChild(
        document.createElement('br')
    );

    //canvas.innerHTML += output.join(' ') + '<br/>';
};

//vtg.tracking.Log.logger = logger;
vtg.tracking.SystemInfo.isDev = () => { return false };

// window && logger.log('window->' + typeof window);
// window.XMLHttpRequest && logger.log('XMLHttpRequest->' + typeof XMLHttpRequest);
// window.localStorage && logger.log('localStorage->', window.localStorage);

