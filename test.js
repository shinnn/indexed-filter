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
		/TypeError.*Expected an array to be filtered, but got a non-array value 1 \(number\)\./,
		'should invalidate a non-array first argument.'
	);

	t.throws(
		() => indexedFilter([], 1),
		/TypeError.*Expected a filter function, but got a non-function value 1 \(number\)\./,
		'should invalidate a non-function second argument.'
	);

	t.end();
});
