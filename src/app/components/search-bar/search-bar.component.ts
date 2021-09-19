import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html'
})
export class SearchBarComponent  {
  constructor() { }

  currentSearch: string = "";
  invalidSearch = false;

  @Output('onClick') selectEventEmitter = new EventEmitter<string>()

  handleClick() {
    if (this.currentSearch!=""){
      this.selectEventEmitter.emit(this.currentSearch);
      this.invalidSearch= false
      this.currentSearch=""
    }
    else{
      this.invalidSearch= true
    }
  }
}
