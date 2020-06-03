import { createAction } from '@';
import { notification } from 'antd';
import axios from 'axios';

export default createAction('Fetch', async (...params) => {
    try {
        const res = await axios(...params);
        return res;
    } catch (e) {
        notification.error({
            message: 'Fetch Error',
            description: e.message,
        });
        throw e;
    }
});
