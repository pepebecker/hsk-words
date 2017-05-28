'use strict'

const hsk = require('../index')

describe('Get character from cangjie code', () => {
	it('should return wǒ', () => {
		return hsk.get('我').then((data) => {
			data.pinyin.should.equal('wǒ')
		})
	})

	it('should return 1', () => {
		return hsk.get('爸爸').then((data) => {
			data.hsk.should.equal(1)
		})
	})
})
