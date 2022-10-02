import { Component } from '@angular/core';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent {
	title = 'boliblog';

	theme: string = 'test';
	themes: string[] = ['test', 'normal', 'yo'];
}
