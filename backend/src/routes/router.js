'use strict'

const express = require('express');
const bodyParser = require('body-parser');

const routes = require('./index.js');

module.exports = class Router {
	constructor(app) {
		this._app = app;

		this._server = express();
		this._router = express.Router();
			
		this._server.use(bodyParser.urlencoded({ extended: true }));
		this._server.use(bodyParser.json());

		this._router.use((req, res, next) => {
			res.header("Access-Control-Allow-Origin", "*");
			res.header("Access-Control-Allow-Headers", "X-Requested-With");
			next();
		});

		routes.forEach(route => {
			this._router[route.method](route.path, (req, res) => {
				route.handler(req, res, this._app);
			});
		});

		this._server.use('/', this._router);
	}

	listen(port) {
		return this._server.listen(port);
	}
}
