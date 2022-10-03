import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { appConfig } from 'src/app.config';
import { APP_CONFIG } from 'src/app/app.config.injection';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomReactComponentWrapper } from './components/CustomReactComponentWrapper';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { LayoutComponent } from './components/layout/layout.component';
import { MenubarComponent } from './components/menubar/menubar.component';
import { SlotDirective } from './components/slot';
import { MainComponent } from './pages/main/main.component';
import { UnknowComponent } from './pages/unknow/unknow.component';

@NgModule({
	declarations: [
		AppComponent,
		SlotDirective,
		LayoutComponent,
		HeaderComponent,
		FooterComponent,
		MenubarComponent,
		MainComponent,
		UnknowComponent,
		CustomReactComponentWrapper
	],
	imports: [BrowserModule, AppRoutingModule, FormsModule],
	providers: [{ provide: APP_CONFIG, useValue: appConfig }],
	bootstrap: [AppComponent]
})
export class AppModule {}
