var IceCreamSize;
(function (IceCreamSize) {
    IceCreamSize[IceCreamSize["Small"] = 10] = "Small";
    IceCreamSize[IceCreamSize["Big"] = 25] = "Big";
})(IceCreamSize || (IceCreamSize = {}));
var IceCreamFilling;
(function (IceCreamFilling) {
    IceCreamFilling[IceCreamFilling["Chocolate"] = 5] = "Chocolate";
    IceCreamFilling[IceCreamFilling["Caramel"] = 6] = "Caramel";
    IceCreamFilling[IceCreamFilling["Berry"] = 10] = "Berry";
})(IceCreamFilling || (IceCreamFilling = {}));
var getIceCreamPrice = function (size, filling) {
    var resultPrice = size;
    if (filling && IceCreamSize.Big === size) {
        resultPrice += filling;
    }
    return resultPrice;
};
var requestForUserAnswer = function (size) {
    var iceCreamSize = prompt('Введите размер мороженного: маленький или большой');
    if (iceCreamSize === null)
        return;
    var iceCreamSizeLowerCase = iceCreamSize.toLowerCase();
    switch (iceCreamSizeLowerCase) {
        case 'маленький':
            alert('Цена вашего мороженого ' + getIceCreamPrice(IceCreamSize.Small));
            break;
        case 'большой':
            var iceCreamFilling = prompt('Введите вкус мороженного: шоколад, малина или карамель');
            getIceCreamFilling(iceCreamSize, iceCreamFilling);
            break;
        default:
            var newSize = prompt('Такого размера не сущевствует, введите один из предложенных: маленький или большой');
            requestForUserAnswer(newSize);
            break;
    }
};
var getIceCreamFilling = function (iceCreamSize, iceCreamFilling) {
    switch (iceCreamFilling) {
        case 'шоколад':
            alert('Цена вашего мороженого вместе с добавкой ' +
                getIceCreamPrice(IceCreamSize.Big, IceCreamFilling.Chocolate));
            break;
        case 'карамель':
            alert('Цена вашего мороженого вместе с добавкой ' +
                getIceCreamPrice(IceCreamSize.Big, IceCreamFilling.Caramel));
            break;
        case 'малина':
            alert('Цена вашего мороженого вместе с добавкой ' +
                getIceCreamPrice(IceCreamSize.Big, IceCreamFilling.Berry));
            break;
        default:
            var filling = prompt('Такого вкуса не сущевствует, введите один из предложенных: шоколад, малина или карамель');
            getIceCreamFilling(iceCreamSize, filling);
            break;
    }
};
requestForUserAnswer();
