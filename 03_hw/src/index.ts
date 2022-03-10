class KeyValuePair<TKey, TValue> {
	constructor(private _key: TKey, private _value: TValue) {}
	get key() {
		return this._key;
	}

	set key(key: TKey) {
		if (!key) throw new Error("Can't set new key");
		this._key = key;
	}

	get value() {
		return this._value;
	}

	set value(value: TValue) {
		if (!value) throw new Error("Can't set new value");
		this._value = value;
	}
}

const keyValuePair = new KeyValuePair<number, string>(1, 'first');

class SampleIterator<T> {
	private data: T[] = [];

	public add(item: T) {
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
				} else {
					return {
						done: true,
						value: null,
					};
				}
			},
		};
	}
}

const iterator = new SampleIterator<number>();
iterator.add(1);
iterator.add(2);
iterator.add(3);
iterator.add(4);
for (const item of iterator) {
	console.log(item);
}
