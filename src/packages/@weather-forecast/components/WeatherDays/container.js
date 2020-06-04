import { compose, hoc } from '@';
import { useSelector } from 'react-redux';
import {
  selectWeatherDays,
  selectWeatherDaysError,
  selectWeatherDaysLoading,
} from '../../selectors';

const container = compose(
  hoc((props) => {
    const weatherDays = useSelector(selectWeatherDays);
    const weatherDaysError = useSelector(selectWeatherDaysError);
    const weatherDaysLoading = useSelector(selectWeatherDaysLoading);

    return {
      weatherDaysError,
      weatherDaysLoading,
      weatherDays,
      ...props,
    };
  })
);

export default container;
