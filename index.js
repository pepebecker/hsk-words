'use strict'

const hsk1 = require('./data/hsk1.json')
const hsk2 = require('./data/hsk2.json')
const hsk3 = require('./data/hsk3.json')
const hsk4 = require('./data/hsk4.json')
const hsk5 = require('./data/hsk5.json')
const hsk6 = require('./data/hsk6.json')

const get = (text) => new Promise((yay, nay) => {
	let item = hsk1[text]

	if (item) {
		item.hsk = 1
		yay(item)
		return
	}

	item = hsk2[text]

	if (item) {
		item.hsk = 2
		yay(item)
		return
	}

	item = hsk3[text]

	if (item) {
		item.hsk = 3
		yay(item)
		return
	}

	item = hsk4[text]

	if (item) {
		item.hsk = 4
		yay(item)
		return
	}

	item = hsk5[text]

	if (item) {
		item.hsk = 5
		yay(item)
		return
	}

	item = hsk6[text]

	if (item) {
		item.hsk = 6
		yay(item)
		return
	}

	nay('Not found')
})

module.exports = {get}
