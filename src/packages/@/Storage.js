import win from './win';

class Storage {
    constructor($store, storage) {
        if (!storage) {
            return;
        }
        this.$store = $store;
        this.storage = storage;
        this.heart();
        this.handleChange = () => {
            const data = this.$store.getState();
            if (this.data === data) {
                return;
            }
            this.set(data);
        };
        this.$store.addListener(this.handleChange);
    }

    heart() {
        const beat = () => {
            if (this.ended) {
                return;
            }
            const currentStorage = this.get();
            if (this.ver !== currentStorage.ver) {
                this.ver = currentStorage.ver;
                this.data = currentStorage.data;
                this.$store.setState(() => currentStorage.data);
            }
            setTimeout(beat, 100);
        };
        beat();
    }

    get() {
        let jsonValues;
        try {
            const values = win[this.storage].getItem(this.$store.name);
            jsonValues = JSON.parse(values);
        } catch (e) {
            console.error(e);
        }
        return jsonValues || {};
    }

    set(values) {
        this.ver = Math.random() + 1;
        win[this.storage].setItem(
            this.$store.name,
            JSON.stringify({
                ver: this.ver,
                data: values
            })
        );
    }

    remove() {
        win[this.storage].removeItem(this.$store.name);
    }

    destroy() {
        this.ended = true;
        this.$store.removeListener(this.handleChange);
    }
}

export default Storage;
