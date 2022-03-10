var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Car = (function () {
    function Car(_mark) {
        this._mark = _mark;
        this.engine = {
            isWork: true,
            model: 'Basic',
        };
        this.turnEngineCount = 0;
    }
    Object.defineProperty(Car.prototype, "mark", {
        get: function () {
            return this._mark;
        },
        enumerable: false,
        configurable: true
    });
    Car.prototype.stop = function () {
        if (this.run())
            return 'Car stop';
    };
    Car.prototype.run = function () {
        if (this.turnOnCarEngine()) {
            return 'Car run';
        }
    };
    Car.prototype.turnOnCarEngine = function () {
        this.turnEngineCount++;
        if (this.turnEngineCount > 10) {
            this.engine.isWork = false;
        }
        if (this.engine.isWork) {
            return "Car's engine turn on";
        }
    };
    Car.prototype.fixCarEngine = function () {
        this.engine.isWork = true;
        return "Car's engine was fixed";
    };
    Car.prototype.turnOffCarEngine = function () {
        return "Car's engine turn off";
    };
    return Car;
}());
var Audi = (function (_super) {
    __extends(Audi, _super);
    function Audi(model) {
        var _this = _super.call(this, 'Audi') || this;
        _this.model = model;
        return _this;
    }
    Audi.prototype.changeCarEngine = function () {
        this.engine.model = 'Super';
    };
    return Audi;
}(Car));
var audiModelX = new Audi('Model X');
var audiModelY = new Audi('Model Y');
var BMW = (function (_super) {
    __extends(BMW, _super);
    function BMW(_model) {
        var _this = _super.call(this, 'BMW') || this;
        _this._model = _model;
        return _this;
    }
    Object.defineProperty(BMW.prototype, "model", {
        get: function () {
            return this._model;
        },
        enumerable: false,
        configurable: true
    });
    return BMW;
}(Car));
var bmwM5 = new BMW('M5');
var bmwM4 = new BMW('M4');
var Bentley = (function (_super) {
    __extends(Bentley, _super);
    function Bentley(_model) {
        var _this = _super.call(this, 'Bentley') || this;
        _this._model = _model;
        return _this;
    }
    Object.defineProperty(Bentley.prototype, "model", {
        get: function () {
            return this._model;
        },
        enumerable: false,
        configurable: true
    });
    return Bentley;
}(Car));
var bentleySer1 = new Bentley('Series 1');
var bentleySer2 = new Bentley('Series 2');
