(function (w) {
    var tracking = w.vtg.tracking;

    w.localStorage = {
        setItem: (key, value) => {console.log('>set', key, value);
            tracking && tracking.Cookie.set(key, value);
        },

        getItem: (key) => {console.log('>get', key);
            return tracking && tracking.Cookie.get(key);
        },

        removeItem: (key) => {
            tracking && tracking.Cookie.set(key, '');
        },

        clear: () => {
        }
    };

})(window);
