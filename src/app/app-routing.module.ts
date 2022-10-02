import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './pages/main/main.component';
import { UnknowComponent } from './pages/unknow/unknow.component';

const routes: Routes = [
	{ path: '', component: MainComponent },
	{ path: '**', component: UnknowComponent }
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule {}
