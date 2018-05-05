'use strict'

module.exports = query => new Promise((resolve, reject) => {
	let item = require('./data/hsk1.json')[query]

	if (item) {
		item.hsk = 1
		resolve(item)
		return
	}

	item = require('./data/hsk2.json')[query]

	if (item) {
		item.hsk = 2
		resolve(item)
		return
	}

	item = require('./data/hsk3.json')[query]

	if (item) {
		item.hsk = 3
		resolve(item)
		return
	}

	item = require('./data/hsk4.json')[query]

	if (item) {
		item.hsk = 4
		resolve(item)
		return
	}

	item = require('./data/hsk5.json')[query]

	if (item) {
		item.hsk = 5
		resolve(item)
		return
	}

	item = require('./data/hsk6.json')[query]

	if (item) {
		item.hsk = 6
		resolve(item)
		return
	}

	reject('not found')
})
