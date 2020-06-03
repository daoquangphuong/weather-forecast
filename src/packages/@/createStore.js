import Store from './Store';
import Storage from './Storage';

export default function createStore(
    name,
    initialValue,
    config = { storage: undefined }
) {
    const $store = new Store(name, initialValue);
    $store.storage = new Storage($store, config.storage);
    return $store;
}
