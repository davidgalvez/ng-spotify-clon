import { Component, OnDestroy, OnInit } from '@angular/core';
import { TrackModel } from '@core/models/tracks.model';
import { MultimediaService } from '@shared/services/multimedia.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-media-player',
  templateUrl: './media-player.component.html',
  styleUrls: ['./media-player.component.css']
})
export class MediaPlayerComponent implements OnInit, OnDestroy {
 
  listObservers$:Array<any>=[]
  constructor(public multimediaService:MultimediaService){}

  ngOnInit(): void {
      
  }

  ngOnDestroy(): void {
    this.listObservers$.forEach(o => o.unsubscribe())
    console.log("saliendo!!")
  }
}
