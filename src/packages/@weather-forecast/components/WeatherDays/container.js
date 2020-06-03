import { compose, hoc } from '@';
import { useSelector } from 'react-redux'
import { selectWeatherDays, selectWeatherDaysLoading } from '../../selectors';

const container = compose(
    hoc(props => {
        const weatherDays = useSelector(selectWeatherDays);
        const weatherDaysLoading = useSelector(selectWeatherDaysLoading);

        return {
            weatherDaysLoading,
            weatherDays,
            ...props
        };
    })
);

export default container;
