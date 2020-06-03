import { useCallback, useLayoutEffect, useState } from 'react';

export default function useStore(stores = []) {
    const [, setVersion] = useState(0);

    const forceUpdate = useCallback(() => {
        setVersion(s => s + 1);
    }, []);

    useLayoutEffect(() => {
        stores.forEach(store => {
            store.addListener(forceUpdate);
        });

        return () => {
            stores.forEach(store => {
                store.removeListener(forceUpdate);
            });
        };
        // eslint-disable-next-line
    }, [forceUpdate, ...stores]);

    return stores.map(store => store.getState());
}
