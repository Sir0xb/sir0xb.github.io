import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { appConfig } from 'src/app.config';
import { UnknowComponent } from './pages/unknow/unknow.component';

const routes: Routes = [
	{ path: '', redirectTo: appConfig.menu[0].link, pathMatch: 'full' },
	...appConfig.menu.map(menu => {
		return {
			path: menu.link,
			component: menu.page
		};
	}),
	{ path: '**', component: UnknowComponent }
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule {}
