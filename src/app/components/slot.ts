import { Directive, Type, ViewContainerRef } from '@angular/core';

@Directive({
	selector: '[slot]'
})
export class SlotDirective {
	constructor(public viewContainerRef: ViewContainerRef) {}
}

export class Slot {
	constructor(
		public component: Type<any>,
		public position: SlotPosition,
		public data?: any
	) {}
}

export enum SlotPosition {
	header = 'header',
	menuBar = 'menuBar',
	item = 'item',
	footer = 'footer'
}
