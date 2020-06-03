import win from './win';

export default function createAction(name, action) {
    return (...params) => {
        if (process.env.NODE_ENV !== 'production') {
            const storeLog = win.localStorage.getItem('store-log') || 0;
            if (storeLog > 1) {
                console.info(
                    `%c Action:%c ${name}`,
                    `background: red; color: white`,
                    `color: red`,
                    params
                );
            }
        }
        return action(...params);
    };
}
