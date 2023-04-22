import { EventEmitter, Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Observer } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MultimediaService {

  callback:EventEmitter<any> = new EventEmitter<any>

  myObservable1$:BehaviorSubject<any> = new BehaviorSubject("💦💦💦")

  constructor() {
    setTimeout(
      ()=>{this.myObservable1$.next("💦💦💦")},
      3000
    ) 
    setTimeout(
      ()=>{this.myObservable1$.error("🛑🛑")},
      5000
    ) 
  }
}
