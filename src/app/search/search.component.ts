import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  searchText = '';

  @Output() searchEvent = new EventEmitter<string>();

  constructor() {}

  ngOnInit() {}

  sendSearchValue() {
    this.searchEvent.emit(this.searchText);
  }
}
