import React from 'react';
import { Select, Spin } from 'antd';
import { Root } from './styled';
import container from './container';

const SearchForm = props => {
    const {
        locationsLoading,
        weatherDaysLoading,
        locations,
        handleSearch,
        handleChange
    } = props;

    let notFoundContent = null;

    if (locationsLoading) {
        notFoundContent = <div style={{ textAlign: 'center' }}><Spin/></div>
    } else if (locations && !locations.length) {
        notFoundContent = `Not found (Please try with another name.)`
    }

    return (
        <Root>
            <Select
                showSearch
                allowClear
                loading={weatherDaysLoading}
                placeholder="Enter name of a location"
                notFoundContent={notFoundContent}
                filterOption={false}
                onSearch={handleSearch}
                onChange={handleChange}
            >
                {(locations || []).map(item => (
                    <Select.Option key={item.id} value={item.id}>{item.title}</Select.Option>
                ))}
            </Select>
        </Root>
    );
};

export default container(SearchForm);
