import { EventEmitter, Injectable } from '@angular/core';
import { TrackModel } from '@core/models/tracks.model';
import { BehaviorSubject, Observable, Observer } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MultimediaService {

  callback:EventEmitter<any> = new EventEmitter<any>

  public trackInfo$:BehaviorSubject<any>= new BehaviorSubject(undefined)

  public audio!:HTMLAudioElement //<audio>

  myObservable1$:BehaviorSubject<any> = new BehaviorSubject("💦💦💦")

  constructor() {
    this.audio=new Audio()
    this.trackInfo$.subscribe(
      (responseOk)=>{
        if(responseOk){
          console.log("mService trackInfo Ok 👌👌:",responseOk)
          this.setAudio(responseOk)
        }
      }
    )    
  }

  public setAudio(track:TrackModel):void{
    this.audio.src=track.url
    this.audio.play()
  }
}
