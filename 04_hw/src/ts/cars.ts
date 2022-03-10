import { Car } from './car';

export class BMW extends Car {
	constructor(private _model: string) {
		super('BMW');
	}

	get model() {
		return this._model;
	}
}

export class Bentley extends Car {
	constructor(private _model: string) {
		super('Bentley');
	}

	get model() {
		return this._model;
	}
}

export class Audi extends Car {
	constructor(public readonly model: string) {
		super('Audi');
	}

	changeCarEngine() {
		this.engine.model = 'Super';
	}
}
