import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { SimageErrorHandle } from 'src/app/plugins/SimageErrorHandle';
import { ConfigService } from './../../config.service';

@Component({
	selector: 'app-header[class="header"]',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.scss']
})
export class HeaderComponent extends SimageErrorHandle implements OnInit {
	public path;
	constructor(
		private configService: ConfigService,
		private itself: ViewContainerRef
	) {
		super();
		this.path = this.configService.get('header');
	}

	ngOnInit(): void {
		if (this.path === undefined || this.path === false) {
			this.itself.element.nativeElement.remove();
		} else {
			this.path = '';
		}
	}
}
