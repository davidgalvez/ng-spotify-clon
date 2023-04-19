import { Component, Input } from '@angular/core';
import { TrackModel } from '@core/models/tracks.model';


@Component({
  selector: 'app-play-list-body',
  templateUrl: './play-list-body.component.html',
  styleUrls: ['./play-list-body.component.css']
})
export class PlayListBodyComponent {
  @Input() tracks: Array<TrackModel> =[]
  optionSort: {property:string|null, sort:string} ={property:null,sort:'asc'}

  ngOnInit(): void {
    
  }

  changeSort(property:string){
    const {sort} = this.optionSort
    this.optionSort={
      property,
      sort:sort == 'asc'?'desc':'asc'
    }
  }
}
