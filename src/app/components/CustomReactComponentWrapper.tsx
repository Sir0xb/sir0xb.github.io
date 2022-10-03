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
import { createRoot, Root } from 'react-dom/client';

@Component({
	selector: 'custom-react',
	template: `<div #customReact></div>`,
	encapsulation: ViewEncapsulation.ShadowDom
})
export class CustomReactComponentWrapper implements OnChanges, OnDestroy {
	root?: Root;
	@Input() component: any;
	@ViewChild('customReact', { static: true }) containerRef!: ElementRef;

	ngOnChanges(): void {
		this.render();
	}

	ngOnDestroy(): void {
		this.root && this.root.unmount();
	}

	render() {
		this.root = createRoot(this.containerRef.nativeElement);
		this.root.render(
			<React.StrictMode>
				<this.component />
			</React.StrictMode>
		);
	}
}
