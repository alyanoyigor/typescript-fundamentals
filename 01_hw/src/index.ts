enum IceCreamSize {
	Small = 10,
	Big = 25,
}

enum IceCreamFilling {
	Chocolate = 5,
	Caramel = 6,
	Berry = 10,
}

const getIceCreamPrice = (size: IceCreamSize, filling?: IceCreamFilling) => {
	let resultPrice = size;

	if (filling && IceCreamSize.Big === size) {
		resultPrice += filling;
	}

	return resultPrice;
};

const requestForUserAnswer = (size?: string) => {
	const iceCreamSize = prompt(
		'Введите размер мороженного: маленький или большой'
	);
	if (iceCreamSize === null) return;
	const iceCreamSizeLowerCase = iceCreamSize.toLowerCase();
	switch (iceCreamSizeLowerCase) {
		case 'маленький':
			alert('Цена вашего мороженого ' + getIceCreamPrice(IceCreamSize.Small));
			break;
		case 'большой':
			const iceCreamFilling = prompt(
				'Введите вкус мороженного: шоколад, малина или карамель'
			);
			getIceCreamFilling(iceCreamSize, iceCreamFilling);
			break;

		default:
			const newSize = prompt(
				'Такого размера не сущевствует, введите один из предложенных: маленький или большой'
			);
			requestForUserAnswer(newSize);
			break;
	}
};

const getIceCreamFilling = (iceCreamSize: string, iceCreamFilling: string) => {
	switch (iceCreamFilling) {
		case 'шоколад':
			alert(
				'Цена вашего мороженого вместе с добавкой ' +
					getIceCreamPrice(IceCreamSize.Big, IceCreamFilling.Chocolate)
			);
			break;
		case 'карамель':
			alert(
				'Цена вашего мороженого вместе с добавкой ' +
					getIceCreamPrice(IceCreamSize.Big, IceCreamFilling.Caramel)
			);
			break;
		case 'малина':
			alert(
				'Цена вашего мороженого вместе с добавкой ' +
					getIceCreamPrice(IceCreamSize.Big, IceCreamFilling.Berry)
			);
			break;
		default:
			const filling = prompt(
				'Такого вкуса не сущевствует, введите один из предложенных: шоколад, малина или карамель'
			);
			getIceCreamFilling(iceCreamSize, filling);
			break;
	}
};

requestForUserAnswer();
