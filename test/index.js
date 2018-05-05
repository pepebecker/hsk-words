'use strict'

const hsk = require('../index')

describe('Test Pinyin and HSK level', () => {
	it('should return wǒ', () => {
		return hsk('我').then((data) => {
			data.pinyin.should.equal('wǒ')
		})
	})

	it('should return 1', () => {
		return hsk('爸爸').then((data) => {
			data.hsk.should.equal(1)
		})
	})
})
