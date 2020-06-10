import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  title = "DJ while()";
  songs = [
    {id: 1, name:'Missing you' ,image: "https://i1.sndcdn.com/avatars-000621741192-ef9u3o-t500x500.jpg"},
    {id: 2, name:'The way', image: "https://i1.sndcdn.com/avatars-000621741192-ef9u3o-t500x500.jpg"},
    {id: 3, name:'Tropical paradise', image: "https://i1.sndcdn.com/avatars-000621741192-ef9u3o-t500x500.jpg"},
    {id: 4, name:"Clap your hand's", image: "https://i1.sndcdn.com/avatars-000621741192-ef9u3o-t500x500.jpg"}
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
