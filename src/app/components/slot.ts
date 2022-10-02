import { Type } from '@angular/core';

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
