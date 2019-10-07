import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
	providedIn: 'root'
})
export class HttpService {
	constructor(private http: HttpClient) {}

	url = 'http://localhost:4000/assets/gameApi/data.json';

	getGameLobby() {
		return this.http.get(this.url);
	}
}
