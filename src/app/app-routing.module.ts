import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { appConfig } from 'src/app.config';
import { UnknowComponent } from './pages/unknow/unknow.component';

const routes: Routes = [
	{ path: '', component: appConfig.menu[0].page },
	...appConfig.menu.map((menu, index) => {
		return {
			path: menu.link,
			component: menu.page,
			redirectTo: index === 0 ? '' : undefined
		};
	}),
	{ path: '**', component: UnknowComponent }
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule {}
