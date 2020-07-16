import CSSCommentToken from './CSSCommentToken.js'

export default function fromTokenizer(text, open, shut, lead, tail, line, lcol, input) {
	return new CSSCommentToken({
		opener: text.slice(open, open + lead),
		value:  text.slice(open + lead, shut - tail),
		closer: text.slice(shut - tail, shut),
		source: {
			input,
			position: [ line, lcol ],
		},
	})
}