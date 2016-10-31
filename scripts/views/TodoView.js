'use strict';

let Backbone = require('Backbone');

var TodoView = Backbone.Collection.extend({

	tagName: 'li',

	template: _.template($('#todo-template').html()),

	initialize: function() {

	},

	render: function() {

	}

});

module.exports = TodoView;