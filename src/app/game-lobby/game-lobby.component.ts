import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
@Component({
	selector: 'app-game-lobby',
	templateUrl: './game-lobby.component.html',
	styleUrls: ['./game-lobby.component.scss']
})
export class GameLobbyComponent implements OnInit {
	games: {};
	constructor(private httpService: HttpService) {}

	searchText: '';
	ngOnInit() {
		this.httpService.getGameLobby().subscribe(data => {
			this.games = data;
		});
	}

	getSearch($event) {
		this.searchText = $event;
	}

	onImgError(event) {
		event.target.src = 'assets/images/default.jpg';
		event.target.width = '220';
		event.target.height = '155';
	}
}
