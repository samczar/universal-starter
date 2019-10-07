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
    console.log('loaded');
    this.httpService.getGameLobby().subscribe(data => {
      this.games = data;
    });
  }

  getSearch($event) {
    this.searchText = $event;
  }
}
