import { Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
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
  playerState:string='paused'
  @ViewChild('progressBar') progressBar:ElementRef = new ElementRef('')

  ngOnInit(): void {
      const observer1$=this.multimediaService.playerStatus$
      .subscribe(
        (playerStatus)=>{this.playerState=playerStatus}
      )

      this.listObservers$=[observer1$]
  }

  ngOnDestroy(): void {
    this.listObservers$.forEach(o => o.unsubscribe())
    console.log("saliendo!!")
  }

  public handlePosition(ev:MouseEvent){
    const elNative: HTMLElement = this.progressBar.nativeElement
    const {clientX}=ev
    const {x,width} =elNative.getBoundingClientRect()
    const clickX=clientX-x
    const porctgFromX=(clickX*100)/width
    this.multimediaService.seekAudioPosition(porctgFromX)
    //console.log(`click(x): ${clickX}, width: ${width}, iniX: ${x}, pct: ${porctgFromX}`)
  }
}
