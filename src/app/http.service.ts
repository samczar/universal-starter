import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
	providedIn: 'root'
})
export class HttpService {
	constructor(private http: HttpClient) {}
	host = `${window.location.protocol}//${window.location.host}`;

	url = `${this.host}/assets/gameApi/data.json`;

	getGameLobby() {
		return this.http.get(this.url);
	}
}
