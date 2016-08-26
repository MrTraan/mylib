'use strict'

const mongoose = require('mongoose');

const _config = require('../config/config.dev.json');
const _models = require('./models/index.js');
const _Router = require('./routes/router.js');

class App {
	constructor() {
		this.config = _config;

		this.logs = {
			fatal: (...msg) => {
				console.error(...msg);
				process.exit(1);
			},
			info: (...msg) => { console.log(...msg) },
			log: (...msg) => { console.log(...msg) },
			error: (...msg) => { console.error(...msg) }
		};

		mongoose.Promise = global.Promise;

		this.mongoose = mongoose.createConnection(
			`mongodb://${this.config.db.host}:${this.config.db.port}/${this.config.db.database}`
		);

		this.mongoose.on('error', err => {
			this.logs.fatal(err);
		});

		this.mongoose.once('open', () => {
			this.logs.info('connected to mongo');

			this.models = {
				Book: new _models.Book(this)
			};

			this.router = new _Router(this);

			this.router.listen(this.config.server.port);
			this.logs.log(`Server listening to port ${this.config.server.port}`);

		});
	}
}

new App();
