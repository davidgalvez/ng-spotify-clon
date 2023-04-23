import { EventEmitter, Injectable } from '@angular/core';
import { TrackModel } from '@core/models/tracks.model';
import { BehaviorSubject, Observable, Observer, min } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MultimediaService {

  callback:EventEmitter<any> = new EventEmitter<any>

  public trackInfo$:BehaviorSubject<any>= new BehaviorSubject(undefined)

  public audio!:HTMLAudioElement //<audio>
  public timeElapsed$:BehaviorSubject<string> = new BehaviorSubject('00:00')
  public timeRemaining$:BehaviorSubject<string> = new BehaviorSubject('-00:00')
  public timeProgress$:BehaviorSubject<number> = new BehaviorSubject(0)

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
    
    this.listenAllEvents()

  }

  public setAudio(track:TrackModel):void{
    this.audio.src=track.url
    this.audio.play()
  }

  private listenAllEvents():void{
    this.audio.addEventListener('timeupdate',this.calculateTime,false)
   
  }

  private calculateTime=()=>{
    console.log("disparando evento")
    const {duration, currentTime} = this.audio
    //console.table([duration, currentTime])
    this.setTimeElapsed(currentTime)
    this.settimeRemaining(duration,currentTime)
    this.setProgress(duration,currentTime)
  }

  private setTimeElapsed(currentTime:number):void{
    let displayFormatElapsed:string =this.convertTimeToFormat(currentTime,true)
    this.timeElapsed$.next(displayFormatElapsed)
  }

  private settimeRemaining(duration:number,currentTime:number):void{
    let timeRemaining=duration-currentTime
    let timeRemainingFormat:string=this.convertTimeToFormat(timeRemaining,false)
    this.timeRemaining$.next(timeRemainingFormat)
  }

  private setProgress(duration:number,currentTime:number):void{
    let progress = ((currentTime*100)/duration)%100
    this.timeProgress$.next(progress)
    console.log("progress:",progress)
  }

  private convertTimeToFormat(time:number,positive:boolean):string{
    let seconds = Math.floor(time%60)
    let minutes = Math.floor((time/60)%60)

    const displaySeconds= (seconds<10)?`0${seconds}`:seconds
    const displayMinutes= (minutes<10)?`0${minutes}`:minutes
    const direction=(positive)?'':'-'

    const displayFormat = `${direction}${displayMinutes}:${displaySeconds}`
    return displayFormat
  }
}
