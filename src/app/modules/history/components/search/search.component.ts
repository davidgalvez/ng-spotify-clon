import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {

  @Output() callbackData:EventEmitter<any>= new EventEmitter()

  src:string=''

  callSearch(s:string):void {
    if(s.length>=3){
      console.log("term:",s)
      this.callbackData.emit(s)
    }    
  }

}
