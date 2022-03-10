class Car {
    constructor(_mark) {
        this._mark = _mark;
        this.engine = {
            isWork: true,
            model: 'Basic',
        };
        this.turnEngineCount = 0;
    }
    get mark() {
        return this._mark;
    }
    stop() {
        if (this.run())
            return 'Car stop';
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
    constructor(model) {
        super('Audi');
        this.model = model;
    }
    changeCarEngine() {
        this.engine.model = 'Super';
    }
}
const audiModelX = new Audi('Model X');
const audiModelY = new Audi('Model Y');
class BMW extends Car {
    constructor(_model) {
        super('BMW');
        this._model = _model;
    }
    get model() {
        return this._model;
    }
}
const bmwM5 = new BMW('M5');
const bmwM4 = new BMW('M4');
class Bentley extends Car {
    constructor(_model) {
        super('Bentley');
        this._model = _model;
    }
    get model() {
        return this._model;
    }
}
const bentleySer1 = new Bentley('Series 1');
const bentleySer2 = new Bentley('Series 2');
