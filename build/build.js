'use strict'

const readline = require('readline')
const fs = require('fs')

let data = {}

const rl = readline.createInterface({
    input: fs.createReadStream(process.argv[2])
})

rl.on('line', (line) => {

	line = line.replace(/[\u200B-\u200D\uFEFF]/g, '')

    if (line.length === 0) return

    const [simpl, tradi, _, pinyin, def] = line.split('\t')

	const item = {
		simplified: simpl,
		traditional: tradi,
		pinyin: pinyin,
		definition: def
	}

	data[simpl] = item
	data[tradi] = item
})

rl.on('close', () => {
    const json = JSON.stringify(data)
    process.stdout.write(json)
})
