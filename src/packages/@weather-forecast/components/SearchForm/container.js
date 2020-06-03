import { useDispatch, useSelector } from "react-redux";
import { useCallback, useMemo, useState } from "react";
import { compose, hoc } from '@';
import { getLocations, getWeatherDays } from '../../constants';
import { selectLocations } from "../../selectors";

const container = compose(
    hoc(props => {
        const locations = useSelector(selectLocations);
        const dispatch = useDispatch();

        const [searchValue, setSearchValue] = useState();

        const loading = useMemo(() => {
            return searchValue && !locations
        }, [searchValue, locations])

        const handleSearchValueChange = useCallback((event) => {
            event.preventDefault();
            event.stopPropagation();
            const { value } = event.target;
            setSearchValue(value);
        }, [setSearchValue])

        const handleChange = useCallback((value) => {
            if (window.__locationTimeout) {
                clearTimeout(window.__locationTimeout);
            }
            dispatch(getLocations(value));
        }, [])

        const handleSearch = useCallback((value) => {
            dispatch(getWeatherDays(value));
        }, [dispatch])

        return {
            loading,
            searchValue,
            handleSearchValueChange,
            locations,
            handleChange,
            handleSearch,
            ...props
        };
    })
);

export default container;
