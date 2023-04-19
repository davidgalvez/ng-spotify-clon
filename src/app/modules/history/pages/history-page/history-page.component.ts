import { Component } from '@angular/core';
import { TrackModel } from '@core/models/tracks.model';
import { SearchService } from '@modules/history/services/search.service';

@Component({
  selector: 'app-history-page',
  templateUrl: './history-page.component.html',
  styleUrls: ['./history-page.component.css']
})
export class HistoryPageComponent {

  listResults: TrackModel[]=[]

  constructor(private searchService:SearchService){

  }

  receiveData(s:string):void{
    console.log("recibiendo en el Padre:",s)
    this.searchService.searchTracks$(s)
    .subscribe(({data})=>{
      this.listResults=data
      console.log("apSearchServ",data)
    })
  }

}
