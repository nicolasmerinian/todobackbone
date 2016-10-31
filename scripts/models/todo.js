'use strict';

let Backbone = require('Backbone');

var Todo = Backbone.Model.extend({

	defaults: function() {
		return {
			title: "Empty todo",
			done: false
		};
	},

	toggle: function() {
		this.set('done', !this.get('done'));
	}

});

module.exports = Todo;