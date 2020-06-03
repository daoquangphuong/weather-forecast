import { createAction } from '@';
import dayjs from 'dayjs';
import { Fetch } from "../../@fetch";
import { $weatherDays } from '../stores';

export default createAction('GetWeather', async (woeid) => {
    const { data } = await Fetch({
        url: `/api/location/${woeid}/`,
    })

    $weatherDays.setState(() => undefined);

    const weatherDays = ((data && data.consolidated_weather) || []).map(item => ({
        id: item.id,
        day: dayjs(item.applicable_date, 'YYYY-MM-DD').format('dddd'),
        maxTemp: (item.max_temp).toFixed(2),
        minTemp: (item.min_temp).toFixed(2),
    }))

    $weatherDays.setState(() => weatherDays);
});
