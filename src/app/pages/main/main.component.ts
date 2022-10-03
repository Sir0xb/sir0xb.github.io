import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from 'src/app/components/header/header.component';
import { MenubarComponent } from 'src/app/components/menubar/menubar.component';
import { Slot, SlotPosition } from 'src/app/components/slot';
import TestReactComponent, {
	TestReactComponentNew
} from 'src/app/components/TestReactComponent';
import { FooterComponent } from './../../components/footer/footer.component';

@Component({
	selector: 'app-main',
	templateUrl: './main.component.html',
	styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
	public component1 = TestReactComponent;
	public component2 = TestReactComponentNew;

	slots = [
		new Slot(HeaderComponent, SlotPosition.header),
		new Slot(MenubarComponent, SlotPosition.menuBar),
		new Slot(FooterComponent, SlotPosition.footer)
	];

	constructor() {}

	ngOnInit(): void {}
}
