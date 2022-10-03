import { Inject, Injectable } from '@angular/core';
import { AppConfig, APP_CONFIG } from './app.config.injection';

@Injectable({
	providedIn: 'root'
})
export class ConfigService {
	config: AppConfig;
	constructor(@Inject(APP_CONFIG) config: AppConfig) {
		this.config = config;
	}

	get(props: keyof AppConfig): any {
		return this.config[props];
	}
}
