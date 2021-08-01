import React from 'react'

import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
/* Use `…/dist/cjs/…` if you’re not in ESM! */
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism'


const CodeBlock = {
	code({ node, inline, className, children, ...props }) {
		const match = /language-(\w+)/.exec(className || '')
		return !inline && match ? (
			<SyntaxHighlighter style={vscDarkPlus} language={match[1]} PreTag="div" children={String(children).replace(/\n$/, '')} {...props} />
		) : (
			<code className={className} {...props}>
				{children}
			</code>
		)
	}
}
export default CodeBlock