'use strict';

let assert = require('assert');
let Todo = require('../scripts/models/Todo.js');

describe('Todo', function() {

	describe('title', function() {
		it('should have a title "Empty todo" by default', function() {
			let todo = new Todo();
			assert.equal(todo.get('title'), 'Empty todo');
		});
	});

	describe('done', function() {
		it('should have a done "attribute" set to "false" by default', function() {
			let todo = new Todo();
			assert.equal(todo.get('done'), false);
		});
	});

});
