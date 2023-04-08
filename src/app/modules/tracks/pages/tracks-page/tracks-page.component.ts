import { Component } from '@angular/core';

@Component({
  selector: 'app-tracks-page',
  templateUrl: './tracks-page.component.html',
  styleUrls: ['./tracks-page.component.css']
})
export class TracksPageComponent {
  mockTrackList=[
    {
      name:'CANCION 1 (Oficial)'
    },
    {
      name:'CANCION 2 (Oficial)'
    },
    {
      name:'CANCION 3 (Oficial)'
    }
  ]
}
