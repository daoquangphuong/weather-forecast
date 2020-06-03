import { compose, hoc } from '@';
import { useSelector } from 'react-redux'
import { selectWeatherDays } from '../../selectors';

const container = compose(
    hoc(props => {
        const weatherDays = useSelector(selectWeatherDays);

        return {
            weatherDays,
            ...props
        };
    })
);

export default container;
