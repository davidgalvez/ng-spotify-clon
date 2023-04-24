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
  public playerStatus$:BehaviorSubject<string> = new BehaviorSubject('paused')


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

  public togglePlayer():void{
    (this.audio.paused)?this.audio.play():this.audio.pause()
  }

  public seekAudioPosition(perc:number):void{
    const {duration}=this.audio
    console.log(`duration: ${duration} pct: ${perc}`)
    const percToSeconds = (perc*duration)/100
    this.audio.currentTime=percToSeconds

  }

  private listenAllEvents():void{
    this.audio.addEventListener('timeupdate',this.calculateTime,false)
    this.audio.addEventListener('playing',this.setPlayerStatus,false)
    this.audio.addEventListener('play',this.setPlayerStatus,false)
    this.audio.addEventListener('pause',this.setPlayerStatus,false)
    this.audio.addEventListener('ended',this.setPlayerStatus,false)
   
  }

  private setPlayerStatus=(state:any)=>{
    console.log(state)
    switch(state.type){
      case 'play':
        this.playerStatus$.next('play')
        break
      case 'playing':
        this.playerStatus$.next('playing')
        break
      case 'ended':
        this.playerStatus$.next('ended')
        break
      default:
        this.playerStatus$.next('paused')
        break
    }

  }

  private calculateTime=()=>{
    //console.log("disparando evento")
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
