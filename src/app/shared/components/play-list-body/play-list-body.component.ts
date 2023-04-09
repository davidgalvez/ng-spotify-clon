import { Component, Input } from '@angular/core';
import { TrackModel } from '@core/models/tracks.model';
import * as dataRaw from '@data/tracks.json'

@Component({
  selector: 'app-play-list-body',
  templateUrl: './play-list-body.component.html',
  styleUrls: ['./play-list-body.component.css']
})
export class PlayListBodyComponent {
  tracks: Array<TrackModel> =[]

  ngOnInit(): void {
    const {data}:any =dataRaw
    this.tracks = data
  }
}
