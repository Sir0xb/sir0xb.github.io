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
	styleUrls: [
		'./main.component.scss',
		'../../../../node_modules/highlight.js/styles/atom-one-dark.css'
	]
})
export class MainComponent implements OnInit {
	public component1 = TestReactComponent;
	public component2 = TestReactComponentNew;

	md = '# Hello Markdown\n```csharp\npublic class Foo {}\n```';

	slots = [
		new Slot(MenubarComponent, SlotPosition.menuBar),
		new Slot(HeaderComponent, SlotPosition.header),
		new Slot(FooterComponent, SlotPosition.footer)
	];

	constructor() {}

	ngOnInit(): void {}
}
