import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { SearchResult } from '../name-search/name-search.component';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html'
})

export class SearchResultComponent implements OnInit {
  ngOnInit(): void { }
  @Input() searchResult: SearchResult | null = null
  @Input() resultFound: boolean= false
  @Output('onClick') selectEventEmitter = new EventEmitter<string>()
}
