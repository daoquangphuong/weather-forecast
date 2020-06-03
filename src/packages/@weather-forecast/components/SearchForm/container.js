import { useDispatch, useSelector } from "react-redux";
import { useCallback, useMemo, useState } from "react";
import { compose, hoc } from '@';
import { getLocations, getWeatherDays } from '../../constants';
import { selectLocations, selectLocationsLoading, selectWeatherDaysLoading } from "../../selectors";

const container = compose(
    hoc(props => {
        const locations = useSelector(selectLocations);
        const locationsLoading = useSelector(selectLocationsLoading);
        const weatherDaysLoading = useSelector(selectWeatherDaysLoading);
        const dispatch = useDispatch();

        const handleSearch = useCallback((value) => {
            if (window.__locationTimeout) {
                clearTimeout(window.__locationTimeout);
            }
            dispatch(getLocations(value));
        }, [])

        const handleChange = useCallback((value) => {
            dispatch(getWeatherDays(value));
        }, [dispatch])

        return {
            locationsLoading,
            weatherDaysLoading,
            locations,
            handleChange,
            handleSearch,
            ...props
        };
    })
);

export default container;
