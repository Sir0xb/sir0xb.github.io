import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { LayoutComponent } from './layout/layout.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MenubarComponent } from './menubar/menubar.component';

@NgModule({
	declarations: [LayoutComponent, HeaderComponent, FooterComponent, MenubarComponent],
	imports: [CommonModule]
})
export class ComponentsModule {}
