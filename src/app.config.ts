import { MainComponent } from './app/pages/main/main.component';
import { AppConfig } from './app/plugins/app.config.injection';

export const appConfig: AppConfig = {
	header: true,
	// siteName: 'Boliball',
	/*
		enable:
		src: logo.url || logo.path || 'assets/images/logo.png'
		width: logo.width || logo.size || 'auto'
		height: logo.height || logo.size || 'auto'
	*/
	logo: {
		enable: true,
		size: '2.5rem'
	},
	/*
		{ name: 'HOME', link: 'home', page: MainComponent },
		{ name: 'aaa', link: 'aaa', page: MainComponent }
		mapping to route
		{ path: '', component: appConfig.menu[0].page },
		{ path: 'aaa', component: menu.page, redirectTo: index === 0 ? '' : undefined }
	*/
	menu: [
		{ name: 'Home', link: 'home', page: MainComponent },
		{ name: 'Programing', link: 'programing', page: MainComponent },
		{ name: '404s', link: '404s', page: MainComponent },
		{ name: 'Music', link: 'music', page: MainComponent }
	]
};
