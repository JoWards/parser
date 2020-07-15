import toJSON from './prototype/toJSON.js'
import toString from './prototype/toString.js'

const { assign, defineProperties } = Object

export default class CSSObject {
	constructor(init) {
		assign(this, init)
	}
}

defineProperties(CSSObject.prototype, {
	toJSON: {
		value:        toJSON,
		configurable: true,
		writable:     true,
	},
	toString: {
		value:        toString,
		configurable: true,
		writable:     true,
	},
})
