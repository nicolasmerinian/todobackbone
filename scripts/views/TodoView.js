'use strict';

let Backbone = require('Backbone');
let $ = require('jquery');
let _ = require('Underscore');

var TodoView = Backbone.Collection.extend({

	tagName: 'li',

	template: _.template($('#todo-template').html()),

	initialize: function() {
		this.listenTo(this.model, 'change', this.render);
	},

	render: function() {
		this.$el.html(this.template(this.model.toJSON()));
		this.$el.toggleClass('done', this.model.get('done'));
		return this;
	}

});

module.exports = TodoView;