class KeyValuePair {
    constructor(_key, _value) {
        this._key = _key;
        this._value = _value;
    }
    get key() {
        return this._key;
    }
    set key(key) {
        if (!key)
            throw new Error("Can't set new key");
        this._key = key;
    }
    get value() {
        return this._value;
    }
    set value(value) {
        if (!value)
            throw new Error("Can't set new value");
        this._value = value;
    }
}
const keyValuePair = new KeyValuePair(1, 'first');
class Iterator {
    constructor() {
        this.data = [];
    }
    add(item) {
        this.data.push(item);
    }
    [Symbol.iterator]() {
        let cur = 0;
        const data = this.data;
        return {
            next() {
                if (cur < data.length) {
                    return {
                        done: false,
                        value: data[cur++],
                    };
                }
                else {
                    return {
                        done: true,
                        value: null,
                    };
                }
            },
        };
    }
}
const iterator = new Iterator();
iterator.add(1);
iterator.add(2);
iterator.add(3);
iterator.add(4);
for (const item of iterator) {
    console.log(item);
}
