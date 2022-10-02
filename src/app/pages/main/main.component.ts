import { Component, OnInit } from '@angular/core';
import { MenubarComponent } from 'src/app/components/menubar/menubar.component';
// import { MenubarComponent } from 'src/app/components/menubar/menubar.component';
import { Slot, SlotPosition } from 'src/app/components/slot';
import { FooterComponent } from './../../components/footer/footer.component';
import { HeaderComponent } from './../../components/header/header.component';

@Component({
	selector: 'app-main',
	templateUrl: './main.component.html',
	styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
	slots = [
		new Slot(HeaderComponent, SlotPosition.header),
		new Slot(MenubarComponent, SlotPosition.menuBar),
		new Slot(FooterComponent, SlotPosition.footer)
	];

	constructor() {}

	ngOnInit(): void {}
}
