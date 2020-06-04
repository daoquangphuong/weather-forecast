import { useDispatch, useSelector } from 'react-redux';
import { useCallback } from 'react';
import { compose, hoc } from '@';
import { getLocations, getWeatherDays } from '../../actions';
import {
  selectLocations,
  selectLocationsError,
  selectLocationsLoading,
  selectWeatherDaysLoading,
} from '../../selectors';

const container = compose(
  hoc((props) => {
    const locations = useSelector(selectLocations);
    const locationsLoading = useSelector(selectLocationsLoading);
    const locationsError = useSelector(selectLocationsError);
    const weatherDaysLoading = useSelector(selectWeatherDaysLoading);
    const dispatch = useDispatch();

    const handleSearch = useCallback(
      (value) => {
        dispatch(getLocations(value));
      },
      [dispatch]
    );

    const handleChange = useCallback(
      (value) => {
        dispatch(getWeatherDays(value));
      },
      [dispatch]
    );

    return {
      locationsError,
      locationsLoading,
      weatherDaysLoading,
      locations,
      handleChange,
      handleSearch,
      ...props,
    };
  })
);

export default container;
