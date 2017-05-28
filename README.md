# HSK Words

[![npm version](https://img.shields.io/npm/v/hsk-words.svg)](https://www.npmjs.com/package/hsk-words)
[![Travis Build Status](https://travis-ci.org/pepebecker/hsk-words.svg)](https://travis-ci.org/pepebecker/hsk-words)
[![Coverage Status](https://coveralls.io/repos/github/pepebecker/hsk-words/badge.svg)](https://coveralls.io/github/pepebecker/hsk-words)
[![dependency status](https://img.shields.io/david/pepebecker/hsk-words.svg)](https://david-dm.org/pepebecker/hsk-words)
[![dev dependency status](https://img.shields.io/david/dev/pepebecker/hsk-words.svg)](https://david-dm.org/pepebecker/hsk-words#info=devDependencies)
[![MIT-licensed](https://img.shields.io/github/license/pepebecker/hsk-words.svg)](https://opensource.org/licenses/MIT)
[![chat on gitter](https://badges.gitter.im/pepebecker.svg)](https://gitter.im/pepebecker)

## Install

```shell
npm install hsk-words
```

## Usage

```js
const hsk = require('hsk-words')

hsk.get('我')
.then(console.log)
.catch(console.error)
// {
//   simplified: '我',
//   traditional: '我',
//   pinyin: 'wǒ',
//   pinyinN: 'wo3',
//   definition: 'I; me',
//   hsk: 1
// }

hsk.get('喜欢')
.then(console.log)
.catch(console.error)
// {
//   simplified: '喜欢',
//   traditional: '喜歡',
//   pinyin: 'xǐhuan',
//   pinyinN: 'xi3huan5',
//   definition: 'to like',
//   hsk: 1
// }
```

## Related

- [`pinyin-utils`](https://github.com/pepebecker/pinyin-utils)
- [`pinyin-split`](https://github.com/pepebecker/pinyin-split)
- [`pinyin-or-hanzi`](https://github.com/pepebecker/pinyin-or-hanzi)
- [`hanzi-to-pinyin`](https://github.com/pepebecker/hanzi-to-pinyin)
- [`pinyin-convert`](https://github.com/pepebecker/pinyin-convert)

## Contributing

If you **have a question**, **found a bug** or want to **propose a feature**, have a look at [the issues page](https://github.com/pepebecker/hsk-words/issues).