'use strict'

const mongoose = require('mongoose');

const Model = require('./model.js');

module.exports = class Book extends Model {
	constructor(app) {
		super(app);

		this.schema = mongoose.Schema({
			title: String,
			writer: String,
			tags: [String],
			genre: String,
			coverUrl: String,
			coverData: Buffer,
			description: String
		});

		this.model = this.instanciate('Book', this.schema);
	}

	find(params) {
		return this.model.find(params);
	}

	isJsonValidBook(json) {
		if (!json || typeof(json) !== 'object') {
			return false;
		}

		if (!json.title || typeof(json.title) !== 'string' || json.title.length < 1) {
			return false;
		}

		if (!json.writer || typeof(json.writer) !== 'string' || json.writer.length < 1) {
			return false;
		}

		if (typeof(json.genre) !== 'string') {
			return false;
		}

		if (typeof(json.description) !== 'string') {
			return false;
		}

		return true;
	}

	insertFromJson(json) {
		if (!this.isJsonValidBook(json)) {
			return Promise.reject('Invalid json');
		}

		const newModel = new this.model(json);
		return newModel.save();
	}
}
