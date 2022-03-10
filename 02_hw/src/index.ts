abstract class Car {
	protected engine = {
		isWork: true,
		model: 'Basic',
	};
	private turnEngineCount = 0;
	constructor(private _mark: string) {}

	get mark() {
		return this._mark;
	}

	stop() {
		if (this.run()) return 'Car stop';
	}

	run() {
		if (this.turnOnCarEngine()) {
			return 'Car run';
		}
	}

	turnOnCarEngine() {
		this.turnEngineCount++;
		if (this.turnEngineCount > 10) {
			this.engine.isWork = false;
		}
		if (this.engine.isWork) {
			return "Car's engine turn on";
		}
	}

	fixCarEngine() {
		this.engine.isWork = true;
		return "Car's engine was fixed";
	}

	turnOffCarEngine() {
		return "Car's engine turn off";
	}
}

class Audi extends Car {
	constructor(public readonly model: string) {
		super('Audi');
	}

	changeCarEngine() {
		this.engine.model = 'Super';
	}
}
const audiModelX = new Audi('Model X');
const audiModelY = new Audi('Model Y');

class BMW extends Car {
	constructor(private _model: string) {
		super('BMW');
	}

	get model() {
		return this._model;
	}
}
const bmwM5 = new BMW('M5');
const bmwM4 = new BMW('M4');

class Bentley extends Car {
	constructor(private _model: string) {
		super('Bentley');
	}

	get model() {
		return this._model;
	}
}
const bentleySer1 = new Bentley('Series 1');
const bentleySer2 = new Bentley('Series 2');
