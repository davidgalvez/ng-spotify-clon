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
  mockCover: TrackModel ={   
    _id:1, 
    cover:'https://jenesaispop.com/wp-content/uploads/2009/09/guetta_onelove.jpg',
    album:'One Love',
    name:'Getting Over'    
  }
  listObservers$:Array<any>=[]
  constructor(private multimediaService:MultimediaService){}

  ngOnInit(): void {
    const observable1$=this.multimediaService.myObservable1$
    .subscribe(
      (responseOk)=>{
        console.log('Funciona correctamente', responseOk)
      },
      (responseFail)=>{
        console.log('Hay un error, se debe revisar',responseFail)
      }
    )
    /*const observer1$:Subscription = this.multimediaService.callback.subscribe(
      (response:TrackModel) =>{
        console.log("recibiendo cancion: ",response)
      }
    )

    this.listObservers$=[observer1$]*/
  }

  ngOnDestroy(): void {
    this.listObservers$.forEach(o => o.unsubscribe())
    console.log("saliendo!!")
  }
}
