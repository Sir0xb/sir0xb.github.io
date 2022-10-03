import { InjectionToken, Type } from '@angular/core';

export interface AppConfig {
	siteName?: string;
	logo?: {
		enable: boolean;
		width?: string;
		height?: string;
		size?: string;
		url?: string;
		path?: string;
	};
	menu: Array<{ name: string; link: string; page: Type<any> }>;
}

export const APP_CONFIG = new InjectionToken<AppConfig>('app.config');
