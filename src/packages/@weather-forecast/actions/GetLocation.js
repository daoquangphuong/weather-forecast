import { createAction } from '@';
import { Fetch } from '@fetch';
import { $locations } from '../stores';

export default createAction('GetLocation', async (query) => {
    window.__locationQuery = query;
    $locations.setState(() => undefined);

    if (!query) {
        return;
    }

    const { data } = await Fetch({
        url: `/api/location/search/`,
        params: { query }
    })

    if (window.__locationQuery === query) {
        $locations.setState(() => data);
    }
});
