'use strict';

let Backbone = require('Backbone');
let Todo = require('./Todo');

var TodoList = Backbone.Collection.extend({

	model: Todo,

});

module.exports = TodoList;