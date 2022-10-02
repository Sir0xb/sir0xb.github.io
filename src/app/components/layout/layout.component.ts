import {
	AfterViewInit,
	Component,
	Input,
	OnInit,
	QueryList,
	ViewChildren
} from '@angular/core';
import { Slot, SlotDirective } from '../slot';

@Component({
	selector: 'app-layout',
	templateUrl: './layout.component.html',
	styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit, AfterViewInit {
	@Input() slots: Slot[] = [];

	@ViewChildren(SlotDirective) slotRefs!: QueryList<SlotDirective>;

	constructor() {}

	ngOnInit(): void {}

	ngAfterViewInit(): void {
		console.log('xx', this.slotRefs);
		this.loadComponent();
	}

	loadComponent() {
		this.slotRefs.forEach((query, index) => {
			const slot = this.slots[index];
			const slotRef = query.viewContainerRef;
			slotRef.clear();
			const compRef = slotRef.createComponent<Slot>(slot.component);
			compRef.instance.data = slot.data;
		});
	}
}
