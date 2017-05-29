'use strict'

const get = (text) => new Promise((yay, nay) => {
	let item = require('./data/hsk1.json')[text]

	if (item) {
		item.hsk = 1
		yay(item)
		return
	}

	item = require('./data/hsk2.json')[text]

	if (item) {
		item.hsk = 2
		yay(item)
		return
	}

	item = require('./data/hsk3.json')[text]

	if (item) {
		item.hsk = 3
		yay(item)
		return
	}

	item = require('./data/hsk4.json')[text]

	if (item) {
		item.hsk = 4
		yay(item)
		return
	}

	item = require('./data/hsk5.json')[text]

	if (item) {
		item.hsk = 5
		yay(item)
		return
	}

	item = require('./data/hsk6.json')[text]

	if (item) {
		item.hsk = 6
		yay(item)
		return
	}

	nay('Not found')
})

module.exports = {get}
