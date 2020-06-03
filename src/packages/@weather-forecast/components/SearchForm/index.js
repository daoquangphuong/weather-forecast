import React from 'react';
import { Input, AutoComplete } from 'antd';
import container from './container';

const SearchForm = props => {
    const {
        loading,
        searchValue,
        handleSearchValueChange,
        locations,
        handleSearch,
        handleChange
    }
        = props;

    return (
        <div>
            <AutoComplete
                options={(locations || []).map(item => ({
                        label: item.title,
                        value: `${item.woeid}`
                    })
                )}
                autoFocus
                onChange={handleChange}
                onSelect={handleSearch}
                backfill>
                <Input.Search loading={loading} placeholder="input here" allowClear value={searchValue}
                              onChange={handleSearchValueChange}/>
            </AutoComplete>
        </div>
    );
};

export default container(SearchForm);
