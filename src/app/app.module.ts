import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { TransferHttpCacheModule } from '@nguniversal/common';
import { SearchComponent } from './search/search.component';
import { GameLobbyComponent } from './game-lobby/game-lobby.component';
import { FilterPipe } from './filter.pipe';

@NgModule({
	declarations: [
		AppComponent,
		HomeComponent,
		SearchComponent,
		GameLobbyComponent,
		FilterPipe
	],
	imports: [
		BrowserModule.withServerTransition({ appId: 'my-app' }),
		FormsModule,
		HttpClientModule,
		RouterModule.forRoot([
			{ path: '', component: HomeComponent, pathMatch: 'full' }
		]),
		TransferHttpCacheModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule {}
