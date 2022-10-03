import { Component } from '@angular/core';
import { ConfigService } from './../../config.service';

@Component({
	selector: 'app-menubar[class="menubar"]',
	templateUrl: './menubar.component.html',
	styleUrls: ['./menubar.component.scss']
})
export class MenubarComponent {
	public siteName;
	public logo;
	public menu;

	constructor(private configService: ConfigService) {
		this.siteName = this.configService.get('siteName');
		this.logo = this.configService.get('logo');
		this.menu = this.configService.get('menu');
	}

	handleMissingImage(event: Event) {
		const imgElem = event.target as HTMLImageElement;
		if (imgElem.parentElement) {
			imgElem.parentElement.style.display = 'none';
		} else {
			imgElem.style.display = 'none';
		}
	}
}
