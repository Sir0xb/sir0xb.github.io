import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MainComponent } from './main/main.component';
import { UnknowComponent } from './unknow/unknow.component';

@NgModule({
	declarations: [MainComponent, UnknowComponent],
	imports: [CommonModule]
})
export class PagesModule {}
