import { Injectable } from '@angular/core';
import { TrackModel } from '@core/models/tracks.model';
import { Observable, of } from 'rxjs';
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

  getAllTracks$():Observable<any>{
    return this.httpClient.get(`${this.URL}/tracks`)
  }
}
