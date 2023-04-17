import { Injectable } from '@angular/core';
import { TrackModel } from '@core/models/tracks.model';
import { Observable, of } from 'rxjs';
import { catchError, map, mergeMap, tap } from 'rxjs/operators'
import * as dataRaw from '@data/tracks.json';
import { Title } from '@angular/platform-browser';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TrackService {

  dataTracksTrending$:Observable<TrackModel[]> = of([])
  dataTracksRandom$:Observable<TrackModel[]> = of([])
  private readonly URL = environment.api


  constructor(private httpClient:HttpClient) {     
  }

  private skipById(listTracks:TrackModel[],id:number): Promise<TrackModel[]>{
    return new Promise((resolve,reject)=>{
      const listTemp=listTracks.filter(a=>a._id!==id)
      resolve(listTemp)
    })
  }

  getAllTracks$():Observable<any>{
    return this.httpClient.get(`${this.URL}/tracks`)
    .pipe(
      map(({data}:any)=>{
        return data
      })
    )
  }

  getAllRandom$():Observable<any>{
    return this.httpClient.get(`${this.URL}/tracks`)
    .pipe(
      tap(data => console.log("dataAPi",data)),
      mergeMap(({data}:any)=>this.skipById(data,2)),
      tap(data=>console.log("dataFiltered",data)),
      catchError((err)=>{
        console.log("Error in Api Service:",err);
        return of([])
      })

    )
  }


}
