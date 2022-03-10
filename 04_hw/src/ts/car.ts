export abstract class Car {
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

console.log('Webpack is done correctly');
