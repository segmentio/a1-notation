const 	chai 			= require('chai'),
		doesNotThrow 	= chai.assert.doesNotThrow,
		throws 			= chai.assert.throws,
		method 			= 'col, row, nRows',
		{
			a1Valid,
			a1Invalid,
		} = require('../_values.js'),
		hasColon = v => v.includes(':'),
		isNumber = v => typeof v === 'number' && v > 0 && Number.isInteger(v);

module.exports = (A1) =>
{
	describe(`constructor(${method})`, () =>
	{
		a1Valid.forEach(({value, expectedError}) =>
		{
			if(hasColon(value))
				it(
					`An error should be shown: ${value}`,
					() => throws(() => new A1(value, value, value), Error, expectedError)
				);
			else
				it(
					`Constructor was created without errors: ${value}`,
					() => doesNotThrow( () => new A1(value, value, value) )
				);
		});
		a1Invalid.forEach(({text, value, expectedError}) =>
		{
			if(isNumber(value))
				it(
					`Constructor was created without errors: ${value}`,
					() => doesNotThrow( () => new A1(value, value, value) )
				);
			else
				it(
					`An error should be shown: ${text}`,
					() => throws(() => new A1(value, value, value), Error, expectedError)
				);
		});
	});
}
