import {
	Component,
	ElementRef,
	Input,
	OnChanges,
	OnDestroy,
	ViewChild,
	ViewEncapsulation
} from '@angular/core';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { createRoot } from 'react-dom/client';

@Component({
	selector: 'custom-react',
	template: `<div #customReact></div>`,
	encapsulation: ViewEncapsulation.ShadowDom
})
export class CustomReactComponentWrapper implements OnChanges, OnDestroy {
	@Input() component: any;
	@ViewChild('customReact', { static: true }) containerRef!: ElementRef;

	ngOnChanges(): void {
		this.render();
	}

	ngOnDestroy(): void {
		ReactDOM.unmountComponentAtNode(this.containerRef.nativeElement);
	}

	render() {
		const root = createRoot(this.containerRef.nativeElement);
		root.render(
			<React.StrictMode>
				<this.component />
			</React.StrictMode>
		);
	}
}
