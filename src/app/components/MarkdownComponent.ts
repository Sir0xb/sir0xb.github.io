import {
	Component,
	Input,
	SimpleChange,
	ViewEncapsulation
} from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import DOMPurify from 'dompurify';
import highlightjs from 'highlight.js';
import { marked, Renderer } from 'marked';

@Component({
	selector: 'custem-markdown',
	template: `<pre [innerHTML]="data"></pre>`,
	encapsulation: ViewEncapsulation.ShadowDom
})
export class MakrdownComponent {
	@Input() text: string = '';
	data: SafeHtml = '';
	md: any;

	static highlightCode(code: string, language: string): string {
		if (!(language && highlightjs.getLanguage(language))) {
			language = 'markdown';
		}

		const result = highlightjs.highlight(language, code).value;
		return `<code class="hljs ${language}">${result}</code>`;
	}

	constructor(private sanitizer: DomSanitizer) {
		const renderer = new Renderer();
		renderer.code = MakrdownComponent.highlightCode;
		this.md = marked.setOptions({ renderer });
	}

	markdownToSafeHtml(value: string): SafeHtml {
		const html = this.md(value);
		const safeHtml = DOMPurify.sanitize(html);
		return this.sanitizer.bypassSecurityTrustHtml(safeHtml);
	}

	ngOnChanges(changes: { [propKey: string]: SimpleChange }) {
		for (const propName in changes) {
			if (propName === 'text') {
				const value = changes[propName].currentValue;
				if (value) {
					this.data = this.markdownToSafeHtml(value);
				}
			}
		}
	}
}
