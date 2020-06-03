import { compose, hoc, useStore } from '@';
import { useCallback, useMemo, useState } from "react";
import GetLocation from '../../actions/GetLocation';
import GetWeather from '../../actions/GetWeather';
import { $locations } from '../../stores';

const container = compose(
    hoc(props => {
        const [locations] = useStore([$locations]);

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
            window.__locationTimeout = setTimeout(() => {
                GetLocation(value).catch(console.error);
            }, 100);
        }, [])

        const handleSearch = useCallback((value) => {
            GetWeather(value).catch(console.error);
        }, [])

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
