'use strict'

module.exports = class Model {
	constructor(app) {
		this._app = app;
	}

	instanciate(name, schema) {
		return this._app.mongoose.model(name, schema);
	}
}
