import axios from 'axios';

export default async (...params) => {
    try {
        const res = await axios(...params);
        return res;
    } catch (e) {
        throw e;
    }
};