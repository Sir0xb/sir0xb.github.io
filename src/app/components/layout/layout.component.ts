import { Component, Input, OnInit, Type } from '@angular/core';
import { Slot } from '../slot';

@Component({
	selector: 'app-layout',
	templateUrl: './layout.component.html',
	styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {
	@Input() slots: Type<Slot>[] = [];

	constructor() {}

	ngOnInit(): void {}
}
