import { Component, OnInit } from '@angular/core';
import { SimageErrorHandle } from 'src/app/plugins/SimageErrorHandle';
import { ConfigService } from './../../config.service';

@Component({
	selector: 'app-menubar [class="menubar"]',
	templateUrl: './menubar.component.html',
	styleUrls: ['./menubar.component.scss']
})
export class MenubarComponent extends SimageErrorHandle implements OnInit {
	public siteName;
	public logo;
	public menu;

	constructor(private configService: ConfigService) {
		super();
		this.siteName = this.configService.get('siteName');
		this.logo = this.configService.get('logo');
		this.menu = this.configService.get('menu');
	}

	ngOnInit(): void {}
}
