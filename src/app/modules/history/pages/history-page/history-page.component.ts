import { Component } from '@angular/core';
import { TrackModel } from '@core/models/tracks.model';
import { SearchService } from '@modules/history/services/search.service';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-history-page',
  templateUrl: './history-page.component.html',
  styleUrls: ['./history-page.component.css']
})
export class HistoryPageComponent {

  listResults$: Observable<any> = of([])

  constructor(private searchService:SearchService){

  }

  receiveData(s:string):void{
    console.log("recibiendo en el Padre:",s)
    this.listResults$=this.searchService.searchTracks$(s)
    
  }

}
