import { Component } from '@angular/core';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent {
  
  mainMenu:{
    defaultOptions: Array<any>,
    accessLinks: Array<any>
  } = { defaultOptions:[],accessLinks:[]}

  customOptions: Array<any> =[]

  ngOnInit(): void {
    this.mainMenu.defaultOptions = [
      {
        name:"Home",
        icon:"uil-estate",
        router: ['/','auth']
      },
      {
        name:"Search",
        icon:"uil-search",
        router: ['/','history']
      },
      {
        name:"Your Library",
        icon:"uil-list-ul",
        router: ['/','tracks']
      }
    ]

    this.mainMenu.accessLinks =[
      {
        name:"Create list",
        icon:"uil-plus-square",
        router: ['/']
      },
      {
        name:"Favorites",
        icon:"uil-heart",
        router: ['/','favorites']
      }
    ]

    this.customOptions=[
      {
        name:"My list ª1",       
        router: ['/']
      },
      {
        name:"My list ª2",       
        router: ['/']
      },
      {
        name:"My list ª3",       
        router: ['/']
      }
    ]
  }

}
