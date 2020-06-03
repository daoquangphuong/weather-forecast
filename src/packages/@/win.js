const map = {
    localStorage: {},
    sessionStorage: {}
};

const createStorage = type => {
    return {
        getItem(key) {
            try {
                return window[type].getItem(key);
            } catch (e) {
                console.error(e);
                return map[type][key];
            }
        },
        setItem(key, value) {
            try {
                window[type].setItem(key, value);
            } catch (e) {
                console.error(e);
                map[type][key] = value;
            }
        },
        removeItem(key) {
            try {
                window[type].removeItem(key);
            } catch (e) {
                console.error(e);
                delete map[type][key];
            }
        }
    };
};

const win = {
    localStorage: createStorage('localStorage'),
    sessionStorage: createStorage('sessionStorage')
};

export default win;
