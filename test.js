'use strict';

const indexedFilter = require('.');
const test = require('tape');

test('indexedFilter()', t => {
	t.deepEqual(
		indexedFilter([[], 1], Array.isArray),
		[{index: 0, value: []}],
		'should filter an array with also detecting element indexes.'
	);

	t.deepEqual(
		indexedFilter([1, [], []], function(v) {
			return this.isArray(v);
		}, Array),
		[{index: 1, value: []}, {index: 2, value: []}],
		'should use its last argument as a `this` value.'
	);

	t.throws(
		() => indexedFilter(1, () => {}),
		/TypeError.*1 is not an array\. Expected an array to be filtered\./,
		'should have a function name.'
	);

	t.throws(
		() => indexedFilter([], 1),
		/TypeError.*1 is not a function\. Expected a filter function that returns Boolean value\./,
		'should hadsfdfdfve a function name.'
	);

	t.end();
});
