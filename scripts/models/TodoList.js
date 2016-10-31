'use strict';

let Backbone = require('Backbone');

var TodoList = Backbone.Collection.extend({

	model: Todo,

});

module.exports = TodoList;