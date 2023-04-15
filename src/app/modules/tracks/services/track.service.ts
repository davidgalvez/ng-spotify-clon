import { Injectable } from '@angular/core';
import { TrackModel } from '@core/models/tracks.model';
import { Observable, of } from 'rxjs';
import * as dataRaw from '@data/tracks.json';
import { Title } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class TrackService {

  dataTracksTrending$:Observable<TrackModel[]> = of([])
  dataTracksRandom$:Observable<TrackModel[]> = of([])


  constructor() { 
    const {data}: any = (dataRaw as any).default
    console.log(data)
    this.dataTracksTrending$=of(data)

    this.dataTracksRandom$=new Observable((observer)=>{

      const trackExample: TrackModel={
        _id:1,
        name:'Nirvana Nevermine',
        album:'Nevermine',
        cover:'https://images.prismic.io/milanote/df7eeb83a07162b45ac2e882cac055de9411054a_cover.jpg?auto=compress,format'
      }

      setTimeout(() => {
        observer.next([trackExample])        
      }, 3000);

      

    })
  }
}
