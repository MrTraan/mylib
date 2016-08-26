'use strict'

module.exports = [
	{
		method: 'get',
		path: '/books',
		handler: (req, res, app) => {
			app.models.Book.find()
			.then(books => res.json(books))
			.catch(err => {
				app.log.error(err);
				res.json([]);
			});
		}
	},
	{
		method: 'post',
		path: '/book',
		handler: (req, res, app) => {
			if (!app.models.Book.isJsonValidBook(req.body)) {
				return res.sendStatus(400);
			}
			console.log(req.body);
			app.models.Book.insertFromJson(req.body)
			.then(newBook => res.json(newBook))
			.catch(err => {
				app.logs.error(err);
				res.sendStatus(400);
			});
		}
	},
	{
		method: 'get',
		path: '/books/:genre',
		handler: (req, res, app) => {
			app.models.Book.find({genre: req.params.genre})
			.then(books => res.json(books))
			.catch(err => {
				app.logs.error(err);
				res.sendStatus(400);
			});
		}
	}
];

