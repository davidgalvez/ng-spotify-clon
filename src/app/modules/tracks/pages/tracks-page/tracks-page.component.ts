import { Component, OnDestroy, OnInit } from '@angular/core';
import { TrackModel } from '@core/models/tracks.model';
import * as dataRaw from '@data/tracks.json';
import { TrackService } from '@modules/tracks/services/track.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-tracks-page',
  templateUrl: './tracks-page.component.html',
  styleUrls: ['./tracks-page.component.css']
})
export class TracksPageComponent implements OnInit, OnDestroy {
  tracksTrending:Array<TrackModel>=[]
  tracksRandom:Array<TrackModel>=[]
  listObservers$:Array<Subscription>=[]

  constructor(private tracksService: TrackService){}

  ngOnInit():void {
    const observer1$ = this.tracksService.dataTracksTrending$.subscribe(response =>{
      this.tracksTrending=response
      this.tracksRandom=response
      console.log("Canciones trending:",response)
    })  
    const observer2$ = this.tracksService.dataTracksRandom$.subscribe(response =>{
      this.tracksRandom=[...this.tracksRandom,...response]
      console.log("Cancione random entrando:",response)
    }) 
    
    this.listObservers$ =[observer1$,observer2$]
  }

  ngOnDestroy(): void {
    this.listObservers$.forEach(u=>u.unsubscribe())
  }
}
