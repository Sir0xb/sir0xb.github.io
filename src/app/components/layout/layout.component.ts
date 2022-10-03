import {
	Component,
	Input,
	OnInit,
	QueryList,
	ViewChildren
} from '@angular/core';
import { SlotPosition } from 'src/app/components/slot';
import { Slot, SlotDirective } from '../slot';

@Component({
	selector: 'app-layout',
	templateUrl: './layout.component.html',
	styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {
	@Input() slots: Slot[] = [];
	@ViewChildren(SlotDirective) slotRefs!: QueryList<SlotDirective>;

	upSlots: Slot[] = [];
	downSlots: Slot[] = [];

	constructor() {}

	ngOnInit(): void {
		this.upSlots = this.slots.filter(
			(slot: Slot) =>
				slot.position !== SlotPosition.footer ||
				(this.downSlots.push(slot) && void 0)
		);
		setTimeout(() => {
			this.loadComponent();
		}, 100);
	}

	loadComponent() {
		this.slotRefs.forEach((query, index) => {
			const slotRef = query.viewContainerRef;
			const slotType = slotRef.element.nativeElement.getAttribute('slot');
			const slot = this.slots.find(slot => slot.position === slotType);
			if (slot) {
				slotRef.clear();
				const compRef = slotRef.createComponent<Slot>(slot.component);
				compRef.instance.data = slot.data;
			}
		});
	}
}
